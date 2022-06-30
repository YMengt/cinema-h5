<template>
    <div>
        <Header title="喵喵影院"></Header>
        <div id="content">
            <div class="header-bar">
            <dropdown-menu>
            <dropdown-item title="全城" > 

                     <grid :gutter="10" :column-num="4" :clickable="true" ref="item" @click="onConfirm">
                        <grid-item class="g-item" v-for="(item,index) in districtarr" :text="item" :key="index" />
                    </grid>
            </dropdown-item>    
            <dropdown-item v-model="value1" :options="option1" />
            <dropdown-item v-model="value2" :options="option2" />
            </dropdown-menu>
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
import { DropdownMenu, DropdownItem,Cell,Grid, GridItem } from 'vant';
import { ref } from "vue";
    export default {
         name:'Cinema',
        components:{Header,TabBar, DropdownMenu, DropdownItem,Cell,Grid, GridItem},
    setup () {
        let info=reactive({
            cinemaList:[],
            option1 :[
                { text: 'app订票', value: 0 },
                { text: '前台兑换', value: 1 },
                ],
            option2 :[
                { text: '最近去过', value: 0 },
                { text: '离我最近', value: 1},
               
            ],
            value1:0,
            value2:0,
            districtarr:["全部"]




        })
        let item=ref(null)
         let districtNameMap=new Map()
        const getCinema=async()=>{
            let result=await api.cinemaInfo.getCinema()
            info.cinemaList=result.cinemas
            console.log(info.cinemaList)
           
            info.cinemaList.map((item)=>{
                info.districtarr.push(item.districtName)
                districtNameMap.set(item.districtName,item.districtId)
            })
            info.districtarr=[...new Set( info.districtarr)]
            // console.log(districtNameMap, info.districtarr)
        }
        getCinema()

        function onConfirm(){
            console.log( item.value.toggle())
        }

        return {
            ...toRefs(info),
            item,
            onConfirm

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
                      width: 262px;                     
                      line-height: 30px;
                      }
                 .address span:nth-of-type(2){ float:right; }
         
         }
    .g-item{
       

    }
 }

.cinema_body div{ margin-bottom: 10px;}

::v-deep .van-grid-item__content{
    height: 38px;
}

::v-deep .van-grid{
    padding: 10px 0px;
} 

</style>