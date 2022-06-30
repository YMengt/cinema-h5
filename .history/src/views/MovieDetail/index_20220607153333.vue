<template>
    <div id="content" class="contentDetail">
		<div class="container" v-if="!isShowPhoto">
			<MovieDetailHeaderVue class="header" v-if="isShow" :title="FileList.name"></MovieDetailHeaderVue>
			<div class="detail_list">
				<div class="detail-icon-back">
						<span class="iconfont icon-back"></span>
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
			<div class="movie-photo">
				<div class="photo-bar">
					<span class="photo-bar-title">剧照</span>
					<span class="photo-all" @click="showMorePhoto()">全部({{FileList.photos.length}})<span class="iconfont icon-jiantouyou"></span></span>
				</div>
				<div class="photo-content">
					<ul>
						<li v-for="(item2,index2) in FileList.photos" :key="index2">
							<div class="photo-single">
								<img :src="item2" alt="">
							</div>	
						</li>
					</ul>
				</div>
			</div>
			<div class="pay-ticket">	
				<button class="btn">选座购票</button>
			</div>
		</div>
		<div class="show-photo" v-if="isShowPhoto">
			<MovieDetailHeaderVue class="header" v-if="isShow" title="剧照"></MovieDetailHeaderVue>
			<div class="show-photo-back">
						<span class="iconfont icon-back"></span>
			</div>
			<div class="photo-img">
				<div class="photo-item" v-for="(item3,index3) in FileList.photos" :key="index3">
					<img :src="item3" alt="">
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
import { Button } from 'vant';
export default {
     name:'MovieDetail',
	 components:{Spread,MovieDetailHeaderVue,Button},
    setup () {
    //    const {proxy}=getCurrentInstance()
	   const route=useRoute()
	  const Info=reactive({
		  FileList:null,
		  isShow:true,
		  isShowPhoto:false,
	  })
	  const findFilmById=async()=>{
		  let result=await api.movieInfo.findViewById({filmId:route.params.id,k:1735369})
			Info.FileList=result.film
	  }
	  findFilmById()



onMounted(()=>{
 console.log(Info.FileList)

        });
        
		
	function showMorePhoto(){
		Info.isShowPhoto=true;
	}

        return {
			...toRefs(Info),
			filterYear,
			showMorePhoto
		}
    }
}
</script>

<style lang="scss" scoped>
#content .header{
	width: 100%;
}
#content .container{
	//  overflow-y: auto;
 }
#content.contentDetail{ 
	box-sizing: border-box;
	width: 100vw;
	display: block;
	 margin-bottom:0;
	 background-color:rgba(211, 211, 211, 0.725) ;
	 height: 100vh;
	//  overflow: hidden;
	  overflow-y: auto;
	 position: relative;
	 }
#content .detail_list{
	width:100%; 
	 color: black;
	 .detail-icon-back{
		text-align: center;
		// width: 44px;
		
		position: fixed;
		z-index: 4;
		height: 44px;
		line-height: 44px;
		margin-left: 10px;
	
		span{
			display: inline-block;
			width: 30px;
			height: 30px;
			line-height: 30px;
			border-radius: 50%;
			background-color: rgba(255, 255, 255, 0.777);

		}
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

#content .movie-photo{
	background-color: white;
	margin-top:10px;
	.photo-bar{
		box-sizing: border-box;
		height: 62px;
		padding: 15px;
		.photo-bar-title{ 
			display: inline-block;
			width: 50%;
			text-align: left;
			font-size: 16px;
    		color: #191a1b;

		}
		.photo-all{ 
			display: inline-block;
			width: 50%;
			text-align: right;
		}
	}
	.photo-content{ 
		overflow: hidden;
		height:100px ;
		padding-bottom: 20px;
		ul{
			overflow-x: auto;
			height: 100px;
			display: flex;
			box-sizing: border-box;
			padding-left:15px;
			li{
				margin-right: 10px;
	

				.photo-single{
					width:150px;
					height: 100%;
					img{
						width: 100%;
						height: 100%;
						object-fit: cover;

					}
				}
			}
		}
	}
	margin-bottom:75px;
}

#content .pay-ticket{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	.btn{ 
		width: 100%;
		display: block;
		height:50px;
		line-height: 50px;
		background-color:#ff5f16 ;
		color: white;
		border:none;
		font-size: 16px;
	}

}
#content .show-photo{
	top: 0px;
	position: absolute;
	z-index: 20;
	background-color: white;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	.show-photo-back{
		color: black;

	}
	.photo-img{
		display: flex;
		flex-wrap: wrap;
		
		.photo-item{
			width: 30%;
			height: 100px;
			margin: 5px;
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			
		}
	}
}


</style>