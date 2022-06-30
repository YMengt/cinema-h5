<template>
    <div>
        <div class="search_body">
<MovieDetailHeaderVue :isShowBack="true" :title="serachType"></MovieDetailHeaderVue>
				<div class="search_input">
					<div class="search_input_wrapper" @click="clickSearch()">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" v-model="keyWords">
					</div>					
				</div>
				<div class="search_result">
					<h3>查询结果:</h3>
					<ul v-if="isShowMovie">
						<li v-for="(item,index) in showList" :key="index" @click="MovieDeteil(item)">
						<div class="pic_show"><img :src="item.poster" v-lazy="item.poster"></div>
							<div class="info_list">
								<h2>{{item.name}} <span>{{item.item.name}}</span></h2>
								<p >观众评分 <span class="grade">{{item.grade}}</span></p>
								<p>主演:{{filterName(item.actors)}}</p>
								<p>{{item.nation}} | {{item.runtime}}分钟</p>
							</div>
							<div class="btn_mall" ref="btn">
								购票
							</div>
						</li>
					
					</ul>
					<CinemaItemVue v-if="isShowCinema" :list="showList" :isOrder="true"></CinemaItemVue>
				</div>
		</div>
    </div>
</template>

<script>
import MovieDetailHeaderVue from '../Comp/MovieDetailHeader.vue'
import { useRoute,useRouter } from 'vue-router'
import { reactive, toRefs } from '@vue/reactivity'
import api from '../../utils/api'
import CinemaItemVue from '../Comp/CinemaItem.vue'
import { useStore } from 'vuex'
    export default {
        name:'Search',
		components:{
			MovieDetailHeaderVue,CinemaItemVue
		},
		setup(){
			const route=useRoute()
			const router=useRouter()
			const store=useStore()
			const info=reactive({
				dataList:[],
				showList:[],
				keyWords:'',
				isShowMovie:false,
				isShowCinema:false,
				serachType:""
			})
			console.log(route.query.type)
			if(route.query.type=="cinema"){//获取影院
				info.dataList=store.state.cinemaList
				info.isShowCinema=true
				info.serachType="搜索影院"

			}else if(route.query.type=="movie"){//获取电影
				info.dataList=store.state.nowPlayingMovie
				info.isShowMovie=true
				info.serachType="搜索电影"

			}

			console.log(info.dataList)


//点击搜索
			function clickSearch(){

			}


// 电影详情
function MovieDeteil(item){
	 router.push({path:"/movieDetails/"+item.filmId})
}
			return {
				clickSearch,
				...toRefs(info),
				MovieDeteil,

			}
			
		}
		
    }
</script>

<style lang="scss" scoped>
 .search_body{ 
	 flex:1; 
	 overflow:auto;
 	margin-top:44px ;
 }
.search_body .search_input{
	 padding: 8px 10px;
	  background-color: #f5f5f5;
	   border-bottom: 1px solid #e5e5e5;
}
.search_body .search_input_wrapper{ 
	padding: 0 10px; 
	border: 1px solid #e6e6e6;
	 border-radius: 5px;
	  background-color: #fff;
	   display: flex; 
	   line-height: 20px;
}
.search_body .search_input_wrapper i{
	font-size: 16px;
	 padding: 4px 0;
}
.search_body .search_input_wrapper input{ 
	border: none; 
	font-size: 13px;
	 color: #333;
	  padding: 4px 0;
	   outline: none;
	    margin-left: 5px;
		 width:100%;
}
.search_result h3{ 
	font-size: 15px;
	 color: #999;
	  padding: 9px 15px;
	   border-bottom: 1px solid #e6e6e6;
}

ul{ 
            margin:0 12px;
            overflow: hidden; 
            li{
            margin-top:12px; 
            display: flex; 
            align-items:center; 
            border-bottom: 1px #e6e6e6 solid; 
            padding-bottom: 10px;
            .pic_show{ 
                width:64px;
                height: 90px;
                img{ 
                    width:100%;
                }
            }
            .info_list { 
                margin-left: 10px; 
                flex:1; 
                position: relative;
                text-align: left;
                h2{ 
                    font-size: 17px; 
                    line-height: 24px; 
                    width:150px; 
                    overflow: hidden; 
                    white-space: nowrap; 
                    text-overflow:ellipsis;
                    span{
                    font-size: 9px;
                        color: #fff;
                        background-color: #d2d6dc;
                        height: 14px;
                        line-height: 14px;
                        padding: 0 2px;
                        border-radius: 2px;
                    }
                }
                p{ 
                    font-size: 13px; 
                    color:#666; 
                    line-height: 22px;
                    width:200px; 
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                }
                .grade{ 
                    font-weight: 500; 
                    color: #faaf00; 
                    font-size: 15px;
                }
                img{ 
                    width:50px; 
                    position: absolute; 
                    right:10px; 
                    top: 5px;
                }

            }
            .btn_mall,.btn_pre{
                width:47px; 
                height:27px; 
                line-height: 28px; 
                text-align: center; 
                background-color: #f03d37; 
                color: #fff; 
                border-radius: 4px; 
                font-size: 12px; 
                cursor: pointer;
            }
            .btn_pre{ 
                background-color: #3c9fe6;
            }
        } 
}
</style>