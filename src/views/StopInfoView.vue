<script>
  import StopSearch from '../components/StopSearch.vue';
  import TheStopTable from '../components/TheStopTable.vue';
  import ThePagination from '../components/ThePagination.vue';
  export default {
  components: {
    StopSearch,
    TheStopTable,
    ThePagination,
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <main class="container">
    <h2 class="main-title">站點資訊</h2>
    <StopSearch />
    <TheStopTable />
    <ThePagination />
  </main>
</template>
<style></style>