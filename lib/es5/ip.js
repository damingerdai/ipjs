import { networkInterfaces } from 'os';

function getIp() {
    var IPv4;
    var data = networkInterfaces();
    Object.keys(data).forEach(function (key) {
        data[key].forEach(function (ip) {
            if (ip.family === 'IPv4') {
                IPv4 = ip.address;
            }
        });
    });
    return IPv4 || '127.0.0.1';
}

export { getIp };
//# sourceMappingURL=ip.js.map
