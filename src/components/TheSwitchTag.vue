<script>
export default {
  props: {
    props: Array,
    tagSelected: String,
  },
  components: {
    
  },
  methods: {
    handleTagSwitch(e) {
      this.$emit('tagSwitch', e.target)
    }
  },
  computed: {

  }
}
</script>

<template>
  <ul class="grid grid-cols-2 text-center mobile:flex mobile:justify-start">
    <button v-for="prop in props" :key="prop.id" :id="prop.id" type="button"  class="opacity-50 mobile:px-8 mobile:py-2" :class="{ 'selected': tagSelected === prop.id }" @click="handleTagSwitch">
      {{ prop.title }}
    </button>
  </ul>
</template>

<style lang="scss">
  .selected {
    border: 0.5px solid #AEAEAE;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    font-weight: 700;
    opacity: 1;
  }
</style>