<script>
// import SearchIcon from '../assets/searchIcon.svg'
export default {
  props: {
  },
  computed: {

  }
}
</script>

<template>
  <div class="w-full h-full relative">
    <Field type="text" placeholder="搜尋站點" class="w-full h-[40px] text-light-green bg-gray-input px-4 rounded-lg font-medium placeholder:text-gray-table-border"></Field>
    <button type="button" class="search-btn typing h-[40px] absolute right-5 top-2/4 translate-y-[-50%] bg-transparent">
      <img src="../../assets/searchIcon.svg" alt="" class="w-[18px] h-auto">
    </button>
  </div>
</template>

<style lang="scss">

</style>