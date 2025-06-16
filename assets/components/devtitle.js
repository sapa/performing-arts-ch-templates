class DevTitle extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.updateIri();
  }

  updateIri() {
    // Get window location and base URI
    const location = window.location;
    // Select the element with the class 'metaphacts-header-navbar' and add the location.origin as a class
    const navbar = document.querySelector('.metaphacts-header-navbar');
    if (navbar) {
      const originWithoutProtocol = location.origin.replace(/https?:\/\//, '');
      navbar.classList.add(originWithoutProtocol);
      const aElement = navbar.querySelector('a');
      if (aElement) {
        const text = aElement.textContent.trim();
        if (originWithoutProtocol.startsWith('dev.') && !text.includes('DEV')) {
          aElement.textContent = `DEV ${text}`;
        }
      }
    }
  }
}
customElements.define('dev-title', DevTitle);