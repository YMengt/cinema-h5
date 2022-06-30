<template>
    <!-- Swiper -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/image/bg.png" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/logo.png" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/image/user.png" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>

import '../../../node_modules/swiper/swiper-bundle.min.css'
import '../../../node_modules/swiper/swiper-bundle.min.js'
import '../../../node_modules/swiper/esm/vue/swiper';

export default {
    name:'MySwiper',
    setup () {
        let swiper = new Swiper(".mySwiper", {
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