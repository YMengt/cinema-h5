<template>
    <div>
        <header id="header">
            <div class="city_name">
            <router-link  to="/city"  v-if="isShowCity">
					<span>{{store.state.cityInfo.name||"未知"}}</span><i class="iconfont icon-xiangxiajiantou"></i>
				</router-link>
                </div>
			<h1>{{title}}</h1>
            <div class="search_entry"> 
            <router-link  :to="{path:'/search',query:{type:varity}}"  v-if="isShowSearch" >
					<i class="iconfont icon-sousuo"></i>
				</router-link>
            </div>
		</header>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
    export default {
        name:'Header',
        // components:{},
        props:{ 
            title:{ 
                type:String,
                default:'喵喵电影'
            },
            isShowCity:{
                type:Boolean,
                default:true
            },
            isShowSearch:{
                type:Boolean,
                default:true
            },
            varity:{
                type:String,
                default:'movie'

            }

        },
        setup(){
            // let city=ref("未知")
            // const store=useStore()
            // if(store.state.cityInfo!=0){
            //     city.value=store.state.cityInfo.name
            // }

            // return {city}


        }
        
    }
</script>

<style lang="scss" scoped>
#header{
    width:100%;
    height:50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: flex;
    justify-content: center;
    position: relative;
    .city_name{
        position: absolute;
        left: 20px;
        height:100%;
        line-height: 50px;
        a{ 
            color: white;
            span{
                margin-right: 5px;
            }
        }
    }
    .search_entry{ 
        position: absolute;
        right:20px;
        height:100%;
        line-height: 50px;
        i{  
        font-size:24px;
        color:white;
        }
    }
     h1{
        font-size: 18px; 
        text-align: center;
        line-height: 50px; 
        font-weight: normal;
    }
   
}


</style>