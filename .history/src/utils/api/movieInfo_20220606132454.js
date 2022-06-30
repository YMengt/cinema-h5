import axiosInstance from "../axiosInstance";

const movieInfo={
   
    gateway(){
        return axiosInstance.get('/gateway',{
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654492188946696691384321"}',
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    },
   
}

export default movieInfo