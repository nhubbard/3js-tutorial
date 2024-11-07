import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  HemisphereLight,
  SphereGeometry,
  PointLight,
  MeshStandardMaterial,
} from "three";
import './main.css';

// Step 4: Get the canvas element to render into, and create WebGL renderer for it
const canvas = document.querySelector("#c");
const renderer = new WebGLRenderer({ antialias: true, canvas });

// Step 5a: Set the camera constants that define how our camera will look at our objects
const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 5;

// Step 5b: Create the camera instance from our parameters
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Step 6a: Create the scene
const scene = new Scene();

// Step 6b: Create a basic hemisphere light
const light = new HemisphereLight(0xddeeff, 0x0f0e0d, 10);
scene.add(light);

// Step 7a: Create a sphere geometry for a nicer-looking light
const bulbGeometry = new SphereGeometry(0.02, 16, 8);

// Step 7b: Create a point light for our bulb
const bulbLight = new PointLight(0xffee88, 1, 100, 2);

// Step 7c: Create a bulb material
const bulbMat = new MeshStandardMaterial({
  emissive: 0xffffee,
  emissiveIntensity: 35,
  color: 0x000000,
});