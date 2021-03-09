<template>
  <div>
    <h1>驗證套件list</h1>
    <vee-validate />
    <validateeazy />
  </div>
</template>
<script>
import veeValidate from '@/components/Vee-validate.vue'
import validateeazy from '@/components/Vue-validate-eazy.vue'
export default {
  name: 'validate',
  components: {
    veeValidate,
    validateeazy
  }
}
</script>