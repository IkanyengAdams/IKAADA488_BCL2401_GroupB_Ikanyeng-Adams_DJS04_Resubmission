class ThemeToggle extends HTMLElement {
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
        /* Add styles for the theme toggle component */
      </style>
      <form>
        <select name="theme">
          <option value="day">Day</option>
          <option value="night">Night</option>
        </select>
        <button type="submit">Apply</button>
      </form>
    `;
  }
}

customElements.define('theme-toggle', ThemeToggle);
