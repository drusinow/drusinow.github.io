document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Set initial state for the profile-image box
    gsap.set(".profile-image", { scale: 1.3, x: 0, y: 0 });

    // Get reference to the profile-image and other sections
    const profileImage = document.querySelector('.profile-image');
    const header = document.querySelector('.header');
    const contentSection = document.querySelector('.content');

    // Function to handle the animation
    function animateBox() {
        // Animation on click for the profile image
        gsap.fromTo(".profile-image", 
            { 
                scale: 1.3,  // Initial state (slightly larger)
                x: 0, 
                y: 0 
            }, 
            { 
                scale: 1, // Shrink slightly
                duration: 0.7,
                ease: "circ.out",
                onComplete: function() {
                    // After shrinking, move the box right and up
                    gsap.to(".profile-image", {
                        scale: 1,  
                        x: 180,       // Move to the right
                        y: -80,      // Move upwards
                        duration: 0.65,
                        ease: "circ.out",
                        onComplete: function() {
                            // Show the header and other hidden boxes
                            header.classList.remove('hidden');
                            contentSection.classList.remove('hidden');

                            // Animate the header and other boxes into view
                            gsap.fromTo(header, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
                            gsap.fromTo(".content > div", 
                                { opacity: 0, y: 100 }, 
                                { 
                                    opacity: 1, 
                                    y: 0, 
                                    duration: 0.8, 
                                    stagger: 0.1, // Staggering the boxes to animate one by one
                                    ease: "power2.out" 
                                }
                            );
                        }
                    });
                }
            }
        );

        // Remove the click event listener so the animation only happens once
        profileImage.removeEventListener('click', animateBox);
        
        // Clear the content of the profile image
        document.getElementById("firstClick").innerHTML = "";
    }

    // Add click event listener to trigger animation
    profileImage.addEventListener('click', animateBox);
});
