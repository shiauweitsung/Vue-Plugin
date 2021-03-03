<template>
  <div>
    <h1>Slick</h1>
    <!-- slick star -->
    <div class="slickcarousel">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </div>
    <p>參考資料</p>
    <a href="https://www.npmjs.com/package/slick-carousel" target="_blank"
      >slick</a
    >
    <!-- slick end -->
    <br />
    <hr />
    <br />
  </div>
</template>
<script>
// import slick
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// end slick
export default {
  name: 'slick',
  mounted () {
    // slick setting
    $('.slickcarousel').slick({
      dots: true
    });
    // end slick setting
  }
};
</script>
<style lang="scss">
.slick-arrow {
  z-index: 999;
}
.slick-prev {
  left: 0px !important;
  &::before {
    color: rgb(255, 121, 121);
  }
}
.slick-next {
  right: 0px !important;
  &::before {
    color: rgb(255, 121, 121);
  }
}
</style>
