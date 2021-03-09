<template>
  <div>
    <h1>日期套件</h1>
    <VCalendar @emitadd="acceptcount" @addCounter="addCounter2" />
    {{ counter }}
    {{ txt }}
  </div>
</template>
<script>
import VCalendar from '@/components/V-Calendar.vue'
export default {
  name: 'validate',
  data () {
    return {
      counter: '',
      txt: ''
    }
  },
  components: {
    VCalendar
  },
  methods: {
    acceptcount (count) {
      this.counter = count
      console.log(count)
    },
    addCounter2 (counter) {
      this.txt = counter
      console.log(counter)
    }
  }
}
</script>