import {VersionNumber} from "../src/version-number";

test('コンストラクタに (0, 0, 0) を与えると文字列 "0.0.0" が得られる', () => {
    const number = new VersionNumber(0, 0, 0);
    expect(number.stringify()).toBe('0.0.0');
});
