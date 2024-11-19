class AboutSection {
    constructor() {
        this.aboutBox = document.querySelector('#about-section');
        this.container = this.aboutBox.querySelector('.about-container');
        this.settingsIcon = this.aboutBox.querySelector('.settingsicon');
        this.init();
        this.addScrollListener();
    }

    init() {
        this.container.innerHTML = `
            <h2 class="section-title">${aboutData.title}</h2>
            <div class="about-content">
                <p class="about-intro">${aboutData.content.introduction}</p>
                <p class="about-description">${aboutData.content.description}</p>
                
                <div class="highlights">
                    ${aboutData.content.highlights.map(highlight => 
                        `<div class="highlight-item">${highlight}</div>`
                    ).join('')}
                </div>
                
                <div class="skills-section">
                    ${Object.entries(aboutData.content.skills).map(([category, items]) => `
                        <div class="skill-category">
                            <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            <div class="skill-items">
                                ${items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    addScrollListener() {
        this.container.addEventListener('scroll', () => {
            const scrollPosition = this.container.scrollTop;
            const opacity = scrollPosition === 0 ? 1 : 0;
            
            gsap.to(this.settingsIcon, {
                opacity: opacity,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }
}