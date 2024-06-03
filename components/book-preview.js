class BookPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set data({ author, id, image, title, authors }) {
    this.setAttribute("author", author);
    this.setAttribute("id", id);
    this.setAttribute("image", image);
    this.setAttribute("title", title);
    this.authors = authors;
    this.render();
  }

  get data() {
    return {
      author: this.getAttribute("author"),
      id: this.getAttribute("id"),
      image: this.getAttribute("image"),
      title: this.getAttribute("title"),
    };
  }

  render() {
    const authorName = this.authors
      ? this.authors[this.getAttribute("author")]
      : `Unknown Author`;
    this.shadowRoot.innerHTML = `
          <style>
              .preview {
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  text-align: center;
                  margin: 1px;
                  border:none;
                  border-radius: 10px;
                  width: -webkit-fill-available;
                  height: 206px;
              }
              .preview__image {
                  width: 100%;
                  height: auto;
                  object-fit: cover;
                  max-width: 150px;
                  max-height: 200px;
                
              }
              .preview__info {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
              }
              .preview__title {
                  font-size: 1.2em;
                  margin: 0;
                  margin-top: 10px;
              }
              .preview__author {
                  font-size: 1em;
                  color: gray;
                  margin-top: 5px;
              }
              @media (min-width: 600px) {
                .preview {
                  flex-direction: row;
                  text-align: left;
                }
                .preview__info {
                  align-items: flex-start;
                  margin-left: 10px;
                  width: -webkit-fill-available
                }
              }
          </style>
          <button class="preview" data-preview="${this.getAttribute("id")}">
              <img class="preview__image" src="${this.getAttribute("image")}" />
              <div class="preview__info">
                  <h3 class="preview__title">${this.getAttribute("title")}</h3>
                  <div class="preview__author">${authorName}</div>
                  </div>
              </div>
          </button>
      `;
  }
}
// Defined the custom element
customElements.define("book-preview", BookPreview);
