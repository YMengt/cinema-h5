<template>
    <div id="main">
        <Header title="喵喵电影"></Header>
        <TabBar></TabBar>
        <div id="content">
			<div class="movie_menu">
				
				<div  class="hot_swtich">
					<router-link tag="div" to="/movie/nowPlaying"  class="hot_item ">正在热映</router-link>
					<router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
				</div>
				
			</div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
    export default {
        name:'Movie',
        components:{Header,TabBar}   
    }
</script>

<style lang="scss" scoped>
#main{ height: 100%; display: flex; flex-direction:column;}
#content{ 
    flex:1;
    overflow:auto;
    margin-bottom: 50px;
    position: relative;
    display: flex; 
    flex-direction:column;
    .movie_menu{ 
        width: 100%; 
        height: 45px; 
        border-bottom:1px solid #e6e6e6; 
        display: flex; justify-content:space-between; 
        align-items:center; 
        background:white;
        z-index:10;

        .hot_swtich{ 
            display: flex; 
            height:100%; 
            line-height: 45px;
        } 
        .hot_item{ 
            font-size: 15px; 
            color:#666; width:80px; 
            text-align:center; 
            margin:0 12px; 
            font-weight:700;
        }
        .hot_item.active{ 
            color: #ef4238; 
            border-bottom: 2px #ef4238 solid;
        }

    }
}


</style>