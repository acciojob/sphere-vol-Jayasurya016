function volume_sphere(event) {
  event.preventDefault(); // stop page reload

  // Get radius value
  const radius = parseFloat(document.getElementById('radius').value);

  // Validate and calculate
  let volume;
  if (isNaN(radius) || radius < 0) {
    // If input is not a number or is negative, set volume to NaN string
    volume = 'NaN';
  } else {
    // Correctly calculate and round the volume
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4); // round to 4 decimals
  }

  // Display the result
  document.getElementById('volume').value = volume;
}

// Attach submit event properly
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sphereForm').onsubmit = volume_sphere;
});