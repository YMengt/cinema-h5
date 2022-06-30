import axiosInstance from "../axiosInstance";

const cinemaInfo={
   
    getCinema(){
        return axiosInstance.get('gateway?cityId=110100&ticketFlag=1&k=9681514',{
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615895162724483673423873","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            },

        })
    },
    
   
}

export default cinemaInfo