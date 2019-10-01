"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
function getIp() {
    var IPv4;
    var data = os.networkInterfaces();
    Object.keys(data).forEach(function (key) {
        data[key].forEach(function (ip) {
            if (ip.family === 'IPv4') {
                IPv4 = ip.address;
            }
        });
    });
    return IPv4 || '127.0.0.1';
}
exports.getIp = getIp;
function getIpv4() {
    return getIp();
}
exports.getIpv4 = getIpv4;
function getIpv6() {
    var IPv6;
    var data = os.networkInterfaces();
    Object.keys(data).forEach(function (key) {
        data[key].forEach(function (ip) {
            if (ip.family === 'IPv6') {
                IPv6 = ip.address;
            }
        });
    });
    return IPv6;
}
exports.getIpv6 = getIpv6;
//# sourceMappingURL=main.js.map