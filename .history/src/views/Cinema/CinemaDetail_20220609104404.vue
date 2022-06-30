<template>
    <div>
        <movie-detail-header :isShowBack="true" :title="影院"></movie-detail-header>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import MovieDetailHeader from '../../components/Comp/MovieDetailHeader.vue'
export default {
    name:"CinemaDetail",
    components:{MovieDetailHeader},
        setup () {
            const route=useRoute()
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>