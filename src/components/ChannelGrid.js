class ChannelGrid extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        try {
            const response = await fetch(this.getDataPath());
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error('Error fetching channels:', error);
            this.innerHTML = `<p class="text-center py-8 text-red-500">Error al cargar la grilla de canales.</p>`;
        }
    }

    getDataPath() {
        const normalizedPath = window.location.pathname.replace(/\\/g, '/');
        const isNestedPage = /\/(help|instructivo|pages)\//.test(normalizedPath);
        return isNestedPage ? '../src/data/channels.json' : './src/data/channels.json';
    }

    render(sections) {
        let html = '';

        sections.forEach(section => {
            html += `<h2 class="section-title">${section.category}</h2>`;
            html += `
            <table>
                <colgroup><col class="col-number"><col class="col-name"><col class="col-pack"></colgroup>
                <tbody>`;
            
            section.channels.forEach(channel => {
                let thirdCol = '';
                if (channel.isBadge) {
                    const packClass = channel.pack.toLowerCase() === 'premium' ? 'pack-premium' : 'pack-basico';
                    thirdCol = `<span class="channel-pack ${packClass}">${channel.pack}</span>`;
                } else {
                    thirdCol = channel.pack;
                }

                html += `
                    <tr>
                        <td class="channel-number">${channel.number}</td>
                        <td>${channel.name}</td>
                        <td>${thirdCol}</td>
                    </tr>`;
            });

            html += `
                </tbody>
            </table>`;
        });

        this.innerHTML = html;
    }
}

customElements.define('channel-grid', ChannelGrid);
