<script>
export default {
  props: {
    pages: Array,
    totalPage: Number,
    currentPage: Number,
  },
  components: {},
  data() {
    return {

    }
  },
  methods: {
    pageNumClick(e, page){
      const eventData = {
        target: e.target,
        page: page,
      };
      this.$emit('numClick', eventData);
    },
    pagePrevClick(e){
      this.$emit('prevNumClick', e.target)
    },
    pageNextClick(e){
      this.$emit('nextNumClick', e.target)
    }
  },
  computed: {
   
  }
}

</script>

<template>
  <div class="my-8 flex justify-end items-center">
    <a href="#" class="page-link" id="first-page" @click="($event) => pagePrevClick($event)">
      <i class="fa-solid fa-angles-left text-sm" id="first-page"></i>
    </a>
    <a href="#" class="page-link" id="prev-arrow" @click="($event) => pagePrevClick($event)">
      <i class="fa-solid fa-chevron-left text-sm" id="prev-arrow"></i>
    </a>
    <a v-for="page in pages" :key="page" herf="#" class="page-link" :class="{'current' : currentPage === page}" @click="($event) => pageNumClick($event, page)">{{ page }}</a>
    <a href="#" class="page-link" id="next-arrow" @click="($event) => pageNextClick($event)">
      <i class="fa-solid fa-chevron-right text-sm" id="next-arrow"></i>
    </a>
    <a href="#" class="page-link" id="last-page" @click="($event) => pageNextClick($event)">
      <i class="fa-solid fa-angles-right text-sm" id="last-page"></i>
    </a>
    <p class="text-gray-table-border ml-2.5">共 {{ totalPage }} 頁</p>
  </div>
</template>
<style lang="scss">
  .page-link {
    color: #AEAEAE;
    margin: 0 5px;
    &.current {
      color: #B5CC22;
      font-weight: 700;
    }
  }
</style>