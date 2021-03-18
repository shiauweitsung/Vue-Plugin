<template>
  <div>
    <h2>add cart 1</h2>
    <div class="cart-wrap">
      <div class="add-cart">
        <button class="add-btn" @click.prevent="addCart">加入購物車</button>
        <transition
          appear
          v-for="(item, index) in showMoveDot"
          :key="index"
          @before-appear="beforeEnter"
          @after-appear="afterEnter"
        >
          <div class="move_dot" ref="ball" v-if="item"></div>
        </transition>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-icon">
        <span id="cart-count">{{ count }}</span>
        <img src="@/assets/images/shopping-cart.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showMoveDot: [],
      count: 0,
      elLeft: 0, //當前點擊購物車按鈕在網頁中的絕對top值
      elTop: 0 //當前點擊購物車按鈕在網頁中的絕對left值
    }
  },
  methods: {
    addCart (event) {
      this.showMoveDot = [...this.showMoveDot, true]
      this.elLeft = event.target.getBoundingClientRect().left
      this.elTop = event.target.getBoundingClientRect().top
    },
    beforeEnter (el) {
      // 設置transform值 需要調整， 因為這些值會加到本身的位置
      el.style.transform = `translate3d(${this.elLeft}px,${this.elTop}px , 0)`
      // 設置透明度
      el.style.opacity = 1
    },
    afterEnter (el) {
      // 獲取底部購物車徽標
      const badgePosition = document
        .getElementById('cart-count')
        .getBoundingClientRect()
      console.log('bad', badgePosition)
      // 設置小球移動的位移
      el.style.transform = `translate3d(${badgePosition.left - 30}px,${badgePosition.top}px,0)`
      // 增加貝塞爾曲線  
      el.style.transition = 'transform .88s cubic-bezier(0.3, -0.25, 0.7, -0.15)';
      // el.style.transition = 'transform .88s linear';
      this.showMoveDot = this.showMoveDot.map(() => false);
      // 設置透明度
      el.style.opacity = 1
      // 監聽動畫結束後 執行callback
      el.addEventListener('transitionend', () => {
        el.style.display = 'none';
        this.count++
        this.listenInCart()
      })
    },
    listenInCart () {
      // 拿到底部Tabbar購物車的DOM元素添加class
      document.querySelector('.cart-icon').classList.add('moveToCart');
      setTimeout(() => {
        // 500毫秒後移除底部Tabbar購物車的DOM元素class
        document.querySelector('.cart-icon').classList.remove('moveToCart');
      }, 500);
    }
  }
}
</script>
<style lang="scss" scope>
.cart-wrap {
  max-width: 1440px;
  margin: auto;
}
.add-cart {
  position: relative;
  width: 200px;
}
.move_dot {
  position: fixed;
  top: 0px;
  left: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #94c6ff;
}
.cart-footer {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.cart-icon {
  position: relative;
  & > span {
    position: absolute;
    width: 20px;
    height: 20px;
    font-size: 12px;
    right: -10px;
    top: -10px;
    border-radius: 50%;
    color: white;
    background-color: rgb(148, 198, 255);
  }
  & > img {
    width: 40px;
  }
}
.moveToCart {
  animation: carmove 0.5s ease-in-out;
}
@keyframes carmove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>