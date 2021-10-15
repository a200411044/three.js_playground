import "/style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.autoRotate = true;
controls.minDistance = 200;
controls.maxDistance = 600;

//Email
const EmailTexture = new THREE.TextureLoader().load("./email.jpg")

const geometry = new THREE.SphereGeometry(10, 10, 10)
const material = new THREE.MeshBasicMaterial({
    map: EmailTexture
})
const ball = new THREE.Mesh(geometry, material)
scene.add(ball)

//Form
const formTexture = new THREE.TextureLoader().load("./3dgray.jpg")

const geometry2= new THREE.SphereGeometry(10, 10, 10)
const material2 = new THREE.MeshBasicMaterial({map: formTexture})
const ball2 = new THREE.Mesh(geometry2, material2)
ball2.position.x = 40
scene.add(ball2)

//Telegram
const teleTexture = new THREE.TextureLoader().load("./blackgold.webp")

const geometry3 = new THREE.SphereGeometry(10, 10, 10)
const material3 = new THREE.MeshBasicMaterial({map: teleTexture})
const ball3 = new THREE.Mesh(geometry3, material3)
ball3.position.x = -40
scene.add(ball3)

const callTexture = new THREE.TextureLoader().load("./bg.jpg");
scene.background = callTexture;

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();


function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
animate()

