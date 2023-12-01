<script>
import TheDefaultInput from '../InputElement/TheDefaultInput.vue';
import TheCheckbox from '../InputElement/TheCheckbox.vue';

export default {
  props: {
    currentActive: Number,
  },
  components: {
    TheDefaultInput,
    TheCheckbox,
  },
  data() {
    return {
      isChecked: false,
      inputValue:'',
    }
  },
  methods: {
    handleCheckboxChange(checked, value) {
      // console.log(checked)
      this.isChecked = checked
      console.log(this.isChecked)
    }
  },
  created() { }
}
</script>

<template>
  <div v-if="currentActive === 3" class="">
    <h5 class="text-center text-olive-green font-bold">填寫會員資料</h5>
    <div class="w-full h-[280px] overflow-y-auto mobile:h-[320px] flex flex-col justify-between">
      <TheDefaultInput label="悠遊卡 / 一卡通號碼" name="register-easycard-num" placeholder="悠遊卡/一卡通號碼" :required="true"/>
      <div>
        <TheCheckbox 
          label="是否願意收到來自Youbike的最新消息"
          name="subscribe"
          :isChecked="isChecked"
          :inputValue="inputValue"
          :onChange="handleCheckboxChange"
        />
        <input 
          v-if="isChecked" 
          type="email" 
          class="w-full h-[40px] text-light-green bg-gray-input px-4 rounded-lg font-medium placeholder:text-gray-table-border mt-2" 
          placeholder="請輸入電子信箱" 
          name="subscribe-email" 
          id="subscribe-email-input">
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<style></style>