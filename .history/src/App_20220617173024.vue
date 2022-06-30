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
// import MapLoader from './unti/unti'
import axios from 'axios'
 export default {
   setup(){

     const store=useStore()
      const router=useRouter()

      const getLocation=async()=>{
        if(store.state.cityInfo==0){
          Toast.loading("定位中")
          // MapLoader()
          // setTimeout(()=>{
          //   Toast()
          //   Toast.success("定位成功")
          // },1000)
         axios.create({

           //这里的key用的是web服务的key;如果要展示地图则使用web端key
           baseURL:'https://restapi.amap.com'
         }).get("/v3/ip?key=d797e2bcf2b39e90fc6dec600863dafd").then((v)=>{
           console.log(v.data)
           let obj={
             cityId:v.data.adcode,
             name:v.data.province
           }
           // cityInfo:0,
                  //  cityId: 210300
                  // isHot: 0
                  // name: "鞍山"
                  // pinyin: "anshan" 
          store.commit('')
         }).catch((e)=>{
            Toast.clear()
            Toast.fail("定位失败")
            router.push("/city")
         })
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
