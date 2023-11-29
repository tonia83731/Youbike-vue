<script>
export default {
  props: {
    title: String,
    caption: String,
    money: String,
    items: Array,
    extraText: String,
  },
  computed: {
    
  }
}
</script>

<template>
  <div class="w-full text-center">
    <div class="font-bold bg-gray-input text-olive-green">{{ title }}</div>
    <div class="mt-2">
      <p class="text-sm">{{ caption }}</p>
      <div class="mt-4 mb-8"><span class="text-6xl font-bold">{{ money }}</span> / 元</div>
    </div>
    <ul class="list-[circle] list-inside opacity-75">
      <li class="" v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <p class="text-light-green">{{ extraText }}</p>
  </div>
</template>

<style></style>