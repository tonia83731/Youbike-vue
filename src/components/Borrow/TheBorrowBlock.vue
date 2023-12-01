<script>
export default {
  props: {
    step: Number,
    imageUrl: String,
    text: String, 
    notifyText: String,
  },
  computed: {

  }
}
</script>

<template>
  <div class="w-full text-center">
    <div class="relative" :style="{ backgroundImage: `url(${imageUrl})` }">
      <span class="">STEP{{ step }}</span>
    </div>
    <div class="">
      <p class="">{{ text }}</p>
      <p class="">{{ notifyText }}</p>
    </div>
  </div>
</template>

<style></style>