export class WhatsApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="https://wa.me/5491128177964" target="_blank"
            class="fixed bottom-5 right-5 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="h-8 w-8">
        </a>
        `;
    }
}

customElements.define('app-whatsapp', WhatsApp);
