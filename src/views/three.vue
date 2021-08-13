<template>
  <div class="three">
    <h2>three js</h2>
    <div id="el"></div>
    <threePage />
  </div>
</template>
<script>
import threePage from '../components/three-1.vue'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import * as dat from 'dat.gui'
export default {
  components: {
    threePage
  },
  mounted() {
    // 1.建立場景 ， 並給予場景大小與顏色， 將場景append到body
    // 2.建立相機， 並給予相機位置與角度
    // 3.建立物體， 給予形狀(geometry)、材質(material) 再加入到mesh(網格物件)
    // 4.將建立的物體 匯入到場景
    // 5.若有需要可以建立動畫，新增一個animation function 將物體設置rotation.x or y += ?
    // 6.建立渲染場景 render function 裡面 放入animation 與 requestAnimationFrame(render) 與renderer.render(scene,camera) 渲染畫面
    const el = document.getElementById('el')
    const scene = new this.THREE.Scene()
    // const renderer = new this.THREE.WebGLRenderer({ alpha: true })
    const renderer = new this.THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, 600)
    renderer.setClearColor('yellow', 0)
    // document.body.appendChild(renderer.domElement)
    el.appendChild(renderer.domElement)
    // // // renderer.shadowMap.enable = true
    const camera = new this.THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      1,
      100
    )
    camera.position.set(0, 20, 90) // 相機位置
    camera.lookAt(scene.position) // 相機焦點
    // const pointLight = new this.THREE.PointLight(0xffffff)
    const pointLight = new this.THREE.PointLight(0xffffff)
    pointLight.position.set(0, 20, 90)
    pointLight.intensity = 1
    scene.add(pointLight)
    // pointHelper
    const pointLightHelper = new this.THREE.PointLightHelper(pointLight, 1)
    scene.add(pointLightHelper)
    // 3D 展示
    // const cameraControl = new OrbitControls(camera, renderer.domElement);
    // console.log(cameraControl)
    // cameraControl.rotateSpeed = 0.3;
    // cameraControl.zoomSpeed = 0.9;
    // cameraControl.minDistance = 3;
    // cameraControl.maxDistance = 20;
    // cameraControl.minPolarAngle = 0; // radians
    // cameraControl.maxPolarAngle = Math.PI / 2; // radians
    // cameraControl.enableDamping = true;
    // cameraControl.dampingFactor = 0.05;
    // cameraControl.update()
    renderer.render(scene, camera)
    // textureload
    // const textureLoader = new this.THREE.TextureLoader()
    // const normalTexture = textureLoader.load('~@/assets/images/test.jpeg')
    // 幾何體
    // const geometry = new this.THREE.SphereBufferGeometry(10, 64, 64);
    // const material = new this.THREE.MeshBasicMaterial({
    //   color: '#b3ff81'
    // })
    // 材質
    // const material = new this.THREE.MeshBasicMaterial()
    // material.color = new this.THREE.Color(0xffffff)
    // material.envMap = normalTexture
    // 建立網格物件
    // const cube = new this.THREE.Mesh(geometry, material)
    // cube.position.set(0, 0, 0)
    // scene.add(cube)
    // 載入模組
    const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader()
    // dracoLoader.setDecoderPath('/draco/')
    // dracoLoader.preload()
    // loader.setDRACOLoader(dracoLoader)
    // https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf
    loader.load(
      '/3d/dragon.glb',
      function (glb) {
        console.log(glb, 'glb')
        glb.scene.position.y = -10
        scene.add(glb.scene);
        renderer.render(scene, camera)
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.log(error);
      }
    );
    // GUI setting
    const gui = new dat.GUI();
    console.log(gui)
    // gui.add(cube.position, 'y').min(-30).max(30).step(0.01)
    // gui.add(cube.position, 'x').min(-30).max(30).step(0.01)
    // gui.add(cube.position, 'z').min(-30).max(30).step(0.01)
    gui.add(pointLight.position, 'y').min(0).max(100).step(0.01)
    gui.add(pointLight.position, 'x').min(0).max(100).step(0.01)
    gui.add(pointLight.position, 'z').min(0).max(100).step(0.01)
    gui.add(pointLight, 'intensity').min(-1).max(5).step(0.01)
    // cube animation
    const animate = function () {
      requestAnimationFrame(animate)
      // cube.rotation.x += 0.01
      // cube.rotation.y += 0.01
      // cube.rotation.z += 0.01
      renderer.render(scene, camera)
    }
    animate()
  }
}
</script>
<style>
.three {
  position: relative;
}
#el {
  left: 0px;
  top: 100px;
  width: 600px;
  height: 600px;
}
</style>
