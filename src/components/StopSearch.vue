<script>
import TheSearch from './InputElement/TheSearch.vue';
import TheDropDown from './InputElement/TheDropDown.vue';
import StopSelection from './StopSelection.vue';

export default {
  props: {
    props: Array,
  },
  components: {
    TheDropDown,
    TheSearch,
    StopSelection
  },
  computed: {

  }
}
</script>

<template>
  <div class="">
    <div class="w-full grid grid-rows-[repeat(2, 40px)] gap-2 mobile:grid-cols-[40%_60%] mobile:grid-rows-none mobile:gap-4 mobile:w-[calc(100%-16px)]">
      <!-- mobile:w-[calc(100%-16px)] -->
      <TheDropDown />
      <TheSearch />
    </div>
    <StopSelection :props="props"/>
  </div>
</template>

<style lang="scss"></style>