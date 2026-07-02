function FindProxyForURL(url, host) {
    url = url.toLowerCase();
    host = host.toLowerCase();

    // 1. Tráfico local -> DIRECTO
    if (isPlainHostName(host) || shExpMatch(host, "127.0.0.1") || shExpMatch(host, "localhost")) {
        return "DIRECT";
    }

    // 2. Servicios nativos de Firefox -> DIRECTO
    if (shExpMatch(host, "*.mozilla.org") || 
        shExpMatch(host, "*.mozilla.com") || 
        shExpMatch(host, "*.mozilla.net") || 
        shExpMatch(host, "*.firefox.com")) {
        return "DIRECT";
    }

    // 3. Imágenes, fotos, videos y archivos (Incluyendo AVIF, WebP, SVG y TAR.GZ) -> DIRECTO
    var mediaAndArchives = /\.(jpg|jpeg|png|webp|svg|avif|gif|bmp|ico|mp4|webm|mkv|avi|mov|flv|wmv|ts|m3u8|mp3|m4a|wav|ogg|zip|rar|7z|tar|gz)(\?.*)?$/i;
    if (mediaAndArchives.test(url)) {
        return "DIRECT";
    }

    // 4. Dominios específicos con sus respectivos Proxys
    var proxyMap = {
        "magnific.com": "PROXY 109.111.36.100:50100",
        "freepik.com": "PROXY 109.111.36.100:50100",
        "freepik.es": "PROXY 109.111.36.100:50100",
        "platzi.com": "PROXY 109.111.36.100:50100",
        "crehana.com": "PROXY 109.111.36.100:50100",
        "artlist.io": "PROXY 109.111.36.100:50100",
        "placeit.net": "PROXY 161.123.54.112:5496",
        "creativefabrica.com": "PROXY 89.47.100.247:46936",
        "cloud.microsoft": "PROXY 109.111.36.100:50100",
        "motionarray.com": "PROXY 109.111.36.100:50100",
         "domestika.org": "PROXY 109.111.36.100:50100",
        "envato.com": "PROXY 109.111.36.100:50100"
    };

    var domainParts = host.split('.');
    for (var i = 0; i < domainParts.length - 1; i++) {
        var testDomain = domainParts.slice(i).join('.');
        if (proxyMap[testDomain]) {
            return proxyMap[testDomain]; 
        }
    }

    // 5. Navegación en cualquier otra página -> DIRECTO
    return "DIRECT";
}
















