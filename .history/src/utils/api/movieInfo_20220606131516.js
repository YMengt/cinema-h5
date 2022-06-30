import axiosInstance from "../axiosInstance";

const movieInfo={
   
    gateway(){
        return axiosInstance.get('/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4571821')
    },
   
}

export default movieInfo