document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Set initial state for the profile-image box
    gsap.set(".profile-image", { scale: 1.1, x: 0, y: 0 });

    // Reference to the profile-image element and hidden elements
    const profileImage = document.querySelector('.profile-image');
    const header = document.querySelector('.header');
    const container = document.querySelector('.container');

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
                scale: 0.9, // First, make the box slightly larger
                duration: 0.7,
                ease: "circ.out",
                onComplete: function() {
                    // After shrinking, move the box to the right and up
                    gsap.to(".profile-image", {
                        scale: 0.9,  // Shrinks smaller than original size
                        x: 180,       // Move to the right
                        y: -80,      // Move upwards
                        duration: 0.7,
                        ease: "sine.out",
                        onComplete: function() {
                            // Once the animation is complete, reveal the header and other boxes
                            header.classList.remove('hidden');
                            container.classList.remove('hidden');

                            // Animate the appearance of the header and boxes
                            gsap.from(header, { opacity: 0, duration: 1, ease: "power2.out" });
                            gsap.from(".box", {
                                opacity: 0,
                                y: 100,
                                duration: 1,
                                stagger: 0.2, // Stagger the animation of each box
                                ease: "power2.out"
                            });
                        }
                    });
                }
            }
        );

        // Remove the click event listener after the first click
        profileImage.removeEventListener('click', animateBox);
        document.getElementById("firstClick").innerHTML = "";
        document.getElementById("firstClick").style.cursor = "auto";
    }

    // Add click event listener
    profileImage.addEventListener('click', animateBox);
});
