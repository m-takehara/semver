import {VersionNumber} from "../src/version-number";

describe('VersionNumber クラスのテスト', () => {
    describe('バージョン番号クラスは自身の文字列表現を返すメソッドを持つ', () => {
        describe('文字列表現は major, minor, patch の順に . で連結されたものである', () => {
            test('コンストラクタに (0, 0, 0) を与えると文字列 "0.0.0" が得られる', () => {
                const number = new VersionNumber(0, 0, 0);
                expect(number.stringify()).toBe('0.0.0');
            });
        });
    });
});
