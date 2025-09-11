function FindProxyForURL(url, host) {
    // Normalizar URL y host para mejor rendimiento
    url = url.toLowerCase();
    host = host.toLowerCase();
    
    // Cache DNS estático para mejorar rendimiento
    var staticProxies = {
        "adobe.com": "PROXY 102.129.178.6:4414; DIRECT",
        "perplexity.ai": "PROXY 96.62.127.25:50100; DIRECT", 
        "chatgpt.com": "PROXY 91.132.124.97:8080; DIRECT",
        "freepik.com": "PROXY 45.170.253.85:50100; DIRECT",
        "freepik.es": "PROXY 45.170.253.85:50100; DIRECT",
        "canva.com": "PROXY 93.177.95.214:8080; DIRECT",
        "platzi.com": "PROXY 14.102.232.254:50100; DIRECT",
        "crehana.com": "PROXY 193.233.210.11:8080; DIRECT",
        "cloud.microsoft": "PROXY 45.170.253.85:50100; DIRECT",
        "creativefabrica.com": "PROXY 148.135.147.24:6534; DIRECT",
        "envato.com": "PROXY 45.170.253.51:50100; DIRECT"
    };
    
    // Bypass para archivos grandes y contenido multimedia (optimizado)
    if (url.match(/\.(zip|rar|7z|tar|gz|iso|exe|msi|mp4|mkv|avi|mov|mp3|flac|wav|pdf)(\?|$)/)) {
        return "DIRECT";
    }
    
    // Bypass para CDNs y contenido estático (reduce carga del proxy)
    if (host.match(/^(cdn\.|media\.|img\.|static\.|assets\.|videos\.|images\.|photos\.)/)) {
        return "DIRECT";
    }
    
    // Bypass para direcciones locales e intranet
    if (isPlainHostName(host) ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "172.17.*") ||
        shExpMatch(host, "172.18.*") ||
        shExpMatch(host, "172.19.*") ||
        shExpMatch(host, "172.20.*") ||
        shExpMatch(host, "172.21.*") ||
        shExpMatch(host, "172.22.*") ||
        shExpMatch(host, "172.23.*") ||
        shExpMatch(host, "172.24.*") ||
        shExpMatch(host, "172.25.*") ||
        shExpMatch(host, "172.26.*") ||
        shExpMatch(host, "172.27.*") ||
        shExpMatch(host, "172.28.*") ||
        shExpMatch(host, "172.29.*") ||
        shExpMatch(host, "172.30.*") ||
        shExpMatch(host, "172.31.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "169.254.*")) {
        return "DIRECT";
    }
    
    // Reglas optimizadas con fallback para dominios específicos
    for (var domain in staticProxies) {
        if (dnsDomainIs(host, domain) || host == domain) {
            return staticProxies[domain];
        }
    }
    
    // Fallback general - conexión directa por defecto
    return "DIRECT";
}











