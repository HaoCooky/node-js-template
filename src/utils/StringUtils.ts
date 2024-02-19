import {TypeUtils} from "./TypeUtils";

export abstract class StringUtils{
    static isEmpty(str: any): str is string {
        return !str || !str.length;
    }

    static isNotEmpty(str: string | null | undefined): str is string {
        return !!str && !!str.length;
    }

    static isEmail(str: any): str is string{
        if(!TypeUtils.isString(str)){
            return false;
        }

        const regex = new RegExp(
            '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        );
        return regex.test(str!);
    }
    static isKorea(str: any): str is string{
        if(!TypeUtils.isString(str)){
            return false;
        }

        const regex = new RegExp(/[\u3131-\uD79D]/ugi);
        return regex.test(str!);
    }
    static isAlphabet(str: any): str is string{
        if(!TypeUtils.isString(str)){
            return false;
        }

        const regex = new RegExp(/^[a-zA-Z]*$/);
        return regex.test(str!);
    }
    static isNumberCharacter(str: any): str is string{
        if(!TypeUtils.isString(str)){
            return false;
        }

        const regex = new RegExp(/^\d+$/);
        return regex.test(str!);
    }
}