function FindProxyForURL(url, host) {

    url = url.toLowerCase();
    host = host.toLowerCase();

    // ====================================
    // FIREFOX Y MOZILLA SIEMPRE DIRECT
    // ====================================
    var firefoxDomains = [
        "firefox.com",
        "mozilla.org",
        "mozilla.com",
        "accounts.firefox.com",
        "sync.services.mozilla.com",
        "services.mozilla.com",
        "addons.mozilla.org",
        "services.addons.mozilla.org",
        "detectportal.firefox.com",
        "push.services.mozilla.com",
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

    // ====================================
    // REDES LOCALES
    // ====================================
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

    // RANGO 172.16-31
    for (var n = 16; n <= 31; n++) {

        if (shExpMatch(host, "172." + n + ".*")) {
            return "DIRECT";
        }
    }

    // ====================================
    // MULTIMEDIA Y ARCHIVOS DIRECT
    // ====================================
    if (
        /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico|mp4|mkv|avi|mov|webm|mp3|wav|flac|aac|ogg|m4a|pdf|zip|rar|7z|tar|gz|iso|exe|msi|apk|torrent)(\?|$)/i.test(url)
    ) {
        return "DIRECT";
    }

    // ====================================
    // STREAMING/CDN DIRECT
    // ====================================
    var mediaDomains = [
        "googlevideo.com",
        "ytimg.com",
        "youtube.com",
        "netflix.com",
        "nflxvideo.net",
        "spotifycdn.com",
        "scdn.co",
        "fbcdn.net",
        "cdninstagram.com",
        "twimg.com",
        "imgur.com",
        "discordcdn.com",
        "cloudfront.net",
        "akamaihd.net",
        "fastly.net",
        "cdn.cloudflare.net"
    ];

    for (var j = 0; j < mediaDomains.length; j++) {

        if (
            host === mediaDomains[j] ||
            dnsDomainIs(host, "." + mediaDomains[j])
        ) {
            return "DIRECT";
        }
    }

    // ====================================
    // LOGIN Y AUTENTICACION POR PROXY
    // ====================================
    if (
        shExpMatch(url, "*login*") ||
        shExpMatch(url, "*signin*") ||
        shExpMatch(url, "*auth*") ||
        shExpMatch(url, "*oauth*")
    ) {
        return "PROXY 91.132.124.97:8080";
    }

    // ====================================
    // CHATGPT
    // ====================================
    if (
        host === "chatgpt.com" ||
        dnsDomainIs(host, ".chatgpt.com") ||
        host === "openai.com" ||
        dnsDomainIs(host, ".openai.com") ||
        host === "oaistatic.com" ||
        dnsDomainIs(host, ".oaistatic.com")
    ) {

        // multimedia DIRECT
        if (
            shExpMatch(url, "*.png*") ||
            shExpMatch(url, "*.jpg*") ||
            shExpMatch(url, "*.mp4*") ||
            shExpMatch(url, "*.webm*")
        ) {
            return "DIRECT";
        }

        // APIs/login PROXY
        return "PROXY 91.132.124.97:8080";
    }

    // ====================================
    // ADOBE
    // ====================================
    if (
        host === "adobe.com" ||
        dnsDomainIs(host, ".adobe.com")
    ) {
        return "PROXY 102.129.178.6:4414";
    }

    // ====================================
    // FREEPIK
    // ====================================
    if (
        host === "freepik.com" ||
        dnsDomainIs(host, ".freepik.com")
    ) {
        return "PROXY 109.111.36.100:50100";
    }

    // ====================================
    // ENVATO
    // ====================================
    if (
        host === "envato.com" ||
        dnsDomainIs(host, ".envato.com")
    ) {
        return "PROXY 109.111.36.100:50100";
    }

    // descargas envato DIRECT
    if (
        host === "envatousercontent.com" ||
        dnsDomainIs(host, ".envatousercontent.com")
    ) {
        return "DIRECT";
    }

    // ====================================
    // TODO LO DEMAS DIRECT
    // ====================================
    return "DIRECT";
}





