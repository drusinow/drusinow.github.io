document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);


    const gridBoxes = document.querySelectorAll('.box');
    const projectsBox = document.querySelector('.div2');
    const parentGrid = document.querySelector('.parent');

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

    let isExpanded = false;

    // Function to handle the expansion animation
    function expandProjectsBox() {
        const state = Flip.getState(projectsBox); // Capture the current position

        if (!isExpanded) {
            // Expand animation
            gsap.to(gridBoxes, { 
                opacity: 1,
                duration: 0.8,
                stagger: 0.1
            });
            gsap.to(projectsBox, {
                duration: 0.8,
                ease: "power4.inOut",
                width: "calc(100% - 2em)",  // Full width within the grid (accounting for 1em padding)
                height: "calc(100vh - 4em)", // Full height within the grid, leaving space for header and padding
                gridColumn: "1 / span 12",    // Span across all columns
                gridRow: "3 / span 10",       // Span the rows while accounting for the header
                zIndex: 10,                   // Ensure it's on top
            });
        } else {
            // Collapse animation to return to original size
            gsap.to(projectsBox, {
                duration: 0.8,
                ease: "power4.inOut",
                width: "",    // Restore default grid size
                height: "",   // Restore default grid size
                gridColumn: "10 / 13", // Original grid placement
                gridRow: "3 / 11",     // Original grid placement
                zIndex: 1,
            });
        }

        // Flip plugin to animate from the original position
        Flip.from(state, {
            duration: 0.8,
            ease: "power4.inOut",
        });

        // Toggle expanded state
        isExpanded = !isExpanded;
    }

    // Add click event listener to the projects box
    projectsBox.addEventListener('click', expandProjectsBox);

    
});