export class Footer extends HTMLElement {
    connectedCallback() {
        const rootPath = this.getRootPath();

        this.innerHTML = `
        <footer class="bg-gray-900 bg-opacity-50 mt-16 py-12 px-4 sm:px-6 lg:px-8 text-center border-t border-slate-800">
            <div class="max-w-7xl mx-auto text-center">
                <div class="flex items-center justify-center mb-4">
                    <img class="h-12 w-auto object-contain" src="${rootPath}img/logos/laraplay_logo.png" alt="Laraplay Logo" onerror="this.style.display='none'" />
                </div>
                <p class="text-gray-400 text-sm">
                    &copy; 2025 LARANET
                </p>
                <p class="text-gray-500 text-xs mt-2">
                    Laraplay es un servicio de TV ofrecido por Laranet a través de la
                    plataforma Sensa.
                </p>
            </div>
        </footer>
        `;
    }

    getRootPath() {
        const normalizedPath = window.location.pathname.replace(/\\/g, '/');
        return /\/(help|instructivo|pages)\//.test(normalizedPath) ? '../' : './';
    }
}

customElements.define('app-footer', Footer);
