<template>
    <div>
        <Header title="喵喵影院" varity="cinema"></Header>
        <div id="content">
            <div class="header-bar">
            <dropdown-menu>
            <dropdown-item title="全城" v-model="city" > 

                     <grid  :column-num="4" :clickable="true" ref="gridEl" >
                        <grid-item class="g-item" v-for="(item,index) in districtarr" :text="item" :key="index" @click="onConfirm(index)" />
                    </grid >
            </dropdown-item>    
            <dropdown-item v-model="value1" :options="option1" />
            <dropdown-item v-model="value2" :options="option2" />
            </dropdown-menu>
            </div>
           
<CinemaItem :list="showCinemaList" :isOrder="isShowAppOrder"></CinemaItem>
           
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
import { ref, watch,getCurrentInstance } from "vue";
import CinemaItem from "../../components/Comp/CinemaItem.vue";
import { useStore } from "vuex";
    export default {
         name:'Cinema',
        components:{Header,TabBar, DropdownMenu, DropdownItem,Cell,Grid, GridItem,CinemaItem},
    setup () {
        let info=reactive({
            cinemaList:[],
            showCinemaList:[],
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
            districtarr:[],//展示的区数组
            isShowAppOrder:true,
            city:1

        })
        const store=useStore()
        const {proxy}=getCurrentInstance()
        let gridEl=ref(null)
         let districtNameMap=new Map()
        districtNameMap.set("全部",0)

        watch(()=>info.value1,()=>{
            if(info.value1==0){//app订票
                info.isShowAppOrder=true
                getCinema()

            }else if(info.value1==1){//前台兑换
                info.isShowAppOrder=false
                changeTicket()
            }
        })

        watch(()=>info.value2,()=>{
            if(info.value2==1){//离我最近             
             info.showCinemaList.sort((a,b)=>{
                    return a.Distance-b.Distance
                })
            }           
             console.log(info.showCinemaList)
        })

        const getCinema=async()=>{
            info.districtarr=["全部"]
            let result=await api.cinemaInfo.getCinema()
            info.cinemaList=result.cinemas 
            store.commit("setCinema",info.cinemaList)
            info.showCinemaList=result.cinemas          
            info.cinemaList.map((item)=>{
                info.districtarr.push(item.districtName)
                // districtNameMap.set(item.districtName,item)
            })
            info.districtarr=[...new Set( info.districtarr)]//去重
            // console.log(districtNameMap, info.districtarr)
        }
        getCinema()

        const changeTicket=async()=>{
            info.districtarr=["全部"]
            let result=await api.cinemaInfo.changeTiket()
            info.cinemaList=result.cinemas 
            info.showCinemaList=result.cinemas          
            info.cinemaList.map((item)=>{
                info.districtarr.push(item.districtName)
            })
            info.districtarr=[...new Set( info.districtarr)]//去重

            console.log(result)

        }

        function onConfirm(index){
            console.log(proxy.$refs.gridEl.$el.children[index])
            proxy.$refs.gridEl.$el.children[index].classList.add("active-grid")
            info.showCinemaList=[] 
            if(index==0){
                 info.showCinemaList=info.cinemaList
            }else{                         
                info.cinemaList.map(item=>{               
                    if(item.districtName==info.districtarr[index]){
                            info.showCinemaList.push(item)
                    }
                })
            }
        }

        

        return {
            ...toRefs(info),
            gridEl,
            onConfirm,//点击gird
           

        }
    }
}
</script>

<style lang="scss" scoped>

.active-grid{
    outline: 1px solid red;
}
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

                .apporder{ 
                    display: inline-block;
                      width: 262px;                     
                      line-height: 30px;
                     margin: 0px;
                      font-size: 13px; color:#666;
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
   
 }

.cinema_body div{ margin-bottom: 10px;}



:v-deep .van-grid-item__content{
    height: 38px;
}

:v-deep .van-grid{
    padding: 5px 0px;
    margin:0px 10px;
} 

</style>