<script>
import TheSearch from './InputElement/TheSearch.vue';
import TheDropDown from './InputElement/TheDropDown.vue';
export default {
  props: {
  },
  components: {
    TheDropDown,
    TheSearch,
  },
  computed: {

  }
}
</script>

<template>
  <div class="w-full grid grid-rows-[repeat(2, 40px)] gap-2 mobile:grid-cols-[40%_60%] mobile:grid-rows-none mobile:gap-4 mobile:w-[calc(100%-16px)]">
    <TheDropDown />
    <TheSearch />
  </div>
</template>

<style lang="scss"></style>