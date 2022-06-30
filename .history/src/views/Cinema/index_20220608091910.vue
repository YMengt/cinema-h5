<template>
    <div>
        <Header title="喵喵影院"></Header>
        <div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-jiantouxia"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-jiantouxia"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-jiantouxia"></i>
				</div>
			</div>
			<div class="cinema_body">
				<ul>
					<li v-for="(item,index) in cinemaList" :key="index">
                        
                        
                       <!-- {{item}} -->
                            <div>
                                <span>{{item.name}}</span>
                                <span class="q"><span class="price">{{item.lowPrice/100}}</span> 元起</span>
                            </div>
                            <div class="address">
                                <span>{{item.address}}</span>
                                <span>{{Number(item.Distance).toFixed(2) }}km</span>
                            </div>
						
					</li>
				</ul>
			</div>
		</div>

        <TabBar></TabBar>
    </div>
</template>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
import api from "../../utils/api"
import { reactive, toRefs } from '@vue/reactivity'
    export default {
         name:'Cinema',
        components:{Header,TabBar},
    setup () {
        let info=reactive({
            cinemaList:[]
        })
        const getCinema=async()=>{
            let result=await api.movieInfo.getCinema()
            info.cinemaList=result.cinemas
            console.log(info.cinemaList)
        }
        getCinema()

        return {
            ...toRefs(info)
        }
    }
}
</script>

<style lang="scss" scoped>
#content .cinema_menu{ 
    width: 100%;
    height: 45px;
     border-bottom:1px solid #e6e6e6;
      display: flex;
       justify-content:space-around; 
       align-items:center;
        background:white;
    }
#content .cinema_body{ 
    flex:1; 
    overflow:auto;
    ul{
         padding:20px;
        li{ 
             border-bottom:1px solid #e6e6e6; 
             margin-bottom: 20px;
             .q{ 
                 font-size: 11px; 
                 color:#f03d37;
                 .price{
                      font-size: 18px;
                      }
                 
                 }
             }

             .address{ 
                 font-size: 13px; color:#666;
                 }
                 .address span:nth-of-type(1){
                     display: inline-block;
                      width: 180px;
                      }
                 .address span:nth-of-type(2){ float:right; }
         
         }
    }
.cinema_body 
.cinema_body 
.cinema_body div{ margin-bottom: 10px;}
.cinema_body 
.cinema_body 
.cinema_body 
.cinema_body 

</style>