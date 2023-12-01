<script>
export default {
  props: {
    // step: Number,
    // imageUrl: String,
    // text: String, 
    steps: Array,
  },
  computed: {

  }
}
</script>

<template>
  <div v-for="step in steps" :key="step.id" class="w-full text-center">
    <div class="relative h-[200px] w-full bg-no-repeat bg-center bg-cover rounded-sm z-0 " :style="{ backgroundImage: `url('${step.url}')` }">
      <span class="absolute top-2 left-0 bg-light-green text-olive-green font-bold rounded-sm py-1 px-3 z-20">STEP{{ step.id }}</span>
      <span class="absolute bottom-0 left-0 trapezoid"></span>
    </div>
    <p class="text-sm w-[300px] mobile:w-full">{{ step.text }}</p>
  </div>
</template>

<style>
  .trapezoid {
    border-top: 200px solid #FFFFFF;
    border-right: 30px solid transparent;
    height: 0px;
    width: 50px;
  }
</style>