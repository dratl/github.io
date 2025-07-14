const canvas = document.getElementById('lineCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastX = null;
let lastY = null;

window.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;

  // Draw a line from the last position to the current position
  if (lastX !== null && lastY !== null) {
    ctx.strokeStyle = '#00ffcc';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  // Update the last position
  lastX = x;
  lastY = y;
});

// Clear the canvas on resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  lastX = null;
  lastY = null;
});
