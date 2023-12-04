<script>
import TheHeader from './components/Header/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
}
</script>

<template>
  <TheHeader />
  <router-view></router-view>
</template>

<style scoped>

</style>
