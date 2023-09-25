// Click Button Portfolio
const portfolio = document.querySelector('#portfolio');
const portfolioBtn = document.querySelector('#portfolio_btn');
const skills = document.querySelector('#skills');
const skillsBtn = document.querySelector('#skills_btn');

portfolioBtn.addEventListener('click', (event) => {
    skills.style.display = 'none';
    portfolio.style.display = 'flex';
    skillsBtn.classList.remove('active_btn');
    portfolioBtn.classList.add('active_btn');
})

skillsBtn.addEventListener('click', (event) => {
    skills.style.display = 'flex';
    portfolio.style.display = 'none';
    skillsBtn.classList.add('active_btn');
    portfolioBtn.classList.remove('active_btn');
})

// Light And Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.querySelector('#toggleTheme');
    const themeIcon = document.querySelector('img[alt = "themeIcon"]');
    const githubLogo = document.querySelector('img[alt = "github"]');
    const linkedinLogo = document.querySelector('img[alt = "linkedin"]');
    const emailLogo = document.querySelector('img[alt = "email"]');

    const lightLogos = {
        github: "./img/github_light.png",
        linkedin: "./img/linkedin_light.png",
        email: "./img/email_light.png",
        theme: "./img/theme_light.png"
    }

    const darkLogos = {
        github: "./img/github_dark.png",
        linkedin: "./img/linkedin_dark.png",
        email: "./img/email_dark.png",
        theme: "./img/theme_dark.png"
    }

    function setTheme(isDark){
        githubLogo.src = isDark ? darkLogos.github : lightLogos.github
        linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin
        emailLogo.src = isDark ? darkLogos.email : lightLogos.email
        themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme
    }

    toggleThemeBtn.addEventListener('click', function(){
        const isDark = document.body.classList.toggle('dark_theme');
        localStorage.setItem('isDark', isDark);
        setTheme(isDark);
    });

    const loadTheme = () => {
        const isDark = localStorage.getItem('isDark') === 'true';
        document.body.classList.toggle('dark_theme', isDark);
        setTheme(isDark);
    };

    loadTheme();
})