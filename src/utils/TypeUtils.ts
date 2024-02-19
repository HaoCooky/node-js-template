export abstract class TypeUtils {
    static isNull(value: any): value is null {
        return Object.prototype.toString.call(value).slice(8, -1) === "Null"
    }

    static isString(value: any): value is null {
        return Object.prototype.toString.call(value).slice(8, -1) === "String"
    }

    static isObject(value: any): value is object {
        return Object.prototype.toString.call(value).slice(8, -1) === "Object"
    }

    static isNumber(value: any): value is number {
        return Object.prototype.toString.call(value).slice(8, -1) === "Number"
    }
    static isBlob(value: any): value is Blob {
        return Object.prototype.toString.call(value).slice(8, -1) === "Blob"
    }

    static isNaN(value: any) {
        if (!this.isNumber(value)) {
            return true;
        }

        return Number.isNaN(value);
    }
}