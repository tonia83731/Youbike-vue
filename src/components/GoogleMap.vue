<template>
  <div ref="mapDiv" class="google-map"></div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useGeolocation } from '../utilities/useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'

export default {
  data() {
    return {}
  },
  methods: {
    
  },
  mounted(){},
  setup() {
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))
    
    const loader = new Loader({apiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    onMounted(async() => {
      await loader.importLibrary('maps')
      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 15,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false
      })
    })
    return { currPos, mapDiv }
  },
  created() {
    // const { coords } = useGeolocation()
    // const currPos = computed(() => ({
    //   lat: coords.value.latitude,
    //   lng: coords.value.longitude
    // }))
    // this.currentPosition = currPos
  }
}
</script>
<style>
  .google-map{
    width: 100%;
    height: auto;
  }
</style>