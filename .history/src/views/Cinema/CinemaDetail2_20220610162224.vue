<template>
   <div class="cinemeDetail">
        <movie-detail-header :isShowBack="true" class="top-fixed" title=" "></movie-detail-header >
        <div class="head-title">{{cinemaList.name}}</div>
        <div class="address">

            <div class="row">
                <span class="address-location">
                    <icon name="location-o" />
                </span>
                <span class="address-text" >{{cinemaList.address}}</span>
                <span style="border:none" class="iconfont icon-jiantouyou
                ">
                </span>
            </div>
            <div class="row">
                <span class="address-photo">
                    <icon name="phone-o" />
                </span>
                <span class="address-phone">
                    {{cinemaList.phone}}
                </span>
                <span style="border:none" class="iconfont icon-jiantouyou
                    "></span>
            </div>
             

        </div>
        <div class="head-tag">

             <div v-for="(item,index) in cinemaList.services" :key="index"><span>{{item.name}}</span><p>{{item.description}}</p></div>
           
             
           
            
        </div>
        
           
    </div>
</template>

<script>
import { useRouter,useRoute } from 'vue-router'
import MovieDetailHeader from '../../components/Comp/MovieDetailHeader.vue'
import { Icon} from 'vant';
import api from '../../utils/api';
import { reactive, toRefs } from '@vue/reactivity';

export default {
    name:"CinemaDetail2",
     components:{MovieDetailHeader,Icon},
    setup () {
        let info=reactive({
            cinemaList:[]
        })
        const route=useRoute()
    
    const getCinemaMessage=async()=>{
 let result=await api.cinemaInfo.cinemaDetailTitle(route.params.id)
            info.cinemaList=result.cinema
            console.log(info.cinemaList)
    }

    getCinemaMessage()

        return {
            ...toRefs(info)
        }
    }
}
</script>

<style lang="scss" scoped>
.cinemeDetail{
    width: 100vw;
    box-sizing:border-box ;
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
   .row{
       display: flex;
       border-top: 1px solid #ededed;
       padding: 15px 0;
       align-items: center;
       justify-content: space-between;
   }
    .address-location{
        
    }
    .address-text{
       
    }
    .address-photo{
       
    }

}



</style>