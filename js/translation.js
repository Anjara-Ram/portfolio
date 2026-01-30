let translations = {

    french: {
        // menu (nav)
        menu1:"Acceuil",
        menu2:"À Propos",
        menu3:"Compétences",                    
        menu4:"Projets",        
        menu5:"Certificats",            
        menu6:"Contact",   
        
        // hero section
        heroText1: "Bonjour, Je m'appelle",
        heroText3: "Licencié en",
        heroParagraph: "Passionné par la data science et l'intelligence artificielle, je m'intéresse particulièrement à la résolution de problèmes mathématiques appliqués à l'informatique. Curieux et motivé par les défis techniques, je cherche constamment à approfondir mes compétences et à relever de nouveaux challenges",
        heroBtn1: "Télécharger CV",
        cvUrl: "assets/pdf/Anjara-Fitahiana-CV-Fr.pdf",
        heroBtn2: "Me Contacter"
        
    },

    english: {
        // menu (nav)
        menu1:"Home",
        menu2:"About",
        menu3:"Skills",                    
        menu4:"Projects",        
        menu5:"Certificates",            
        menu6:"Contact",    

         // hero section
        heroText1: "Hello, My name is",
        heroText3: "Bachelor's degree in",
        heroParagraph: "Passionate about data science and artificial intelligence, I am particularly interested in solving mathematical problems applied to computer science. Curious and motivated by technical challenges, I constantly seek to deepen my skills and take on new challenges",
        heroBtn1: "Download CV",
        cvUrl: "assets/pdf/Anjara-Fitahiana-CV-En.pdf",
        heroBtn2: "Contact Me"
    }

}

const languageSelecter = document.querySelector("select");

let navLink1 = document.getElementById("navLink1");
let navLink2 = document.getElementById("navLink2");
let navLink3 = document.getElementById("navLink3");
let navLink4 = document.getElementById("navLink4");
let navLink5 = document.getElementById("navLink5");
let navLink6 = document.getElementById("navLink6");

// Hero section elements
let heroText1 = document.getElementById("heroText1");
let heroText3 = document.getElementById("heroText3");
let heroParagraph = document.getElementById("heroParagraph");
let heroBtn1 = document.getElementById("heroBtn1");
let heroBtn2 = document.getElementById("heroBtn2");

languageSelecter.addEventListener("change", (event) => {
    setLanguage(event.target.value);
})

const setLanguage = (language) => {
    if (language == "french") {
        navLink1.innerText = translations.french.menu1;
        navLink2.innerText = translations.french.menu2;
        navLink3.innerText = translations.french.menu3;
        navLink4.innerText = translations.french.menu4;
        navLink5.innerText = translations.french.menu5;
        navLink6.innerText = translations.french.menu6;

        //hero section
        heroText1.textContent = translations.french.heroText1;
        heroText3.innerHTML = `${translations.french.heroText3} <br> <span id="heroDegree" class="maths-appli typewriter-degree"></span>`;
        heroDegree.classList.remove("degree-en");
        heroDegree.classList.add("degree-fr");
        heroParagraph.textContent = translations.french.heroParagraph;
        heroBtn1.innerHTML = `${translations.french.heroBtn1} <i class="contact-logo fa-solid fa-download"></i>`;
        heroBtn1.href = "assets/pdf/Anjara-Fitahiana-CV-Fr.pdf"
        heroBtn2.innerHTML = `${translations.french.heroBtn2} <i class="contact-logo bi bi-telephone-fill"></i>`;
    }
    else {
        navLink1.innerText = translations.english.menu1;
        navLink2.innerText = translations.english.menu2;
        navLink3.innerText = translations.english.menu3;
        navLink4.innerText = translations.english.menu4;
        navLink5.innerText = translations.english.menu5;
        navLink6.innerText = translations.english.menu6;

         // hero section
        heroText1.textContent = translations.english.heroText1;
        heroText3.innerHTML = `${translations.english.heroText3} <br> <span id="heroDegree" class="maths-appli typewriter-degree"></span>`;
        heroDegree.classList.remove("degree-fr");
        heroDegree.classList.add("degree-en");
        heroParagraph.textContent = translations.english.heroParagraph;
        heroBtn1.innerHTML = `${translations.english.heroBtn1} <i class="contact-logo fa-solid fa-download"></i>`;
        heroBtn1.href = "assets/pdf/Anjara-Fitahiana-CV-En.pdf"
        heroBtn2.innerHTML = `${translations.english.heroBtn2} <i class="contact-logo bi bi-telephone-fill"></i>`;
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const currentLang = languageSelector.value;
    setLanguage(currentLang);
});