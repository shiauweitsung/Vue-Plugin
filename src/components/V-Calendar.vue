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
    <input type="text" :value="dateFormat(time)" />
    <br />
    <hr />
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
      time: new Date(),
      time1: null,
      time2: null,
      time3: null,
      count: '',
      counter: 0,
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
    },
    dateFormat: function (time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    }
  },
}
</script>
<style lang="scss" scope>
.calendar-input {
  display: inline-block;
  padding: 5px;
}
</style>