let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Tüm slaytları gizle
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    
    // Her 3 saniyede bir slaytı değiştir
    setTimeout(showSlides, 3000);
}

function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}
