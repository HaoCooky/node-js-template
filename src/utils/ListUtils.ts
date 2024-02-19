export abstract class ListUtils {
    static isEmpty(list: any) {
        return !Array.isArray(list) || !list.length;
    }

    static isNotEmpty(list: any) {
        return Array.isArray(list) && !!list.length;
    }

    static remove<T>(list: T[], isRemove: (item: T, index: number) => boolean): T[] {
        if (this.isEmpty(list)) {
            return [];
        } else {
            return list.filter((item, index) => !isRemove(item, index));
        }
    }

    static removeAt<T>(list: T[], index: number): T[] {
        if (this.isNotEmpty(list)) {
            if (list.length === 1 && index === 0) {
                list.splice(-1, 1);
            } else {
                list.splice(index, 1);
            }
        }
        return list;
    }

    static swap<T>(list: T[], oldIndex: number, newIndex: number) {
        if (ListUtils.isNotEmpty(list)) {
            const temp = list[oldIndex];
            list[oldIndex] = list[newIndex];
            list[newIndex] = temp;
        }
        return list;
    }

    static getLast<T>(list: T[]): T | null {
        const length = list.length;
        if (length == 0) {
            return null;
        }
        return list[length - 1];
    }

    static getHead<T>(list: T[]): T | undefined {
        if (this.isNotEmpty(list)) {
            return list[0];
        } else {
            return void 0;
        }
    }
}