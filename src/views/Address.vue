<template>
  <div class="address">
    <!-- 偵聽 Select 的 input事件，把得到的value傳給cityIdx -->
    <h2>選到第 {{ cityIdx }} 個城市</h2>
    <br />
    <Select v-model="cityIdx" :options="cities" />
    <Select v-model="areaIdx" :options="areas" />
    <br />
    <h2>{{ cityIdx }} - {{ areaIdx }} - {{ zip }}</h2>
    <div>
      <h4>日期格式</h4>
      <p>{{ time.toDateString() }} <span>toDateString</span></p>
      <p>{{ time.toISOString() }} <span>toISOString</span></p>
      <p>{{ time.toJSON() }} <span> toJSON</span></p>
      <p>{{ time.toLocaleDateString() }} <span>toLocaleDateString</span></p>
      <p>{{ time.toLocaleString() }} <span>toLocaleString</span></p>
      <p>{{ time.toLocaleTimeString() }} <span> toLocaleTimeString</span></p>
      <p>{{ time.toString() }} <span>toString</span></p>
      <p>{{ time.toTimeString() }} <span> toTimeString</span></p>
      <p>{{ time.toUTCString() }} <span>toUTCString</span></p>
    </div>
  </div>
</template>

<script>
import Select from '../components/address_select';
import cities from '../data.json';

export default {
  name: 'addressIndex',
  components: {
    Select
  },
  data () {
    return {
      cityIdx: 0,
      areaIdx: 0,
      time: new Date()
    };
  },
  computed: {
    cities () {
      return cities;
    },
    areas () {
      return cities[this.cityIdx].areas;
    },
    zip () {
      return this.areas[this.areaIdx].zip;
    }
  },
  watch: {
    cityIdx () {
      this.areaIdx = 0;
    }
  }
};
</script>

<style>
.address {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
