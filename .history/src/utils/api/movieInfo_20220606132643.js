import axiosInstance from "../axiosInstance";

const movieInfo={
   
    gateway(){
        return axiosInstance.get('/gateway',{
            params:{
                cityId:440300,
                pageNum:1,
                pageSize:10,
                type:1,
                k:4571821
                    },
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654492188946696691384321"}',
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    },
   
}

export default movieInfo