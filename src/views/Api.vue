<template>
  <div>
    <h2>API練習</h2>
    <!-- <h4>取得特定人列表</h4> -->
    <!-- <div v-for="(item, i) in data" :key="i">
      <a
        :href="`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`"
        target="_blank"
        >{{ item.contentDetails.videoPublishedAt }}</a
      >
      <iframe
        :src="`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`"
        frameborder="0"
      >
      </iframe>
    </div> -->
    <h4>搜尋練習</h4>
    <input type="text" v-model="search" />
    <button @click="getData">search</button>
    <div v-if="searchData.length">
      <div v-for="(item, i) in searchData" :key="i">
        <a
          :href="`https://www.youtube.com/watch?v=${item.id.videoId}`"
          target="_blank"
          >{{ item.snippet.title }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      search: '',
      searchData: []
    }
  },
  methods: {
    getData() {
      // let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=UUMUnInmOkrWN4gof9KlhNmQ&key=AIzaSyAGq7qWrMHwStLKzZi9z5WwSRsy7h0ZMmo&maxResults=20`
      // let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.search}&key=AIzaSyAGq7qWrMHwStLKzZi9z5WwSRsy7h0ZMmo&type=video&maxResults=20`
      let url = `https://data.ntpc.gov.tw/api/datasets/DE4CFD62-E977-4C4F-822F-7D2AA65F6E4A/json/preview`
      this.$http.get(url).then(res => {
        console.log(res)
        this.data = res.data
        // this.searchData = res.data.items
        console.log('add')
      }).catch(res => {
        console.log('error', res)
      })
    }
  },
  created() {
    // this.getData()
  }
}
</script>