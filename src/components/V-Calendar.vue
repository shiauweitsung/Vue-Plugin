<template>
  <div>
    <h1>v-Calendar</h1>
    <v-calendar :attributes="attributes" @dayclick="onDayClick" />
    <div>{{ days }}</div>
    <div>
      <date-picker v-model="time1" valueType="format"></date-picker>
      <br />
      <hr />
      <date-picker v-model="time2" type="datetime"></date-picker>
      <br />
      <hr />
      <date-picker v-model="time3" range></date-picker>
      <br />
      <hr />
      <input type="text" v-model="time1" />
    </div>
    <vue-datepicker-local v-model="time" show-buttons></vue-datepicker-local>
    <input type="text" @input="sendtoparent" v-model="count" />
    <button @click="addcount">++</button>
  </div>
</template>
<script>
import VueDatepickerLocal from 'vue-datepicker-local'
export default {
  name: 'calendar1',
  components: {
    VueDatepickerLocal
  },
  data () {
    return {
      days: [],
      time: '',
      time1: null,
      time2: null,
      time3: null,
      count: '',
      counter: 0
    }
  },
  computed: {
    dates () {
      return this.days.map(day => day.date);
    },
    attributes () {
      return this.dates.map(date => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick (day) {
      const idx = this.days.findIndex(d => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
    show () {
      console.log('show')
    },
    sendtoparent () {
      this.$emit('emitadd', this.count)
    },
    addcount () {
      this.counter++
      this.$emit('addCounter', this.counter)
    }
  },
}
</script>
<style lang="scss" scoped>
.calendar-input {
  display: inline-block;
  padding: 5px;
}
</style>