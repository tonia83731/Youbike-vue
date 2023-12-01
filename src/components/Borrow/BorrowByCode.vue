<script>
import TheBorrowBlock from './TheBorrowBlock.vue';
import CodeRentOne from '../../assets/CodeRent/type_O1-1.jpg'
import CodeRentTwo from '../../assets/CodeRent/type_O1-2.jpg'
import CodeRentThree from '../../assets/CodeRent/type_O1-3.jpg'
import CodeReturnOne from '../../assets/CodeReturn/type_O2-1.jpg'
import CodeReturnTwo from '../../assets/CodeReturn/type_O2-2.jpg'
import CodeReturnThree from '../../assets/CodeReturn/type_O2-3.jpg'
import qrCode from '../../assets/CodeRent/qr.png'

export default {
  props: {
    tagSelected: String,
  },
  components: {
    TheBorrowBlock,
  },
  data() {
    return {
      qrCode: qrCode,
      borrowData: [
        {
          id: 1,
          url: CodeRentOne,
          text: '按"啟動掃碼"鈕',
        },
        {
          id: 2,
          url: CodeRentTwo,
          text: '使用YouBike 2.0 APP按下主畫面下方"掃碼借車"對準車機螢幕，掃描 QR 碼或 輸入驗證碼解鎖(若遇強光無法掃碼，輸入驗證碼即可解鎖)',
        },
        {
          id: 3,
          url: CodeRentThree,
          text: '螢幕顯示"請取車本車請還於 2.0 停車柱"雙手握住把手往後拉出取車',
        },
      ],
      returnData: [
        {
          id: 1,
          url: CodeReturnOne,
          text: '車輪對準導引槽',
        },
        {
          id: 2,
          url: CodeReturnTwo,
          text: '將車鎖插入卡槽',
        },
        {
          id: 3,
          url: CodeReturnThree,
          text: '螢幕顯示"還車成功"即完成',
        },
      ]
    }
  },
  computed: {

  }
}
</script>

<template>
  <div v-if="tagSelected === 'code-borrow'" class="selected-area shadow-md bg-default-white">
    <div class="pt-4 pb-8">
      <div class="sub-title text-center underline underline-offset-8">掃碼借車</div>
      <div
        class="grid gap-4 grid-rows-4 justify-center mobile:grid-rows-2 mobile:grid-cols-2 tablet:grid-rows-none tablet:grid-cols-4">
        <TheBorrowBlock :steps="borrowData" />
        <div class="rounded-sm shadow-lg text-sm flex flex-col items-center px-4 py-2 bg-gray-input w-[250px] mobile:w-full">
          <p class="mb-2">使用YouBike 2.0 APP，並綁定掃碼綁定卡(信用卡或電子支付)，即可使用手機掃碼租借</p>
          <img :src="qrCode" alt="">
          <p class="mt-2">下載官方YouBike 2.0 APP</p>
        </div>
      </div>
    </div>
    <div class="pt-4 pb-8">
      <div class="sub-title text-center underline underline-offset-8">掃碼還車</div>
      <div
        class="grid gap-4 grid-rows-4 justify-center mobile:grid-rows-2 mobile:grid-cols-2 tablet:grid-rows-none tablet:grid-cols-4">
        <TheBorrowBlock :steps="returnData" />
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
//   content: " ";
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