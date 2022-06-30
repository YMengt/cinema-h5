<template >
<div id="all">
  <!-- <keep-alive include=""> -->
    <router-view/>
  <!-- </keep-alive> -->
  </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { Toast } from 'vant'
 export default {
   setup(){

     const store=useStore()

     function getLocation(){
        if(store.state.cityId){
          Toast.loading("定位中")

          setTimeout(()=>{
            Toast()
            Toast.success("定位成功")
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
