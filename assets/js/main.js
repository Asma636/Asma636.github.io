/* =====================================================
   ASMA AHMED ALI - PORTFOLIO
   JAVASCRIPT
   ===================================================== */


/* ================= MENU MOBILE ================= */

const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {

        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });

    }
};

showMenu('nav-toggle', 'nav-menu');


/* ================= FERMER LE MENU ================= */

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        const navMenu = document.getElementById('nav-menu');

        if (navMenu) {
            navMenu.classList.remove('show');
        }

    });

});


/* ================= SCROLL REVEAL ================= */

if (typeof ScrollReveal !== 'undefined') {

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 100,
        reset: false
    });


    /* Accueil */
    sr.reveal('.home__data', {
        origin: 'left'
    });

    sr.reveal('.home__img', {
        origin: 'right',
        delay: 200
    });


    /* À propos */
    sr.reveal('.about__img', {
        origin: 'left'
    });

    sr.reveal('.about__subtitle, .about__text', {
        origin: 'right',
        interval: 100
    });


    /* Compétences */
    sr.reveal('.skill-card', {
        interval: 120
    });


    /* Projets */
    sr.reveal('.project-card', {
        interval: 150
    });


    /* Contact */
    sr.reveal('.contact__form', {
        origin: 'bottom'
    });
// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const contactSubmit = document.getElementById("contact-submit");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        contactSubmit.disabled = true;
        contactSubmit.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Envoi...';

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                contactStatus.textContent =
                    "✅ Merci ! Votre message a bien été envoyé.";

                contactStatus.className =
                    "contact__status success";

                contactForm.reset();

            } else {

                contactStatus.textContent =
                    "❌ Une erreur est survenue. Veuillez réessayer.";

                contactStatus.className =
                    "contact__status error";
            }

        } catch (error) {

            contactStatus.textContent =
                "❌ Impossible d'envoyer le message. Vérifiez votre connexion.";

            contactStatus.className =
                "contact__status error";
        }

        contactSubmit.disabled = false;

        contactSubmit.innerHTML =
            '<i class="bx bx-send"></i> Envoyer le message';
    });
}

}