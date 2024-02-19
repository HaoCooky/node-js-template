import moment from "moment";

export abstract class DateTimeUtils {
    static fromNowToYearsAgo(range: number) {
        const currentYear = moment().year();
        return Array.from({length: range}, (_, index) => {
            return currentYear - index;
        })
    }

    static fromYearToNow(year: number) {
        const currentYear = moment().year();
        if (year > currentYear) {
            return []
        }

        return Array.from({length: currentYear - year + 1}, (_, index) => {
            return year + index;
        })
    }

    static getFullMonths() {
        return Array.from({length: 12}, (_, index) => {
            return index + 1;
        })
    }


    static getDaysOfMonth(year: number, month: number) {
        if (year < 0) {
            return [];
        }
        if (month < 1) {
            return [];
        }
        const dayOfMonths = moment(`${year}-${month + 1}`, 'YYYY-MM').daysInMonth();
        return Array.from({length: dayOfMonths}, (_, index) => {
            return index + 1;
        })
    }
}