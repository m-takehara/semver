export class VersionNumber {
    constructor(
        private major: number,
        private minor: number,
        private patch: number) {
    }

    public stringify(): string {
        return `${this.major}.${this.minor}.${this.patch}`;
    }
}
