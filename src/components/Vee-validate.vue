<template>
  <div>
    <h1>驗證套件 vee-validate</h1>
    <ValidationObserver>
      <ValidationProvider
        v-slot="{ errors, classes }"
        rules="email"
        name="email"
      >
        <input :class="classes" v-model="value" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </ValidationObserver>
  </div>
</template>
<script>
import { extend } from 'vee-validate'
export default {
  name: 'vee-validate',
  data () {
    return {
      value: ''
    }
  }
}
extend('positive', value => {
  return value >= 10;
});
</script>
