<template>
    <div>
        <header id="header">
            <div class="city_name">
            <router-link  to="/movie/city"  v-if="isShowCity">
					<span>大连</span><i class="iconfont icon-xiangxiajiantou"></i>
				</router-link>
                </div>
			<h1>{{title}}</h1>
            <div class="search_entry"> 
            <router-link  to="/movie/search"  v-if="isShowSearch">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
            </div>
		</header>
    </div>
</template>

<script>
import { Icon } from 'vant'
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
            }

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
    }
    .city_name.active{ 
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
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
    .search_entry.active{
    color: white;
     border-bottom: 2px #ef4238 solid;}

 
     h1{

        font-size: 18px; 
        text-align: center;
        line-height: 50px; 
        font-weight: normal;
    }
    // i{ 
    //     position: absolute;
    //     left: 5px; 
    //     top: 50%;
    //     margin-top: -13px;
    //     font-size: 26px;
    //     }
    }


</style>