import {VersionNumber} from "../src/version-number";

describe('VersionNumber クラスのテスト', () => {
    describe('バージョン番号クラスは自身の文字列表現を返すメソッドを持つ', () => {
        describe('文字列表現は major, minor, patch の順に . で連結されたものである', () => {
            test('major = 0, minor = 0, patch = 0 のとき文字列 "0.0.0" が得られる', () => {
                const number = new VersionNumber(0, 0, 0);
                expect(number.stringify()).toBe('0.0.0');
            });
        });
    });

    describe('バージョン番号クラスは等価性比較ができる', () => {
        describe('全フィールドの値が比較対象と同一の場合は true を返す', () => {
            test('コンストラクタに (0, 0, 0) を与えたオブジェクトを2つ作り比較すると true が得られる', () => {
                const numberA = new VersionNumber(0, 0, 0);
                const numberB = new VersionNumber(0, 0, 0);
                expect(numberA.equals(numberB)).toBeTruthy();
            });
        });

        describe('いずれかのフィールドの値が比較対象と異なる場合は false を返す', () => {
            test('major の値が 0 のオブジェクトと 1 のオブジェクトを比較すると false が得られる', () => {
                const numberA = new VersionNumber(1, 0, 0);
                const numberB = new VersionNumber(0, 0, 0);
                expect(numberA.equals(numberB)).toBeFalsy();
            });
        });
    });
});
