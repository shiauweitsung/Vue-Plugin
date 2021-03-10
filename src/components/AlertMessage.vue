<template>
  <div>
    <transition-group name="fade">
      <div
        class="message"
        v-for="(item, key) in message"
        :key="key"
        :class="item.status"
      >
        <img
          src="~@/assets/images/loading/loading.gif"
          alt=""
          style="width: 32px"
        />
        <p>{{ item.message }}</p>
        <button
          type="button"
          @click="removeMessageNow(key)"
          aria-label="Close"
          class="close-btn"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'alertMessage',
  // data () {
  //   // 元件的資料 必須使用return  否則會讀不到資料
  //   return {
  //     message: []
  //   }
  // },
  computed: {
    ...mapGetters(['message'])
  },
  methods: {
    updateMessage: function (message, status) {
      // const vm = this
      // const timestemp = Math.floor(new Date() / 1000)
      // this.message.push({
      //   message,
      //   status,
      //   timestemp
      // })
      // vm.removeMessage(timestemp)
      this.$store.dispatch('updateMessage', { message, status })
    },
    removeMessage: function (timestemp) {
      // const vm = this
      // setTimeout(function () {
      //   vm.message.forEach(function (item, i) {
      //     if (item.timestemp === timestemp) {
      //       vm.message.splice(i, 1)
      //     }
      //   })
      // }, 3000)
      this.$store.dispatch('removeMessage', timestemp)
    },
    removeMessageNow: function (num) {
      this.$store.dispatch('removeMessageNow', num)
    }
  },
  created () {
    // this.$bus.$on('message', (message, status) => {
    //   this.updateMessage(message, status)
    // })
  }
}
</script>
<style lang="scss" scope>
.message {
  position: fixed;
  right: 0px;
  top: 100px;
  padding: 10px 15px;
  text-align: center;
  transition: all 0.5s;
  color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    margin-left: 15px;
    margin-right: 15px;
  }
}
.close-btn {
  text-align: right;
}
.success {
  background-color: #ff9a9e;
}
.error {
  background-color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
