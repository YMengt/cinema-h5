<template>
    <div>
        <movie-detail-header :isShowBack="true" :title="影院"></movie-detail-header>
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
        console.log(route.params.id)
        const info=reactive({
            
        })
        const getMyCinemaMessage=async()=>{
            let result=await api.cinemaInfo.cinemaDetailTitle(route.params.id)
            console.log(result)
        }
        getMyCinemaMessage()

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>