<template>
    <div>
        <div class="movie_body">
            <ul>

            <List
                v-model:loading="loading"
                :finished="finished"
                finished-text="全部加载完了"
                @load="onLoad"
            >
                <li>
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
                </li>
            </List>

                
                
            </ul>
		</div>
    </div>
</template>

<script>
import { List } from 'vant'
import { reactive, toRefs } from '@vue/reactivity'
    export default {
        name:'NowPlaying',
        components:{List,},
        setup(){
            let ListInfo=reactive({
                loading:false,
                finished:true,


            })

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
            li{ 
                margin-top:12px; 
                display: flex; 
                align-items:center; 
                border-bottom: 1px #e6e6e6 solid; 
                padding-bottom: 10px;
            }
        }
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

</style>