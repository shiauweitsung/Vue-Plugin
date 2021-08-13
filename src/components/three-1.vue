<template>
  <div class="three2">
    <h2>three2</h2>
    <div class="three-wrap">
      <div>
        <canvas id="earth" ref="earth"></canvas>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import * as dat from 'dat.gui'
export default {
  mounted() {
    const earth = document.getElementById('earth');
    const scene = new this.THREE.Scene();
    const renderer = new this.THREE.WebGLRenderer({
      canvas: earth,
      // alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('red', 0);
    const camera = new this.THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(10, 10, 10);
    camera.lookAt(scene.position);
    scene.add(camera);
    const pointLight = new this.THREE.PointLight(0xffffff);
    pointLight.position.set(10, 10, 10);
    pointLight.intensity = 1;
    scene.add(pointLight)
    const pointLightHelper = new this.THREE.PointLightHelper(pointLight, 1)
    scene.add(pointLightHelper)

    // const loader = new GLTFLoader();
    // loader.load('/3d/earth.glb', function (glb) {
    //   scene.add(glb.scene);
    //   renderer.render(scene, camera)
    // })
    renderer.render(scene, camera);
    // const gui = new dat.GUI();
    // gui.add(pointLight.position, 'y').min(0).max(1000).step(0.01)
    // gui.add(pointLight.position, 'x').min(0).max(1000).step(0.01)
    // gui.add(pointLight.position, 'z').min(0).max(1000).step(0.01)
    // gui.add(pointLight, 'intensity').min(-1).max(5).step(0.01)
  }
}
</script>
<style lang="scss">
.three-wrap {
  max-width: 1440px;
  width: 100%;
  margin: auto;
  height: 100vh;
  display: flex;
  & > div {
    position: relative;
    border: 1px solid red;
    margin: 10px;
    width: 50%;
    z-index: 2;
    &#earth {
      position: absolute;
      width: 100px;
      height: 100px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9;
    }
  }
}
</style>