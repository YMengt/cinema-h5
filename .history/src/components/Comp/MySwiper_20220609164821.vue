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
export default {
  setup () {
    onMounted(()=>{

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