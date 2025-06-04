function FindProxyForURL(url, host) {
    // Configuración de proxies para cada dominio
    var proxies = {
        "adobe.com": "PROXY 102.129.178.6:4414",
        "perplexity.ai": "PROXY 176.126.111.194:8080",
        "artlist.io": "PROXY 176.126.111.194:8080",
        "chatgpt.com": "PROXY 91.132.124.97:8080",
        "domestika.org": "PROXY 193.233.211.46:8080",//no cambiar
        "freepik.es": "PROXY 46.3.124.181:50100",
        "freepik.com": "PROXY 46.3.124.181:50100",
        "placeit.net": "PROXY 161.123.54.112:5496", // proxy propio
        "canva.com": "PROXY 93.177.95.214:8080", 
        "platzi.com": "PROXY 45.136.27.41:8080", 
        "crehana.com": "PROXY 193.233.210.11:8080", // Cambiado a otro proxy
        "cloud.microsoft": "PROXY 45.147.234.41:8080",
        "creativefabrica.com": "PROXY 148.135.147.24:6534",// proxy propio
        "motionarray.com": "PROXY 45.159.23.249:8080", //no cambiar
        "envato.com": "PROXY 45.170.253.190:50100"
    };

    // Verifica si el host coincide con un dominio en la lista
    for (var dominio in proxies) {
        if (
            dnsDomainIs(host, dominio) || 
            dnsDomainIs(host, "." + dominio) // Incluye subdominios
        ) {
            return proxies[dominio];
        }
    }

    // Conexión directa para otros sitios
    return "DIRECT";
}
