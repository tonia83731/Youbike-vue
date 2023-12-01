<script>
import TheRemindBlock from './TheRemindBlock.vue';

export default {
  props: {
    tagSelected: String,
  },
  components: {
    TheRemindBlock,
  },
  data() {
    return {
      beforeRideData: [
        {
          id: 1,
          title: '確認前後煞車功能',
          text:'雙手漸進式調整煞車力道',
          url: '/src/assets/Check/ridingtips-before-icon1.svg',
          alert:'(切勿緊急煞車，以免造成危險)',
        },
        {
          id: 2,
          title: '檢查前後輪胎壓',
          text: '請確實檢查胎壓狀況',
          url: '/src/assets/Check/ridingtips-before-icon2.svg',
        },
        {
          id: 3,
          title: '檢查車燈',
          text: '確認前 / 後車燈功能正常',
          url: '/src/assets/Check/ridingtips-before-icon3.svg',
        },
        {
          id: 4,
          title: '調整座墊',
          text: '調整至適宜高度',
          url: '/src/assets/Check/ridingtips-before-icon4.1.svg',
        },
        {
          id: 5,
          title: '座墊反轉 請勿租用',
          text: '代表此輛故障待修。若發現車輛故障將座墊"調最低"後"反轉"，並致電客服人員，將派員前往維修',
          url: '/src/assets/Check/ridingtips-before-icon5.svg',
        },
      ]
    }
  },
  computed: {

  }
}
</script>

<template>
  <div v-if="tagSelected === 'before-ride'" class="before-ride-area shadow-md bg-default-white">
    <div class="pt-4 pb-8">
      <div class="sub-title text-center underline underline-offset-8">騎乘前檢查</div>
      <div
        class="before-ride">
        <!-- rows-4 justify-center mobile:grid-rows-2 mobile:grid-cols-2 tablet:grid-rows-none tablet:grid-cols-4 -->
        <TheRemindBlock :props="beforeRideData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.before-ride-area {
  padding: 20px 20px 10px;
  border-radius: 0 8px 8px 8px;
}
.before-ride {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-gap: 16px;
  justify-items: center;
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(5, 1fr);
  }
}

</style>