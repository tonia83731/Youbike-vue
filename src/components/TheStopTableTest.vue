<script>
import { replace } from '../utilities/replace'
export default {
  props: {
    stops: Array,
  },
  components: {},
  data() {
    return {
      theadData:['縣市', '區域', '站點名稱', '可借車輛', '可選空位']
    }
  },
  methods: {
    replaceFuc(inputString) {
      return replace(inputString)
    }
  }
}

</script>

<template>
  <table class="stop-table">
    <thead class="bg-light-green text-default-white font-medium">
      <tr class="h-[66px]">
        <th v-for="data in theadData" :key="data" class="border-0">{{ data }}</th>
      </tr>
    </thead>
    <tbody class="">
      <tr v-for="stop in stops" :key="stop.StationUID
        " class="h-[72px] even:bg-gray-default">
        <td class="stop-td" v-if="stop.AuthorityID === 'TPE'">台北市</td>
        <td class="stop-td">sarea</td>
        <td class="stop-td">{{ replaceFuc(stop.StationName.Zh_tw) }}</td>
        <td class="stop-td">{{ stop.BikesCapacity }}</td>
        <td class="stop-td">{{ stop.AvailableRentBikes }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="scss">
  .stop-table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    border: 0.5px solid #AEAEAE;
    @media screen and (min-width: 768px) {
      border-radius: 28px;
    }
  }
  th {
    @media screen and (max-width: 768px) {
      &:nth-last-child(-n + 2) {
        display: none;
      }
    }
  }
  .stop-td {
    border: none;
    color: #323232;
    &:nth-last-child(-n + 2) {
      color: #B5CC22;
      font-weight: 700;
    }
    &:not(:nth-child(3)) {
      text-align: center;
    }
    @media screen and (max-width: 768px) {
      &:nth-last-child(-n + 2) {
        display: none;
      }
    }
  }
</style>