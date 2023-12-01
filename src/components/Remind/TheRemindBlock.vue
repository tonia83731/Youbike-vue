<script>
export default {
  props: {
    props: Array,
  },
  computed: {
    getFieldType() {
      return this.type || 'text'
    },
  }
}
</script>

<template>
  <div
    v-for="prop in props" :key="prop.id"
    class="flex flex-col text-center items-center w-8/12 mobile:w-9/12 tablet:w-full">
    <img :src="prop.url" :alt="prop.title" class="w-20 h-20 mb-4">
    <div class="mb-4 w-full">
      <h5 class="w-full font-bold bg-gray-input text-olive-green mb-2">{{ prop.title }}</h5>
      <p class="opacity-75 text-sm">{{ prop.text }}</p>
      <p class="text-default-red text-sm">{{ prop.alert }}</p>
    </div>
  </div>
</template>
<style></style>