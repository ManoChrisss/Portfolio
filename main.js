// Animação das seções ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    function revealSections() {
        document.querySelectorAll('section').forEach(function(section) {
            const rect = section.getBoundingClientRect();
            if(rect.top < window.innerHeight - 80) {
                section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();

    // Calcular idade automaticamente
    const nascimento = new Date(2005, 6, 10); // mês começa do zero: 6 = julho
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    const idadeSpan = document.getElementById('idade');
    if (idadeSpan) {
        idadeSpan.textContent = idade;
    }
});

document.querySelectorAll('img.expandir').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
        const modal = document.getElementById('modal-imagem');
        const modalImg = document.getElementById('img-expandida');
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        modal.classList.add('ativo');
    });
});
document.querySelector('.fechar-modal').onclick = function() {
    document.getElementById('modal-imagem').classList.remove('ativo');
};
document.getElementById('modal-imagem').onclick = function(e) {
    if (e.target === this) this.classList.remove('ativo');
};

//botao voltar ao topo
const btnVoltarTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
        btnVoltarTopo.style.display = 'block';
    } else {
        btnVoltarTopo.style.display = 'none';
    }
});

// Adiciona a funcionalidade de rolar para o topo
btnVoltarTopo.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

