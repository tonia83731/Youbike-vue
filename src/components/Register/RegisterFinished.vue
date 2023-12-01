<script>
export default {
  props: {
    currentActive: Number,
    numberArr: Array,
  },
  components: {
    
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
  <div v-if="currentActive === numberArr.length" class="flex flex-col justify-center items-center">
    <h5 class=" text-olive-green font-bold">註冊成功</h5>
    <h5 class=" text-olive-green font-bold">歡迎使用Youbike服務!</h5>
    <img src="../../assets/Frame.svg" alt="" class="mt-4">
  </div>
</template>
<style></style>