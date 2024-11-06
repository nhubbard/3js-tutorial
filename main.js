import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
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