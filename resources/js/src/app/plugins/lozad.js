/**
 * Lozad.js
 * We have found a limitation in lozad.js in connection with HTML5s <picture> tags.
 * Therefore we've decided to directly integrate lozad into our code and adapt it
 * to better fit our use cases.
 */

/**
 * Detect IE browser
 * @const {boolean}
 * @private
 */
const isIE = typeof document !== "undefined" && document.documentMode;

const defaultConfig = {
    rootMargin: "0px",
    threshold: 0,
    load(element)
    {
        if (element.nodeName.toLowerCase() === "picture")
        {
            const img = document.createElement("img");

            if (isIE && element.getAttribute("data-iesrc"))
            {
                img.src = element.getAttribute("data-iesrc");
            }

            if (element.getAttribute("data-alt"))
            {
                img.alt = element.getAttribute("data-alt");
            }

            if (element.getAttribute("data-title"))
            {
                img.title = element.getAttribute("data-title");
            }

            if (element.getAttribute("data-width"))
            {
                const width = element.getAttribute("data-width");

                if (width && width > 0)
                {
                    img.width = width;
                }
            }

            if (element.getAttribute("data-height"))
            {
                const height = element.getAttribute("data-height");

                if (height && height > 0)
                {
                    img.height = height;
                }
            }

            if (element.getAttribute("data-picture-class"))
            {
                let classes = element.getAttribute("data-picture-class");

                classes = classes.split(" ");

                for (const selector of classes)
                {
                    if (!img.classList.contains(selector))
                    {
                        img.classList.add(selector);
                    }
                }
            }

            element.appendChild(img);
        }

        if (element.nodeName.toLowerCase() === "video" && !element.getAttribute("data-src"))
        {
            if (element.children)
            {
                const childs = element.children;

                let childSrc;

                for (let i = 0; i <= childs.length - 1; i++)
                {
                    childSrc = childs[i].getAttribute("data-src");
                    if (childSrc)
                    {
                        childs[i].src = childSrc;
                    }
                }

                element.load();
            }
        }

        if (element.getAttribute("data-poster"))
        {
            element.poster = element.getAttribute("data-poster");
        }

        if (element.getAttribute("data-src"))
        {
            element.src = element.getAttribute("data-src");
        }

        if (element.getAttribute("data-srcset"))
        {
            element.setAttribute("srcset", element.getAttribute("data-srcset"));
        }

        if (element.getAttribute("data-background-image"))
        {
            element.style.backgroundImage = `url("${element.getAttribute("data-background-image").split(",").join("\"),url(\"")}")`;
        }
        else if (element.getAttribute("data-background-image-set"))
        {
            const imageSetLinks = element.getAttribute("data-background-image-set").split(",");

            let firstUrlLink = (imageSetLinks[0].substr(0, imageSetLinks[0].indexOf(" ")) || imageSetLinks[0]);

            firstUrlLink = firstUrlLink.indexOf("url(") === -1 ? `url(${firstUrlLink})` : firstUrlLink;
            if (imageSetLinks.length === 1)
            {
                element.style.backgroundImage = firstUrlLink;
            }
            else
            {
                element.setAttribute("style", (element.getAttribute("style") || "") + `background-image: ${firstUrlLink}; background-image: -webkit-image-set(${imageSetLinks}); background-image: image-set(${imageSetLinks})`);
            }
        }

        if (element.getAttribute("data-toggle-class"))
        {
            const classes = element.getAttribute("data-toggle-class").split(" ");

            for (const selector of classes)
            {
                element.classList.toggle(selector);
            }
        }
    },
    loaded()
    {
    }
};

function markAsLoaded(element)
{
    element.setAttribute("data-loaded", true);
}

const isLoaded = element => element.getAttribute("data-loaded") === "true";

const onIntersection = (load, loaded) => (entries, observer) =>
{
    entries.forEach(entry =>
    {
        if (entry.intersectionRatio > 0 || entry.isIntersecting)
        {
            observer.unobserve(entry.target);

            if (!isLoaded(entry.target))
            {
                entry.target.classList.toggle("lozad");
                requestAnimationFrame(() =>
                {
                    load(entry.target);
                    markAsLoaded(entry.target);
                    loaded(entry.target);
                });
            }
        }
    });
};

const getElements = (selector, root = document) =>
{
    if (selector instanceof Element)
    {
        return [selector];
    }

    if (selector instanceof NodeList)
    {
        return selector;
    }

    return root.querySelectorAll(selector);
};

export default function(selector = ".lozad", options = {})
{
    const { root, rootMargin, threshold, load, loaded } = Object.assign({}, defaultConfig, options);

    let observer;

    if (typeof window !== "undefined" && window.IntersectionObserver)
    {
        observer = new IntersectionObserver(onIntersection(load, loaded),
            {
                root,
                rootMargin,
                threshold
            });
    }

    return {
        observe()
        {
            const elements = getElements(selector, root);

            for (let i = 0; i < elements.length; i++)
            {
                if (isLoaded(elements[i]))
                {
                    continue;
                }

                if (observer)
                {
                    observer.observe(elements[i]);
                    continue;
                }

                load(elements[i]);
                markAsLoaded(elements[i]);
                loaded(elements[i]);
            }
        },

        triggerLoad(element)
        {
            if (isLoaded(element))
            {
                return;
            }

            load(element);
            markAsLoaded(element);
            loaded(element);
        },

        observer
    };
}
