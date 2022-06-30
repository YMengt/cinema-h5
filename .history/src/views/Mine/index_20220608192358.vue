<template>
    <div>
        <div class="content-box">
            <div class="header-box">
                <div>
                    <div><img src="../../assets/image/logo.png" alt=""></div>
                </div>
            </div>
            <div class="middle-box">
                <div class="middle">
                    <div><span></span></div>
                    <div><span>2</span></div>
                </div>
                <div class="middle">
                    <div><span>1</span></div>
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

</style>