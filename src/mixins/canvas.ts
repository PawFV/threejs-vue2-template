import { Component } from 'vue-property-decorator'
import * as THREE from 'three'
import Home from './root'

@Component
export default class Canvas extends Home {
  setRenderer() {
    this.canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  mounted() {
    this.setRenderer()
    this.createCube()
    this.camera.position.z = 5
    this.animate()
  }
}
