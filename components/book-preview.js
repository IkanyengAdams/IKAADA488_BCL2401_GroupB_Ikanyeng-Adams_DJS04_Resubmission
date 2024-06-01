class BookPreview extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      this.render();
  }

  set data({ author, id, image, title, authors }) {
      this.setAttribute('author', author);
      this.setAttribute('id', id);
      this.setAttribute('image', image);
      this.setAttribute('title', title);
      this.authors = authors;
      this.render();
  }

  get data() {
      return {
          author: this.getAttribute('author'),
          id: this.getAttribute('id'),
          image: this.getAttribute('image'),
          title: this.getAttribute('title')
      };
  }

  render() {
    const authorName = this.authors ? this.authors[this.getAttribute('author')] : `Unknown Author`;
      this.shadowRoot.innerHTML = `
          <style>
              .preview {
                  display: flex;
                  align-items: center;
                  cursor: pointer;
              }
              .preview__image {
                  width: 100px;
                  height: 150px;
                  object-fit: cover;
                  margin-right: 10px;
              }
              .preview__info {
                  display: flex;
                  flex-direction: column;
              }
              .preview__title {
                  font-size: 1.2em;
                  margin: 0;
              }
              .preview__author {
                  font-size: 1em;
                  color: gray;
              }
          </style>
          <button class="preview" data-preview="${this.getAttribute('id')}">
              <img class="preview__image" src="${this.getAttribute('image')}" />
              <div class="preview__info">
                  <h3 class="preview__title">${this.getAttribute('title')}</h3>
                  <div class="preview__author">${authorName}</div>
                  </div>
              </div>
          </button>
      `;
  }
}
// Defined the custom element
customElements.define('book-preview', BookPreview);

