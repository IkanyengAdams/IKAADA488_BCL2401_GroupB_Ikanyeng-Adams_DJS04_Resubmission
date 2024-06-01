class BookPreview extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      this.render();
  }

  set data({ author, id, image, title }) {
      this.setAttribute('author', author);
      this.setAttribute('id', id);
      this.setAttribute('image', image);
      this.setAttribute('title', title);
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
                  <div class="preview__author">${authors[this.getAttribute('author')]}</div>
              </div>
          </button>
      `;
  }
}

customElements.define('book-preview', BookPreview);

