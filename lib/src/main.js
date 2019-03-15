"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var os = __importStar(require("os"));
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
