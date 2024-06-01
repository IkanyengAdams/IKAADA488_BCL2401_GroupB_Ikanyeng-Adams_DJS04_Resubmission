class DropdownMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set data({ items, defaultOption }) {
    const fragment = document.createDocumentFragment();
    const firstElement = document.createElement('option');
    firstElement.value = 'any';
    firstElement.innerText = defaultOption;
    fragment.appendChild(firstElement);

    Object.entries(items).forEach(([id, name]) => {
      const optionElement = document.createElement('option');
      optionElement.value = id;
      optionElement.innerText = name;
      fragment.appendChild(optionElement);
    });

    this.shadowRoot.appendChild(fragment);
  }
}

customElements.define('dropdown-menu', DropdownMenu);
