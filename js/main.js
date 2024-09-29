document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Set initial state for the profile-image box
    gsap.set(".profile-image", { scale: 1.2, x: 0, y: 0 });


    const profileImage = document.querySelector('.profile-image');

    function animateBox() {

    // Add click event listener to trigger animation
        gsap.fromTo(".profile-image", 
            { 
                scale: 1.2,  // Initial state (slightly larger)
                x: 0, 
                y: 0 
            }, 
            { 
                scale: 1, // Make it shrink slightly
                duration: 0.6,
                ease: "circ.out",

                onComplete: function() {
                    
                    // After growing, shrink it and move right and up
                    gsap.to(".profile-image", {
                        scale: 0.9,  // Shrinks smaller than original size
                        x: 180,       // Move to the right
                        y: -80,      // Move upwards
                        duration: 0.55,
                        ease: "circ.out" // Adds a bounce effect
                    });
                }
            }
        );
        profileImage.removeEventListener('click', animateBox);
        document.getElementById("firstClick").innerHTML = "";
    }
    profileImage.addEventListener('click', animateBox);

});
