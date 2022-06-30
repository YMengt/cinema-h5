<template>
    <div id="content" class="contentDetail">
		<MovieDetailHeaderVue v-if="isShow" :title="FileList.name"></MovieDetailHeaderVue>
			<div class="detail_list">
				<div class="icon-back">
					<icon name="arrow-left" />	
				</div>
				<div class="detail_list_filter">
					<img :src="FileList.poster" alt="" v-lazy="FileList.poster"/>
				</div>
				<div class="detail_list_content">
					<div class="detail_list_info">
						<div class="movie-name"> 
							<div class="m-name"> 
								<span class="name">{{FileList.name}}</span>
								<span class="item">2d{{}}</span>
								
							</div> 
							<div class="m-grade">
								<span class="grade">7.6</span>
								<span class="grade-text">分</span>
							</div>
						</div>
						<!-- <p v-if="FileList.isPresale">评分</p> -->
						<p>{{FileList.category}}</p>
						<p>{{FileList.nation}} / {{FileList.runtime}}分钟</p>
						<p>{{filterYear(FileList.premiereAt)}}</p>
					</div>
					<div class="detail-text">
						<Spread :mes2="FileList.synopsis"></Spread>
					</div>
				</div>
				
			</div>
			<div class="actors-list">
				<div>
					<p class="person">演职人员</p>
					<div class="out">
						<div class="inside">
							<ul>
								<li v-for="(item,index) in FileList.actors" :key="index">
									<div>
										<div class="actor-img">
											<img :src="item.avatarAddress" alt="">
										</div>
										<div class="actor-text">
											<p class="name">{{item.name}}</p>
											<p class="play">{{item.role}}</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import { getCurrentInstance,onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import api from '../../utils/api'
import filterYear from '../../filters/filterYear'
import Spread from '../../components/Comp/Spread.vue'
import MovieDetailHeaderVue from '../../components/Comp/MovieDetailHeader.vue'
import { Icon } from 'vant'
export default {
     name:'MovieDetail',
	 components:{Spread,MovieDetailHeaderVue,Icon},
    setup () {
    //    const {proxy}=getCurrentInstance()
	   const route=useRoute()
	  const Info=reactive({
		  FileList:null,
		  isShow:true
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
#content.contentDetail{ 
	display: block;
	 margin-bottom:0;
	 background-color:rgba(211, 211, 211, 0.725) ;
	 height: 100%;
	 }
#content .detail_list{
	width:100%; 
	 color: black;
	 .icon-back{
		//  height: ;
		position: fixed;
		z-index: 4;
	 }
		  .detail_list_filter{
			  height: 200px;
			   	width:100%;
			   
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
					.m-name{
						.name{
							color: #191a1b;
							font-size: 18px;
							height: 24px;
							line-height: 24px;
							margin-right: 7px;
						}
						.item{ 
							font-size: 9px;
							color: #fff;
							background-color: #d2d6dc;
							height: 14px;
							line-height: 14px;
							padding: 0 2px;
							border-radius: 2px;
							display: inline-block;
						}


					}
					.m-grade{
						color: #ffb232;
						.grade{ 
							font-size: 18px;
							font-style: italic;
						}
						.grade-text{ 
							font-size: 10px;
						}


					}
				}
				.detail_list_info p{ 
					font-size: 13px;
					color: #797d82;
					margin-top: 4px;
				}

				.detail-text{ 
					
					
				}

			}
			
	}

 #content .actors-list{
	 margin-top: 10px;
	 background-color:white ;
	 height: 190px;
	 overflow: hidden;
	 div{

		 p.person{
			 box-sizing: border-box;
			 height: 50px;
			 padding: 15px;
			 font-size: 16px;
			text-align: left;
			color: #191a1b;
		 }
		 .out{
			
			height: 140px;
			overflow: hidden;
			.inside{
				overflow-x: auto;
				overflow-y: hidden;		
				height: auto;
				ul{
					height: 150px;
					display: flex;
					margin:0px 15px;
					li{
						height: 140px;
						width: 85px;
						margin-right: 10px;
						&>div{
							height: 100%;
							div.actor-img{
								width: 85px;
								height: 85px;
								img{
									height: 100%;
									width: 100%;
									object-fit: cover;
								}
							}
							div.actor-text{
								text-align: center;
								
								p.name{
								padding-top: 10px;
								font-size: 12px;
								color: #191a1b;
								width: 85px;
								height: 18px;
								}
								p.play{ 
									font-size: 10px;
    								color: #797d82;
								}
							}
						}

					}
				}
			}
		 }
	 }

 }

</style>