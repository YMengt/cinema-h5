<template>
    <div id="content" class="contentDetail">
			<div class="detail_list">
				<div class="detail_list_bg"></div>
				<div class="detail_list_filter">
					<img :src="FileList.poster" alt="" v-lazy="FileList.poster"/>
				</div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						
					</div>
					<div class="detail_list_info">
						<h2>{{FileList.name}}</h2>
						<!-- <p v-if="FileList.isPresale">评分</p> -->
						<p>{{FileList.category}}</p>
						<p>{{FileList.nation}} / {{FileList.runtime}}分钟</p>
						<p>{{filterYear(FileList.premiereAt)}}</p>
					</div>
				</div>
			</div>
			<div class="detail_intro">
				<p>在一座山间小城中，</p>
			</div>
			<div class="detail_player swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<div>
							<img src="" alt="">
						</div>
						<p>陈建斌</p>
						<p>马先勇</p>
					</li>
					
				</ul>
			</div>
		</div>
</template>

<script>
import { getCurrentInstance,onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import api from '../../utils/api'
import filterYear from '../../filters/filterYear'
export default {
     name:'MovieDetail',
    setup () {
    //    const {proxy}=getCurrentInstance()
	   const route=useRoute()
	  const Info=reactive({
		  FileList:null,
	  })
	  const findFilmById=async()=>{
		  let result=await api.movieInfo.findViewById({filmId:route.params.id,k:1735369})
			Info.FileList=result.film
	  }
	  findFilmById()



onMounted(()=>{
 console.log(Info.FileList)

        });
        

        return {
			...toRefs(Info),
			filterYear
		}
    }
}
</script>

<style lang="scss" scoped>
#content.contentDetail{ display: block; margin-bottom:0;}
#content .detail_list{
	 height:200px;
	  width:100%; 
	  position: relative;
	overflow: hidden;
	.detail_list_bg{
		 width:100%; 
		 height:100%; 
		 filter: blur(20px); 
		 background-size:cover;
		  position: absolute; 
		  left: 0; top: 0;}
		  .detail_list_filter{
			   width:100%;
			    height:100%;
				 position: absolute;
				//  background-color: #40454d;
				//  opacity: .55; 
				 position: absolute;
				  left: 0;
				   top: 0; 
				   z-index: 1;
				img{
					width: 100%;
					object-fit: cover;
				}
			}
			.detail_list_content{
				 display: flex; 
				 width:100%; 
				 height:100%; 
				 position: absolute; 
				 left: 0; 
				 top: 0; 
				 z-index: 2;
			}
			.detail_list_img{ 
				width:108px; 
				height: 150px; 
				border: solid 1px #f0f2f3;
				 margin:20px;
			}
			.detail_list_img img{ 
				width:100%; 
				height: 100%;
			}
			.detail_list_info{ 
				margin-top: 20px;
			}
			.detail_list_info h2{ 
				font-size: 20px; 
				color:white;
				 font-weight: normal; 
				 line-height: 40px;
			}
			.detail_list_info p{ 
				color:white; 
				line-height: 20px; 
				font-size: 14px; 
				color:#ccc;
			}
	}

</style>