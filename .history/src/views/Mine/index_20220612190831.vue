<template>
    <div >
        <div class="content-box">
            <div class="header-box">
                <div class="header-left" @click="$router.push('/login')">
                    <div class="header-img"><img src="../../assets/image/user.png" alt=""></div>
                        <div>
                        立即登录
                        </div>
                </div>
                
            </div>
            <div class="middle-box">
                <div class="middle">
                    <div class="middle-icon"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dingdan"></use>
                        </svg>
                    </div>
                    <div ><span>电影订单</span></div>
                </div>
                <div class="middle">
                    
                    <div class="middle-icon"><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dingdanxiangqing-dingdanbianhao"></use>
                        </svg>
                    </div>
                    <div><span>商品订单</span></div>
                </div>
            </div>
            <div>
                <cell title="卖座劵" is-link to="/">             
                    <template #icon>
                        <div class="left-icon"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-coupon"></use>
                            </svg></div>
                    </template>
                </cell>
                <cell title="组合红包" is-link to="/">             
                    <template #icon>
                        <div class="left-icon"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xianjinhongbao"></use>
                            </svg></div>
                    </template>
                </cell>
                <cell title="余额" is-link to="/" value="余额">             
                    <template #icon>
                        <div class="left-icon"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-yue"></use>
                            </svg></div>
                    </template>
                </cell>
                <cell title="帮助与客服" is-link to="/">             
                    <template #icon>
                        <div class="left-icon"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-kefu"></use>
                            </svg></div>
                    </template>
                </cell>
                <cell title="设置" is-link to="/">             
                    <template #icon>
                        <div class="left-icon"><svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shezhi"></use>
                            </svg></div>
                    </template>
                </cell>
               
               
                
                


            </div>
            <div class="btn" >
            <span>登录</span>
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
    height: 100vh;
    background-color: rgba(211, 211, 211, 0.742);
    .header-box{
       
        background: url(../../assets/image/bg.png) no-repeat center; 
        height: 156px;
        box-sizing: border-box;
        padding: 64px 0px 0px 22px;
        box-sizing: border-box;
        .header-left{
            display: flex;
            align-items: center;
            width: 150px;
            justify-content: space-between;
            color: white;
            .header-img{
                width: 63px;
                height: 63px;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
            }
            

        }

        }

       
        

    }
     .middle-box{
            background-color: white;
            display: flex;
            height: 79px;
            margin-bottom: 10px;
            align-items: center;
            .middle{
                text-align: center;
                width: 50%;
                .middle-icon{
                    display: inline-block;
                    width: 26px;
                    height: 26px;
                    svg{
                        width: 100%;
                        height: 100%;
                    }
                }
                span{
                    color: #797d82;
                    font-size: 13px;
                }
            }

        }
}

.left-icon{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 15px;
    svg{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
}

::v-deep .van-cell{
    height: 50px;
    line-height: 50px;
    padding: 0px 15px;
    align-items: center;


}

.btn{
    margin-top: 70px;
    line-height: 45px;
    font-size: 16px;
    margin: 70px 25px 0;
    border-radius: 3px;
    text-align: center;
    background-color: #ff5f16;
    height: 44px;
    color: #fff;
    border: none;
    span{
        
        line-height: 45px;
        font-size: 16px;
        text-align: center;
        color: #fff;

    }
}
</style>