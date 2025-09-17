document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sphereForm');
    const radiusInput = document.getElementById('radius');
    const volumeInput = document.getElementById('volume');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting and reloading the page

        const radius = parseFloat(radiusInput.value);

        if (isNaN(radius) || radius < 0) {
            volumeInput.value = 'NaN';
        } else {
            const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
            volumeInput.value = volume.toFixed(4);
        }
    });
});