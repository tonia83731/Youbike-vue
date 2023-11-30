<script>
export default {
  props: {
    title: String,
    text1: String,
    text2: String,
    imgSrc: String,
    alt: String
  },
  computed: {
    getFieldType() {
      return this.type || 'text'
    },
  }
}
</script>

<template>
  <div class="flex flex-col text-center items-center justify-center w-9/12 small-screen:w-6/12 tablet:w-full desktop:w-9/12">
    <img :src="imgSrc" :alt="{ alt }" class="w-20 h-20">
    <div class="mb-4 w-full">
      <h5 class="w-full font-bold bg-gray-input text-olive-green mb-2 w-full">{{ title }}</h5>
      <p class="opacity-75 text-sm">{{ text1 }} <br> {{ text2 }}</p>
    </div>
  </div>
</template>
<style></style>