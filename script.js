function volume_sphere() {
    //Write your code here
  const radius = parseFloat(document.getElementById('radius').value);

      // Calculate volume if valid, else NaN
      let volume;
      if (isNaN(radius) || radius < 0) {
        volume = NaN;
      } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4); // Round to 4 decimal places
      }

      // Display in the output field
      document.getElementById('volume').value = volume;

      // Prevent form submission (page reload)
      return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
