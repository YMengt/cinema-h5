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
import MapLoader from './unti/unti'
 export default {
   setup(){

     const store=useStore()
      const router=useRouter()

      // const getLocation=async()=>{
      //   if(store.state.cityInfo==0){
      //     Toast.loading("定位中")


          // let result=await 
          MapLoader()


          // setTimeout(()=>{
          //   Toast()
          //   Toast.success("定位成功")
          // },1000)
    //       console.log(result)
    //       setTimeout(()=>{
    //         Toast.clear()
    //         Toast.fail("定位失败")
    //         router.push("/city")
    //       },1000)
    //     }
    //  }

     onMounted(()=>{
          // getLocation()
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
