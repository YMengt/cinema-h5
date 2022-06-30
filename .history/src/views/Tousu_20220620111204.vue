<template>
    <div>
        <MovieDetailHeaderVue title="投诉" :isShowBack="true"></MovieDetailHeaderVue>

        <div class="content">
        <input class="topic" type="text" placeholder="请输入主题" v-model="topic">
        <textarea name="tousu" class="tousu" id="" cols="30" rows="10" v-model="content"></textarea>
        <button class="submit" @click="submitMes()">提交</button>
        </div>
    </div>
</template>

<script>
import MovieDetailHeaderVue from '../components/Comp/MovieDetailHeader.vue' 
import axios from 'axios'
import { reactive, toRefs } from '@vue/reactivity'
export default {
    name:'Tousu',
    components:{MovieDetailHeaderVue},
    setup () {
        
        let info=reactive({
            topic:'',
            content:''
        })

        function submitMes(){

            axios.get('http://127.0.0.1:8888',{
                params:{
                    topic:info.topic,
                    content:info.content
                }
            }).then(v=>{
                console.log(v)
            })
        }

        return {
            submitMes,
            ...toRefs(info)
        }
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