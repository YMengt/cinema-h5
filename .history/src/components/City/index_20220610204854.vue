<template>
    <div>
		
		<div class="movie-header" style="position: fixed;overflow: auto;z-index:99">
       <span  @click="cityBack()" class="iconfont icon-back"></span>  <div>当前城市-{{$store.state.cityInfo.name || ""}}</div>
    	</div>

        <div class="city_body">
				<div class="city_list">
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for="(item,index) in hotCity" :key="index" @click="getCityId(item)">{{item.name}}</li>
							
						</ul>
					</div>
				</div>				
				<index-bar sticky=false :sticky-offset-top="44">
					<div  v-for="(item,index) of sortProvince" :key="index"  >
					<index-anchor class="city-letter"  :index="item.letter"  />		<div class="city-list">	
						<cell class="city-single" v-for="(item2,index2) in item.value" :key="index2" :title="item2.name" @click="getCityId(item2)"></cell>
						</div>
					</div>
				</index-bar>

		</div>
    </div>
</template>

<script>
import api from '../../utils/api'
import MovieDetailHeaderVue from '../Comp/MovieDetailHeader.vue'
import { IndexBar, IndexAnchor,Cell, Toast } from 'vant';
import { reactive, toRefs } from '@vue/reactivity';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
    export default {
        name:'City',
		components:{MovieDetailHeaderVue,IndexBar, IndexAnchor,Cell},
		setup(){
			const store=useStore()
			const router=useRouter()
			let info=reactive({
				cityList:null,//所有的城市
				province:{},
				hotCity:[],//热门城市
				sortProvince:[],//按照字母表给abcd分好数组

			})
			const getCity=async()=>{
				let result=await api.movieInfo.getCity()
					info.cityList=result.cities
				console.log(info.cityList)
				let cityarr=[];
				info.cityList.forEach((item)=>{
					cityarr.push(item)					
				})
				cityarr.forEach((item2)=>{
					let key=item2.pinyin[0].toUpperCase()//取拼音第一个变大写
					if(item2.isHot==1){//收集热门城市
						info.hotCity.push(item2)
					}
					if(info.province[key]==undefined){
						info.province[key]=[]
					}
						info.province[key]=[].concat(info.province[key]);
						info.province[key].push(item2)
					})
			
			
				//排序
				for(let key in info.province){
					const obj={letter:key,value:info.province[key]}
					info.sortProvince.push(obj)
				}
				info.sortProvince.sort((pre,cur)=>{
					return pre.letter.localeCompare(cur.letter)
					//localeCompare用本地特定的顺序来比较两个字符串。
				})				
				// console.log(info.province)
				// console.log(info.sortProvince)
			}
			getCity()


//点击选择城市
function getCityId(city){
	console.log(city)
	store.commit("setCity",city)
	router.back()

}

function cityBack(){
	if(!store.state.cityInfo){
		Toast.fail("请选择城市")
	}else{
		router.back()
	}
}


			return {
				...toRefs(info),
				getCityId,
				cityBack
			}
		}

    }
</script>

<style lang="scss" scoped>
.movie-header{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height:44px;
    line-height: 44px;
    background-color: white;
    text-align: center;
     color: #191a1b;
     font-size: 17px;
     span{ 
         position: absolute;
         left: 15px;

     }
}
 .city_body{ 
	 margin-top: 45px; 
	 .city-list{
		 padding-left:20px ;
		 .city-single{
			 background-color: #fff;
			height: 100%;
			line-height: 48px;
			font-size: 14px;

		 }
	 }

 }
 ::v-deep .van-index-anchor{
	background-color: #f4f4f4;
    color: #797d82;
    padding: 0 0 0 15px;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;

		 }


.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul{
	padding-bottom: 15px;
}
.city_body .city_hot ul li{ 
	float: left; 
	background: #fff; 
	width: 29%;
	height: 33px;
	margin-top: 15px;
	margin-left: 3%; 
	padding: 0 4px; 
	border: 1px solid #e6e6e6;
	border-radius: 3px;
	line-height: 33px;
	text-align: center;
	box-sizing: border-box;
}

</style>