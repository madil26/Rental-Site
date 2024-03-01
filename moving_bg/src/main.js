import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import blue_img from './blue.jpg';
import earth_img from './earth.jpg';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const numPoints = 100;
const amplitude = 5; 
const wavelength = 56; 
const frequency = 0.05;
const points = [];
for (let i = 0; i < numPoints; i++) {
  const x = i * (wavelength / numPoints);
  const y = amplitude * Math.sin(2 * Math.PI * frequency * x);
  const z = 0;
  points.push(new THREE.Vector3(x, y, z));
}

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const material = new THREE.LineBasicMaterial({
	map: new THREE.TextureLoader().load(earth_img),
});
const line = new THREE.Line( geometry, material );
scene.add( line );

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 10, 3);

camera.position.z = 50;

function animate() {
    
    line.rotation.x += Math.sin(0.01);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

animate();

