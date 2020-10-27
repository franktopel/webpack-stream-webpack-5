export class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.x = 1;
  }
  
  connectedCallback() {
    console.log('I'm alive');
  }
}

customElements.define('my-component', MyComponent);
