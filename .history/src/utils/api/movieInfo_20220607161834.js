import axiosInstance from "../axiosInstance";

const movieInfo={
   
    gateway({ cityId,pageNum,pageSize,type,k}){
        return axiosInstance.get('/gateway',{
            params:{
                cityId,
                pageNum,
                pageSize,
                type,
                k
                    },
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654492188946696691384321"}',
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    },
    findViewById({filmId,k}){
        https://m.maizuo.com/gateway?filmId=5439&k=1735369
        return axiosInstance.get('/gateway',{
            params:{
                filmId,
                k
                    },
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654504975953706078011393","bc":"110100"}',
                "X-Host": "mall.film-ticket.film.info"
            }
        })
    },

    getCity(){
        // https://m.maizuo.com/gateway?k=4464145
        return axiosInstance.get('/gateway',{
            params:{ 
                k:4464145
                    },
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654504975953706078011393","bc":"430700"}',
                "X-Host": "mall.film-ticket.city.list",
            }
        })

    }
   
}

export default movieInfo