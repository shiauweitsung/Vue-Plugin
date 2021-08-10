<template>
  <div class="three">
    <h2>three js</h2>
    <div id="el"></div>
  </div>
</template>
<script>
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
export default {
  mounted() {
    // 1.建立場景 ， 並給予場景大小與顏色， 將場景append到body
    // 2.建立相機， 並給予相機位置與角度
    // 3.建立物體， 給予形狀(geometry)、材質(material) 再加入到mesh(網格物件)
    // 4.將建立的物體 匯入到場景
    // 5.若有需要可以建立動畫，新增一個animation function 將物體設置rotation.x or y += ?
    // 6.建立渲染場景 render function 裡面 放入animation 與 requestAnimationFrame(render) 與renderer.render(scene,camera) 渲染畫面
    const el = document.getElementById('el')
    const scene = new this.THREE.Scene()
    const renderer = new this.THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
    // renderer.setClearColor(0x000000, 0)
    // document.body.appendChild(renderer.domElement)
    el.appendChild(renderer.domElement)
    // // // renderer.shadowMap.enable = true
    const camera = new this.THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      100
    )
    camera.position.set(30, 30, 30) // 相機位置
    camera.lookAt(scene.position) // 相機焦點
    const pointLight = new this.THREE.PointLight(0xffffff)
    pointLight.position.set(30, 30, 30)
    scene.add(pointLight)
    // 3D 展示
    // const cameraControl = new OrbitControls(camera)
    // cameraControl.enableDamping = true // 啟用阻尼效果
    // cameraControl.dampingFactor = 0.25 // 阻尼系數
    // cameraControl.autoRotate = true    // 啟用自動旋轉
    const geometry = new this.THREE.SphereGeometry(5, 32, 16); // 幾何體
    const material = new this.THREE.MeshBasicMaterial({
      color: '#b3ff81'
    }) // 材質
    const cube = new this.THREE.Mesh(geometry, material) // 建立網格物件
    cube.position.set(0, 0, 0)
    scene.add(cube)
    // const animate = function () {
    //   requestAnimationFrame(animate)
    //   cube.rotation.x += 0.01
    //   cube.rotation.y += 0.01
    //   cube.rotation.z += 0.01
    //   renderer.render(scene, camera)
    // }
    // animate()
    const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader()
    // dracoLoader.setDecoderPath('/draco/')
    // dracoLoader.preload()
    // loader.setDRACOLoader(dracoLoader)
    loader.load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf',
      function (gltf) {
        console.log(gltf, 'gltf')
        scene.add(gltf.scene);
        renderer.render(scene, camera)
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.log(error);
      }
    );
    const animate = function () {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      cube.rotation.z += 0.01
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
  position: absolute;
  left: 0px;
  top: 100px;
  width: 600px;
  height: 600px;
}
</style>
