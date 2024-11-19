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
                
                // Start intro animation
                if (pageManager.introAnimation) {
                    pageManager.introAnimation.playIntro();
                }
            }
        });
    }, 2000); // 2 second delay
});