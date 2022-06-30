<template>
    <div>
<div class="m-content overflow-line" id="J_description">{{mes2}}</div>
    <p type="button" class="btn-more" v-if="isShowMore" id="J_btnmore" @click="showmoreDesc($event)"><span class="iconfont icon-xiangxiajiantou"></span></p>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core';

export default {
    name:'Spread',
   
    props:{
        mes2: {
        type: String,
        default: ""
      }
    },

    setup (props) {
        let info=reactive({
         isShowMore: false,
        isDescStatus: true,
        introduce: ""
        })
         info.introduce=props.mes2;
          if(info.introduce.length>75){
              info.isShowMore=true
          }
        
      function   showmoreDesc(e) {
        let el = e.currentTarget;
        el.previousElementSibling.classList[!info.isDescStatus ? 'add' : 'remove']('overflow-line');
        el.classList[this.isDescStatus ? 'add' : 'remove']('more-collapse');
        el.innerHTML = !info.isDescStatus ? '<span class="iconfont icon-xiangxiajiantou"></span>' : '收起';
        info.isDescStatus = !info.isDescStatus;
        info.isShowMore = true;
      }

    onMounted(()=>{
      console.log(info)
    })
      
         
     

        return {
            ...toRefs(info),
            showmoreDesc,           
        }
    }
}
</script>

<style lang="scss" scoped>
  .m-content {
    &.overflow-line {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }

  .btn-more {
    text-align: center;
    position: relative;
    color: #797d82;
    font-size: 13px;
    margin-top: rc(5);
    

    &.more-collapse {
      // &::after,
      // &::before {
      //   top: 2px;
      //   transform: rotate(180deg);
      // }

      // &::before {
      //   top: 4px;
      // }
    }
  }
</style>