<template>
    <div class="movie-header">
        <div @click="$router.back()">{{}}</div>
        <div>{{title}}</div>
    </div>
</template>

<script>
import { Icon } from 'vant'
export default {
    name:"MovieDetailHeader",
    components:'Icon',
    props:{
        title:{
            type:String,
            default:'喵喵'
        }
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.movie-header{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height:44px;
    line-height: 44px;
    background-color: white;
    text-align: center;
}
</style>