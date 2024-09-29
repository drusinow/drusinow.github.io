   document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin,MotionPathPlugin,TextPlugin)

    window.onload = function () {
        // Set initial state for the box (this is optional but ensures the starting point is set)
        gsap.set(".box", { scale: 1, x: 0, y: 0 });

        gsap.fromTo(".box", 
        { 
            scale: 1, 
            x: 0, 
            y: 0 
        }, 
        { 
            scale: 1.2, // First, make the box slightly larger
            duration: 0.3,
            ease: "power1.out", // Smooth ease
            onComplete: function() {
            // After the initial grow, it shrinks and moves slightly to the right and up
            gsap.to(".box", {
                scale: 0.9,   // Shrinks smaller than the original size
                x: 30,        // Move right
                y: -20,       // Move up
                duration: 0.4,
                ease: "bounce.out" // Adds a slight bounce effect
            });
            }
        }
        
        );
    }   
  });