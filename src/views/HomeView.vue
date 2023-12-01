<script>
import TheCarousel from '../components/Carousel/TheCarousel.vue';
import TheCarouselSlide from '../components/Carousel/TheCarouselSlide.vue';
import TheUseStepCard from '../components/Card/TheUseStepCard.vue';
export default {
  components: {
    TheCarousel,
    TheCarouselSlide,
    TheUseStepCard,
  },
  data() {
    return {
      slides: [
        'https://apis.youbike.com.tw/images/1670321389638f14eda4599.png',
        'https://apis.youbike.com.tw/images/16697877836386f0871e29f.png',
        'https://apis.youbike.com.tw/images/168835201264a2350c070ee.png',
        'https://apis.youbike.com.tw/images/16442860616201d06da6356.jpg',
        'https://apis.youbike.com.tw/images/15711497265da5d79e35482.jpg',
        'https://apis.youbike.com.tw/images/168930423664b0bcacac02f.png'
      ],
      visibleSlide: 0,
      direction: 'left',
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length
    }
  },
  methods: {
  prevClick() {
    if(this.visibleSlide <= 0) {
      this.visibleSlide = this.slidesLen-1
    } else {
      this.visibleSlide--
    }
    this.direction = "left"
  },
  nextClick() { 
    if(this.visibleSlide >= this.slidesLen-1) {
      this.visibleSlide = 0
    } else {
      this.visibleSlide++
    }
    this.direction = "right"
  }
}
}


</script>

<template>
  <main class="min-h-[calc(100vh-72px)] desktop:min-h-[calc(100vh-104px)]">
    <TheCarousel @prev="prevClick" @next="nextClick">
      <TheCarouselSlide v-for="(slide, index) in slides" 
        :key="slide" 
        :index="index"
        :visibleSlide="visibleSlide"
        :direction="direction"
        >
        <img :src="slide" alt="" class="w-full h-full">
      </TheCarouselSlide>
    </TheCarousel>

    <div class="container flex flex-col justify-center items-center mobile:grid mobile:grid-cols-[1fr_20px_1fr_20px] mobile:grid-rows-2 mobile:justify-items-center tablet:grid-cols-[1fr_20px_1fr_20px_1fr_20px_1fr] tablet:grid-rows-none">
      <TheUseStepCard 
        title="註冊 / 登入"
        text1="使用官方 APP、網站"
        text2="或 Kiosk 註冊加入會員"
        imgSrc="/src/assets/LoginIcon.svg"
      />
      <div class="text-gray-table-border text-xl my-2">
        <span class="mobile:hidden"><i class="fa-solid fa-angle-down"></i></span>
        <span class="hidden mobile:block"><i class="fa-solid fa-chevron-right"></i></span>
      </div>
      <TheUseStepCard 
        title="租借"
        text1="到 YouBike 場站使用"
        text2="電子票證或 APP 借出單車"
        imgSrc="/src/assets/RentIcon.svg"
      />
      <div class="text-gray-table-border text-xl my-2">
        <span class="mobile:hidden"><i class="fa-solid fa-angle-down"></i></span>
        <span class="hidden mobile:block"><i class="fa-solid fa-chevron-right"></i></span>
      </div>
      <TheUseStepCard 
        title="騎乘"
        text1="一起微笑騎乘"
        text2="享受騎乘的快樂"
        imgSrc="/src/assets/RideIcon.svg"
      />
      <div class="text-gray-table-border text-xl my-2">
        <span class="mobile:hidden"><i class="fa-solid fa-angle-down"></i></span>
        <span class="hidden mobile:block"><i class="fa-solid fa-chevron-right"></i></span>
      </div>
      <TheUseStepCard 
        title="還車"
        text1="到 YouBike 場站"
        text2="歸還單車"
        imgSrc="/src/assets/ReturnIcon.svg"
      />
    </div>
  </main>
</template>
<style></style>


<!-- img -->
<!-- Winner -->
<!-- https://apis.youbike.com.tw/images/1670321389638f14eda4599.png -->
<!-- YouBike2.0 -->
<!-- https://apis.youbike.com.tw/images/16697877836386f0871e29f.png -->
<!-- TPASS -->
<!-- https://apis.youbike.com.tw/images/168835201264a2350c070ee.png  -->
<!-- Insurance -->
<!-- https://apis.youbike.com.tw/images/16442860616201d06da6356.jpg -->
<!-- Job Oppourtunity -->
<!-- https://apis.youbike.com.tw/images/15711497265da5d79e35482.jpg -->
<!-- Fraud -->
<!-- https://apis.youbike.com.tw/images/168930423664b0bcacac02f.png -->
<!-- Environment Protect -->
<!-- https://apis.youbike.com.tw/images/16976925056530bb59338f2.jpg -->
<!-- Taipei/New Taipei Transfer -->
<!-- https://apis.youbike.com.tw/images/169768320265309702a7ca5.png -->

<!-- https://www.cool3c.com/article/151097 -->
<!-- https://www.youbike.com.tw/region/taipei/ -->
