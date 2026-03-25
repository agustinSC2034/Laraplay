export class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar sticky top-0 z-40 bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-white border-opacity-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <div class="flex-shrink-0">
                        <a href="/"><img class="h-12" src="https://www.it-tel.com.ar/img/laraplay_logo.png"
                                alt="Laraplay Logo" /></a>
                    </div>
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-white focus:outline-none">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="/help/index.html" class="bg-brand-magenta text-white hover:bg-opacity-80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-magenta/50 px-4 py-2 rounded-full text-sm font-bold text-center inline-block">Centro
                                de Ayuda</a>
                            <a target="_blank" href="https://www.sensa.com.ar/?p=login"
                                class="bg-brand-cyan text-white hover:bg-opacity-80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-cyan/50 px-4 py-2 rounded-full text-sm font-bold text-center inline-block">Mi Cuenta</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" class="hidden md:hidden transition-all duration-300 transform -translate-y-4 opacity-0">
                <div class="flex flex-col items-center px-2 pt-2 pb-3 space-y-3 sm:px-3">
                    <a href="/help/index.html"
                        class="block bg-brand-magenta text-white hover:bg-opacity-80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-magenta/50 px-4 py-2 rounded-full text-sm font-bold text-center">Centro
                        de Ayuda</a>
                    <a target="_blank" href="https://www.sensa.com.ar/?p=login"
                        class="block bg-brand-cyan text-white hover:bg-opacity-80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-cyan/50 px-4 py-2 rounded-full text-sm font-bold text-center">Mi
                        Cuenta</a>
                </div>
            </div>
        </nav>
        `;

        this.setupMobileMenu();
    }

    setupMobileMenu() {
        const button = this.querySelector('#mobile-menu-button');
        const menu = this.querySelector('#mobile-menu');

        if (button && menu) {
            button.addEventListener('click', () => {
                if (menu.classList.contains('hidden')) {
                    menu.classList.remove('hidden');
                    setTimeout(() => {
                        menu.classList.remove('-translate-y-4', 'opacity-0');
                        menu.classList.add('translate-y-0', 'opacity-100');
                    }, 10);
                } else {
                    menu.classList.remove('translate-y-0', 'opacity-100');
                    menu.classList.add('-translate-y-4', 'opacity-0');
                    setTimeout(() => {
                        menu.classList.add('hidden');
                    }, 300);
                }
            });
        }
    }
}

customElements.define('app-navbar', Navbar);
