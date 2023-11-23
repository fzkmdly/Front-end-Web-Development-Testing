class headerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="Identity">
            <img class="lazyload" src="./images/logo/android-chrome-192x192.png" alt="AkaRestourant Logo" />
            <h2>Rent'O</h2>
        </section>
        <button class="menu-button" id="open-drawer">&#9776;</button>
        <nav class="drawer" id="drawer">
            <li><a href="#">Home</a></li>
            <li><a href="#/partner">Partner</a></li>
            <li><a href="#/sewa">sewa</a></li>
        </nav>
        <nav class="drawer" id="drawer">
            <li><a href="#/login">Login</a></li>
            <li><a href="#/register">Register</a></li>
        </nav>
        `;
  }
}

customElements.define('app-header', headerBar);
