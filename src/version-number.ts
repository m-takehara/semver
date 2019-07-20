export class VersionNumber {

    constructor(
        private major: number,
        private minor: number,
        private patch: number) {

        if (!(VersionNumber.isInteger(major)
            && VersionNumber.isInteger(minor)
            && VersionNumber.isInteger(patch))) {
            throw new TypeError('値は 0 以上の整数のみ使用可能です');
        }
    }

    public stringify(): string {
        return `${this.major}.${this.minor}.${this.patch}`;
    }

    public equals(comparison: VersionNumber): boolean {
        return this.major === comparison.major
            && this.minor === comparison.minor
            && this.patch === comparison.patch;
    }

    public compareTo(comparison: VersionNumber): -1 | 0 | 1 {
        if (this.major !== comparison.major) {
            return this.major < comparison.major ? -1 : 1;
        }
        if (this.minor !== comparison.minor) {
            return this.minor < comparison.minor ? -1 : 1;
        }
        if (this.patch !== comparison.patch) {
            return this.patch < comparison.patch ? -1 : 1;
        }
        return 0;
    }

    private static isInteger(num: number): boolean {
        const isNegative = num < 0;
        const isNull = num === null;
        const isFloat = num % 1 !== 0;

        return !(isNegative || isNull || isFloat);
    }

}
