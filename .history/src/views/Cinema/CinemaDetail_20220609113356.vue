<template>
    <div>
        <movie-detail-header :isShowBack="true" title="影院"></movie-detail-header>
        thisis
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import MovieDetailHeader from '../../components/Comp/MovieDetailHeader.vue'
import { Sticky } from 'vant';
import api from '../../utils/api';
import { reactive } from '@vue/reactivity';
export default {
    name:"CinemaDetail",
    components:{MovieDetailHeader,Sticky},
        setup () {
            const route=useRoute()
        //console.log(route.params.id) 是cinemaId
        const info=reactive({
            cinemaList:[],
            detailMovieList:[]

        })
         const getTimeByCinemaId=async({filmId,cinemaId,date})=>{
             let result=await api.cinemaInfo.getTimeByCinemaId({filmId,cinemaId,date})
             return result     
        }
        const getMyCinemaMessage=async()=>{
            let result=await api.cinemaInfo.cinemaDetailTitle(route.params.id)
            info.cinemaList=result.cinema
            console.log(info.cinemaList)

            let result2=await api.cinemaInfo.cinemaDetailMovie(route.params.id)
            info.detailMovieList=result2.films
            console.log( info.detailMovieList)

            let dateTime=getTime()
            let result3= getTimeByCinemaId({filmId:info.detailMovieList[0].filmId,cinemaId:info.cinemaList.cinemaId,date:dateTime}) 
            console.log(result3)
            

        }

        function getTime(){
            let d=new Date()
			let month=d.getMonth()+1
			let str=d.getFullYear()+"-"+month+"-"+d.getDate()+" 24:00:00"
			let d2=new Date(str).getTime().toString()
			let date1=d2.slice(0,10)
            return date1
        }
        getMyCinemaMessage()

       
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>