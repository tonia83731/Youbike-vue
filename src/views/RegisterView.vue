<script>
import TheDefaultInput from '../components/InputElement/TheDefaultInput.vue';
import ThePasswordInput from '../components/InputElement/ThePasswordInput.vue';
import TheCheckbox from '../components/InputElement/TheCheckbox.vue';
import TheGreenBtn from '../components/TheGreenBtn.vue';
import TheGrayLink from '../components/TheGrayLink.vue';

import RegisterControlBar from '../components/Register/RegisterControlBar.vue';
import RegisterStep1 from '../components/Register/RegisterStep1.vue';
import RegisterStep2 from '../components/Register/RegisterStep2.vue';
import RegisterStep3 from '../components/Register/RegisterStep3.vue';
import RegisterFinished from '../components/Register/RegisterFinished.vue';
import RegisterButtonGroup from '../components/Register/RegisterButtonGroup.vue';
import { generateNumber } from '../utilities/generateNumbers';

export default {
  components: {
    RegisterControlBar,
    RegisterStep1,
    RegisterStep2,
    RegisterStep3,
    RegisterFinished,
    RegisterButtonGroup,
    TheDefaultInput,
    ThePasswordInput,
    TheCheckbox,
    TheGreenBtn,
    TheGrayLink
  },
  data() {
    return {
      currentActive: 1,
      numberArr: this.generateStepNumber(),
    }
  },
  methods: {
    generateStepNumber() {
      return generateNumber(1, 4);
    },
    prevClick() {
      if (this.currentActive <= 1) this.currentActive = 1
      else this.currentActive--
    },
    nextClick() {
      if (this.currentActive >= this.numberArr.length) this.currentActive = this.numberArr.length
      else this.currentActive++
    },
  },
  created() { }
}
</script>

<template>
  <main class="flex items-center bg-gray-border min-h-[calc(100vh-72px)] desktop:min-h-[calc(100vh-104px)]">
    <!-- <h2 class="main-title">登入</h2> -->
    <div class="container">
      <div class="grid grid-cols-2 mobile:flex mobile:justify-end">
        <router-link to="/login" class="w-full text-center bg-default-white rounded-t-lg px-4 py-2 opacity-50 mobile:w-fit">登入會員</router-link>
        <router-link to="/register" class="w-full text-center bg-default-white rounded-t-lg px-4 py-2 opacity-50 active mobile:w-fit">註冊會員</router-link>
      </div>
      <Form class="bg-default-white px-8 pt-8 pb-4 rounded-b-lg mobile:rounded-lg mobile:rounded-tr-none mobile:px-20 desktop:w-full">
        <RegisterControlBar :numberArr="numberArr" :currentActive="currentActive"/>
        <RegisterStep1 :currentActive="currentActive"/>
        <RegisterStep2 :currentActive="currentActive"/>
        <RegisterStep3 :currentActive="currentActive"/>
        <RegisterFinished :numberArr="numberArr" :currentActive="currentActive"/>
        <RegisterButtonGroup @prevStep="prevClick" @nextStep="nextClick" :numberArr="numberArr" :currentActive="currentActive"/>
      </Form>
    </div>
  </main>
</template>
<style>
  .active {
    opacity: 1;
    font-weight: bold
  }
</style>