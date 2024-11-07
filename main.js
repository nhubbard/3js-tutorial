import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  HemisphereLight,
  SphereGeometry,
  PointLight,
  MeshStandardMaterial,
  Mesh,
  BoxGeometry,
  MeshPhongMaterial,
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

// Step 7d: Set up the bulb light
bulbLight.add(new Mesh(bulbGeometry, bulbMat));
bulbLight.position.set(0, 2, 0);
bulbLight.castShadow = true;
scene.add(bulbLight);

// Step 8: Create a box geometry
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

// Step 9a: Scaffold a cube generator
const makeInstance = (geometry, color, x) => {
  // Step 9b: Create the material and cube
  const material = new MeshPhongMaterial({ color });
  const cube = new Mesh(geometry, material);
  // Step 9c: Add, position, and return the cube
  scene.add(cube);
  cube.position.x = x;
  return cube;
};

// Step 10a: Scaffold a color generator
const getRandomColor = () => {
  // Step 10b: Get a random number, constrained to a range
  const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // Step 10c: Get the RGB values
  const r = randomRange(50, 200);
  const g = randomRange(50, 200);
  const b = randomRange(50, 200);
  // Step 10d: Shift the RGB values into a single number
  return (r << 16) | (g << 8) | b;
};

// Step 11: Create three cubes
const cubes = [
  makeInstance(geometry, getRandomColor(), 0),
  makeInstance(geometry, getRandomColor(), -2),
  makeInstance(geometry, getRandomColor(), 2)
];

// Step 12a: Scaffold the resize handler
const resizeCanvasToDisplaySize = () => {
  // Step 12b: Get the canvas properties
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // Step 12c: Check if the canvas has changed size
  if (canvas.width !== width || canvas.height !== height) {
    // Step 12d: Resize the renderer
    renderer.setSize(width, height, false);
    // Step 12e: Change the camera's aspect ratio
    camera.aspect = width / height;
    // Step 12f: Update the camera's projection matrix
    camera.updateProjectionMatrix();
  }
};

// Step 13a: Scaffold the rendering loop
const render = (time) => {
  // Step 13b: Convert the time to seconds
  time *= 0.001;
  // Step 13c: Resize the canvas
  resizeCanvasToDisplaySize();
  // Step 13d: Loop over each cube
  cubes.forEach((cube, index) => {
    // Step 13e: Modify the speed of each cube
    const speed = 1 + index * 0.75;
    // Step 13f: Set the rotation of each cube
    const rot = time * speed;
    cube.rotation.x = rot;
    cube.rotation.y = rot;
  });
};