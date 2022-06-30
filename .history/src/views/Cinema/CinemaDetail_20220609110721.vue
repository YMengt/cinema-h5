<template>
    <div>
        <movie-detail-header :isShowBack="true" title="影院"></movie-detail-header>
        thisis
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import MovieDetailHeader from '../../components/Comp/MovieDetailHeader.vue'
import { Sticky } from 'vant';
import api from '../../utils/api';
import { reactive } from '@vue/reactivity';
export default {
    name:"CinemaDetail",
    components:{MovieDetailHeader,Sticky},
        setup () {
            const route=useRoute()
        //console.log(route.params.id) 是cinemaId
        const info=reactive({
            cinemaList:[],
            detailMovieList:[]

        })
        const getMyCinemaMessage=async()=>{
            let result=await api.cinemaInfo.cinemaDetailTitle(route.params.id)
            info.cinemaList=result.cinema
            // console.log(info.cinemaList)
            let result2=await api.cinemaInfo.cinemaDetailMovie(route.params.id)
            console.log(result2)

        }
        getMyCinemaMessage()

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>