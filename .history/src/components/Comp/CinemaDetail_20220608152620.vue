<template>
    <div class="cinema_body">
				<ul v-if="isShowAppOrder">
					<li v-for="(item,index) in showCinemaList" :key="index">
                                            
                            <div>
                                <span>{{item.name}}</span>
                                <span class="q"><span class="price">{{item.lowPrice/100}}</span> 元起</span>
                            </div>
                            <div class="address">
                                <span>{{item.address}}</span>
                                <span>{{Number(item.Distance).toFixed(2) }}km</span>
                            </div>
						
					</li>
				</ul>
                <ul v-if="!isShowAppOrder">
					<li v-for="(item,index) in showCinemaList" :key="index">                                                                   
                            <div >
                                <span>{{item.name}}</span>
                            </div>
                            <div class="apporder">
                                <span @click="$router.push({path:'/cinemaDetail/'+item.cinemaId})"> <span>2D通兑票</span>|<span>3D通兑票</span> </span>
                            </div>
                            <div class="address">
                                <span>{{item.address}}</span>
                                <span>{{Number(item.Distance).toFixed(2) }}km</span>
                            </div>
						
					</li>
				</ul>
	</div>
		
</template>

<script>
// import { DropdownMenu, DropdownItem,Cell,Grid, GridItem } from 'vant';
export default {
    name:'CinemaDetail',
    props:{
        showCinemaList:{
            type:Object,
            require:true,
        },
        isShowAppOrder:{
            type:Boolean,
        }
        
    },
    setup (props) {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
 .cinema_body{ 
    flex:1; 
    overflow:auto;
    ul{
         padding:20px;
        li{ 
             border-bottom:1px solid #e6e6e6; 
             margin-bottom: 20px;
             .q{ 
                 font-size: 11px; 
                 color:#f03d37;
                 .price{
                      font-size: 18px;
                      }
                 
                 }
             }

                .apporder{ 
                    display: inline-block;
                      width: 262px;                     
                      line-height: 30px;
                     margin: 0px;
                      font-size: 13px; color:#666;
                }
             .address{ 
                 font-size: 13px; color:#666;
                 }
                 .address span:nth-of-type(1){
                     display: inline-block;
                      width: 262px;                     
                      line-height: 30px;
                      }
                 .address span:nth-of-type(2){ float:right; }
         
         }
 }

.cinema_body div{ margin-bottom: 10px;}


</style>