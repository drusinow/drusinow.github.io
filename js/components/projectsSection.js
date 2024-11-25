class ProjectsSection {
    constructor() {
        this.projectsBox = document.querySelector('.div2');
        this.expandedContent = this.projectsBox.querySelector('.projects-expanded-content');
        this.currentTab = 'completed';
        this.init();
    }

    init() {
        // Clear existing content and set up structure
        this.projectsBox.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">Projects</h2>
                <div class="projects-tabs">
                    <div class="tab-switcher">
                        <button class="tab-button active" data-tab="completed">Completed</button>
                        <button class="tab-button" data-tab="inProgress">In Progress</button>
                        <div class="tab-slider"></div>
                    </div>
                </div>
            </div>
            <div class="projects-expanded-content">
                <div class="projects-content"></div>
            </div>
        `;

        // Update references after recreating content
        this.expandedContent = this.projectsBox.querySelector('.projects-expanded-content');
        this.projectsContent = this.projectsBox.querySelector('.projects-content');
        this.tabSlider = this.projectsBox.querySelector('.tab-slider');
        
        // Set initial tab slider position
        const activeButton = this.projectsBox.querySelector('.tab-button.active');
        gsap.set(this.tabSlider, {
            width: activeButton.offsetWidth,
            x: activeButton.offsetLeft
        });

        this.loadProjects();
        this.addEventListeners();
    }
    loadProjects() {
        const projects = projectsData[this.currentTab];
        const projectsHTML = projects.map(project => {
            // Check if the project link is the placeholder
            const projectLink = project.link === "https://github.com/" 
                ? "Currently Unavailable" 
                : `<a href="${project.link}" target="_blank" class="project-link">View Project</a>`;
    
            return `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    ${projectLink} <!-- Use the variable here -->
                </div>
            `;
        }).join('');
    
        this.projectsContent.innerHTML = projectsHTML;
    }

    addEventListeners() {
        const tabButtons = this.projectsBox.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tab = e.target.dataset.tab;
                this.switchTab(tab);
            });
        });
    }

    switchTab(tab) {
        if (this.currentTab === tab) return; // Don't switch if already on the selected tab
        
        this.currentTab = tab;
        
        // Update active button state
        const buttons = this.projectsBox.querySelectorAll('.tab-button');
        buttons.forEach(button => {
            button.classList.toggle('active', button.dataset.tab === tab);
        });
        
        // Animate tab slider
        const activeButton = this.projectsBox.querySelector(`.tab-button[data-tab="${tab}"]`);
        gsap.to(this.tabSlider, {
            x: activeButton.offsetLeft,
            width: activeButton.offsetWidth,
            duration: 0.3,
            ease: "power2.out"
        });

        // Animate content change
        gsap.to(this.projectsContent, {
            opacity: 0,
            y: 10,
            duration: 0.2,
            ease: "power2.out",
            onComplete: () => {
                this.loadProjects();
                gsap.to(this.projectsContent, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    }
}