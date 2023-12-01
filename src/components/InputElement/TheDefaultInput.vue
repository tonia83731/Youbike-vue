<script>
  export default {
    props: {
      label: String,
      type: String,
      name: String,
      placeholder: String,
      inputValue: [String, Number],
      required: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      getFieldType() {
        return this.type || 'text'
      },
    }
  }
</script>

<template>
  <div class="flex flex-col mb-4 relative">
    <label :for="name" class="text-olive-green font-bold mb-2">
      {{ label }}
      <span v-if="required" class="text-default-red">*</span>
    </label>
    <Field 
      :type="getFieldType" 
      :name="name" 
      :id="name"
      class="h-[40px] text-light-green bg-gray-input px-4 rounded-lg font-medium placeholder:text-gray-table-border"
      :placeholder="`請輸入${ placeholder }`" 
      :value="inputValue"
      @input="$emit('input', $event.target.value)"
      v-validate="{required: required }"
    ></Field>
  </div>
</template>
<style></style>

<!-- <i class="fa-regular fa-eye"></i> -->
<!-- <i class="fa-regular fa-eye-slash"></i> -->