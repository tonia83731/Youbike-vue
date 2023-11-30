<script>
  export default {
    props: {
      label: String,
      type: String,
      name: String,
      placeholder: String,
    },
    data () {
      return {
        showPassword: false,
      }
    },
    computed: {
      getFieldType() {
        return this.showPassword ? 'text' : 'password'
      },
      eyesOpenIcon() {
        return this.type === 'password'
      }
    },
    methods: {
      togglePasswordIcon() {
        this.showPassword = !this.showPassword
      }
    }
  }
</script>

<template>
  <div class="flex flex-col mb-4 relative">
    <label :for="`login-${name}`" class="text-olive-green font-bold mb-2">{{ label }}</label>
    <Field :type="getFieldType" :name="`login-${name}`" :id="`login-${name}`"
      class="h-[40px] text-light-green bg-gray-input px-4 rounded-lg font-medium placeholder:text-gray-table-border"
      :placeholder="`請輸入${ placeholder }`" ></Field>
    <button type="button" class="absolute right-5 top-3/4 translate-y-[-50%] text-gray-table-border" @click="togglePasswordIcon">
      <i v-if="showPassword" class="fa-regular fa-eye"> </i>
      <i v-else class="fa-regular fa-eye-slash"></i >
    </button>
  </div>
</template>
<style></style>