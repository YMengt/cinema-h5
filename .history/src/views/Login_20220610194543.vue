<template>
    <div class="login-box">
        <div class="login-logo">
            <img src="../assets/image/logo.png" alt="">
        </div>
        <div class="content-box">
            <div class="form-group">
                <input type="tel" maxlength="13" v-model="phone" placeholder="手机号" class="input-control">
                <div v-show="phone" class="clear-mobile-btn">
                    <icon name="close" />
                </div>
                <div class="getNumber" >
                    获取验证码
                 </div>
            </div>
            <div class="form-group">
                <input placeholder="验证码" v-model="valiNumber" class="input-control">
            </div>

        </div>

        <div class="btn">
            <span>登录</span>
        </div>

    </div>
</template>

<script>
import { Icon } from 'vant'
import { toRefs,reactive } from 'vue'
export default {
    components:{Icon},
    setup () {
        let info=reactive({
            showClear:false,
            phone:"",
            valiNumber:""
        })

        return {
            ...toRefs(info)
        }
    }
}
</script>

<style lang="scss" scoped>
.login-box{
   
}
.login-logo{
    margin: 79px auto 40px;
    height: 60px;
    line-height: 60px;
     text-align: center;
    img{
        height: 60px;
        display: inline-block;

    }
}
.content-box{
    .form-group{
        line-height: 55px;
        margin: 0 25px;
        position: relative;
        .input-control{
            height: 15px;
            line-height: 15px;
            padding: 20px 0;
            width: 100%;
            font-size: 15px;
            color: #191a1b;
            border: 0;
            outline-width: 0;
        }
        .clear-mobile-btn{
            font-size: 13px;
            position: absolute;
            top: 0px;
            right:89px;
            display: inline-block;

        }
        .getNumber{
            position: absolute;
             right: 0px;
              top: 0px;

        }
    }
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
        opacity: .3;
        line-height: 45px;
        font-size: 16px;
        text-align: center;
        color: #fff;

    }
}
</style>