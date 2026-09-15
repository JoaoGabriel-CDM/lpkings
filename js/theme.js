/**
 * ==========================================================================
 * ARQUIVO: js/theme.js
 * DESCRIÇÃO: Script responsável por alternar entre o Modo Claro e Modo Escuro
 *            (Dark/Light Mode), atualizar os ícones e trocar o logotipo da aplicação.
 *
 * MAPA DE EDIÇÃO:
 * - Para alterar caminhos dos logotipos: Modifique os atributos 'src' dentro de applyTheme().
 * - Para ajustar preferências salvas: Verifique localStorage.getItem('theme').
 * ==========================================================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const sun = document.getElementById('icon-sun');
    const moon = document.getElementById('icon-moon');
    const logo = document.getElementById('logo');
    const footerLogo = document.getElementById('footer-logo');

    function applyTheme(isDark) {
      if (isDark) {
        html.classList.add('dark');
        if (sun) sun.classList.add('hidden');
        if (moon) moon.classList.remove('hidden');
        if (logo) logo.src = 'images/logo-dark.png';
        if (footerLogo) footerLogo.src = 'images/logo-dark.png';
      } else {
        html.classList.remove('dark');
        if (sun) sun.classList.remove('hidden');
        if (moon) moon.classList.add('hidden');
        if (logo) logo.src = 'images/logo.png';
        if (footerLogo) footerLogo.src = 'images/logo.png';
      }
    }

    // Carrega o tema salvo no localStorage ou define como 'dark' por padrão
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme ? savedTheme === 'dark' : true);

    // Event listener para o botão de alternância
    if (toggle) {
      toggle.addEventListener('click', function () {
        const isDark = !html.classList.contains('dark');
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    }
  });
})();