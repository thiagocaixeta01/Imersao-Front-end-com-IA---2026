// Controle da tela de carregamento
document.addEventListener('DOMContentLoaded', () => {
    const loadingVideo = document.getElementById('loading-video');
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.querySelector('main');
    const body = document.body;

    if (loadingVideo) {
        loadingVideo.addEventListener('ended', () => {
            // Vídeo terminou, esconder loading e mostrar conteúdo
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'flex';
                body.style.overflow = 'auto';
            }, 500);
        });

        // Fallback: se vídeo der erro, mostrar após 1s
        loadingVideo.addEventListener('error', () => {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    mainContent.style.display = 'flex';
                    body.style.overflow = 'auto';
                }, 500);
            }, 1000);
        });
    }
});

// Script para alternar entre dark e light mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para alternar tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    themeToggle.textContent = isLight ? '\u2600\uFE0F' : '\uD83C\uDF19'; // ?? : ??
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '\u2600\uFE0F'; // ??
}