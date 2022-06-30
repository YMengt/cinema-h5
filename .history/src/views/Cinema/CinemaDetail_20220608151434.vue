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

</style>