<template>
    <div class="movie-header">
        <div>{{title}}</div>
    </div>
</template>

<script>

export default {
    name:"MovieDetailHeader",
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
    width: 100vw;
    height:44px;
    line-height: 44px;
    background-color: white;
    text-align: center;
     color: #191a1b;
     font-size: 17px;
}
</style>