<script>
  import { getTaipeiYoubike, getTaipeiStation, getTaipeiAvailable } from '../api/getTaipeiYoubikeInfo'
  import { getKaohsiungYoubike } from '../api/getKaohsiungYoubikeInfo';
  import { getNewTaipeiYoubike } from '../api/getNewTaipeiYoubikeInfo';
  import { getTaichungYoubike } from '../api/getTaichungYoubikeInfo';
  import StopSearch from '../components/StopSearch.vue';
  import TheStopTable from '../components/TheStopTable.vue';
  import ThePagination from '../components/ThePagination.vue';
  import TheStopTableTest from '../components/TheStopTableTest.vue';

  export default {
  components: {
    StopSearch,
    TheStopTable,
    ThePagination,
  },
  data() {
    return {
      youbikeData:[],
      stationData:[],
      availableData:[],
      // youbikeDistrict:[],
      dataLen: 0,
      currentPage: 1,
      perPage: 10,
    }
  },
  methods: {
    async getTaipeiInfo () {
      try {
        const res = await getTaipeiYoubike()
        // const res = await getNewTaipeiYoubike()
        // const res = await getTaichungYoubike()
        // console.log(res)
        this.youbikeData = res
        this.dataLen = res.length
      } catch (error) {
        console.error(error)
      }
    },
    async getTaipeiStation () {
      try {
        const res = await getTaipeiStation()
        console.log(res)
        this.stationData = res
      } catch (error) {
        console.error(error)
      }
    },
    async getTaipeiAvailable () {
      try {
        const res = await getTaipeiAvailable()
        // console.log(res)
        this.availableData = res
      } catch (error) {
        console.error(error)
      }
    },
    handleNumClick(object) {
      this.currentPage = object.page
    },
    handleNextNumClick(target) {
      const id = target.id
      if(id === 'last-page') this.currentPage = this.totalPage
      else {
        if (this.currentPage !== this.totalPage) this.currentPage++
      }
    },
    handlePrevNumClick(target) {
      // console.log(target.id)
      const id = target.id
      if(id === 'first-page') this.currentPage = 1
      else {
        if (this.currentPage !== 1) this.currentPage--
      }
    },
  },
  computed: {
     getCityFullData() {
      if (this.stationData.length === this.availableData.length) {
        return this.stationData.map((station) => {
          const matchObj = this.availableData.find(obj => obj.StationUID === station.StationUID);
          return {
            ...station,
            AvailableRentBikes: matchObj ? matchObj.AvailableRentBikes : undefined,
          };
        });
      } else {
        return []; // Return an empty array or handle the case when lengths are not equal
      }
    },
    getDistrict() {
      const datas = this.youbikeData
      const districtSet = new Set()
      datas.map((data) => districtSet.add(data.sarea))
      return [...districtSet]
    },
    totalPage(){
      return Math.ceil(this.dataLen / this.perPage)
    },
    totalPageArr() {
      // const npage = Math.ceil(this.dataLen / this.perPage)
      return [...Array(this.totalPage + 1).keys()].slice(1)
    },
    showPage() {
      const startPage = Math.max(1, this.currentPage - 2)
      const endPage = Math.min(this.totalPage, startPage + 4)
      return this.totalPageArr.slice(startPage - 1, endPage)
    },
    updateShowData() {
      const lastIndex = this.currentPage * this.perPage
      const firstIndex = lastIndex - this.perPage
      return this.youbikeData.slice(firstIndex, lastIndex)
    }
  },
  created() {
    this.getTaipeiInfo()
    this.getTaipeiStation()
    // this.getTaipeiAvailable()
  }
  // async mounted () {

  // }
}
</script>

<template>
  <main class="container">
    <!-- {{ getDistrict }} -->
    <!-- {{ getCityFullData }} -->
    <h2 class="main-title">站點資訊</h2>
    <div class="desktop:grid desktop:grid-cols-2 desktop:gap-10 upon:grid-cols-[45%_55%]">
      <StopSearch :props="getDistrict"/>
    </div>
    <!-- <TheStopTableTest :stops="getCityFullData"/> -->
    <TheStopTable :stops="updateShowData"/>
    <ThePagination 
      :pages="showPage" 
      :totalPage="totalPage" 
      :currentPage="currentPage" 
      @numClick="handleNumClick" 
      @prevNumClick="handlePrevNumClick" 
      @nextNumClick="handleNextNumClick"/>
  </main>
</template>
<style></style>