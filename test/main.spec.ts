import { getIp, getIpv4, getIpv6 } from '../src/main';

const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
const ipv6 = /^(([\da-fA-F]{1,4}):){8}$/;

test('getIp', () => {
    const ip = getIp();
    expect(ip).toMatch(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
});

test('getIpv4', () => {
    const ip = getIpv4();
    expect(ip).toMatch(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
});

test('getIpv6', () => {
    const ip = getIpv6();
    if (ip) {
        console.warn('no ipv6');
    } else {
        expect(ip).toMatch(ipv6);
    }
});
