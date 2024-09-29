document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin,MotionPathPlugin,TextPlugin)
    // script.js
gsap.fromTo(".profile-image", 
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
  
   });