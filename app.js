// Get the canvas element
const canvas = document.getElementById("glCanvas");

// Get WebGL context
const gl = canvas.getContext("webgl");

if (!gl) {
    console.error("WebGL not supported");
}

// Set the viewport
gl.viewport(0, 0, canvas.width, canvas.height);

// Set clear color (Black background)
gl.clearColor(0.0, 0.0, 0.0, 1.0);

// Clear the canvas
gl.clear(gl.COLOR_BUFFER_BIT);
