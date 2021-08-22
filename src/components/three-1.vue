<template>
  <div class="three2">
    <h2>three2</h2>
    <div class="three-wrap">
      <div>
        <canvas id="earth"></canvas>
      </div>
      <div>
        <canvas id="Jupiter"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import * as dat from 'dat.gui'
export default {
  mounted() {
    // 地球
    const earth = document.getElementById('earth');
    const scene = new this.THREE.Scene();
    const renderer = new this.THREE.WebGLRenderer({
      canvas: earth,
      alpha: true
    })
    // window.innerWidth, window.innerHeight
    renderer.setSize(300, 300);
    const camera = new this.THREE.PerspectiveCamera(
      45,
      1,
      1,
      2000
    );
    camera.position.z = 50;
    camera.lookAt(0, 0, 0)
    const light = new this.THREE.AmbientLight('white');
    scene.add(light);
    const texture = new this.THREE.TextureLoader().load('/3d/earth.jpeg')
    const geometry = new this.THREE.SphereGeometry(8, 50, 50);
    const material = new this.THREE.MeshLambertMaterial({
      map: texture,
      overdraw: 0.1
    });
    const mesh = new this.THREE.Mesh(geometry, material)
    scene.add(mesh)
    const control = new OrbitControls(camera, renderer.domElement)
    control.target = new this.THREE.Vector3(0, 0, 0)
    control.autoRotate = false;
    control.enablePan = false;
    control.enableZoom = false;
    control.maxDistance = 100;
    control.minDistance = 10;
    function animate() {
      requestAnimationFrame(animate)
      mesh.rotation.x += 0.001
      mesh.rotation.y += 0.001
      control.update()
      renderer.render(scene, camera)
    }
    animate()
    // 木星
    const Jupiter = document.getElementById('Jupiter')
    const scene2 = new this.THREE.Scene();
    const renderer2 = new this.THREE.WebGLRenderer({
      canvas: Jupiter,
      alpha: true
    })
    // window.innerWidth, window.innerHeight
    renderer2.setSize(300, 300);
    const camera2 = new this.THREE.PerspectiveCamera(
      45,
      1,
      1,
      2000
    );
    camera2.position.z = 50;
    camera2.lookAt(0, 0, 0)
    const light2 = new this.THREE.AmbientLight('white');
    scene2.add(light2);
    const texture2 = new this.THREE.TextureLoader().load('/3d/Jupiter.jpg')
    const geometry2 = new this.THREE.SphereGeometry(8, 50, 50);
    const material2 = new this.THREE.MeshLambertMaterial({
      map: texture2,
      overdraw: 0.1
    });
    const mesh2 = new this.THREE.Mesh(geometry2, material2)
    scene2.add(mesh2)
    function animate2() {
      requestAnimationFrame(animate2)
      mesh2.rotation.x += 0.001
      mesh2.rotation.y += 0.001
      renderer2.render(scene2, camera2)
    }
    animate2()
    const gui = new dat.GUI();
    gui.add(mesh.position, 'y').min(0).max(100).step(0.01).name('mesh y')
    gui.add(mesh.position, 'x').min(0).max(100).step(0.01).name('mesh x')
    gui.add(mesh.position, 'z').min(0).max(100).step(0.01).name('mesh z')
    gui.add(mesh2.position, 'y').min(0).max(100).step(0.01).name('mesh2 y')
    gui.add(mesh2.position, 'x').min(0).max(100).step(0.01).name('mesh2 x')
    gui.add(mesh2.position, 'z').min(0).max(100).step(0.01).name('mesh2 z')
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
    #earth {
      position: absolute;
      top: -150px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9;
    }
    #Jupiter {
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9;
    }
  }
}
</style>