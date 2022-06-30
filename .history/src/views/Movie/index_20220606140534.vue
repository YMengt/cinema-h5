<template>
    <div id="main">
        <Header title="喵喵电影"></Header>
        <TabBar></TabBar>
        <div id="content">
			<div class="movie_menu">
				
				<div  class="hot_swtich">
                    <div class="hot_item ">
					<router-link active-class="active" to="/movie/nowPlaying"  >正在热映</router-link>
                    </div>
                    <div class="hot_item">
					<router-link active-class="active" to="/movie/comingSoon" >即将上映</router-link>
                    </div>
				</div>
				
			</div>
            <router-view v-slot="{ Component }">
                <!-- <keep-alive> -->
                    <component :is="Component" />
                <!-- </keep-alive> -->
            </router-view>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
import api from "../../utils/api"
    export default {
        name:'Movie',
        components:{Header,TabBar},
        setup(){
            
            const getMyList=async()=>{
                let result=await api.movieInfo.gateway()
                console.log(result)
            }
            getMyList()

            return {

            }
        }  
    }
</script>

<style lang="scss" scoped>
#main{ 
    height: 100%; 
    display: flex; 
    flex-direction:column;
}
#content{ 
    flex:1;
    overflow:auto;
    margin-bottom: 50px;
    position: relative;
    display: flex; 
    flex-direction:column;
    .movie_menu{ 
        height: 45px; 

        .hot_swtich{ 
            width: 100%;      
            border-bottom:1px solid #e6e6e6; 
            display: flex; 
            justify-content:space-between; 
            align-items:center; 
            background:white;
            z-index:10;
            height:100%; 
            line-height: 45px;
            .hot_item{
                width: 50%;
                text-align: center;
                a{
                    display: inline-block; 
                    width: 100%;
                    font-size: 15px; 
                    color:#666; width:80px; 
                    text-align:center; 
                    margin:0 12px; 
                    font-weight:700;
                    &.active{
                         color: #ef4238; 
                        border-bottom: 2px #ef4238 solid;
                    }
                }
            }

        } 
    }
}


</style>