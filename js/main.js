document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Initialize page manager
    const pageManager = new PageManager();

    // Add a small delay to ensure everything is loaded
    setTimeout(() => {
        // Hide loading overlay with fade out animation
        gsap.to('#loading-overlay', {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                document.getElementById('loading-overlay').style.display = 'none';
                
                // Make profile image visible
                document.getElementById('firstClick').style.visibility = 'visible';
                
                // Check if the device is mobile
                if (window.innerWidth > 768) { // Only play intro animation on larger screens
                    // Start intro animation
                    if (pageManager.introAnimation) {
                        pageManager.introAnimation.playIntro();
                    }
                } else {
                    // Directly show content on mobile
                    pageManager.introAnimation.showContent();
                }
            }
        });
    }, 2000); // 2 second delay
});