function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Conexión directa para archivos grandes o descargas
    if (shExpMatch(url, "*.zip") || shExpMatch(url, "*.rar") || shExpMatch(url, "*.7z") ||
        shExpMatch(url, "*.tar") || shExpMatch(url, "*.gz") || shExpMatch(url, "*.iso") ||
        shExpMatch(url, "*.exe") || shExpMatch(url, "*.msi") || shExpMatch(url, "*.mp4") ||
        shExpMatch(url, "*.mkv") || shExpMatch(url, "*.avi") || shExpMatch(url, "*.mov") ||
        shExpMatch(url, "*.mp3") || shExpMatch(url, "*.flac") || shExpMatch(url, "*.wav") ||
        shExpMatch(url, "*.pdf")) {
        return "DIRECT";
    }
    // Reglas de proxy específicas por dominio
    if (dnsDomainIs(host, "adobe.com")) return "PROXY 102.129.178.6:4414";
    if (dnsDomainIs(host, "perplexity.ai") || dnsDomainIs(host, "artlist.io")) return "PROXY 96.62.127.25:50100";
    if (dnsDomainIs(host, "chatgpt.com")) return "PROXY 91.132.124.97:8080";
    if (dnsDomainIs(host, "domestika.org")) return "PROXY 193.233.211.46:8080";
    if (dnsDomainIs(host, "freepik.com") || dnsDomainIs(host, "freepik.es")) return "PROXY 46.3.124.181:50100";
    if (dnsDomainIs(host, "placeit.net")) return "PROXY 161.123.54.112:5496";
    if (dnsDomainIs(host, "canva.com")) return "PROXY 93.177.95.214:8080";
    if (dnsDomainIs(host, "platzi.com")) return "PROXY 45.136.27.41:8080";
    if (dnsDomainIs(host, "crehana.com")) return "PROXY 193.233.210.11:8080";
    if (dnsDomainIs(host, "cloud.microsoft")) return "PROXY 45.147.234.41:8080";
    if (dnsDomainIs(host, "creativefabrica.com")) return "PROXY 148.135.147.24:6534";
    if (dnsDomainIs(host, "motionarray.com")) return "PROXY 14.102.232.254:50100";
    if (dnsDomainIs(host, "envato.com")) return "PROXY 45.170.253.190:50100";

    // Todo lo demás va directo
    return "DIRECT";
}
