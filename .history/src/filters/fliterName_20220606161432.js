
export default function filterName(data, split = "") {
    if(!data){
        return ''
    }else{
        let num=""
        console.log(data)
        data.map((item)=>{
           num+=item.name
        })
        return num;
    }
}