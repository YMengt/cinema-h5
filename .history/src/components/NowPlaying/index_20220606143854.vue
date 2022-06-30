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
                    <li>
                        <ListItem />
                </li>
                 <li>
                        <ListItem />
                </li>
                </ul>
             </List>
		</div>
    </div>
</template>

<script>
import { List } from 'vant'
import ListItem from './ListItem.vue'
import { ref,reactive, toRefs } from 'vue'
import api from '../../utils/api'
    export default {
        name:'NowPlaying',
        components:{List,ListItem},
        setup(){
            let ListInfo=reactive({
                loading:false,
                finished:true,


            })

            const getMyList=async()=>{
                let result=await api.movieInfo.gateway()
                console.log(result)
            }
            getMyList()


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