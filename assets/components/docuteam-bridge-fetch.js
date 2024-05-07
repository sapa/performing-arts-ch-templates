class DocuteamBridgeFetcher extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bridgeUri = this.getAttribute('url');
        const pid = this.getAttribute('pid');
        const token = this.getAttribute('token');
        if (!bridgeUri || !pid || !token) {
            console.error('Missing required attributes: bridge-uri, pid, token');
            return;
        }

        this.fetchData(bridgeUri, pid, token)
            .then(data => {
                console.log("Data:", data);
            })
            .catch(error => {
                console.error("Error while fetching data from Docuteam bridge:", error);
            });
    }

    async fetchData(bridgeUri, pid, token) {
        console.log("Fetching data from Docuteam bridge...");
        const url = `${bridgeUri}/api/v1/access/sync_dip/${pid}?token=${token}`;
        console.log("URL:", url);
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }
}

customElements.define('docuteam-bridge-fetch', DocuteamBridgeFetcher);