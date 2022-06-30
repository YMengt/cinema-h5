import axiosInstance from "../axiosInstance";

const cinemaInfo={
   
    getCinema(){
        return axiosInstance.get('gateway',{
            params:{
                cityId:110100,
                ticketFlag:1,
                k:9681514
            },
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615895162724483673423873","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            },

        })
    },
    changeTiket(){
        //https://m.maizuo.com/gateway?cityId=110100&ticketFlag=2&k=65315
        return axiosInstance.get('gateway',{
            params:{
                cityId:110100,
                ticketFlag:2,
                k:65315
            },
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654601167997561989070849","bc":"110100"}',
                "X-Host": "mall.film-ticket.cinema.list"
            },
        })
    },
    cinemaDetailTitle(cinemaId){
        //https://m.maizuo.com/gateway/?cinemaId=1701&k=2431046
        return axiosInstance.get('gateway',{
            params:{
                cinemaId,
                k:2431046,
            },
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16547412371063489737064449","bc":"110100"}',
                "X-Host":'mall.film-ticket.cinema.info'
            },
        })
    },
    cinemaDetailMovie(cinemaId){
        //https://m.maizuo.com/gateway/?cinemaId=1701&k=8155718
        return axiosInstance.get('gateway',{
            params:{
                cinemaId,
                k:8155718,
            },
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16547412371063489737064449","bc":"110100"}',
                "X-Host": 'mall.film-ticket.film.cinema-show-film'
            },
        })
    },
    getTimeByCinemaId({filmId,cinemaId,date}){
       // https://m.maizuo.com/gateway/?filmId=5984&cinemaId=1701&date=1654790400&k=1243736

        return axiosInstance.get('gateway',{
            params:{
                filmId,
                cinemaId,
                date,
                k:1243736,
            },
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16547412371063489737064449","bc":"110100"}',
                "X-Host": 'mall.film-ticket.schedule.list'
            },
            
        })

    }

   
}

export default cinemaInfo