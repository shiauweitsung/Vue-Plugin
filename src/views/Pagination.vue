<template>
  <div>
    <h2>分頁邏輯</h2>
    <el-row :gutter="12">
      <el-col :span="8" v-for="(item, i) in filterData" :key="i" class="card">
        <el-card shadow="hover">
          {{ item.Name }}
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      :page-size="perPage"
      :pager-count="5"
      layout="prev, pager, next"
      :total="dataLength"
      @current-change="changePage"
    >
    </el-pagination>
    <h2>滾動載入</h2>
    <div class="infinite-list-wrapper" style="overflow: auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <el-row :gutter="12">
          <el-col :span="8" v-for="(item, i) in scrollData" :key="i">
            <el-card shadow="hover" class="card">
              <li class="list-item">{{ item.Name }}</li>
            </el-card>
          </el-col>
        </el-row>
      </ul>
      <p v-if="loading">加載中...</p>
      <p v-if="noMore">沒有更多了</p>
    </div>
    <h2>純JS分頁邏輯</h2>
    <div class="content"></div>
    <div>
      {{ dataLength }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      dataLength: 0,
      perPage: 9,
      currentPage: 1,
      scrollPage: 9,
      scrollCount: 1,
      loading: false,
      maxData: this.currentPage * this.perPage,
      minData: (this.currentPage * this.perPage) - this.perPage + 1
    }
  },
  methods: {
    getData() {
      const url = `https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json`
      const vm = this
      this.$http.get(url).then(res => {
        vm.data = res.data.result.records
        vm.dataLength = res.data.result.records.length
      })
    },
    changePage(e) {
      this.currentPage = e
    },
    load() {
      this.loading = true
      setTimeout(() => {
        this.scrollCount += 1
        this.loading = false
      }, 2000)
    },
    getContent() {

    }
  },
  computed: {
    filterData() {
      if (this.currentPage === 1) {
        return this.data.slice(this.currentPage - 1, this.currentPage * this.perPage)
      } else {
        return this.data.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
      }
    },
    scrollData() {
      return this.data.slice(0, this.scrollPage * this.scrollCount)
    },
    noMore() {
      return this.scrollData.length >= this.dataLength
    },
    disabled() {
      return this.loading || this.noMore
    },
    jsData() {
      return this.data.slice(this.minData, this.maxData)
    }
  },
  created() {
    this.getData()
  }
}
</script>
<style lang="scss" scope>
.card {
  margin-top: 30px;
}
.list {
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
}
.list-item {
  list-style: none;
}
</style>