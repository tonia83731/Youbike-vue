<script>
export default {
  props: {
    props: Array,
    title: String,
  },
  components: {
    
  },
  computed: {

  }
}
</script>

<template>
  <ul class="flex">
    <li v-for="prop in props" :key="prop.id" class="">
      <button type="button" class="">
        {{ prop.title }}
      </button>
    </li>
  </ul>
</template>

<style lang="scss"></style>