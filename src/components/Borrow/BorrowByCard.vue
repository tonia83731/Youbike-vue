<script>
import TheBorrowBlock from './TheBorrowBlock.vue';
import CardRendOne from '../../assets/CardRent/type_G1-1.jpg'
export default {
  props: {
  },
  components: {
    TheBorrowBlock,
  },
  data() {
    return {
      CardRendOne: CardRendOne
    }
  },
  computed: {

  }
}
</script>

<template>
  <div class="">
    <div class="sub-title text-center">靠卡借車</div>
    <div class="">
      <TheBorrowBlock step="1" imageUrl="../../assets/CardRent/type_G1-1.jpg" />
    </div>
  </div>
</template>

<style lang="scss"></style>