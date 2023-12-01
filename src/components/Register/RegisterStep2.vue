<script>
import TheDefaultInput from '../InputElement/TheDefaultInput.vue';
import ThePasswordInput from '../InputElement/ThePasswordInput.vue';

export default {
  props: {
    currentActive: Number,
  },
  components: {
    TheDefaultInput,
    ThePasswordInput
  },
  data() {
    return {
      
    }
  },
  methods: {
  },
  created() { }
}
</script>

<template>
  <div v-if="currentActive === 2" class="">
    <h5 class="text-center text-olive-green font-bold">填寫會員資料</h5>
    <div class="w-full h-[280px] overflow-y-auto mobile:h-[320px]">
      <TheDefaultInput 
        label="使用者姓名" 
        name="register-user-name" 
        placeholder="使用者姓名" 
        :required="true"/>
      <TheDefaultInput 
        label="身分證 / 居留證 / 護照號碼" 
        name="register-user-id" 
        placeholder="身分證號碼" 
        :required="true"/>
      <TheDefaultInput 
        label="手機號碼(帳號)" 
        type="tel" 
        name="register-tel" 
        placeholder="手機號碼" 
        :required="true"/>
      <ThePasswordInput 
        label="密碼"
        name="register-password"
        placeholder="密碼"
        :required="true"
      />
    </div>
  </div>
</template>
<style></style>