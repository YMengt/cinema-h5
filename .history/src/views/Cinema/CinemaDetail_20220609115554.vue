<template>
    <div>
        <movie-detail-header :isShowBack="true" title="影院"></movie-detail-header>
        <div class="head-title">影院</div>
        <div class="head-tag">
            <span>前台兑换</span>
            <span>儿童票</span>
            <span>停车</span>
            <span>3眼镜</span>
            <span>→</span>
        </div>
        <div class="address">
            <span class="address-location">图标</span>
            <span class="address-text">文字</span>
            <span class="address-photo">电话</span>
        </div>
        <div class="scroll-content">
                <div>
                    <div class="img-container">
                        <img src="" alt="">
                    </div>
                    <div class="img-container">
                        <img src="" alt="">
                    </div>
                    <div class="img-container">
                        <img src="" alt="">
                    </div>
                </div>
        </div>
        <sticky :offset-top="50">
            <div class="title-content">
                <div class="title-center">
                    <div class="title-top">123456</div>
                    <div class="title-bottom">123654</div>
                </div>
                <div class="title-right">
                    <span>→右箭头</span>
                </div>
            </div>
        </sticky>
        <div class="schedules-content">
            <tabs v-model:active="active" swipeable>
                <tab  title='选项1'>
                    内容 
                </tab>
                <tab  title='选项2'>
                    内容 
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import MovieDetailHeader from '../../components/Comp/MovieDetailHeader.vue'
import { Sticky ,Tab, Tabs} from 'vant';
import api from '../../utils/api';
import { reactive } from '@vue/reactivity';
export default {
    name:"CinemaDetail",
    components:{MovieDetailHeader,Sticky,Tab, Tabs},
        setup () {
            const route=useRoute()
        //console.log(route.params.id) 是cinemaId
        const info=reactive({
            cinemaList:[],
            detailMovieList:[],
            schedulesList:[]

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
            let result3=await getTimeByCinemaId({filmId:info.detailMovieList[0].filmId,cinemaId:info.cinemaList.cinemaId,date:dateTime}) 
            info.schedulesList=result3.schedules
            console.log(info.schedulesList)
            

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