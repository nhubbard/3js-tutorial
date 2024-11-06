import {
  WebGLRenderer,
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