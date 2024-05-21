let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    
    // Vérifie si l'index est inférieur à zéro ou dépasse le nombre total de diapositives
    if (index < 0) {
        currentSlide = slides.length - 1; // Si l'index est inférieur à zéro, retourne à la dernière diapositive
    } else if (index >= slides.length) {
        currentSlide = 0; // Si l'index dépasse le nombre total de diapositives, retourne à la première diapositive
    } else {
        currentSlide = index; // Sinon, met à jour l'index actuel
    }

    // Affiche la diapositive correspondante
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-currentSlide * 100}%)`;
        slide.classList.toggle('active', i === currentSlide);
    });
}

function navigateSlide(direction) {
    if (direction === 'next') {
        showSlide(currentSlide + 1); // Pour la diapositive suivante
    } else {
        showSlide(currentSlide - 1); // Pour la diapositive précédente
    }
}

// Initialisation de la première diapositive
showSlide(currentSlide);



