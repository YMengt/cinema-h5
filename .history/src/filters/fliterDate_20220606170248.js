import dayjs from "dayjs";
export default function filterDate(date, split = "") {
    if (!date) {
        return ''
    } else {
        return dayjs(date).format(split);
    }
}