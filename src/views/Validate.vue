<template>
  <div>
    <h1>驗證套件list</h1>
    <vee-validate />
  </div>
</template>
<script>
import veeValidate from '@/components/Vee-validate.vue'
export default {
  name: 'validate',
  components: {
    veeValidate
  }
}
</script>