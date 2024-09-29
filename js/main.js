document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Set initial state for the profile-image box
    gsap.set(".profile-image", { scale: 1, x: 0, y: 0 });

    // Add click event listener to trigger animation
    document.querySelector('.profile-image').addEventListener('click', function() {
        gsap.fromTo(".profile-image", 
            { 
                scale: 1,  // Initial state (slightly larger)
                x: 0, 
                y: 0 
            }, 
            { 
                scale: 1.2, // Make it grow slightly
                duration: 0.3,
                ease: "power1.out",
                onComplete: function() {
                    // After growing, shrink it and move right and up
                    gsap.to(".profile-image", {
                        scale: 0.9,  // Shrinks smaller than original size
                        x: 30,       // Move to the right
                        y: -20,      // Move upwards
                        duration: 0.4,
                        ease: "bounce.out" // Adds a bounce effect
                    });
                }
            }
        );
    });
});
