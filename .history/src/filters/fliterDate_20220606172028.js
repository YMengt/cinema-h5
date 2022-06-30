import dayjs from "dayjs";
export default function filterDate(date, split = "") {
    if (!date) {
        return ''
    } else {
       
        date=Number(date+"000")
        let s=new Date(date)
        console.log(s.getDay())
        return dayjs(date);
    }
}