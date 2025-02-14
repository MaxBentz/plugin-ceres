<template>
    <div itemscope itemtype="https://schema.org/Thing">
        <div ref="single" class="single-carousel owl-carousel owl-theme owl-single-item mt-0">
            <div v-for="(image, index) in singleImages" :key="index" class="prop-1-1">
                <a :href="image.url" :data-lightbox="`single-item-image${_uid}`">
                    <lazy-img :alt="getAltText(image)" :image-url="image.url" :title="getImageName(image)" :width="getImageWidth(image)" :height="getImageHeight(image)" />
                </a>
            </div>
        </div>

        <div v-if="showThumbs" id="thumb-carousel" ref="thumbs" class="owl-thumbs owl-carousel owl-theme owl-single-item">
            <div v-for="(imagePreview, index) in carouselImages" :key="index" class="prop-1-1">
                <div @click="goTo(index)" class="image-container">
                    <lazy-img
                        :alt="getAltText(imagePreview)"
                        :image-url="imagePreview.url"
                        :title="getImageName(imagePreview)"
                        :width="getImageWidth(imagePreview)"
                        :height="getImageHeight(imagePreview)"
                        picture-class="owl-thumb border-appearance"
                        v-bind:class="{ 'active': currentItem === index}" />
                </div>
            </div>
        </div>

        <div v-if="!initialized" class="single-carousel owl-carousel owl-loaded owl-theme owl-single-item mt-0">
            <div class="prop-1-1">
                <lazy-img
                    :alt="getAltText(singleImages[0].url)"
                    :image-url="singleImages[0].url"
                    :title="getImageName(singleImages[0].url)"
                    :width="getImageWidth(singleImages[0])"
                    :height="getImageHeight(singleImages[0])"
                    picture-class="owl-placeholder" />
            </div>
        </div>
    </div>
</template>

<script>
import { isNullOrUndefined } from "../../helper/utils";

