<script>
import TheBorrowBlock from '../Borrow/TheBorrowBlock.vue';
import SitAdjustOne from '../../assets/Check/SitCheck/adjust-pic1.png'
import SitAdjustTwo from '../../assets/Check/SitCheck/adjust-pic2.png'
import SitAdjustThree from '../../assets/Check/SitCheck/adjust-pic3.png'

export default {
  props: {
    tagSelected: String,
  },
  components: {
    TheBorrowBlock,
  },
  data() {
    return {
      borrowData: [
        {
          id: 1,
          url: SitAdjustOne,
          text: '向上按壓，調整高度',
        },
        {
          id: 2,
          url: SitAdjustTwo,
          text: '放開拉桿，聽見喀聲',
        },
        {
          id: 3,
          url: SitAdjustThree,
          text: '往下壓確認座墊牢固',
        },
      ],
    }
  },
  computed: {

  }
}
</script>

<template>
  <div v-if="tagSelected === 'sit-adjust'" class="selected-area shadow-md bg-default-white">
    <div class="pt-4 pb-8">
      <div class="sub-title text-center underline underline-offset-8">座墊調整教學</div>
      <div
        class="grid gap-4 grid-rows-3 justify-center mobile:grid-rows-2 mobile:grid-cols-2 tablet:grid-rows-none tablet:grid-cols-3">
        <TheBorrowBlock :steps="borrowData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.selected-area {
  padding: 20px 20px 10px;
  // border: 0.5px solid #AEAEAE;
  border-radius: 0 8px 8px 8px;
  // position: relative;
}

// .selected-area::before {
//   content:" ";
//   position: absolute;
//   width: 50%;
//   top: -1px;
//   left: 0;
//   border: 1px solid #FFFFFF;
//   @media screen and (min-width: 768px) {
//     width: 138px;
//   }
// }</style>