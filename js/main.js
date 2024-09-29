document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Set initial state for the profile-image box
    gsap.set(".profile-image", { scale: 1, x: 0, y: 0 });

    // Add click event listener to trigger animation
    document.querySelector('.profile-image').addEventListener('click', function() {
        gsap.fromTo(".profile-image", 
            { 
                scale: 1.2,  // Initial state (slightly larger)
                x: 0, 
                y: 0 
            }, 
            { 
                scale: 1, // Make it shrink slightly
                duration: 0.5,
                ease: "circ.out",
                onComplete: function() {
                    // After growing, shrink it and move right and up
                    gsap.to(".profile-image", {
                        scale: 0.9,  // Shrinks smaller than original size
                        x: 180,       // Move to the right
                        y: -80,      // Move upwards
                        duration: 0.35,
                        ease: "circ.out" // Adds a bounce effect
                    });
                }
            }
        );
    });
});
