import dayjs from "dayjs";
export default function filterDate(date, split = "") {
    if (!date) {
        return ''
    } else {
       
        date=Number(date+"000")
        let s=new Date(date)
        let datalist=["周日","周一","周二","周三","周四","周五","周六",]
        console.log(datalist[s.getDay()])
        return dayjs(date);
    }
}