<template>
  <div class="about">
    <div class="wrap">
      <div class="firstcontent">123</div>
      <div class="secondcontent">123</div>
      <div class="threecontent">123</div>
    </div>
    <div class="wrap2">
      <div class="forthcontent">456</div>
      <div class="fiftycontent">456</div>
      <div class="sixcontent">456</div>
    </div>
    <p>{{ next }}</p>
  </div>
</template>
<script>
import { TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
export default {
  name: 'about',
  data () {
    return {
      next: '123'
    }
  },
  mounted () {
    const t1 = new TimelineMax()
      .from('.firstcontent', 2, { x: '-100%' })
      .to('.firstcontent', 2, { x: '0%' })
      .from('.secondcontent', 2, { y: '-100%' })
      .to('.secondcontent', 2, { y: '0%' })
      .from('.threecontent', 2, { x: '100%' })
      .to('.threecontent', 2, { x: '0%' })
    const controller = new ScrollMagic.Controller()
    let scene = new ScrollMagic.Scene({
      triggerElement: '.wrap',
      triggerHook: 0,
      duration: '300%'
    })
    scene.setTween(t1)
    scene.setPin('.wrap')
    // scene.addIndicators()
    scene.addTo(controller)
    const t2 = new TimelineMax()
      .to('.forthcontent', 2, {
        autoAlpha: 0
      })
      .from('.fiftycontent', 2, {
        autoAlpha: 0
      }, '-=4')
      .from('.sixcontent', 2, {
        autoAlpha: 0
      })
    let scene2 = new ScrollMagic.Scene({
      triggerElement: '.wrap2',
      triggerHook: 0,
      duration: '100%'
    })
    scene2.setTween(t2)
    scene2.setPin('.wrap2')
    // scene2.addIndicators()
    scene2.addTo(controller)
    console.log(this.$route)
    console.log(this.next)
    this.$nextTick(function () {
      this.next = '456'
      console.log(this.next)
      scene.remove()
      scene2.remove()
    })
  }
}
</script>
<style scoped lang="scss">
.wrap {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.wrap2 {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.firstcontent {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(255, 118, 118);
}
.secondcontent {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(107, 245, 141);
}
.threecontent {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(253, 255, 118);
}
.forthcontent {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(118, 228, 255);
}
.fiftycontent {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(245, 107, 227);
}
.sixcontent {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(118, 255, 187);
}
</style>