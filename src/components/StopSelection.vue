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
      <div class="w-full mt-6 grid grid-cols-3 gap-6 justify-end mobile:grid-cols-4">
        <TheCheckbox 
          label="全部勾選"
          name="all"
          customClass="col-start-1 col-end-5"
        />
        <TheCheckbox 
          v-for="prop in props"
          :key="prop"
          :label="prop"
          :name="prop"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>