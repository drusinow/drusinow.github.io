document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);


    const gridBoxes = document.querySelectorAll('.box');
    const projectsBox = document.querySelector('.div2');

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
                duration: 0.5,
                ease: "circ.out",
                onComplete: function() {
                    // Move the profile image to its grid location
                    gsap.to(".profile-image", {
                        duration: 0.8,
                        scale: 1,
                        x: 0,
                        y: 0,
                        ease: "power4.out",
                        onComplete: function() {
                                    gsap.to(gridBoxes, { 
                                        opacity: 1,
                                        duration: 0.8,
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

    function expandProjectsBox() {
        // GSAP animation to expand the box
        gsap.to(projectsBox, {
            duration: 0.8,
            width: "calc(100% - 2em)",  // Full width, accounting for 1em padding on both sides
            height: "calc(100vh - 3em)", // Full height, accounting for header and padding
            top: "0",                    // Align to the top of the grid (below the header)
            ease: "power4.inOut",         // Smooth easing
            position: "absolute",         // Make the box cover most of the screen
            left: "1em",                  // Maintain grid padding on the left
            right: "1em",                 // Maintain grid padding on the right
            zIndex: 10,                   // Bring the box to the front
            borderRadius: "10px",         // Maintain rounded corners
        });
    }

    // Add click event listener to the projects box
    projectsBox.addEventListener('click', expandProjectsBox);

    
});