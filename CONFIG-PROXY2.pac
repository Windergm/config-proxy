function FindProxyForURL(url, host) {

    url = url.toLowerCase();
    host = host.toLowerCase();

    // =========================
    // FIREFOX / MOZILLA DIRECT
    // =========================
    var firefoxDomains = [
        "firefox.com",
        "mozilla.org",
        "mozilla.com",
        "accounts.firefox.com",
        "sync.services.mozilla.com",
        "services.mozilla.com",
        "addons.mozilla.org",
        "services.addons.mozilla.org",
        "content-signature-2.cdn.mozilla.net",
        "aus5.mozilla.org",
        "detectportal.firefox.com",
        "shavar.services.mozilla.com",
        "push.services.mozilla.com",
        "location.services.mozilla.com",
        "support.mozilla.org"
    ];

    for (var i = 0; i < firefoxDomains.length; i++) {
        if (
            host === firefoxDomains[i] ||
            dnsDomainIs(host, "." + firefoxDomains[i])
        ) {
            return "DIRECT";
        }
    }

    // =========================
    // ENVATO DIRECT
    // =========================
    if (
        dnsDomainIs(host, ".envatousercontent.com") ||
        host === "envatousercontent.com"
    ) {
        return "DIRECT";
    }

    // =========================
    // REDES LOCALES
    // =========================
    if (
        isPlainHostName(host) ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "169.254.*")
    ) {
        return "DIRECT";
    }

    // Rango 172.16.0.0 - 172.31.255.255
    for (var n = 16; n <= 31; n++) {
        if (shExpMatch(host, "172." + n + ".*")) {
            return "DIRECT";
        }
    }

    // =========================
    // DESCARGAS DIRECTAS
    // =========================
    if (
        /\.(zip|rar|7z|tar|gz|iso|exe|msi|mp4|mkv|avi|mov|mp3|flac|wav|pdf)(\?|$)/i.test(url)
    ) {
        return "DIRECT";
    }

    // =========================
    // PROXIES ESTÁTICOS
    // =========================
    var staticProxies = {
        "adobe.com": "PROXY 109.111.37.20:4414",
        "magnific.com": "PROXY 109.111.37.20:50100",
        "perplexity.ai": "PROXY 109.111.37.20:50100",
        "chatgpt.com": "PROXY 91.132.124.97:8080",
        "openai.com": "PROXY 91.132.124.97:8080",
        "oaistatic.com": "PROXY 91.132.124.97:8080",
        "freepik.com": "PROXY 109.111.36.100:50100",
        "freepik.es": "PROXY 109.111.36.100:50100",
        "canva.com": "PROXY 109.111.37.20:50100",
        "platzi.com": "PROXY 109.111.37.2050100",
        "crehana.com": "PROXY 109.111.37.20:50100",
        "placeit.net": "PROXY 161.123.54.112:5496",
        "cloud.microsoft": "PROXY 109.111.37.20:50100",
        "creativefabrica.com": "PROXY 148.135.147.24:6534",
        "motionarray.com": "PROXY 109.111.37.20:50100",
        "domestika.org": "PROXY 109.111.37.20:50100",
        "envato.com": "PROXY 109.111.36.100:50100"
    };

    for (var domain in staticProxies) {

        if (
            host === domain ||
            dnsDomainIs(host, "." + domain)
        ) {
            return staticProxies[domain];
        }
    }

    // =========================
    // TODO LO DEMÁS DIRECT
    // =========================
    return "DIRECT";
}















