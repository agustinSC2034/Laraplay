import './components/Navbar.js';
import './components/Footer.js';
import './components/WhatsApp.js';
import './components/ChannelGrid.js';

// Lógica para el Acordeón de Preguntas Frecuentes
document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');

            // Cerrar otros paneles abiertos
            document.querySelectorAll('.faq-panel').forEach(p => {
                if (p !== panel && p.style.maxHeight) {
                    p.style.maxHeight = null;
                    p.style.opacity = '0';
                    p.style.paddingTop = '0';
                    p.style.paddingBottom = '0';
                    p.previousElementSibling.querySelector('.faq-icon')?.classList.remove('rotate-180');
                }
            });

            // Alternar el panel actual
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.opacity = '0';
                panel.style.paddingTop = '0';
                panel.style.paddingBottom = '0';
                icon?.classList.remove('rotate-180');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.opacity = '1';
                panel.style.paddingTop = '1rem';
                panel.style.paddingBottom = '1rem';
                icon?.classList.add('rotate-180');
            }
        });
    });
});
