<template>
   <div class="schedules-list">
                <ul>
                    <li>
                        <div  class="sche-left">
                            <p>10:00</p>
                            <p><span>12.27散场</span></p>
                        </div>
                        <div  class="sche-center">
                            <p>原生3D</p>
                            <p><span>4号厅</span></p>
                        </div>
                        <div class="sche-right">
                            <p>
                                <span>{{list.salePrice/100}}</span>
                                <span class="btn">购票</span>
                            </p>
                        </div>
                    </li>
                </ul>
    </div>
</template>

<script>
export default {
    name:'CinemaDetailItem',
    props:["list"],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.schedules-list{
    ul{
        li{
            border-top: 1px solid #ededed;
            box-sizing: border-box;
            height: 74px;
            padding: 15px 15px;
            background: #fff;
            display: flex;
            align-items: center;
            .sche-left{
                float: left;
                width: 84px;
                 p{
                     font-size: 15px;
                    color: #191a1b;
                    span{
                        font-size: 13px;
                        color: #797d82;
                        margin-top: 2px;
                    }
                }
            }
            .sche-center{
                float: left;
                width: calc(100% - 210px);
                p{
                    font-size: 15px;
                    color: #191a1b;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    span{
                        font-size: 13px;
                        color: #797d82;
                        margin-top: 2px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            .sche-right{
                float: right;
                padding: 10px 0;
                line-height: 25px;
                color: #ff5f16;
                p{
                    span{
                        display: inline-block;
                        padding-right: 20px;
                        &.btn{
                            transform: scale(.7); 
                            border: 1px solid #ff5f16;
                            border-radius: 4px;
                            text-align: center;
                            padding: 2px 8px;
                        }
                    }
                }
            }

            &::after{
                content:'';
                display: block;
                clear: both;
            }
        }
    }
}
</style>