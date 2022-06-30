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

</style>