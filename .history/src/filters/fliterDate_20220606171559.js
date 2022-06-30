import dayjs from "dayjs";
export default function filterDate(date, split = "") {
    if (!date) {
        return ''
    } else {
        console.log(date)
        date=Number(date+"000")
        console.log(Date.now())
        let d=new Date(date)
        console.log(d)
        return dayjs(date);
    }
}