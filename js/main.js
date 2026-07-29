/* ======================================
   COMMIT 6
====================================== */

/************ BACK TO TOP ************/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/************ NAVBAR ************/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scroll");
    }else{
        header.classList.remove("scroll");
    }

});


/************ DARK MODE ************/

const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");
        toggle.textContent="☀️";

    }else{

        localStorage.setItem("theme","light");
        toggle.textContent="🌙";

    }

});
/************ MENU HAMBURGER ************/

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});

/************ COMPTE A REBOURS ************/

const jours = document.getElementById("jours");
const heures = document.getElementById("heures");
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");

if (jours && heures && minutes && secondes) {

    const dateEvenement = new Date("July 10, 2027 09:00:00").getTime();

    function compteRebours() {

        const maintenant = new Date().getTime();
        const difference = dateEvenement - maintenant;

        if (difference <= 0) {

            jours.textContent = "00";
            heures.textContent = "00";
            minutes.textContent = "00";
            secondes.textContent = "00";
            return;

        }

        const j = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        jours.textContent = j;
        heures.textContent = h;
        minutes.textContent = m;
        secondes.textContent = s;

    }

    compteRebours();

    setInterval(compteRebours, 1000);

}
/* ==================================================
   COMMIT 7
   COMPTEURS ANIMÉS
================================================== */

const compteurs = document.querySelectorAll(".counter");

compteurs.forEach((compteur) => {

    const objectif = Number(compteur.dataset.target);
    let valeur = 0;

    const interval = setInterval(() => {

        valeur += Math.ceil(objectif / 100);

        if (valeur >= objectif) {

            valeur = objectif;
            clearInterval(interval);

        }

        compteur.textContent = valeur + "+";

    }, 20);

});
/************ ANIMATIONS AU SCROLL ************/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{

    threshold:0.2

});

sections.forEach((section)=>{

    observer.observe(section);

});
/* ==================================================
   COMMIT 7
   FILTRAGE DES INTERVENANTS
================================================== */

const boutonsFiltre = document.querySelectorAll(".filtres-container button");
const cartes = document.querySelectorAll(".grille-intervenants article");

boutonsFiltre.forEach((bouton) => {

    bouton.addEventListener("click", () => {

        // Retire la classe active de tous les boutons
        boutonsFiltre.forEach(btn => btn.classList.remove("actif"));

        // Ajoute la classe active au bouton cliqué
        bouton.classList.add("actif");

        // Catégorie choisie
        const filtre = bouton.dataset.filter;

        cartes.forEach((carte) => {

            if (filtre === "tous" || carte.dataset.category === filtre) {

                carte.style.display = "block";

            } else {

                carte.style.display = "none";

            }

        });

    });

});
/* ==================================================
   COMMIT 7
   ONGLETS PROGRAMME
================================================== */

const boutonsJour = document.querySelectorAll(".onglets button");
const plannings = document.querySelectorAll(".planning");

boutonsJour.forEach((bouton) => {

    bouton.addEventListener("click", () => {

        // Bouton actif
        boutonsJour.forEach(btn => btn.classList.remove("actif"));
        bouton.classList.add("actif");

        // Cache tous les plannings
        plannings.forEach(planning => {
            planning.style.display = "none";
        });

        // Affiche le planning correspondant
        const jour = bouton.dataset.jour;
        document.getElementById("planning-jour" + jour).style.display = "block";

    });

});