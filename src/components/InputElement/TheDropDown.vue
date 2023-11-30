<script>
export default {
  props: {
  },
  data () {
    return {
      cities: [
        { chinese: '臺北市', english: 'TPE' },
        { chinese: '新北市', english: 'TPH' },
        { chinese: '桃園市', english: 'TYC' },
        { chinese: '新竹市', english: 'HSC' },
        { chinese: '新竹縣', english: 'HSH' },
        { chinese: '新竹科學園區', english: 'HSP' },
        { chinese: '台中市', english: 'TXG' },
        { chinese: '高雄市', english: 'KHH' },
      ],
      isActive: false,
      selectValue: '選擇縣市'
    }
  },
  methods: {
    handleDropdown() {
      this.isActive = !this.isActive
    },
    handleOptionClick(e) {
      this.selectValue = e.target.value
      this.isActive = false
    }
    // dropdownIsActive() {
    //   return this.isActive = !this.isActive
    // }
  },
  computed: {

  }
}
</script>

<template>
  <div class="relative w-full max-w-full">
    <button 
      type="button" 
      class="city-select" 
      role="combobox"
      aria-labelledby="select button"
      aria-haspopup="listbox"
      aria-controls="select-dropdown"
      :aria-expanded="isActive.toString()" 
      :class="{ active: isActive }"
      @click="handleDropdown"
    >
      <span class="select-span" :class="{ selected: selectValue !== '選擇縣市' }">{{ selectValue }}</span>
      <span class="select-arrow"></span>
    </button>
    <ul class="city-list" role="listbox">
      <li v-for="city in cities" :key="city.english" class="cursor-pointer relative flex gap-4 items-center city-item" role="option" @click="handleOptionClick">
        <input type="radio" :id="city.english" name="city-select" :value="city.chinese" class="hidden city-input">
        <label :for="city.english" class="w-full py-2 cursor-pointer city-label" :class="{ selected: selectValue === city.chinese }">{{ city.chinese }}</label>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .city-select {
    width: 100%;
    height: 100%;
    color: #AEAEAE;
    background-color: #F3F3F3;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.active + ul {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
    }
    &:focus {
      outline: none;
    }
  }
  .select-span {
    &.selected {
      color: #323232;
      font-weight: 500;
    }
  }
  .select-arrow {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #AEAEAE;
    margin-right: 8px;
  }
  .city-list {
    position: absolute;
    z-index:1;
    background-color: #F6F6F6;
    color: #323232;
    width: 100%;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px 0 16px 16px;
    font-size: 16px;
    overflow-y: auto;
    height: 140px;

    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease;
    &:focus-within {
      box-shadow: 0 10px 25px rgba(94, 108, 233, 0.6);
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #F6F6F6;
      border-radius: 25px;
    }
    &::-webkit-scrollbar-thumb {
      background: #AEAEAE;
      border-radius: 25px;
    }
    width: calc(100% - 16px);
  }
  .city-item {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    width: calc(100% - 16px);
  }
  .city-input {
    &:disabled + label {
      color: #AEAEAE;
    }
  }
  .city-label {
    &.selected {
      font-weight: 500;
    }
  }
</style>




