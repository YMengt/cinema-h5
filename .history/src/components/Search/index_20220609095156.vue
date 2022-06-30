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
					<ul>
						<li v-for="(item,index) in movieList" :key="index" @click="MovieDeteil(item)">
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
				</div>
		</div>
    </div>
</template>

<script>
import MovieDetailHeaderVue from '../Comp/MovieDetailHeader.vue'
import { useRoute } from 'vue-router'
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

			return {
				clickSearch,
				...toRefs(info)

			}
			
		}
		
    }
</script>

<style lang="scss" scoped>
 .search_body{ flex:1; overflow:auto;
 margin-top:44px ;
 }
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
.search_body .search_result{}
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.search_body .search_result ul{}
.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>