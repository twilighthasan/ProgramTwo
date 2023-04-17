// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

// Create ground plane
const planeGeometry = new THREE.PlaneGeometry(100, 100);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
scene.add(plane);

// Set up camera controls
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// Add event listeners for buttons
document.getElementById('forward').addEventListener('click', () => move(0, 1));
document.getElementById('backward').addEventListener('click', () => move(0, -1));
document.getElementById('left').addEventListener('click', () => move(-1, 0));
document.getElementById('right').addEventListener('click', () => move(1, 0));

function move(x, z) {
  camera.position.x += x;
  camera.position.z += z;
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
