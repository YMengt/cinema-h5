import dayjs from "dayjs";
export default function filterDate(date, split = "") {
    if (!date) {
        return ''
    } else {
        console.log(date+"000")
        let d=new Date(date)
        console.log(d)
        return dayjs(date);
    }
}