export default {
    name: "item-image-carousel",

    props: {
        maxQuantity:
        {
            type: Number,
            default: 10
        },
        imageUrlAccessor:
        {
            type: String,
            default: "url"
        },
        showThumbs:
        {
            type: Boolean,
            default: true
        },
        showDots:
        {
            type: Boolean,
            default: true
        },
        animationStyle:
        {
            type: String,
            default: "standard"
        },
        pluginPath:
        {
            type: String,
            default: ""
        }
    },

    inject: {
        itemId: {
            default: null
        }
    },

    data()
    {
        return {
            currentItem: 0,
            initialized: false,
        };
    },

    computed:
    {
        currentVariation()
        {
            return this.$store.getters[`${this.itemId}/currentItemVariation`]
        },

        carouselImages()
        {
            return this.$options.filters.itemImages(
                    this.currentVariation.images,
                    "urlPreview"
                ).slice(0, this.maxQuantity);
        },

        singleImages()
        {
            return this.$options.filters.itemImages(
                    this.currentVariation.images,
                    this.imageUrlAccessor
            ).slice(0, this.maxQuantity);
        }
    },

    watch: {
        currentVariation:
        {
            handler(val, oldVal)
            {
                if (val !== oldVal)
                {
                    setTimeout(() =>
                    {
                        this.reInitialize();
                    }, 1);
                }
            },
            deep: true
        }
    },

    mounted()
    {
        this.$nextTick(() =>
        {
            this.loadLightbox().then(() =>
                {
                    this.initCarousel();
                    this.initThumbCarousel();
                })
                .catch(event =>
                {
                    console.log("error while loading lightbox", event);
                });
        });
    },

    methods:
    {
        getImageCount()
        {
            return this.carouselImages.length > this.maxQuantity ? this.maxQuantity : this.carouselImages.length;
        },

        reInitialize()
        {
            const $owl = $(this.$refs.single);

            $owl.trigger("destroy.owl.carousel");
            $owl.html($owl.find(".owl-stage-outer").html()).removeClass("owl-loaded");
            $owl.find(".owl-item").remove();

            const $thumbs = $(this.$refs.thumbs);

            $thumbs.trigger("destroy.owl.carousel");
            $thumbs.html($thumbs.find(".owl-stage-outer").html()).removeClass("owl-loaded");
            $thumbs.find(".owl-item").remove();

            this.initCarousel();
            this.initThumbCarousel();
        },

        initCarousel()
        {
            const imageCount = this.getImageCount();
            const carouselSettings = {
                autoHeight       : true,
                dots             : this.showDots,
                items            : 1,
                lazyLoad         : true,
                rewind           : true,
                margin           : 10,
                mouseDrag        : imageCount > 1,
                nav              : imageCount > 1,
                navClass         : [
                    "owl-single-item-nav left carousel-control",
                    "owl-single-item-nav right carousel-control"
                ],
                navContainerClass: "",
                navText          : [
                    "<i class=\"owl-single-item-control fa fa-chevron-left\" aria-hidden=\"true\"></i>",
                    "<i class=\"owl-single-item-control fa fa-chevron-right\" aria-hidden=\"true\"></i>"
                ],
                smartSpeed       : 350,
                onChanged: event =>
                {
                    const $thumb = $(this.$refs.thumbs);

                    $thumb.trigger("to.owl.carousel", [
                        event.page.index,
                        350
                    ]);
                },
                onInitialized: event =>
                {
                    this.initialized = true;
                }
            };

            if (this.animationStyle !== "standard")
            {
                carouselSettings.animateOut = this.animationStyle;
            }

            $(this.$refs.single).owlCarousel(carouselSettings);

            if (!isNullOrUndefined(window.lightbox))
            {
                lightbox.option({
                    wrapAround: true,
                    albumLabel: this.$translate("Ceres::Template.singleItemLightboxImageShown")
                });
            }

            $(this.$refs.single).on("changed.owl.carousel", event =>
            {
                this.currentItem = event.page.index;
            });
        },

        initThumbCarousel()
        {
            $(this.$refs.thumbs).owlCarousel({
                autoHeight       : true,
                dots             : false,
                items            : 5,
                lazyLoad         : true,
                loop             : false,
                margin           : 10,
                mouseDrag        : false,
                center           : false,
                nav              : true,
                navClass         : [
                    "owl-single-item-nav left carousel-control",
                    "owl-single-item-nav right carousel-control"
                ],
                navContainerClass: "",
                navText          : [
                    "<i class=\"owl-single-item-control fa fa-chevron-left\" aria-hidden=\"true\"></i>",
                    "<i class=\"owl-single-item-control fa fa-chevron-right\" aria-hidden=\"true\"></i>"
                ],
                smartSpeed       : 350
            });
        },

        goTo(index)
        {
            const $owl = $(this.$refs.single);

            $owl.trigger("to.owl.carousel", [
                index,
                350
            ]);
        },

        getAltText(image)
        {
            return image && image.alternate ? image.alternate : this.$options.filters.itemName(this.currentVariation);
        },

        getImageName(image)
        {
            return image && image.name ? image.name : this.$options.filters.itemName(this.currentVariation);
        },

        getImageWidth(image)
        {
          return image && image.width ? image.width : this.$options.filters.itemImageWidth(this.carouselImages);
        },

        getImageHeight(image)
        {
          return image && image.height ? image.height : this.$options.filters.itemImageHeight(this.carouselImages);
        },

        loadLightbox()
        {
            return new Promise((resolve, reject) =>
            {
                const script = document.querySelector("script#lightboxscript");

                if (!isNullOrUndefined(script))
                {
                    resolve();
                }
                else
                {
                    const script = document.createElement("script");

                    script.type = "text/javascript";
                    script.id = "lightboxscript";
                    script.src = `${ this.pluginPath }/js/dist/lightbox.min.js`;

                    script.addEventListener("load", () => resolve(), false);
                    script.addEventListener("error", event => reject(event), false);

                    document.body.appendChild(script);
                }
            });
        }
    }
}
</script>
