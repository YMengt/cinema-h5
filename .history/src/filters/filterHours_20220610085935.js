
export default function filterhours(date, split = "") {
    if (!date) {
        return ''
    } else {    
        date=Number(date+"000")
        let s=new Date(date)
       let hour=s.getHours()
       let minu=s.getMinutes()
       console.log(hour,min,s)
        let str=" "+hour+":"+minu+"";
        return str;
    }
}