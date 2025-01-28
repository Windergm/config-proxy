function FindProxyForURL(url, host) {
    // Si el dominio es www.domestika.org, no usar proxy
    if (shExpMatch(host, www.domestika.org) || shExpMatch(host, "domestika.org")) {
        
       
return "DIRECT"; // Conexión directa sin proxy
    }

    
    }

   

    }

// Para todas las demás páginas, usar el proxy
    return "PROXY 104.239.43.124:5852";
}
