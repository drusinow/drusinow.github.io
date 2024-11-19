class IntroAnimation {
    constructor() {
        this.profileImage = document.querySelector('.profile-image');
        this.profilePicture = document.querySelector('.profile-picture');
        this.gridBoxes = document.querySelectorAll('.box');
        this.settingsicon = document.querySelector('.settingsicon');
        this.hasPlayed = false;
        this.setupAnimation();
    }

    setupAnimation() {
        // Hide all elements initially
        gsap.set(this.gridBoxes, { opacity: 0 });
        gsap.set(this.profileImage, {
            scale: 1.1,
            x: -267,
            y: 0,
            opacity: 0,
            backgroundColor: 'transparent'
        });
        gsap.set(this.profilePicture, {
            scale: 1.1,
            opacity: 0
        });
        if (this.settingsicon) {
            gsap.set(this.settingsicon, { rotation: 0, scale: 0 });
        }
    }

    playIntro() {
        this.hasPlayed = true;

        const tl = gsap.timeline();

        // First make profile visible
        tl.to([this.profileImage, this.profilePicture], {
            opacity: 1,
            duration: 0.5
        })
        // Then start the animation sequence
        .to([this.profileImage, this.profilePicture], {
            scale: 0.9,
            duration: 0.8,
            ease: "circ.out"
        })
        .to([this.profileImage, this.profilePicture], {
            duration: 0.8,
            scale: 1,
            x: 0,
            y: 0,
            ease: "power4.out"
        })
        .to(this.gridBoxes, {
            opacity: 1,
            duration: 0.8,
            stagger: 0.1
        })
        .to(this.settingsicon, {
            rotation: 1080,
            scale: 0.8,
            duration: 1.8,
            ease: "power2.out"
        }, "-=0.8"); // Start slightly before previous animation ends

        // Update profile image content
        if (document.getElementById("firstClick")) {
            document.getElementById("firstClick").innerHTML = `
                <img src="images/Linkedin.png" alt="Profile Picture" class="profile-picture">
            `;
        }
        
        sessionStorage.setItem('introPlayed', 'true');
    }

    showContent() {
        gsap.set(this.profileImage, {
            scale: 1,
            x: 0,
            y: 0,
            opacity: 1,
            backgroundColor: 'transparent'
        });

        gsap.set(this.profilePicture, {
            scale: 1,
            opacity: 1
        });

        gsap.set(this.gridBoxes, { opacity: 1 });
        
        if (this.settingsicon) {
            gsap.set(this.settingsicon, { 
                rotation: 1080, 
                scale: 0.8 
            });
        }
        
        if (document.getElementById("firstClick")) {
            document.getElementById("firstClick").innerHTML = `
                <img src="images/Linkedin.png" alt="Profile Picture" class="profile-picture">
            `;
        }
    }
}