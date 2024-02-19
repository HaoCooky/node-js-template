
export class IllegalArgumentException extends Error {
    constructor(message) {
        super(message);
        this.name = message;
    }

    static isIllegalArgumentException(error: Error) {
        return true;
    }
}