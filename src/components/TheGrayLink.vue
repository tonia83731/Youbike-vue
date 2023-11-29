<script>
export default {
  props: {
    name: String,
    link: {
      type: [String, Object],
      required: true,
    },
  },
}
</script>

<template>
  <router-link :to="link" class="text-gray-table-border underline underline-offset-2 hover:font-semibold">{{ name }}</router-link>
</template>

<style></style>