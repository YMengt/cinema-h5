<template>
  <div id="swipercom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" >
          <img src="../../assets/image/bg.png" alt="" />
           <img src="../../assets/image/bg.png" alt="" />
        </div>
        <div class="swiper-slide" >
         
        </div>
      </div>
      //换页器
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
 
<script>
import "../../../node_modules/swiper/swiper.scss"; //引入swiper样式
import Swiper from "swiper"; //引入swiper
export default {
  name: "Swiper",
  data() {
    return {
      
    };
  },
  mounted() {
    var mySwiper = new Swiper("#swiperIndex", {
      //配置分页器内容
      direction: "vertical",
      mousewheel: true,
      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination", //换页器与哪个标签关联
        clickable: true, //分页器是否可以点击
      },
 
 
    });
  },
};
</script>
 
<style >
.swiper-container {
  width: 80%;
  height: 400px;
  border-radius: 0.1rem;
}
.swiper-slide img {
  width: 100%;
}
.swiper-pagination-bullet {
  background-color: white;
}
.swiper-pagination-bullet-active {
  background-color: orangered;
}
</style>
