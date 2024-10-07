document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Reference to the profile-image element
    const profileImage = document.querySelector('.profile-image');

    // Function to handle the animation and remove the event listener
    function animateBox() {
        // Initial animation to shrink the box slightly
        gsap.fromTo(".profile-image", 
            { 
                scale: 1.1,  // Initial scale
                x: 0, 
                y: 0 
            }, 
            { 
                scale: 0.9, // Shrink it slightly
                duration: 0.7,
                ease: "circ.out",
                onComplete: function() {
                    // Move the profile image to its grid location
                    gsap.to(".profile-image", {
                        duration: 1.0,
                        ease: "power1.inOut",
                        x: 0, // x offset in the grid area
                        y: 0, // y offset in the grid area
                        onComplete: function() {
                            // Lock profile image into the grid position
                            gsap.set(".profile-image", {
                                scale: 1, // Reset scale
                                position: "relative", // Ensure it is properly placed in the grid
                                left: null, // Remove absolute positioning
                                top: null
                            });
                        }
                    });
                }
            }
        );

        // Remove the click event listener after the first click
        profileImage.removeEventListener('click', animateBox);
        document.getElementById("firstClick").style.cursor = "auto"; // Set cursor to default after click
        document.getElementById("firstClick").innerHTML = "";
    }

    // Add click event listener
    profileImage.addEventListener('click', animateBox);
});
