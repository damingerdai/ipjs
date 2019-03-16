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
//# sourceMappingURL=main.js.map