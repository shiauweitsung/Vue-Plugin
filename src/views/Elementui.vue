<template>
  <div>
    <h2>element sample</h2>
    <el-row>
      <el-button>默認按鈕</el-button>
      <el-button type="primary">主要按鈕</el-button>
      <el-button type="success">成功按鈕</el-button>
      <el-button type="info">信息按鈕</el-button>
      <el-button type="warning">警告按鈕</el-button>
      <el-button type="danger">危險按鈕</el-button>
    </el-row>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <i class="el-icon-loading"></i>
    <div class="infinite-list-wrapper" style="overflow: auto">
      <!-- disabled:false會執行載入 -->
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <li v-for="(i, key) in count" :key="key" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading">加載中...</p>
      <p v-if="noMore">沒有更多了</p>
    </div>
    <el-date-picker v-model="value1" type="date" placeholder="選擇日期">
    </el-date-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 10,
      loading: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
    }
  },
  computed: {
    noMore() {
      return this.count >= 20
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  methods: {
    load() {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>
