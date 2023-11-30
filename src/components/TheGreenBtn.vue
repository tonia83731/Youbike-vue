<script>
export default {
  props: {
    type: String,
    name: String,
    customClass: String,
  },
  computed: {
    getButtonType() {
      return this.type || ''
    },
  }
}
</script>

<template>
  <button :type="getButtonType" class="w-full bg-light-green text-default-white px-6 py-2.5 rounded-full hover:drop-shadow-md" :class="customClass">{{ name }}</button>
</template>

<style></style>