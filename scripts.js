// Efeito de rolagem suave nas seções
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animação flutuante sutil
document.querySelectorAll(".content-section").forEach(section => {
    section.addEventListener("mouseover", () => {
        section.style.transform = "scale(1.02)";
    });
    section.addEventListener("mouseout", () => {
        section.style.transform = "scale(1)";
    });
});
