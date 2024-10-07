document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Set initial state for the profile-image box (centered initially)
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
                scale: 0.9, // Shrink it slightly
                duration: 0.7,
                ease: "circ.out",
                onComplete: function() {
                    // Move the profile image to its grid location
                    gsap.to(".profile-image", {
                        x: 0, // Reset x and y as it's now part of the grid layout
                        y: 0,
                        duration: 1.0,
                        ease: "power1.inOut",
                        onComplete: function() {
                            // Lock profile image into the grid position
                            gsap.set(".profile-image", {
                                scale: 1,
                                position: "relative", // Ensure it is properly placed in the grid
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
