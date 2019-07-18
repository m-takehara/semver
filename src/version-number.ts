export class VersionNumber {
    constructor(
        private major: number,
        private minor: number,
        private patch: number) {
    }

    stringify(): string {
        return '';
    }
}
