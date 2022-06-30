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
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
  // Import Swiper styles
  import 'swiper/swiper.min.css';

//在页面加载好之后再去装载swiper

export default {
  name: "Swiper",
  data() {
    return {
      
    };
  },
  mounted() {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
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
