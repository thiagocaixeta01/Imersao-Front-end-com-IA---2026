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