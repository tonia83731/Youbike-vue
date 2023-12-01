<script>
import TheSwitchTag from '../components/TheSwitchTag.vue';
import RemindBeforeRide from '../components/Remind/RemindBeforeRide.vue';
import RemindSitAdjust from '../components/Remind/RemindSitAdjust.vue';
import RemindBicLock from '../components/Remind/RemindBicLock.vue';

export default {
  components: {
    TheSwitchTag,
    RemindBeforeRide,
    RemindSitAdjust,
    RemindBicLock
  },
  data() {
    return {
      tagTitle: [
        {
          id: 'before-ride',
          title: '騎乘前檢查'
        },
        {
          id: 'sit-adjust',
          title: '座墊調整教學'
        },
        {
          id: 'lock',
          title: '臨停上鎖教學'
        },
      ],
      tagSelected: 'before-ride'
    }
  },
  computed: {

  },
  methods: {
     handleTagSwitch(target) {
      // console.log(target)
      this.tagSelected = target.id
      // console.log(this.tagSelected)
    }
  }
}


</script>

<template>
  <main class="bg-gray-border">
    <div class="container">
      <h2 class="main-title">騎乘須知</h2>
      <TheSwitchTag :props="tagTitle" :tagSelected="tagSelected" @tagSwitch="handleTagSwitch" customClass="grid-cols-3"/>
      <RemindBeforeRide :tagSelected="tagSelected"/>
      <RemindSitAdjust :tagSelected="tagSelected"/>
      <RemindBicLock :tagSelected="tagSelected"/>
    </div>
  </main>
</template>
<style></style>

