class headerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="menu">
      <h1>
        <a href="/" title="Navbar Brand">Rent'O</a>
      </h1>
      <button class="menu-button" title="Toggle Menu" aria-label="Toggle Menu">
        <i class="fa fa-times"></i>
        <i class="fa fa-bars"></i>
      </button>
      <ul class="menu-list">
        <li><a href="#">Home</a></li>
        <li><a href="#/partner">Partner</a></li>
        <li><a href="#/sewa">Sewa</a></li>
        <li><a href="#/login" class="loginButton">Login</a></li>
        <li><a href="#/register" class="registerButton">Register</a></li>
      </ul>
    </nav>
        `;
  }
}

customElements.define('app-header', headerBar);
