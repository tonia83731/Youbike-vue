<script>
  import ThePaymentCard from '../components/ThePaymentCard.vue';
  export default {
    components: {
      ThePaymentCard
    },
    data () {
      return {
        paymentCard1: [
          '4~8 小時內每 30 分鐘 20 元',
          '超過 8 小時每 30 分鐘 40 元',
          '未滿 30 分鐘以 30 分鐘計算'
        ],
        paymentCard2: [
          '超過２小時每 30 分鐘 40 元',
          '未滿 30 分鐘以 30 分鐘計算'
        ],
        moreInfo: [
          '票卡租車，會員票卡餘額需≧0元，方能租借。',
          '騎乘補助：104年4月1日起，會員騎乘前30分鐘由臺北市政府補助5元，超過30分鐘借車費用維持與現況相同。',
          'YouBike 2.0 適用優惠： 雙北轉乘、TPASS行政院通勤月票-基北北桃1200都會通、敬老卡、愛心卡優惠。',
          '雙北轉乘優惠：會員持「悠遊卡」租借YouBike，須於臺北市及新北市的站點借還車，且還車當下立即完成扣款，方能享有優惠。 (還車扣款時餘額不足／補扣款...等情況恕無法享有優惠)。',
          '道路救援：民眾騎乘臺北市YouBike，若需道路救援，臺北市境內將酌收新臺幣150元整。若超出前述範圍，需請民眾自行將車輛送回區域內，或由本公司視救援範圍及時程，加收調度費用。'
        ]
      }
    }
  }
</script>

<template>
  <main class="container">
    <h2 class="main-title">收費方式</h2>
    <div class="grid grid-rows-2 gap-8 mobile:flex mobile:justify-between mobile:items-center">
      <ThePaymentCard 
        title="YouBike 2.0"
        caption="4 小時內每 30 分鐘"
        money="10"
        :items="paymentCard1"
      />
      <span class="hidden desktop:block bg-gray-table-border w-[2px] h-[280px] mx-4"></span>
      <ThePaymentCard 
        title="YouBike 2.0E"
        caption="前 2 小時每 30 分鐘"
        money="20"
        :items="paymentCard2"
        extraText="適用於新竹、台中、高雄地區"
      />
    </div>
    <div class="mt-8">
      <div class="text-olive-green font-bold text-lg">詳細說明</div>
      <ul class="mt-2 pl-6">
        <li class="list-disc list-outside " v-for="(list, index) in moreInfo" :key="index">{{ list }}</li>
      </ul>
    </div>
  </main>
</template>
<style></style>