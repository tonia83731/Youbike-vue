<script>
import TheDefaultInput from '../components/TheDefaultInput.vue';
import ThePasswordInput from '../components/ThePasswordInput.vue';
import TheCheckbox from '../components/TheCheckbox.vue';
import TheGreenBtn from '../components/TheGreenBtn.vue';
import TheGrayLink from '../components/TheGrayLink.vue';

export default {
  components: {
    TheDefaultInput,
    ThePasswordInput,
    TheCheckbox,
    TheGreenBtn,
    TheGrayLink
  },
  data() {
    return {}
  },
  methods: {
    onLoginSubmit() { }
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
      <div class="bg-default-white px-20 pt-8 pb-4 rounded-b-lg mobile:rounded-lg mobile:rounded-tr-none desktop:w-full">
        <Form>
          <TheDefaultInput label="使用者姓名" name="user-name" placeholder="使用者姓名" />
          <TheDefaultInput label="身分證 / 居留證 / 護照號碼" name="user-id" placeholder="身分證號碼" />
          <TheDefaultInput label="悠遊卡 / 一卡通號碼" name="easycard-num" placeholder="悠遊卡/一卡通號碼" />
          <TheDefaultInput label="帳號" type="tel" name="tel" placeholder="手機號碼" />
          <ThePasswordInput 
            label="密碼"
            name="password"
            placeholder="密碼"
          />
          <ThePasswordInput 
            label="密碼確認"
            name="confirm-password"
            placeholder="重複密碼進行確認"
          />

          <TheGreenBtn type="submit" name="註冊" customClass="mt-4 mb-2"/>
        </Form>
        <div class="flex justify-end">
          <TheGrayLink link="/" name="首頁" />
          <span class="text-gray-table-border">•</span>
          <TheGrayLink link="/login" name="登入" />
        </div>
      </div>
    </div>
  </main>
</template>
<style>
  .active {
    opacity: 1;
    font-weight: bold
  }
</style>