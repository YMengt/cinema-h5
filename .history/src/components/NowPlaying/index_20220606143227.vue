<template>
    <div>
        <div class="movie_body">
            <List
                v-model:loading="loading"
                :finished="finished"
                finished-text="全部加载完了"
                @load="onLoad"
            >
            <ul>

            <ListItem>

            </ListItem>
                <!-- <li>
                    <div class="pic_show"><img src="/images/movie_1.jpg"></div>
                    <div class="info_list">
                        <h2>无名之辈 <span>2D</span></h2>
                        <p>观众评分 <span class="grade">9.2</span></p>
                        <p>主演: 陈建斌,任素汐,潘斌龙</p>
                        <p>中国 | 102分钟</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>                -->
            </ul>
             </List>
		</div>
    </div>
</template>

<script>
import { List } from 'vant'
import ListItem from './ListItem.vue'
import { ref,reactive, toRefs } from 'vue'
    export default {
        name:'NowPlaying',
        components:{List,ListItem},
        setup(){
            let ListInfo=reactive({
                loading:false,
                finished:true,


            })

function onLoad(){

}
            return{
                onLoad,
                ...toRefs(ListInfo)
            }
        }
    }
</script>

<style lang="scss" scoped>
.movie_body{
     flex:1;
    overflow:auto;
        ul{ 
            margin:0 12px;
            overflow: hidden;            
        }    
}

</style>