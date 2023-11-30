<script>
export default {
  props: {
    
  },
  methods: {
    prevClick() {
      this.$emit('prev')
    },
    nextClick() {
      this.$emit('next')
    }
  }
}
</script>

<template>
  <div class="relative w-full object-cover h-[200px] mobile:h-[300px] tablet:h-[320px] desktop:h-[420px]">
    <slot></slot>
    <button class="prev absolute left-0 top-1/2 translate-y-[-50%] px-4 py-2 rounded-lg drop-shadow-md bg-default-white text-light-green hover:text-olive-green" @click="prevClick">Prev</button>
    <button class="next absolute right-0 top-1/2 translate-y-[-50%] px-4 py-2 rounded-lg drop-shadow-md bg-default-white text-light-green hover:text-olive-green" @click="nextClick">Next</button>
  </div>
</template>
<style></style>