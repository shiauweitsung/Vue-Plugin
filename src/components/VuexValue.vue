<template>
  <div>
    <h1>傳值練習</h1>
    <button @click.prevent="getValue">更改value</button>
    <alert />
    {{ value }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'vuexValue',
  computed: {
    ...mapGetters('vuexvalue', ['value'])
  },
  methods: {
    // ...mapActions('vuexvalue', ['getValue']),
    getValue () {
      let message = [
        {
          message: '1230',
          status: 'success'
        }
      ]

      this.$store.dispatch('vuexvalue/getValue', message)
    }
  },
  created () {
    // let message = '1230'
    // let status = 'success'
    // this.$store.dispatch('updateMessage', { message, status })
    this.$store.dispatch({
      type: 'updateMessage',
      message: '測試',
      status: 'success'
    })
  }
}
</script>