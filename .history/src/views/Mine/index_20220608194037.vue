<template>
    <div>
        <div class="content-box">
            <div class="header-box">
                <div class="header-left">
                    <div class="header-img"><img src="../../assets/image/logo.png" alt=""></div>
                        <div>
                        立即登录
                        </div>
                </div>
                
            </div>
            <div class="middle-box">
                <div class="middle">
                    <div><span><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dingdan"></use>
                        </svg></span>
                    </div>
                    <div><span>2</span></div>
                </div>
                <div class="middle">
                    
                    <div><span><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dingdanxiangqing-dingdanbianhao"></use>
                        </svg></span>
                    </div>
                    <div><span>2</span></div>
                </div>
            </div>
            <div>
                <cell title="单元格" icon="location-o" />
                <cell title="单元格" icon="location-o" />
                <cell title="单元格" icon="location-o" />
                <cell title="单元格" icon="location-o" />
                <cell title="单元格" icon="location-o" />
                <cell title="单元格" icon="location-o" />
            </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
import { Cell } from "vant"
    export default {
        name:'Mine',
        components:{Header,TabBar,Cell}
    }
    
</script>

<style lang="scss" scoped>
.content-box{
    .header-box{ 
        height: 200px;
        box-sizing: border-box;
        padding: 64px 0px 0px 22px;
        .header-left{
            .header-img{
            width: 63px;
            height: 63px;
            img{
                width: 100%;
                height: 100%;
            }
            

        }

        }
        

    }
}
</style>