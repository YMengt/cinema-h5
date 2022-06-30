<template>
    <div>
		<movie-detail-header-vue style="position: fixed;overflow: auto;z-index:99" title="当前城市" :isShowBack="true"></movie-detail-header-vue >
        <div class="city_body">
				<!-- <div class="city_list">
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li>上海</li>
							<li>北京</li>
							<li>上海</li>
							<li>北京</li>
							<li>上海</li>
							<li>北京</li>
							<li>上海</li>
							<li>北京</li>
						</ul>
					</div>
					<div class="city_sort">
						<div>
							<h2>A</h2>
							<ul>
								<li>阿拉善盟</li>
								<li>鞍山</li>
								<li>安庆</li>
								<li>安阳</li>
							</ul>
						</div>
						<div>
							<h2>B</h2>
							<ul>
								<li>北京</li>
								<li>保定</li>
								<li>蚌埠</li>
								<li>包头</li>
							</ul>
						</div>
						<div>
							<h2>A</h2>
							<ul>
								<li>阿拉善盟</li>
								<li>鞍山</li>
								<li>安庆</li>
								<li>安阳</li>
							</ul>
						</div>
						<div>
							<h2>B</h2>
							<ul>
								<li>北京</li>
								<li>保定</li>
								<li>蚌埠</li>
								<li>包头</li>
							</ul>
						</div>
						<div>
							<h2>A</h2>
							<ul>
								<li>阿拉善盟</li>
								<li>鞍山</li>
								<li>安庆</li>
								<li>安阳</li>
							</ul>
						</div>
						<div>
							<h2>B</h2>
							<ul>
								<li>北京</li>
								<li>保定</li>
								<li>蚌埠</li>
								<li>包头</li>
							</ul>
						</div>	
					</div>
				</div>
				<div class="city_index">
					<ul>
						<li>A</li>
						<li>B</li>
						<li>C</li>
						<li>D</li>
						<li>E</li>

					</ul>
				</div> -->

			
				<index-bar sticky=false :sticky-offset-top="44">
					<div class="city-list" v-for="(item,index) of sortProvince" :key="index"  >
					<index-anchor class="city-letter"  :index="item.letter"  />				
						<cell class="city-single" v-for="(item2,index2) in item.value" :key="index2" :title="item2.name"></cell>
					</div>
				</index-bar>

		</div>
    </div>
</template>

<script>
import api from '../../utils/api'
import MovieDetailHeaderVue from '../Comp/MovieDetailHeader.vue'
import { IndexBar, IndexAnchor,Cell } from 'vant';
import { reactive, toRefs } from '@vue/reactivity';
    export default {
        name:'City',
		components:{MovieDetailHeaderVue,IndexBar, IndexAnchor,Cell},
		setup(){
			let info=reactive({
				cityList:null,
				province:{},
				hotCity:[],
				sortProvince:[]

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
					let key=item2.pinyin[0].toUpperCase()
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



				// console.log(cityarr)
				// console.log(info.province)
				// console.log(info.hotCity)
				console.log(info.sortProvince)


			}
			getCity()


			return {
				...toRefs(info)
			}
		}

    }
</script>

<style lang="scss" scoped>
 .city_body{ 
	 margin-top: 45px; 
	 .city-list{
		 .city-letter{
			 .van-index-anchor{
			 text-align: left;


			 }

		 }
		 .city-single{

		 }
	 }

 }

</style>