class headerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="Identity">
            <img class="lazyload" src="https://i.pinimg.com/564x/b4/2d/d3/b42dd36ea914cd836b1ca4d2855fee7f.jpg" alt="AkaRestourant Logo" />
            <h2>Rent'O</h2>
        </section>
        <button class="menu-button" id="open-drawer">&#9776;</button>
        <section class="mainNavigation">
          <nav class="drawer" id="drawer">
              <li><a href="#">Home</a></li>
              <li><a href="#/partner">Partner</a></li>
              <li><a href="#/sewa">Sewa</a></li>
          </nav>
          <nav class="signDrawer" id="signDrawer">
              <li><a href="#/login" class="loginButton">Login</a></li>
              <li><a href="#/register" class="registerButton">Register</a></li>
          </nav>
        </section>
        `;
  }
}

customElements.define('app-header', headerBar);
