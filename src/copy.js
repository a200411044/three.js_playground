import "/style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
        
// SCENE
const scene = new THREE.Scene()

// CAMERA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)


// RENDERER
const renderer = new THREE.WebGLRenderer() 
renderer.setSize(window.innerWidth, window.innerWidth)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(10, 10, 10)
const material = new THREE.MeshNormalMaterial({wireframe: true})
const ball = new THREE.Mesh(geometry, material)
scene.add(ball)

const geometry2= new THREE.SphereGeometry(10, 10, 10)
const material2 = new THREE.MeshNormalMaterial({wireframe: true})
const ball2 = new THREE.Mesh(geometry2, material2)
ball2.position.x = 40
scene.add(ball2)

const geometry3 = new THREE.SphereGeometry(10, 10, 10)
const material3 = new THREE.MeshNormalMaterial({wireframe: true})
const ball3 = new THREE.Mesh(geometry3, material3)
ball3.position.x = -40
scene.add(ball3)

camera.position.z = 75


const animate = () => {
    requestAnimationFrame(animate)

    ball.rotation.x += 0.02
    ball.rotation.x += 0.02

    ball2.rotation.x += 0.02
    ball2.rotation.x += 0.02

    ball3.rotation.x += 0.02
    ball3.rotation.x += 0.02

    renderer.render(scene, camera)
}

animate()