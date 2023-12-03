<script>
export default {
  props: {
    label: String,
    name: String,
    isChecked: Boolean,
    isRequired: {
      type: Boolean,
      default: false,
    },
    inputValue: [String, Number],
    onChange: Function,
    customClass: String,
  },
  methods: {
    handleChange(e) {
      if(this.onChange) this.onChange(e.target.checked, e.target.value)
    }
  },
  computed: {
    
  }
}
</script>

<template>
  <div :class="customClass">
    <label :for="name"  class="checkbox-label">
      {{ label }}
      <input 
        type="checkbox" 
        :name="name" 
        :id="name" 
        class="checkbox-input" 
        :checked="isChecked"
        :required="isRequired"
        :value="inputValue"
        @change="handleChange"
        />
      <span class="checkbox-span"></span>
      <span v-if="isRequired" class="text-default-red">*</span>
    </label>
  </div>
</template>

<style lang="scss">
  .checkbox-label {
    display: block;
    position: relative;
    padding-left: 36px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #323232;
    font-size: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  .checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked + span {
      background-color: #B5CC22;
      border: 2px solid #B5CC22;
    }
    &:checked + span::after {
      display: block;
      border: solid #FFFFFF;
      border-width: 0 3px 3px 0;
    }
  }
  .checkbox-span {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    height: 18px;
    width: 18px;
    background-color: #FFFFFF;
    border: 2px solid #AEAEAE;
    border-radius: 2px;
    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 5px;
      top: 1.5px;
      transform: translate(-50%, -50%);
      width: 5px;
      height: 10px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
</style>