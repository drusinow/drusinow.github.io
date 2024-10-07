document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Set initial state for the profile-image box
    gsap.set(".profile-image", { scale: 1.1, x: 0, y: 0 });

    // Reference to the profile-image element
    const profileImage = document.querySelector('.profile-image');

    // Function to handle the animation and remove the event listener
    function animateBox() {
        // Trigger the animation when the box is clicked
        gsap.fromTo(".profile-image", 
            { 
                scale: 1.1,  // Initial state
                x: 0, 
                y: 0 
            }, 
            { 
                scale: 0.9, // First, make the box slightly larger
                duration: 0.7,
                ease: "circ.out",
                onComplete: function() {
                    // After growing, shrink and move to the right and up
                    gsap.to(".profile-image", {
                        scale: 0.9,  // Shrinks smaller than original size
                        x: 180,       // Move to the right
                        y: -80,      // Move upwards
                        duration: 0.7,
                        ease: "circ.out" // Adds a bounce effect
                    });
                }
            }
        );
        
        // Remove the click event listener after the first click
        profileImage.removeEventListener('click', animateBox);
        document.getElementById("profilebox").innerHTML = "";
    }

    // Add click event listener
    profileImage.addEventListener('click', animateBox);
});
