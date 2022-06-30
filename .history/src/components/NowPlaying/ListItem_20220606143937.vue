<template>
    <div>            
        <div class="pic_show"><img src="/images/movie_1.jpg"></div>
        <div class="info_list">
            <h2>无名之辈 <span>2D</span></h2>
            <p>观众评分 <span class="grade">9.2</span></p>
            <p>主演: 陈建斌,任素汐,潘斌龙</p>
            <p>中国 | 102分钟</p>
        </div>
        <div class="btn_mall" ref="btn">
            购票
        </div>
                             
                  
		
    </div>
</template>

<script>
import { reactive, toRefs,ref  } from 'vue'
    export default {
        name:'ListItem',
        // components:{List,},
        setup(){
            let infoItem=reactive({

            })
            let btn=ref(null)

            return{
                btn
            }
        }
    }
</script>

<style lang="scss" scoped>    

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


</style>