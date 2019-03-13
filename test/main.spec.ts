import { getIp } from '../src/main';

test('getIp', () => {
    const ip = getIp();
    expect(ip).toMatch(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
});