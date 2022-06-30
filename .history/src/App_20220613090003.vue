<template >
<div id="all">
  <!-- <keep-alive include=""> -->
    <router-view/>
  <!-- </keep-alive> -->
  </div>
</template>
<script>
import { onMounted, reactive } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
// import BMap from 'Bmap' 
import BMap from 'bmap'

 export default {
   setup(){
let info=reactive({
    LocationProvince:"正在定位所在省",    //给渲染层定义一个初始值
    LocationCity:"正在定位所在市"     //给渲染层定义一个初始值
})
function city(){    //定义获取城市方法
             const geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function getinfo(position){
                 let city = position.address.city;             //获取城市信息
                let province = position.address.province;     //获取省份信息
                 info.LocationProvince = province
                 info.LocationCity = city
             }, function(e) {
                 info.LocationCity = "定位失败"
             }, {provider: 'baidu'});        
         }










     const store=useStore()
      const router=useRouter()
     function getLocation(){
        if(store.state.cityInfo==0){
          Toast.loading("定位中")
          // city()
          // console.log(info)

          // setTimeout(()=>{
          //   Toast()
          //   Toast.success("定位成功")
          // },1000)

          setTimeout(()=>{
            Toast.clear()
            Toast.fail("定位失败")
            router.push("/city")
          },1000)


        }
     }

     onMounted(()=>{
          getLocation()
     })

   }
  }

</script>
 


<style lang="scss">
#all{
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
</style>
