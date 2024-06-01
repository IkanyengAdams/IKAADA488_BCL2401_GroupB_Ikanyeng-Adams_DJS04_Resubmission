class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add styles for the search form component */
      </style>
      <form>
        <input type="text" name="title" placeholder="Search by title" />
        <dropdown-menu data-genres></dropdown-menu>
        <dropdown-menu data-authors></dropdown-menu>
        <button type="submit">Search</button>
      </form>
    `;
  }
}

customElements.define('search-form', SearchForm);
