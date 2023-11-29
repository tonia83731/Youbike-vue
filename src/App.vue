<script>
import { computed } from 'vue';
import { useGeolocation } from './utilities/useGeolocation';

import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  setup() {
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))
    return { currPos }
  }
}
</script>

<template>
  <TheHeader />
  <router-view></router-view>
  <!-- <div class="flex">
    <div class="m-auto">
      Latitude: {{ currPos.lat.toFixed(2) }}, Longtitude: {{ currPos.lng.toFixed(2) }}
    </div>
  </div> -->
</template>

<style scoped>

</style>
