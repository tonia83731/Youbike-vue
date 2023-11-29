<script>
import TheDefaultInput from '../components/TheDefaultInput.vue';
import TheCheckbox from '../components/TheCheckbox.vue';
import TheGreenBtn from '../components/TheGreenBtn.vue';
import TheGrayLink from '../components/TheGrayLink.vue';

  export default {
    components:{
      TheDefaultInput,
      TheCheckbox,
      TheGreenBtn,
      TheGrayLink
    },
    data() {
      return {}
    },
    methods: {
      onLoginSubmit() {}
    },
    created() {}
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
        <TheDefaultInput 
          label="帳號"
          type="tel"
          name="tel"
          placeholder="手機號碼"
        />
        <TheDefaultInput 
          label="密碼"
          type="password"
          name="password"
          placeholder="密碼"
        />
        <TheCheckbox 
          label="記住帳號"
          name="remember"
        />
        <TheGreenBtn 
          type="submit"
          name="登入"
        />
      </Form>
      <div class="flex justify-end">
        <TheGrayLink 
          link="/"
          name="首頁"
        />
        <span class="text-gray-table-border">•</span>
        <TheGrayLink 
          link="/register"
          name="註冊"
        />
      </div>
    </div>
  </main>
</template>
<style></style>