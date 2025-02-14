function _call(callback)
{
    if (!!callback && typeof callback === "function")
    {
        callback();
    }
}

export function whenConsented(key, onConsent, onDecline, forceConsent = false)
{
    if ((!App.config.global.blockCookies && !forceConsent) || App.isShopBuilder)
    {
        _call(onConsent);
        return;
    }

    if (window.ConsentManager)
    {
        if (window.ConsentManager.hasResponse() || window.ConsentManager.isConsented(key))
        {
            _call(window.ConsentManager.isConsented(key) ? onConsent : onDecline);
        }
        else
        {
            document.addEventListener("consent-change", () =>
            {
                whenConsented(key, onConsent, onDecline);
            }, { once: true });
        }
    }
    else
    {
        _call(onConsent);
    }
}
