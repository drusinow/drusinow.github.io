document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    const gridBoxes = document.querySelectorAll('.box'); // All grid boxes
    const projectsBox = document.querySelector('.div2'); // Projects box
    const headerBox = document.querySelector('.div1');   // Header box

    let isExpanded = false;

    // Function to handle the expansion animation
    function expandProjectsBox() {
        const state = Flip.getState(projectsBox); // Capture the current position

        if (!isExpanded) {
            // Expand the "Projects" box to cover the grid (except the header)
            gsap.to(projectsBox, {
                duration: 0.8,
                ease: "power4.inOut",
                gridColumn: "1 / span 12",   // Expand across all columns
                gridRow: "2 / span 11",      // Expand over all rows except the header
                zIndex: 10,                  // Ensure it's on top
            });

            // Fade out all other boxes (except the header)
            gridBoxes.forEach(box => {
                if (box !== projectsBox && box !== headerBox) {
                    gsap.to(box, { opacity: 0, duration: 0.8 });
                }
            });
        } else {
            // Collapse the "Projects" box back to its original position
            gsap.to(projectsBox, {
                duration: 0.8,
                ease: "power4.inOut",
                gridColumn: "10 / 13",  // Original grid placement
                gridRow: "3 / 11",      // Original grid placement
                zIndex: 1,              // Restore original z-index
            });

            // Fade in all other boxes
            gridBoxes.forEach(box => {
                if (box !== projectsBox && box !== headerBox) {
                    gsap.to(box, { opacity: 1, duration: 0.8 });
                }
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
