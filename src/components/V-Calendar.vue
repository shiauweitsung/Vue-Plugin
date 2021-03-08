<template>
  <div>
    <h1>v-Calendar</h1>
    <v-calendar :attributes="attributes" @dayclick="onDayClick" />
    <div>{{ days }}</div>
    <div>
      <date-picker v-model="time1" valueType="format"></date-picker>
      <date-picker v-model="time2" type="datetime"></date-picker>
      <date-picker v-model="time3" range></date-picker>
      <input type="text" v-model="time1" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'calendar1',
  data () {
    return {
      days: [],
      time1: null,
      time2: null,
      time3: null,
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
  },
}
</script>
<style lang="scss" scoped>
.calendar-input {
  display: inline-block;
  padding: 5px;
}
</style>