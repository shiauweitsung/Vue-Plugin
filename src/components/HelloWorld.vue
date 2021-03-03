<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="testHello">hello</p>
    <div class="box"></div>
    <div class="box2"></div>
    <div class="firstcontent">123</div>
    <div class="secondcontent">123</div>
    <div class="threecontent">123</div>
  </div>
</template>

<script>
import { TweenMax, TweenLite, TimelineMax } from 'gsap'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    const t0 = new TimelineMax()
    t0.add(TweenLite.to('.box', 2, { left: 200 }))
    t0.add(TweenLite.to('.box', 2, { top: 200 }))
    TweenMax.to('.box2', 2, { left: 100 })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.testHello {
  color: blue;
  border: 1px solid map-get($color, main);
}
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
  position: relative;
  left: 0px;
}
.box2 {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  left: 0px;
}
.firstcontent {
  height: 100vh;
  background-color: rgb(255, 118, 118);
}
.secondcontent {
  height: 100vh;
  background-color: rgb(107, 245, 141);
}
.threecontent {
  height: 100vh;
  background-color: rgb(253, 255, 118);
}
</style>
