<script>
export default {
  props: {
    currentActive: Number,
    numberArr: Array,
  },
  components: {},
  data() {
    return {
    }
  },
  computed: {},
  methods: {
    prevClick() {
      this.$emit('prevStep')
    },
    nextClick() {
      this.$emit('nextStep')
    },
  }
}

</script>

<template>
  <div class="flex justify-between items-end mt-4">
    <button type="button"
      class="bg-olive-green text-default-white rounded-sm px-4 py-1 text-sm disabled:bg-gray-table-border disabled:text-gray-default"
      @click="prevClick" :disabled="currentActive === 1">上一頁</button>
    <button type="button" v-if="currentActive <= 2"
      class="bg-olive-green text-default-white rounded-sm px-4 py-1 text-sm disabled:bg-gray-table-border disabled:text-gray-default"
      @click="nextClick">下一頁</button>
    <button type="submit" v-else-if="currentActive === 3"
      class="bg-olive-green text-default-white rounded-sm px-4 py-1 text-sm disabled:bg-gray-table-border disabled:text-gray-default"
      @click="nextClick">註冊</button>
    <a v-else href="/"
      class="bg-light-green text-default-white rounded-sm px-4 py-1 text-sm disabled:bg-gray-table-border">回到首頁</a>
  </div>
</template>
<style lang="scss">
</style>

<!-- 閱讀會員條款 -->
<!-- 填寫會員資料 -->
<!-- 設定卡片 -->
<!-- 完成註冊 -->