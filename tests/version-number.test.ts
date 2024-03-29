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

    describe('バージョン番号クラスは大小比較ができる', () => {
        describe('比較対象と等価であれば 0 を返す', () => {
            test('コンストラクタに (0, 0, 0) を与えたオブジェクトを2つ作り比較すると 0 を得られる', () => {
                const numberA = new VersionNumber(0, 0, 0);
                const numberB = new VersionNumber(0, 0, 0);
                expect(numberA.compareTo(numberB)).toBe(0)
            });
        });
        describe('比較対象より小さければ -1 を返す', () => {
            test('major = 0 のオブジェクトに対し比較対象は major = 1 のとき -1 を得られる', () => {
                const numberA = new VersionNumber(0, 0, 0);
                const numberB = new VersionNumber(1, 0, 0);
                expect(numberA.compareTo(numberB)).toBe(-1);
            });
        });
        describe('比較対象より大きければ 1 を返す', () => {
            test('major = 1 のオブジェクトに対し比較対象は major = 0 のとき 1 を得られる', () => {
                const numberA = new VersionNumber(1, 0, 0);
                const numberB = new VersionNumber(0, 0, 0);
                expect(numberA.compareTo(numberB)).toBe(1);
            });
        });
    });

    describe('バージョン番号クラスの各フィールドはゼロ、または正の整数である', () => {
        describe('フィールドに0を入れられる', () => {
            test('全フィールドに 0 を入れても例外は発生しない', () => {
                expect(() => new VersionNumber(0, 0, 0)).not.toThrow();
            });
        });

        describe('フィールドに0以上の整数以外を入れると例外が発生する', () => {
            describe('負数のとき', () => {
                test('major に -1 を与えると例外が発生する', () => {
                    expect(() => new VersionNumber(-1, 0, 0)).toThrow();
                });
            });

            describe('浮動小数点数のとき', () => {
                test('major に 0.1 を与えると例外が発生する', () => {
                    expect(() => new VersionNumber(0.1, 0, 0)).toThrow();
                });
            });

            describe('null のとき', () => {
                test('major に null を与えると例外が発生する', () => {
                    expect(() => new VersionNumber(null, 0, 0)).toThrow();
                });
            });
        });
    });
});
