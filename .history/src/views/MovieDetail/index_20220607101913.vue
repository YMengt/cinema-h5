<template>
    <div id="content" class="contentDetail">
			<div class="detail_list">
				<div class="detail_list_filter">
					<img :src="FileList.poster" alt="" v-lazy="FileList.poster"/>
				</div>
				<div class="detail_list_content">
					<div class="detail_list_info">
						<div class="movie-name"> <span> {{FileList.name}}</span> <span>评分</span></div>
						<!-- <p v-if="FileList.isPresale">评分</p> -->
						<p>{{FileList.category}}</p>
						<p>{{FileList.nation}} / {{FileList.runtime}}分钟</p>
						<p>{{filterYear(FileList.premiereAt)}}</p>
					</div>
				</div>
			</div>
			<!-- <div class="detail_intro">
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
			</div> -->
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
	 color: black;
		  .detail_list_filter{
			   	width:100%;
			    height:100%;
				img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.detail_list_content{ 
				//  width:100%; 
				 height:100%; 
				 color: black;
				 padding: 15px;
				padding-top: 12px;
				background-color: #fff;
				.detail_list_info{ 
					// margin-top: 20px;
				}
				.detail_list_info .movie-name{ 
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 20px; 
					// color:white;
					font-weight: normal; 
					line-height: 40px;
					span{

					}
				}
				.detail_list_info p{ 
					// color:white; 
					line-height: 20px; 
					font-size: 14px; 
					color:black;
				}

			}
			
	}

</style>