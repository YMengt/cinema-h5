<template>
   <div class="cinemeDetail">
        <movie-detail-header :isShowBack="true" class="top-fixed" title=" "></movie-detail-header >
        <div class="head-title">44444</div>
        <div class="address">
            <span class="address-location">
                <icon name="location-o" />
            </span>
            <span class="address-text" >22</span>
            <span class="address-photo">
                 <icon name="phone-o" />
            </span>
        </div>
        <div class="head-tag">
            <span >3333</span>
           
             <span style="border:none" class="iconfont icon-jiantouyou
                "></span>
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