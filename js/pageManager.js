class PageManager {
    constructor() {
        this.projectsSection = null;
        this.experienceSection = null;
        this.aboutSection = null;
        this.introAnimation = null;
        this.init();
        this.setupContactHandlers();
    }

    init() {
        try {
            this.introAnimation = new IntroAnimation();
            this.projectsSection = new ProjectsSection();
            this.experienceSection = new ExperienceSection();
            this.aboutSection = new AboutSection();
        } catch (error) {
            console.error('Error during initialization:', error);
        }
    }

    setupContactHandlers() {
        // Contact button in header
        const contactBtn = document.querySelector('.header-btn');
        // Contact section
        const contactSection = document.querySelector('.div6');
        
        const linkedinUrl = 'https://www.linkedin.com/in/dafydd-rusinow-55473826a/';
        
        const openLinkedin = () => {
            window.open(linkedinUrl, '_blank');
        };

        contactBtn.addEventListener('click', openLinkedin);
        contactSection.addEventListener('click', openLinkedin);
    }
}