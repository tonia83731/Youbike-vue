<script>
export default {
  components: {},
  data() {
    return {

    }
  }
}

</script>

<template>
  <div class="my-8 flex justify-end items-center">
    <a href="#" class="page-link" id="prev-arrow">&laquo;</a>
    <a herf="#" class="page-link current">1</a>
    <a herf="#" class="page-link">2</a>
    <a herf="#" class="page-link">3</a>
    <a href="#" class="page-link" id="next-arrow">&raquo;</a>
    <p class="text-gray-table-border ml-2.5">共 0 頁</p>
  </div>
</template>
<style lang="scss">
  .page-link {
    color: #AEAEAE;
    margin: 0 5px;
    &.current {
      color: #B5CC22;
      font-weight: 700;
    }
  }
</style>