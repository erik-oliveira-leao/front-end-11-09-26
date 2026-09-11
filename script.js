// Animação inicial para título e descrição
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('titulo').style.opacity = 1;
        document.getElementById('titulo').style.transform = 'translateY(0)';
        document.getElementById('descricao').style.opacity = 1;
        document.getElementById('descricao').style.transform = 'translateY(0)';
    }, 300);
});

// GSAP: rotação suave da imagem
gsap.from("img", {
    rotation: -10,
    duration: 1.5,
    ease: "power2.out"
});

// GSAP: efeito pulsar no botão
gsap.to("#btn", {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "easeInOut"
});
