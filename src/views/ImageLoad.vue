<template>
  <div>
    <image-load1 />
    <image-load2 />
    <image-load3 />
  </div>
</template>
<script>
import imageLoad1 from '@/components/ImageLoad1.vue'
import imageLoad2 from '@/components/ImageLoad2.vue'
import ImageLoad3 from '../components/ImageLoad3.vue'
export default {
  name: 'imageLoad',
  components: {
    imageLoad1,
    imageLoad2,
    ImageLoad3
  }
}
</script>