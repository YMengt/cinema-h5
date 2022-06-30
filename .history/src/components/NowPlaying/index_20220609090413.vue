<template>
    <div>
        <div class="movie_body">
            <List
                v-model:loading="loading"
                :finished="finished"
                finished-text="全部加载完了"
                @load="onLoad"
                class="finished-text"
            >
                <ul>
                    <li v-for="(item,index) in movieList" :key="index" @click="MovieDeteil(item)">
                       <div class="pic_show"><img :src="item.poster" v-lazy="item.poster"></div>
                        <div class="info_list">
                            <h2>{{item.name}} <span>{{item.item.name}}</span></h2>
                            <p >观众评分 <span class="grade">{{item.grade}}</span></p>
                            <p>主演:{{filterName(item.actors)}}</p>
                            <p>{{item.nation}} | {{item.runtime}}分钟</p>
                        </div>
                        <div class="btn_mall" ref="btn">
                            购票
                        </div>
                    </li>
                
                </ul>
             </List>
		</div>
    </div>
</template>

<script>
import { List,Toast } from 'vant'
import { ref,reactive, toRefs,getCurrentInstance } from 'vue'
import api from '../../utils/api'
import filterName from '../../filters/fliterName'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
    export default {
        name:'NowPlaying',
        components:{List},
        setup(){
            const {proxy}=getCurrentInstance()
            const router=useRouter()
            const store=useStore()
            let ListInfo=reactive({
                loading:false,
                finished:false,
                movieList:[],
                total:0,
               
            })
            let requestInfo={
                cityId:440300,
                pageNum:1,
                pageSize:10,
                type:1,
                k:4571821
            }
            const getMyList=async(obj)=>{
                ListInfo.loading=true
                try {
                    let result=await api.movieInfo.gateway(obj)
                    ListInfo.total=result.total                    
                    ListInfo.movieList.push(...(result.films ))
                    ListInfo.finished= requestInfo.pageNum>=Math.ceil(ListInfo.total/requestInfo.pageSize) 
                    if(ListInfo.finished==true){
                        console.log(ListInfo.movieList)
                        store.commit("setMovie",ListInfo.movieList)
                    }
                } catch (error) {
                    Toast.clear()
                    Toast.fail("加载失败")
                }finally{
                    ListInfo.loading=false
                }

            }
            getMyList(requestInfo)


            function onLoad(){
                    requestInfo.pageNum=requestInfo.pageNum+1
                    getMyList(requestInfo)
            }

function MovieDeteil(item){
      router.push({path:"/movieDetails/"+item.filmId})
}

            return{
                onLoad,
                ...toRefs(ListInfo),
                filterName,
                MovieDeteil
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
            li{
            margin-top:12px; 
            display: flex; 
            align-items:center; 
            border-bottom: 1px #e6e6e6 solid; 
            padding-bottom: 10px;
            .pic_show{ 
                width:64px;
                height: 90px;
                img{ 
                    width:100%;
                }
            }
            .info_list { 
                margin-left: 10px; 
                flex:1; 
                position: relative;
                text-align: left;
                h2{ 
                    font-size: 17px; 
                    line-height: 24px; 
                    width:150px; 
                    overflow: hidden; 
                    white-space: nowrap; 
                    text-overflow:ellipsis;
                    span{
                    font-size: 9px;
                        color: #fff;
                        background-color: #d2d6dc;
                        height: 14px;
                        line-height: 14px;
                        padding: 0 2px;
                        border-radius: 2px;
                    }
                }
                p{ 
                    font-size: 13px; 
                    color:#666; 
                    line-height: 22px;
                    width:200px; 
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                }
                .grade{ 
                    font-weight: 500; 
                    color: #faaf00; 
                    font-size: 15px;
                }
                img{ 
                    width:50px; 
                    position: absolute; 
                    right:10px; 
                    top: 5px;
                }

            }
            .btn_mall,.btn_pre{
                width:47px; 
                height:27px; 
                line-height: 28px; 
                text-align: center; 
                background-color: #f03d37; 
                color: #fff; 
                border-radius: 4px; 
                font-size: 12px; 
                cursor: pointer;
            }
            .btn_pre{ 
                background-color: #3c9fe6;
            }
        }          
    }    
}
.finished-text{
    text-align: center;
   
}
</style>