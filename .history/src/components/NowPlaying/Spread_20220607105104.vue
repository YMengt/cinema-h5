<template>
    <div>
<div class="m-content overflow-line" id="J_description">{{introduce}}</div>
    <button type="button" class="btn-more" v-if="isShowMore" id="J_btnmore" @click="showmoreDesc($event)">查看更多</button>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
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
        

        return {
            ...toRefs(info)
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
    color: #fff;
    float: right;
    color: #5383E7;
    position: relative;
    margin-top: rc(5);
    padding-right: rc(33);

    &.more-collapse {

      &::after,
      &::before {
        top: 2px;
        transform: rotate(180deg);
      }

      &::before {
        top: 4px;
      }
    }

    &::after,
    &::before {
      width: 0;
      height: 0;
      content: '';
      position: absolute;
      right: 0;
      top: 7px;
      border: rc(12) solid transparent;
    }

    &::after {
      border-top-color: #5383E7;
      z-index: 1;
    }

    &::before {
      border-top-color: #1c2239;
      z-index: 2;
      top: 5px;
    }

  }
</style>