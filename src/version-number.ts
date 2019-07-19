export class VersionNumber {
    constructor(
        private major: number,
        private minor: number,
        private patch: number) {
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

}
