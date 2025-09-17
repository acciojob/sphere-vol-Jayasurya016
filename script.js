function volume_sphere(event) {
  event.preventDefault(); // stop page reload

  // Get radius value
  const radius = parseFloat(document.getElementById('radius').value);

  // Validate
  let volume;
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4); // round to 4 decimals
  }

  // Display result
  document.getElementById('volume').value = volume;
}

// Attach submit event properly
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sphereForm').onsubmit = volume_sphere;
});
