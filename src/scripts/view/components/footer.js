class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer">
        <div class="row">
          <a href="https://github.com/Rent-O-Dicoding-Cycle-5" target="blank"><i class="fa-brands fa-github"></i></i></a>
        </div>
        <div class="row">
          <ul>
            <li><a href="#/about">Abous us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div class="row">
        Rent'O Copyright © 2023 Rent'O - All rights reserved
        </div>
      </div>
    `;
  }
}

customElements.define('app-footer', FooterBar);
