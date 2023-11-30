<script>
export default {
  props: {
    visibleSlide: Number,
    index: Number,
    direction: String,
  },
 data() {
  return {

  }
 }
}
</script>

<template>
  <transition :name="direction">
    <div v-show="visibleSlide === index" class="absolute top-0 bottom-0 left-0 right-0">
      <slot></slot>
    </div>
  </transition>
</template>
<style>
  .left-enter-active {
      animation: slide-left-in 0.5s ease-in-out;
  }
  .left-leave-active {
      animation: slide-left-out 0.5s ease-in-out;
  }

  @keyframes slide-left-in{
      from  { transform: translate(-100%, 0%);}
      to { transform: translate(0%, 0%);} 
  }

  @keyframes slide-left-out{
      from  { transform: translate(0%, 0%);}
      to { transform: translate(100%, 0%);} 
  }
  

  .right-enter-active {
      animation: slide-right-in 0.5s ease-in-out;
  }
  .right-leave-active {
      animation: slide-right-out 0.5s ease-in-out;
  }
  @keyframes slide-right-out{
      from  { transform: translate(0%, 0%);}
      to { transform: translate(-100%, 0%);} 
  }
  @keyframes slide-right-in{
      from  { transform: translate(100%, 0%);}
      to { transform: translate(0%, 0%);} 
  }
</style>