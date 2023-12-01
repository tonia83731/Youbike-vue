<script>
import TheBorrowBlock from './TheBorrowBlock.vue';
import CardRendOne from '../../assets/CardRent/type_G1-1.jpg'
import CardRendTwo from '../../assets/CardRent/type_G1-2.jpg'
import CardRendThree from '../../assets/CardRent/type_G1-3.jpg'
import CardRendFour from '../../assets/CardRent/type_G1-4.jpg'
import CardReturnOne from '../../assets/CardReturn/type_G2-1.jpg'
import CardReturnTwo from '../../assets/CardReturn/type_G2-2.jpg'
import CardReturnThree from '../../assets/CardReturn/type_G2-3.jpg'
import CardReturnFour from '../../assets/CardReturn/type_G2-4.jpg'

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
          url: CardRendOne,
          text: '按"啟動靠卡"鈕',
        },
        {
          id: 2,
          url: CardRendTwo,
          text: '將電子票證置於感應區靠卡',
        },
        {
          id: 3,
          url: CardRendThree,
          text: '螢幕顯示"請取車本車請還於 1.0/2.0/2.0E 停車柱"',
        },
        {
          id: 4,
          url: CardRendFour,
          text: '雙手握住把手往後拉出取車',
        },
      ],
      returnData: [
        {
          id: 1,
          url: CardReturnOne,
          text: '車輪對準導引槽',
        },
        {
          id: 2,
          url: CardReturnTwo,
          text: '將車鎖插入卡槽',
        },
        {
          id: 3,
          url: CardReturnThree,
          text: '確認螢幕顯示"還車成功請靠卡"',
        },
        {
          id: 4,
          url: CardReturnFour,
          text: '將電子票證置於感應區靠卡螢幕顯示"扣款金額"及"卡片餘額"即還車成功',
        },
      ]
    }
  },
  computed: {

  }
}
</script>

<template>
  <div v-if="tagSelected === 'card-borrow'" class="selected-area shadow-md bg-default-white">
    <div class="pt-4 pb-8">
      <div class="sub-title text-center underline underline-offset-8">靠卡借車</div>
      <div class="grid gap-4 grid-rows-4 justify-center mobile:grid-rows-2 mobile:grid-cols-2 tablet:grid-rows-none tablet:grid-cols-4">
        <TheBorrowBlock :steps="borrowData"/>
      </div>
    </div>
    <div class="pt-4 pb-8">
      <div class="sub-title text-center underline underline-offset-8">靠卡還車</div>
      <div class="grid gap-4 grid-rows-4 justify-center mobile:grid-rows-2 mobile:grid-cols-2 tablet:grid-rows-none tablet:grid-cols-4">
        <TheBorrowBlock :steps="returnData"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .selected-area {
    padding: 20px 20px 10px;
    // border: 0.5px solid #AEAEAE;
    border-radius: 0 8px 8px 8px;
    position: relative;
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
  // }
</style>