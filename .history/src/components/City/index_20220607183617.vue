<template>
    <div>
		<movie-detail-header-vue title="当前城市" :isShowBack="true"></movie-detail-header-vue>
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

			<index-bar>
				<div v-for="(key,value) of province" :key="key">
					{{value }}
				</div>
				<!-- <index-anchor index="A" />
				<cell title="文本" />
				<cell title="文本" />
				<cell title="文本" /> -->
				<!-- <index-anchor v-for="(key,value) of province" :index="key" :class="value" :key="key" /> -->
					<!-- <cell   v-for=""></cell> -->

				<!-- <index-anchor index="B" />
				<cell title="文本" />
				<cell title="文本" />
				<cell title="文本" />
				<index-anchor index="c" />
				<cell title="文本" />
				<cell title="文本" />
				<cell title="文本" />
				<index-anchor index="d" />
				<cell title="文本" />
				<cell title="文本" />
				<cell title="文本" />
				<index-anchor index="e" />
				<cell title="文本" />
				<cell title="文本" />
				<cell title="文本" />
				<index-anchor index="f" />
				<cell title="文本" />
				<cell title="文本" />
				<cell title="文本" />
				<index-anchor index="g" />
				<cell title="文本" />
				<cell title="文本" />
				<cell title="文本" />
				<index-anchor index="h" />
				<cell title="文本" />
				<cell title="文本" />
				<cell title="文本" /> -->
				<!-- <index-anchor v-for="(item,index) in List" :index="item" :key="index"/>
					<div v-for="(item2,index2) in cityList" :key="index2">

					
					</div> -->
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
			// let List=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
			// console.log("a".toLocaleUpperCase()=="A")
			let info=reactive({
				List:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
				cityList:null,
				province:{},
				hotCity:[],

			})

		let arr=[]
			

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
				
		for(let key in info.province){
			const obj={letter:key,value:info.province[key]}
			arr.push(obj)
		}
		arr.sort((pre,cur)=>{
			return pre.letter.localeCompare(cur.letter)
			//localeCompare用本地特定的顺序来比较两个字符串。
		})	



 // 将数据转为数组，并按字母顺利排列
    //   this.filterData = [];  
    //   for(let key in provice) {
    //     const obj = { letter: key, list:provice[key] };
    //     this.filterData.push(obj)
    //   }    
    //   this.filterData.sort((a,b) => { return a.letter.localeCompare(b.letter) });
    //   // 为索引字符数组赋值
    //   this.indexList = [];
    //   this.filterData.forEach(item => this.indexList.push(item.letter));
    //   console.log('filterData',this.filterData)








				// console.log(cityarr)
				console.log(info.province)
				console.log(info.hotCity)
				console.log(arr)


			}
			getCity()


			return {
				...toRefs(info)
			}
		}

    }
</script>

<style lang="scss" scoped>
 .city_body{ margin-top: 45px; 
//  display: flex; width:100%; position: absolute; top: 0; bottom: 0;
 }
// .city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
// .city_body .city_list::-webkit-scrollbar{
//     background-color:transparent;
//     width:0;
// }
// .city_body .city_hot{ margin-top: 20px;}
// .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
// .city_body .city_hot ul{}
// .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
// .city_body .city_sort{}
// .city_body .city_sort div{ margin-top: 20px;}
// .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
// .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
// .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
// .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>