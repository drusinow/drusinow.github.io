document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip);

    const profileImage = document.querySelector('.profile-image');
    const gridBoxes = document.querySelectorAll('.box');

    // Set initial state for the profile image in the center of the screen
    gsap.set(profileImage, { scale: 1.1 });

    // Function to handle the animation
    function animateProfileImage() {
        // Capture the current position of the profile image
        const state = Flip.getState(profileImage);

        // Add class to move the profile image into the grid area
        profileImage.classList.add('div4');

        // Animate the profile image from center to its grid position
        Flip.from(state, {
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: function () {
                // Once the profile image reaches its grid slot, reveal the other grid boxes
                gsap.to(gridBoxes, { opacity: 1, duration: 0.5, stagger: 0.1 });
            }
        });

        // Remove the click event listener after the first click
        profileImage.removeEventListener('click', animateProfileImage);
        profileImage.style.cursor = "default"; // Change cursor to default
        profileImage.innerHTML = ""; // Clear the "Click to Enter" text
    }

    // Add click event listener to trigger the animation
    profileImage.addEventListener('click', animateProfileImage);
});
