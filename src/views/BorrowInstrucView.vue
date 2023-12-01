<script>
import TheSwitchTag from '../components/TheSwitchTag.vue';
import BorrowByCard from '../components/Borrow/BorrowByCard.vue';
export default {
  components: {
    TheSwitchTag,
    BorrowByCard
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
      ],
      tagSelected: 'card-borrow'
    }
  },
  computed: {
   
  },
  methods: {
    handleTagSwitch(target) {
      console.log(target)
      this.tagSelected = target.id
      console.log(this.tagSelected)
    }
  }
}


</script>

<template>
  <main class="container">
    <h2 class="main-title">借還方式</h2>
    <TheSwitchTag :props="tagTitle" :tagSelected="tagSelected" @tagSwitch="handleTagSwitch"/>
    <BorrowByCard />
  </main>
</template>
<style></style>

