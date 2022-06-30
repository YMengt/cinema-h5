<template>
    <div>
<div class="m-content overflow-line" id="J_description">{{ mes2}}</div> 
      <p type="button" class="btn-more" v-if="mes2.length>70" id="J_btnmore" @click="showmoreDesc($event)"><span class="iconfont icon-xiangxiajiantou"></span>
      </p>  
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onActivated, onMounted } from '@vue/runtime-core';

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
         isShowMore: false,//展示更多
        isDescStatus: true,//true为展开,false为收起
        introduce: ""
        })
         info.introduce=props.mes2;

      function   showmoreDesc(e) {//点击展示按钮
        let el = e.currentTarget;
        el.previousElementSibling.classList[!info.isDescStatus ? 'add' : 'remove']('overflow-line');
        el.classList[info.isDescStatus ? 'add' : 'remove']('more-collapse');
        el.innerHTML = !info.isDescStatus ? '<span class="iconfont icon-xiangxiajiantou"></span>' : '收起';
        info.isDescStatus = !info.isDescStatus;
        info.isShowMore = true;
      }

    onMounted(()=>{
      // console.log(info)
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
    font-size: 14px;
    color: #797d82;
    &.overflow-line {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }

.active2{
  transition: all 12s linear;
}

  .btn-more {
    text-align: center;
    color: #797d82;
    font-size: 13px;
    height: 15px;
    line-height: 15px;
    // &.more-collapse {
    //   &::after,
    //   &::before {
    //     top: 2px;
    //     transform: rotate(180deg);
    //   }

    //   &::before {
    //     top: 4px;
    //   }
    // }
  }
</style>