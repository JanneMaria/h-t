document.addEventListener('DOMContentLoaded', function () {
    const animationContainer = document.getElementById('animationContainer');

    setTimeout(function () {
        // Add the 'show-animation' class after a delay (e.g., 2 seconds)
        animationContainer.classList.add('show-animation');

        // Remove the animation container after another delay (e.g., 5 seconds)
        setTimeout(function () {
            animationContainer.remove();
        }, 8000); // Adjust the delay for removal as needed
    }, 1000); // Adjust the delay for showing the animation as needed
});

