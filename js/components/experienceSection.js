class ExperienceSection {
    constructor() {
        this.experienceBox = document.querySelector('.div7');
        this.init();
    }

    init() {
        this.loadExperience();
    }

    loadExperience() {
        const experienceHTML = experienceData.experiences.map(exp => `
            <div class="experience-card">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        `).join('');
        
        this.experienceBox.innerHTML = `
            <h2 class="section-title">Experience</h2>
            ${experienceHTML}
        `;
    }
}