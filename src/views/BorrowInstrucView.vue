<script>
import TheSwitchTag from '../components/TheSwitchTag.vue';
import BorrowByCard from '../components/Borrow/BorrowByCard.vue';
import BorrowByCode from '../components/Borrow/BorrowByCode.vue';

export default {
  components: {
    TheSwitchTag,
    BorrowByCard,
    BorrowByCode
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
  <main class="bg-gray-border">
    <div class="container">
      <h2 class="main-title">借還方式</h2>
      <TheSwitchTag :props="tagTitle" :tagSelected="tagSelected" @tagSwitch="handleTagSwitch"/>
      <BorrowByCard :tagSelected="tagSelected"/>
      <BorrowByCode :tagSelected="tagSelected"/>
    </div>
  </main>
</template>
<style></style>

