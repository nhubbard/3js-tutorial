import {
  WebGLRenderer,
} from "three";
import './main.css';

// Step 4: Get the canvas element to render into, and create WebGL renderer for it
const canvas = document.querySelector("#c");
const renderer = new WebGLRenderer({ antialias: true, canvas });