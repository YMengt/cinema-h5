<template>
    <div>
        <MovieDetailHeaderVue title="投诉" :isShowBack="true"></MovieDetailHeaderVue>

        <div class="content">
        <input class="topic" type="text" placeholder="请输入主题">
        <textarea name="tousu" class="tousu" id="" cols="30" rows="10"></textarea>
        <button class="submit">提交</button>
        </div>
    </div>
</template>

<script>
import MovieDetailHeaderVue from '../components/Comp/MovieDetailHeader.vue'
export default {
    name:'Tousu',
    components:{MovieDetailHeaderVue},
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.content{
    margin-top: 60px;
    .submit{
        
    }
}
</style>