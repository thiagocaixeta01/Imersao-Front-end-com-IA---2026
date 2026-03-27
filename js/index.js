// Adicionar event listeners aos perfis para salvar no localStorage
document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        profile.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o link de navegar imediatamente

            const img = profile.querySelector('img');
            const figcaption = profile.querySelector('figcaption');

            if (img && figcaption) {
                const nome = figcaption.textContent;
                const imagem = img.src;

                // Salvar no localStorage
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imagem);

                // Agora navegar para o catálogo
                window.location.href = profile.href;
            }
        });
    });
});