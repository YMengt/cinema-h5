import dayjs from "dayjs";
export default function filterDate(data, split = "") {
    if (!date) {
        return ''
    } else {
        return dayjs(date).format(split);
    }
}