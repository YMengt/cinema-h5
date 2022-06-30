import axiosInstance from "../axiosInstance";



const movieInfo={
    //同名结构，前端传送也必须是这个名字
    getListByPage({pageIndex,food_name,category_name}){
        return axiosInstance.get('foodInfo/getListByPage',{
            params:{
                pageIndex,
                food_name,
                category_name
            }
        })
    },
   
}

export default movieInfo