import dayjs from "dayjs";
export default function filterDate(date, split = "") {
    if (!date) {
        return ''
    } else {
        console.log(date)
        return dayjs(date);
    }
}