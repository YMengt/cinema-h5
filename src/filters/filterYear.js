
export default function filterYear(date, split = "") {
    if (!date) {
        return ''
    } else {    
        date=Number(date+"000")
        let s=new Date(date)
        let year=s.getFullYear()//年
        let month=s.getMonth()+1//月
        let str=" "+year+"-"+month+"-"+s.getDate()+" 上映";
        return str;
    }
}