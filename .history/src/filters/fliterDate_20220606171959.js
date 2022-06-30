import dayjs from "dayjs";
export default function filterDate(date, split = "") {
    if (!date) {
        return ''
    } else {
       
        date=Number(date+"000")
        console.log(date.getDay())
        return dayjs(date);
    }
}