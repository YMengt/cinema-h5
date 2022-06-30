<template>
  <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/image/bg.png" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/image/bg.png" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/image/bg.png" />
        </div>
      <div class="swiper-pagination"></div>
    </div>
</template>
 
<script>
 
//   import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
  
//   import 'swiper/swiper.min.css';

// import "swiper/swiper-bundle"
//在页面加载好之后再去装载swiper

export default {
  name: "MySwiper",
  data() {
    return {
      
    };
  },
  mounted() {
    // var swiper = new Swiper(".mySwiper", {
    //     effect: "coverflow",
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     coverflowEffect: {
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 1,
    //       slideShadows: true,
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //     },
    //   });
  },
};
</script>
 
<style >
 .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
      }
</style>
