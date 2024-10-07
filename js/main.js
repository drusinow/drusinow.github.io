document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);


    const gridBoxes = document.querySelectorAll('.box');

    // Set initial state for the profile-image box (centered initially)
    gsap.set(".profile-image", { scale: 1.1, x: -267, y: 0 });

    // Reference to the profile-image element
   // const profileImage = document.querySelector('.profile-image');
   // const screenclick = document.querySelector('.screenclick');

    // Function to handle the animation and remove the event listener
    function animateBox() {
        console.log("working")
        // Trigger the animation when the box is clicked
        gsap.fromTo(".profile-image", 
            { 
                scale: 1.1,  // Initial state
            }, 
            { 
                scale: 0.9, // Shrink it slightly
                duration: 0.7,
                ease: "circ.out",
                onComplete: function() {
                    // Move the profile image to its grid location
                    gsap.to(".profile-image", {
                        duration: 0.7,
                        ease: "circ.out",
                        scale: 1,
                        postition: "relative",
                        onComplete: function() {
                                    gsap.to(gridBoxes, { 
                                        opacity: 1,
                                        duration: 0.5,
                                        stagger: 0.1 
                                    });
                                }
                    });
                }
            }
        );
        
        // Remove the click event listener after the first click
        document.removeEventListener('click', animateBox);
        document.getElementById("firstClick").innerHTML = "";
    }

    // Add click event listener
    document.addEventListener('click', animateBox);
    
});