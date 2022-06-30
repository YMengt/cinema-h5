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
                                <span>40.9</span>
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
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.schedules-list{
    ul{
        li{
            height: 74px;
            padding: 15px 15px;
            background: #fff;
            .sche-left{
                 p{
                    span{
                        
                    }
                }
            }
            .sche-center{
                p{
                    span{

                    }
                }
            }
            .sche-right{
                p{
                    span{
                        &.btn{

                        }
                    }
                }
            }
        }
    }
}
</style>