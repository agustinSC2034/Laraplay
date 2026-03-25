export class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-gray-900 bg-opacity-50 mt-16 py-12 px-4 sm:px-6 lg:px-8 text-center border-t border-slate-800">
            <div class="max-w-7xl mx-auto text-center">
                <img class="h-12 mx-auto mb-4" src="https://www.it-tel.com.ar/img/laraplay_logo.png" alt="Laraplay Logo" />
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
}

customElements.define('app-footer', Footer);
