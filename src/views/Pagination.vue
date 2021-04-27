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
      currentPage: 1
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
    }
  },
  computed: {
    filterData() {
      if (this.currentPage === 1) {
        return this.data.slice(this.currentPage - 1, this.currentPage * this.perPage)
      } else {
        return this.data.slice((this.currentPage - 1) * this.perPage + 1, this.currentPage * this.perPage + 1)
      }
    },
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
</style>