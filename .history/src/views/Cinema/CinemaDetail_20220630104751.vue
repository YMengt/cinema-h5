<template>
    <div class="cinemeDetail">
        <movie-detail-header :isShowBack="true" class="top-fixed" title=" "></movie-detail-header >
        <div class="head-title">{{cinemaList.name}}</div>
        <div class="head-tag" @click="$router.push('/cinemaDetail2/'+$route.params.id)">
            <span v-for="(item,index) in cinemaList.services" :key="index">{{item.name}}</span>
             <span style="border:none" class="iconfont icon-jiantouyou
                "></span>
        </div>
        <div class="address">
            <span class="address-location">
                <icon name="location-o" />
            </span>
            <span class="address-text" >{{cinemaList.address}}</span>
            <span class="address-photo">
                 <icon name="phone-o" />
            </span>
        </div>
        <div class="scroll-content">
                <swipe @change="onChange" lazy-render>
                    <swipe-item v-for="(item,index) in  detailMovieList" :key="index" class="img-container">
                    <img :src="item.poster" alt="">
                    </swipe-item>
                </swipe>

        </div>
        <sticky :offset-top="44" >
            <div class="title-content" @click="toMovieDetail">
                <div class="title-center">
                     <div class="title-top">{{detailMovieList[filmIndex].name}}</div> 
                     <div class="title-bottom">{{detailMovieList[filmIndex].category}}|{{detailMovieList[filmIndex].runtime}}分钟|{{detailMovieList[filmIndex].director}}</div>
                   
                </div>
                <div class="title-right">
                    <span class="iconfont icon-jiantouyou
                        "></span>
                </div>
            </div>
        </sticky>
        <div class="schedules-content">
            <div class="schedules-tab">
                <tabs v-model:active="tabIndex" swipeable @click-tab="changeTab">
                    <tab   title='今天'>
                        <CinemaDetailItem v-for="(item,index) in schedulesList" :key="index" :list="item"></CinemaDetailItem>
                        
                    </tab>
                    <tab   title='明天'>
                        <CinemaDetailItem v-for="(item,index) in schedulesList" :key="index" :list="item"></CinemaDetailItem>
                    </tab>

                    
                </tabs>
            </div>
            
        </div>
    </div>
</template>

<script>
import { useRoute,useRouter } from 'vue-router'
import MovieDetailHeader from '../../components/Comp/MovieDetailHeader.vue'
import { Sticky ,Tab, Tabs,Icon,Swipe, SwipeItem} from 'vant';
import api from '../../utils/api';
import { reactive, toRefs } from '@vue/reactivity';
import CinemaDetailItem from '../../components/Comp/CinemaDetailItem.vue';
import MySwiperVue from '../../components/Comp/MySwiper.vue';
import filterDate from '../../filters/fliterDate';
export default {
    name:"CinemaDetail",
    components:{MovieDetailHeader,Sticky,Tab, Tabs,CinemaDetailItem,Icon,MySwiperVue,Swipe, SwipeItem},
        setup () {
            const route=useRoute()
            const router=useRouter()
        //console.log(route.params.id) 是cinemaId
        const info=reactive({
            cinemaList:{},
            detailMovieList:[{}],
            schedulesList:[],
            filmIndex:0,
            tabIndex:0

        })
        const getMyCinemaMessage=async()=>{

            let result2=await api.cinemaInfo.cinemaDetailMovie(route.params.id)
            info.detailMovieList=result2.films
            console.log( info.detailMovieList)

            let result=await api.cinemaInfo.cinemaDetailTitle(route.params.id)
            info.cinemaList=result.cinema
            console.log(info.cinemaList)
            
           

            let dateTime=getTime(info.tabIndex)
            let result3=await api.cinemaInfo.getTimeByCinemaId({filmId:info.detailMovieList[info.filmIndex].filmId,cinemaId:route.params.id,date:dateTime}) 
            info.schedulesList=result3.schedules
            console.log(info.schedulesList)
            

        }

        function getTime(x){
            let d=new Date()
			let month=d.getMonth()+1
            let da=d.getDate()+x
			let str=d.getFullYear()+"-"+month+"-"+da+" 00:00:00"
			let d2=new Date(str).getTime().toString()
			let date1=d2.slice(0,10)
            return date1
        }
        getMyCinemaMessage()

       

function onChange(index){
    info.filmIndex=index
    changeTab()
    

}

const changeTab=async()=>{
     info.schedulesList.length=0
     let dateTime= await getTime(info.tabIndex)
 let result3=await api.cinemaInfo.getTimeByCinemaId({filmId:info.detailMovieList[info.filmIndex].filmId,cinemaId:route.params.id,date:dateTime}) 

    if(!result3.schedules){
        info.schedulesList=[]
    }else{
        info.schedulesList=result3.schedules
    }
   
}

function toMovieDetail(){
     router.push({path:"/movieDetails/"+info.detailMovieList[info.filmIndex].filmId})
}


        return {
            onChange,
            ...toRefs(info),
            filterDate,
            changeTab,
            toMovieDetail
        }
    }
}
</script>

<style lang="scss" scoped>
.cinemeDetail{
    width: 100vw;
}
.top-fixed{
    position: fixed;
    top: 0px;
    background-color: white;
    z-index: 20;
}
.head-title{
    text-align: center;
    font-size: 17px;
    color: #191a1b;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 15px;
    background: #fff;
    height: 44px;
    line-height: 44px;
    margin-top:44px ;
}
.head-tag{
    display: flex;
    font-size: 15px;
    color: #ffb232;
    justify-content: center;
    padding: 5px 0 15px;
    font-size: 0px;
    span{
        transform: scale(.7);
        display: inline-block;
        border: 1px solid #ffb232;
        padding: 3px 2px;
        font-size: initial;
    }
}
.address{
    display: flex;
    align-items: center;
    height: 50px;
    text-align: center;
    .address-location{
        width: 30%;
    }
    .address-text{
        width: 60%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .address-photo{
        width: 30%;
    }

}

.scroll-content{
//    width: 90px;
   height: 130px;
//    overflow: hidden;
}
.title-content{
    padding: 15px 0px;
    display: flex;
    box-sizing: border-box;
    background: #fff;
    z-index: 20;
    .title-center{
        width: 80%;
        padding-left: 45px;
        text-align: center;
        .title-top{
            font-size: 15px;
            color: #191a1b;
            padding-right: 5px;
            margin-bottom: 10px;
            line-height: 18px;
            height: 18px;
        }
        .title-bottom{
            height: 18px;
            color: #797d82;
            font-size: 13px;
            padding: 0 12%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .title-right{ 
        width: 20%;
        align-self: center;
       
    }
}

.img-container{
    
    img{
        width: 100%;
        height: 130px;
        object-fit: cover;
    }
    
    }




</style>