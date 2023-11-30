<script>
import TheSwitchTag from '../components/TheSwitchTag.vue';
export default {
  components: {
    TheSwitchTag,
  },
  data() {
    return {
      tagTitle: [
        {
          id: 'card-borrow',
          title: '靠卡借車'
        },
        {
          id: 'code-borrow',
          title: '掃碼借車'
        },
      ]
    }
  },
  computed: {
   
  },
  methods: {
    
  }
}


</script>

<template>
  <main class="container">
    <h2 class="main-title">借還方式</h2>
    <TheSwitchTag :props="tagTitle"/>
  </main>
</template>
<style></style>

