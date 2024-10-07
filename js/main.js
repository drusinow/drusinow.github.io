document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip);

    const profileImage = document.querySelector('.profile-image');
    const gridBoxes = document.querySelectorAll('.box');

    // Set initial state for the profile image in the center of the screen
    gsap.set(profileImage, { scale: 1.1 });

    // Function to handle the animation
    function animateProfileImage() {
        // Capture current position of the profile image
        const state = Flip.getState(profileImage);

        // Move the profile image into its grid area
        profileImage.classList.add('div4'); // Moves it to the .div4 grid area

        // Animate from the center to the grid location
        Flip.from(state, {
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: function () {
                // Show all other grid boxes after profile image moves
                gsap.to(gridBoxes, { opacity: 1, duration: 0.5 });
            }
        });

        // Remove click event listener after the first click
        profileImage.removeEventListener('click', animateProfileImage);
        profileImage.style.cursor = "default"; // Change cursor to default
        profileImage.innerHTML = ""; // Clear text
    }

    // Add click event listener to trigger the animation
    profileImage.addEventListener('click', animateProfileImage);
});
