import { BoxGeometry, Mesh, MeshBasicMaterial, WebGLRenderer } from 'three'
import { sizes } from '../views/helpers'
import { Vue, Component } from 'vue-property-decorator'
import * as THREE from 'three'

@Component
export default class Root extends Vue {
  canvas!: HTMLCanvasElement
  renderer!: WebGLRenderer
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
  cube!: Mesh<BoxGeometry, MeshBasicMaterial>

  createCube() {
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
  }

  animate() {
    requestAnimationFrame(this.animate)
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.renderer.render(this.scene, this.camera)
  }
}
