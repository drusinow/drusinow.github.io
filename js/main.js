document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    const gridBoxes = document.querySelectorAll('.box'); // All grid boxes
    const projectsBox = document.querySelector('.div2'); // Projects box
    const headerBox = document.querySelector('.div1');   // Header box
    const profileImage = document.querySelector('.profile-image'); // Profile image

    // Set initial state for the profile-image box (centered initially)
    gsap.set(".profile-image", { scale: 1.1, x: -267, y: 0 });

    // Starting animation for profile image and fade in for grid boxes
    function animateBox() {
        console.log("Profile Image Animation Triggered");

        // Shrink profile image slightly and then move to its grid position
        gsap.fromTo(".profile-image", 
            { scale: 1.1 }, 
            { 
                scale: 0.9, 
                duration: 0.5, 
                ease: "circ.out", 
                onComplete: function() {
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
        
        // Disable further clicks after initial animation
        document.removeEventListener('click', animateBox);
        document.getElementById("firstClick").innerHTML = "";
    }

    // Add click event listener to start the first animation
    document.addEventListener('click', animateBox);

    let isExpanded = false; // To track whether the projects box is expanded or not

    // Function to handle the expansion of the Projects box
    function expandProjectsBox() {
        const state = Flip.getState(projectsBox); // Capture the current position

        if (!isExpanded) {
            // Expand animation - Projects box grows and takes over grid below header
            gsap.to(projectsBox, {
                duration: 0.8,
                ease: "power4.inOut",
                gridColumn: "1 / span 12",   // Span all columns (12 columns)
                gridRow: "3 / span 10",      // Span all rows below the header
                zIndex: 10,                  // Bring the Projects box to the top
            });

            // Fade out all other boxes except the header and projects
            gridBoxes.forEach(box => {
                if (box !== projectsBox && box !== headerBox) {
                    gsap.to(box, { opacity: 0, duration: 0.5 });
                }
            });
        } else {
            // Collapse animation - return Projects box to original grid placement
            gsap.to(projectsBox, {
                duration: 0.8,
                ease: "power4.inOut",
                gridColumn: "10 / 13",       // Restore original grid column
                gridRow: "3 / 11",           // Restore original grid row
                zIndex: 1,                   // Restore original z-index
            });

            // Fade other boxes back in
            gridBoxes.forEach(box => {
                if (box !== projectsBox && box !== headerBox) {
                    gsap.to(box, { opacity: 1, duration: 0.5 });
                }
            });
        }

        // Animate the transition between the states
        Flip.from(state, {
            duration: 0.8,
            ease: "power4.inOut",
        });

        // Toggle expanded state
        isExpanded = !isExpanded;
    }

    // Add click event listener to the Projects box
    projectsBox.addEventListener('click', expandProjectsBox);
});
