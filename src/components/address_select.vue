<template>
  <!-- 錯誤寫法: select的v-model指定覆蓋上層的組件的props -> 所以選擇完縣市後cityIdx這個props不會被覆蓋 -->
  <!-- <select v-model="value"> -->
  <select v-model="index">
    <option value="" disabled>請選擇</option>
    <option :key="idx" v-for="(item, idx) in options" :value="idx">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'address_select',
  props: ['value', 'options'],
  computed: {
    index: {
      get () {
        return this.value;
      },
      set (val) {
        // input不能改
        this.$emit('input', val);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
