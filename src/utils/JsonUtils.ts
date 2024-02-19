import { camelCase, isArray, isDate, isMap, isObject, snakeCase } from 'lodash';

export abstract class JsonUtils {
    private static serializeKeyTransform = snakeCase;
    private static deserializeKeyTransform = camelCase;

    private static convertKeys<T>(data: any, transform: (key: string) => string, ignoreKeyOfMap = false): T {
        if (isArray(data)) {
            return data.map(innerObj => this.convertKeys<any>(innerObj, transform, ignoreKeyOfMap)) as any;
        } else if (isDate(data)) {
            return data.toString() as any;
        }
        if (isObject(data) || isMap(data)) {
            let obj = data;
            const isAMap = isMap(data);
            if (isAMap) {
                obj = Object.fromEntries(data as any);
            }
            const newObj: { [key: string]: any } = {};
            Object.entries(obj).forEach(([key, value]) => {
                const newKey = isAMap && ignoreKeyOfMap ? key : transform(key);
                newObj[newKey] = this.convertKeys(value, transform, ignoreKeyOfMap);
            });
            return newObj as any;
        } else {
            return data;
        }
    }

    static toJson(value: any, ignoreKeyOfMap = false): string {
        return JSON.stringify(this.serializerKeys(value, ignoreKeyOfMap));
    }

    static serializerKeys(value?: any, ignoreKeyOfMap?: boolean): any {
        if (value) {
            return this.convertKeys<any>(value, this.serializeKeyTransform, ignoreKeyOfMap);
        }
    }

    static fromPureJson(data: string | object): any {
        if (typeof data === 'string') {
            return JSON.parse(data);
        } else {
            return data;
        }
    }

    static fromObject<T>(data: string | object): T {
        if (typeof data === 'string') {
            const json = JSON.parse(data);
            return this.toObject(json);
        } else {
            return this.toObject(data);
        }
    }

    private static toObject<T>(data: any): T {
        if (data) {
            return this.convertKeys<T>(data, this.deserializeKeyTransform);
        } else {
            throw new Error("Can't from json");
        }
    }
}