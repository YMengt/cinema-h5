<template>
    <div class="cinemeDetail">
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
            <div class="schedules-tab">
                <tabs v-model:active="active" swipeable>
                    <tab  title='选项1'>
                        内容 
                    </tab>
                    <tab  title='选项2'>
                        内容 
                    </tab>
                </tabs>
            </div>
            <div class="schedules-list">
                <ul>
                    <li>
                        <div  class="sche-left">
                            <p>10:00</p>
                            <p><span>12.27散场</span></p>
                        </div>
                        <div  class="sche-center">
                            <p>原生3D</p>
                            <p><span>4号厅</span></p>
                        </div>
                        <div class="sche-right">
                            <p>
                                <span>40.9</span>
                                <span class="btn">购票</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
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
.cinemeDetail{
    width: 100vw;
}
.head-title{
    text-align: center;
    font-size: 17px;
    color: #191a1b;
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
    .address-location{
        width: 30%;
    }
    .address-text{
        width: 60%;
    }
    .address-photo{
        width: 30%;
    }

}

.scroll-content{
    .img-container{
        width: 90px;
        height: 130px;
        border: 1px solid red;
        img{
            width: 100%;
            height: 100%;
        }
    }
}


</style>