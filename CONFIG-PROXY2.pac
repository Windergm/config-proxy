function FindProxyForURL(url, host) {
    // Excluir domestika.org y www.domestika.org del proxy
    if (dnsDomainIs(host, "domestika.org") || shExpMatch(host, "www.domestika.org")) {
        return "DIRECT";
    }

    // Todo lo demás pasa por el proxy
    return "PROXY 45.170.253.190:50100";
}
