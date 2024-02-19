import moment from "moment";

export abstract class TimeUtils {
    static toTimeStamp(date: string): number {
        return +moment(date).format("X");
    }
}