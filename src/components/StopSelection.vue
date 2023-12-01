<script>
import TheCheckbox from './InputElement/TheCheckbox.vue';
export default {
  props: {
    props: Array,
  },
  components: {
    TheCheckbox,
},
  computed: {

  }
}
</script>

<template>
  <div class="my-6 mobile:my-8">
    <div class="flex justify-between items-center">
      <TheCheckbox 
        label="全部勾選"
        name="all"
      />
      <div class="mt-6 grid grid-cols-3 gap-6 justify-end mobile:grid-cols-4">
        <TheCheckbox 
          v-for="prop in props"
          :key="prop.sarea"
          :label="prop.sarea"
          :name="prop.name"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>