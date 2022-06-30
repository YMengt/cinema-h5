<template>
    <div class="login-box">
        <div class="login-logo">
            <img src="../assets/image/logo.png" alt="">
        </div>
        <div class="content-box">
            <div class="form-group">
                <input type="text" maxlength="13" v-model.trim="phone" placeholder="手机号" 
                @blur="phoneValidate" class="input-control">
                <div v-show="phone" @click="clearContent" class="clear-mobile-btn">
                    <icon name="close" />
                </div>
                <div class="getNumber" >
                    获取验证码
                 </div>
            </div>
            <div v-show="isShowError" class="error" style="">请输入11位正确的手机号码</div>
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
            phone:"",
            valiNumber:"",
            isShowError:false
        })

         let tel=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

        function clearContent(){
            info.phone=""
        }


        function phoneValidate(){
            console.log(info.phone)
            if(!tel.test(info.phone)){
                info.isShowError=true
            }else{
                 info.isShowError=false
            }
        }

        return {
            ...toRefs(info),
            clearContent,
            phoneValidate,
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
    .error{
        text-align: left;
        color: #ff5f16;
        width: 100%;
        line-height: 11px;
        margin-left: 25px;
        font-size: 11px;
        margin-top: 7px;
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