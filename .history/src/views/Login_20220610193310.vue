<template>
    <div class="login-box">
        <div class="login-logo">
            <img src="../assets/image/logo.png" alt="">
        </div>
        <div class="content-box">
            <div class="form-group">
                <input type="tel" maxlength="13" placeholder="手机号" class="input-control">
                <div class="clear-mobile-btn"><i class="iconfont icon-chongzhi-qingchu "></i></div>
                <div class="getNumber" style="position: absolute; right: 0px; top: 13px;">
                    获取验证码
                 </div>
            </div>
            <div class="form-group">
                <input placeholder="验证码" class="input-control">
            </div>

        </div>

        <div class="btn">
            <span>登录</span>
        </div>

    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.login-box{
    display: flex;
    flex-direction:column ;
}
.login-logo{
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img{
        height: 60px;

    }
}
.content-box{
    .form-group{
        .input-control{

        }
        .clear-mobile-btn{

        }
        .getNumber{

        }
    }
}

.btn{
    span{

    }
}
</style>