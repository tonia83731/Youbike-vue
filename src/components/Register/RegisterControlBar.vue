<script>
import { generateNumber } from '../../utilities/generateNumbers';
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
  computed: {
    actives() {
      return this.numberArr.slice(0, this.currentActive);
    }
  },
  methods: {
  }
}

</script>

<template>
  <div class="">
    <div class="flex justify-between relative mb-7 max-w-full progress-container">
      <div class="bg-olive-green absolute top-2/4 left-0 translate-y-[-50%] h-1 w-0 z-1 progress" :style="{ width: ((actives.length - 1) / (numberArr.length - 1)) * 100 + '%' }"></div>
      <div v-for="number in numberArr" 
        :key="number" 
        class="bg-default-white text-gray-table-border rounded-full border-2 border-gray-table-default w-7 h-7 flex justify-center items-center circle"
        :class="{'done': number <= currentActive}"
      >
        {{ number }}
      </div>
    </div>
    <!-- <div class="flex justify-between items-end">
      <button type="button" class="bg-olive-green text-default-white rounded-sm px-4 py-1 text-sm disabled:bg-gray-table-border disabled:text-gray-default" @click="prevClick" :disabled="currentActive === 1">上一頁</button>
      <button type="button" v-if="currentActive <= 2" class="bg-olive-green text-default-white rounded-sm px-4 py-1 text-sm disabled:bg-gray-table-border disabled:text-gray-default" @click="nextClick">下一頁</button>
      <button type="submit" v-else-if="currentActive === 3" class="bg-olive-green text-default-white rounded-sm px-4 py-1 text-sm disabled:bg-gray-table-border disabled:text-gray-default" @click="nextClick">註冊</button>
      <a v-else href="/" class="bg-light-green text-default-white rounded-sm px-4 py-1 text-sm disabled:bg-gray-table-border">回到首頁</a>
    </div> -->
  </div>
</template>
<style lang="scss">
  .progress-container::before {
    content: "";
    background-color: #AEAEAE;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: 0;
  }
  .progress {
    transition: 0.4s ease;
  }
  .circle {
    position: relative;
    z-index: 100;
    transition: 0.4s ease;
  }
  .done {
    border-color: #677510;
    color: #677510;
  }
</style>

<!-- 閱讀會員條款 -->
<!-- 填寫會員資料 -->
<!-- 設定卡片 -->
<!-- 完成註冊 -->