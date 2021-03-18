<template>
  <div>
    <h2>page loading 2</h2>
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
      >
        <div class="loadingio-spinner-spin-vr67c069ls">
          <div class="ldio-i4ihhev39wf">
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
          </div>
        </div>
        <!-- <img src="@/assets/images/loading/loading.gif" alt="" /> -->
      </loading>

      <label><input type="checkbox" v-model="fullPage" />全畫面</label>
      <button @click.prevent="doAjax">fetch Data</button>
      <br />
      <a href="https://www.npmjs.com/package/vue-loading-overlay">參考網址</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page1',
  data () {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    doAjax () {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false
      }, 5000)
    },
    onCancel () {
      console.log('User cancelled the loader.')
    }
  },
  created () {
    const vm = this
    vm.isLoading = true
    setTimeout(function () {
      vm.isLoading = false
    }, 5000)
  }
}
</script>
<style lang="scss">
@keyframes ldio-i4ihhev39wf {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.91, 0.91);
  }

  100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1, 1);
  }
}
.ldio-i4ihhev39wf div > div {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ff9a9e;
  animation: ldio-i4ihhev39wf 0.4854368932038836s linear infinite;
}

.ldio-i4ihhev39wf div:nth-child(1) > div {
  left: 73px;
  top: 41px;
  animation-delay: -0.41608876560332875s;
}

.ldio-i4ihhev39wf > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 82px 50px;
}

.ldio-i4ihhev39wf div:nth-child(2) > div {
  left: 61px;
  top: 66px;
  animation-delay: -0.346740638002774s;
}

.ldio-i4ihhev39wf > div:nth-child(2) {
  transform: rotate(51.42857142857143deg);
  transform-origin: 70px 75px;
}

.ldio-i4ihhev39wf div:nth-child(3) > div {
  left: 34px;
  top: 72px;
  animation-delay: -0.2773925104022192s;
}

.ldio-i4ihhev39wf > div:nth-child(3) {
  transform: rotate(102.85714285714286deg);
  transform-origin: 43px 81px;
}

.ldio-i4ihhev39wf div:nth-child(4) > div {
  left: 12px;
  top: 55px;
  animation-delay: -0.20804438280166437s;
}

.ldio-i4ihhev39wf > div:nth-child(4) {
  transform: rotate(154.28571428571428deg);
  transform-origin: 21px 64px;
}

.ldio-i4ihhev39wf div:nth-child(5) > div {
  left: 12px;
  top: 27px;
  animation-delay: -0.1386962552011096s;
}

.ldio-i4ihhev39wf > div:nth-child(5) {
  transform: rotate(205.71428571428572deg);
  transform-origin: 21px 36px;
}

.ldio-i4ihhev39wf div:nth-child(6) > div {
  left: 34px;
  top: 10px;
  animation-delay: -0.0693481276005548s;
}

.ldio-i4ihhev39wf > div:nth-child(6) {
  transform: rotate(257.14285714285717deg);
  transform-origin: 43px 19px;
}

.ldio-i4ihhev39wf div:nth-child(7) > div {
  left: 61px;
  top: 16px;
  animation-delay: 0s;
}

.ldio-i4ihhev39wf > div:nth-child(7) {
  transform: rotate(308.57142857142856deg);
  transform-origin: 70px 25px;
}

.loadingio-spinner-spin-vr67c069ls {
  width: 60px;
  height: 60px;
  display: inline-block;
  overflow: hidden;
  background: none;
}

.ldio-i4ihhev39wf {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.6);
  backface-visibility: hidden;
  transform-origin: 0 0;
  /* see note above */
}

.ldio-i4ihhev39wf div {
  box-sizing: content-box;
}
</style>