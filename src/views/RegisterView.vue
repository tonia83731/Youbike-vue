<script>
import TheDefaultInput from '../components/TheDefaultInput.vue';
import TheCheckbox from '../components/TheCheckbox.vue';
import TheGreenBtn from '../components/TheGreenBtn.vue';
import TheGrayLink from '../components/TheGrayLink.vue';

export default {
  components: {
    TheDefaultInput,
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
  <main class="">
    <!-- <h2 class="main-title">登入</h2> -->
    <div class="container">
      <div class="">
        <router-link to="/login">登入會員</router-link>
        <router-link to="/register">註冊會員</router-link>
      </div>
      <Form>
        <TheDefaultInput label="使用者姓名" name="user-name" placeholder="使用者姓名" />
        <TheDefaultInput label="身分證 / 居留證 / 護照號碼" name="user-id" placeholder="身分證號碼" />
        <TheDefaultInput label="帳號" type="tel" name="tel" placeholder="手機號碼" />
        <TheDefaultInput label="密碼" type="password" name="password" placeholder="密碼" />
        <TheDefaultInput label="密碼確認" type="password" name="confirm-password" placeholder="重複密碼進行確認" />
        <TheDefaultInput label="悠遊卡 / 一卡通號碼" name="confirm-password" placeholder="悠遊卡/一卡通號碼" />

        <TheGreenBtn type="submit" name="註冊" />
      </Form>
      <div class="flex justify-end">
        <TheGrayLink link="/" name="首頁" />
        <span class="text-gray-table-border">•</span>
        <TheGrayLink link="/login" name="登入" />
      </div>
    </div>
  </main>
</template>
<style></style>