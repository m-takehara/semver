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
}
