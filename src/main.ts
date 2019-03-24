import * as os from 'os';

export function getIp() {
    let IPv4;
    const data = os.networkInterfaces();
    Object.keys(data).forEach(key => {
        data[key].forEach(ip => {
            if (ip.family === 'IPv4') {
                IPv4 = ip.address;
            }
        });
    });
    return IPv4 || '127.0.0.1';
}

export function getIpv4() {
    return getIp();
}

export function getIpv6() {
    let IPv6;
    const data = os.networkInterfaces();
    Object.keys(data).forEach(key => {
        data[key].forEach(ip => {
            if (ip.family === 'IPv6') {
                IPv6 = ip.address;
            }
        });
    });
    return IPv6;
}
