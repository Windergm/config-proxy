function FindProxyForURL(url, host) {
    // Configuración de proxies para cada dominio
    var proxies = {
        "adobe.com": "PROXY 45.170.253.190:50100",
        "perplexity.ai": "PROXY 23.94.188.154:8800",
        "artlist.io": "PROXY 66.63.178.169:8800",
        "chatgpt.com": "PROXY 45.170.253.190:50100",
        "domestika.org": "PROXY 1.1.1.1",
        "freepik.es": "PROXY 66.63.178.163:8800",
        "freepik.com": "PROXY 23.94.65.182:8800",
        "placeit.net": "PROXY 66.78.32.82:5132", // Cambiado a otro proxy
        "canva.com": "PROXY 45.170.253.190:50100",
        "platzi.com": "PROXY 66.63.178.42:8800",
        "crehana.com": "PROXY 46.3.124.181:50100", // Cambiado a otro proxy
        "cloud.microsoft": "PROXY 45.170.253.190:50100",
        "creativefabrica.com": "PROXY 148.135.147.24:6534",
        "motionarray.com": "PROXY 46.3.124.181:50100",
        "envato.com": "PROXY 66.63.178.42:8800"
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
