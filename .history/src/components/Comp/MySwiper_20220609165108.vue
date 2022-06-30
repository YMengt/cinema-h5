<template>
  <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/nature-1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/nature-2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/nature-3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/nature-4.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/nature-5.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/nature-6.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/nature-7.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/nature-8.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/nature-9.jpg" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
// Import Swiper Vue.js components
//  import 'swiper/swiper.min.css';
  // import { Swiper } from 'swiper/swiper-vue';
export default {
  name:'MySwiper',
  setup () {
    onMounted(()=>{
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
    })

    return {}
  }
}
</script>

<style lang="scss" scoped>
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