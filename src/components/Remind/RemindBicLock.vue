<script>
import TheBorrowBlock from '../Borrow/TheBorrowBlock.vue';
import LockBicOne from '../../assets/Check/Lock/parking-lock-pic1.png'
import LockBicTwo from '../../assets/Check/Lock/parking-lock-pic2.png'
import LockBicThree from '../../assets/Check/Lock/parking-lock-pic3.png'
import LockBicFour from '../../assets/Check/Lock/parking-lock-pic4.png'
import LockBicFive from '../../assets/Check/Lock/parking-lock-pic5.png'
import UnlockBicOne from '../../assets/Check/UnLock/Card/parking-unlock-pic1.png'
import UnlockBicTwo from '../../assets/Check/UnLock/Card/parking-unlock-pic2.png'
import UnlockBicThree from '../../assets/Check/UnLock/Card/parking-unlock-pic3.png'
import UnlockBicFour from '../../assets/Check/UnLock/Card/parking-unlock-pic4.png'
import UnlockCodeOne from '../../assets/Check/UnLock/Code/parking-unlock-pic3.png'
import UnlockCodeTwo from '../../assets/Check/UnLock/Code/parking-unlock-pic4.png'
import UnlockCodeThree from '../../assets/Check/UnLock/Code/parking-unlock-pic5.png'
import UnlockCodeFour from '../../assets/Check/UnLock/Code/parking-unlock-pic6.png'

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
          url: LockBicOne,
          text: '車頭向右旋轉',
        },
        {
          id: 2,
          url: LockBicTwo,
          text: '對準上下鎖孔',
        },
        {
          id: 3,
          url: LockBicThree,
          text: '從置物籃內取出插銷',
        },
        {
          id: 4,
          url: LockBicFour,
          text: '將插銷對準鎖孔，插入到底"免繞前輪，免鑰匙"',
        },
        {
          id: 5,
          url: LockBicFive,
          text: '螢幕顯示"臨停上鎖成功"即完成',
        },
      ],
      returnCardData: [
        {
          id: 1,
          url: UnlockBicOne,
          text: '按"啟動靠卡"鈕',
        },
        {
          id: 2,
          url: UnlockBicTwo,
          text: '請於感應區靠卡螢幕顯示 “請移除隨車鎖”',
        },
        {
          id: 3,
          url: UnlockBicThree,
          text: '取出插銷',
        },
        {
          id: 4,
          url: UnlockBicFour,
          text: '螢幕顯示"臨停解鎖成功"即完成',
        },
      ],
      returnCodeData: [
        {
          id: 1,
          url: UnlockCodeOne,
          text: '按"啟動掃碼"鈕',
        },
        {
          id: 2,
          url: UnlockCodeTwo,
          text: '使用 YouBike APP,按主畫面下方 “掃碼借車”。掃描 QR 碼或輸入驗證碼螢幕顯示 “請移除隨車鎖”',
        },
        {
          id: 3,
          url: UnlockCodeThree,
          text: '取出插銷',
        },
        {
          id: 4,
          url: UnlockCodeFour,
          text: '螢幕顯示"臨停解鎖成功"即完成',
        },
      ],
      lockType: 'card',
    }
  },
  computed: {

  },
  methods: {
    handleUnlockType(e) {
      console.log(e.target.id)
      this.lockType = e.target.id
    }
  }
}
</script>

<template>
  <div v-if="tagSelected === 'lock'" class="selected-area shadow-md bg-default-white">
    <div class="pt-4 pb-8">
      <div class="sub-title text-center underline underline-offset-8">腳踏車上鎖</div>
      <div
        class="grid gap-4 grid-rows-4 justify-center mobile:grid-rows-2 mobile:grid-cols-3 desktop:grid-rows-none desktop:grid-cols-5">
        <TheBorrowBlock :steps="borrowData" />
      </div>
    </div>
    <div class="pt-4 pb-8">
      <div class="sub-title text-center underline underline-offset-8">腳踏車解鎖</div>
      <div class="flex justify-center">
        <button type="button" class="opacity-50 mx-2" @click="handleUnlockType" id="card" :class="{ 'selected': lockType === 'card' }" >靠卡解鎖</button>
        <button type="button" class="opacity-50 mx-2" @click="handleUnlockType" id="code" :class="{ 'selected': lockType === 'code' }" >掃碼解鎖</button>
      </div>
    </div>
    <div v-if="lockType === 'card'" class="pt-4 pb-8">
      <div
        class="grid gap-4 grid-rows-4 justify-center mobile:grid-rows-2 mobile:grid-cols-2 tablet:grid-rows-none tablet:grid-cols-4">
        <TheBorrowBlock :steps="returnCardData" />
      </div>
    </div>
    <div v-if="lockType === 'code'" class="pt-4 pb-8">
      <div
        class="grid gap-4 grid-rows-4 justify-center mobile:grid-rows-2 mobile:grid-cols-2 tablet:grid-rows-none tablet:grid-cols-4">
        <TheBorrowBlock :steps="returnCodeData" />
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
.selected {
  font-weight: 700;
  opacity: 1;
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