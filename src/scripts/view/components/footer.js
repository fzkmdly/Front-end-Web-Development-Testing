class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="bg-black py-8 footer-container">
      <div class="github">
        <a href="https://github.com/Rent-O-Dicoding-Cycle-5" target="_blank">
          <i class="fab fa-github github"></i>
        </a>
      </div>
    
      <div class="about-us-footer">
        <a href="#/about">About us</a>
      </div>
    
      <div class="tac">
        <a href="#/tac">Terms & Conditions</a>
      </div>
    
      <div>
        &copy; 2023 Rent'O - All rights reserved
      </div>
    </div>
  
    `;
  }
}

customElements.define('app-footer', FooterBar);
