class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
  <div class="container">
    <div class="container text-start">
      <div class="row">
        <div class="col">
          <a href="index.html">
            <img src="images/LogoRecipes02.png" class="logo" height="200px" alt="Logo" />
          </a>
        </div>
        <div class="col text-end">
          <nav class="navbar navbar-expand-lg bg-body-tertiary home-bar">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              <a class="nav-link" href="recipes.html">Recipes</a>
              <a class="nav-link" href="aboutus.html">About us</a>
            </div>
          </nav>
        </div>
      </div>
    </div>`;
    }
  }
  
  
  customElements.define('header-component', Header);
  
    