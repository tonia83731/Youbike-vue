<script>



export default {
  props: {
    headerActive: Boolean,
  },
  components: {
    
  },
  data() {
    return {

    }
  }
}

</script>

<template>
  <transition name="header-dropdown">
    <div v-if="headerActive" class="flex flex-col desktop:bg-default-white desktop:shadow-md desktop:rounded-sm desktop:absolute desktop:left-[calc(124px + 1fr)]">
      <slot></slot>
    </div>
  </transition>
</template>
<style lang="scss">
  .header-dropdown-enter-active, .header-dropdown-leave-active {
   transition: all .2s ease-out .15s;
  }
  .header-dropdown-enter, .header-dropdown-leave {
    opacity: 0;
    transform: translateY(-5px);
  }
</style>