<script>
  export default {
    props: {
      label: String,
      type: String,
      name: String,
      placeholder: String,
    },
    computed: {
      getFieldType() {
        return this.type || 'text'
      },
    }
  }
</script>

<template>
  <div class="flex flex-col mb-4">
    <label :for="`login-${name}`" class="font-bold mb-2">{{ label }}</label>
    <Field :type="getFieldType" :name="`login-${name}`" :id="`login-${name}`"
      class="h-[40px] text-light-green bg-gray-input px-4 rounded-lg font-medium placeholder:text-gray-table-border"
      :placeholder="`請輸入${ placeholder }`" ></Field>
  </div>
</template>
<style></style>