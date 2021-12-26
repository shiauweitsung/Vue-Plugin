<template>
  <div>
    <p class="lol_name">1992552281</p>
    <input type="text" id="name" value="" />
    <button class="search" id="search" @click="getlol()">搜尋</button>
    <div class="lol-wrap">
      <div class="item" v-for="(item, i) in data" :key="i">
        <h4>{{ item.name }}</h4>
        <img
          :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.id}_0.jpg`"
          alt=""
        />
        <img
          :src="`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/${item.image.full}`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: '',
    };
  },
  methods: {
    getlol() {
      let url = `http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json`;
      this.$http.get(url).then(res => {
        console.log(res)
        this.data = res.data.data
      })
    }
  },
};
</script>
<style lang="scss">
.lolwrap {
  display: flex;
  justify-content: space-around;
}
.item {
  flex-basis: 32%;
  max-width: 32%;
}
</style>
