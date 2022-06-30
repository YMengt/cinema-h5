<template>
    <div>
        <header id="header">
            <router-link tag="div" to="/movie/city" class="city_name" v-if="isShowCity">
					<span>大连</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
			<h1>{{title}}</h1>
            <router-link tag="div" to="/movie/search" class="search_entry" v-if="isShowSearch">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
		</header>
    </div>
</template>

<script>
    export default {
        name:'Header',
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
        border-bottom: 2px #ef4238 solid;} 

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