class BookDetails extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  set data(book) {
      this.setAttribute('data', JSON.stringify(book));
      this.render();
  }

  get data() {
      return JSON.parse(this.getAttribute('data'));
  }

  render() {
      const book = this.data;
      if (!book) return;

      this.shadowRoot.innerHTML = `
          <style>
              /* Add relevant styles */
          </style>
          <div class="details">
              <img class="details__blur" src="${book.image}" />
              <img class="details__image" src="${book.image}" />
              <h3 class="details__title">${book.title}</h3>
              <div class="details__subtitle">${authors[book.author]} (${new Date(book.published).getFullYear()})</div>
              <p class="details__description">${book.description}</p>
          </div>
      `;
  }
}

customElements.define('book-details', BookDetails);
