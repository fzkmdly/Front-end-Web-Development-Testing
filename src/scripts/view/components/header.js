class headerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const isAuthenticated = localStorage.getItem("loginInfo") !== null;
    const userName = this.getUserName();
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
        ${
          isAuthenticated
            ? `<li><a href="#/user" class="userName">${userName}</a></li>
               <li><a href="#" class="logoutButton">Logout</a></li>`
            : `<li><a href="#/login" class="loginButton">Login</a></li>
               <li><a href="#/register" class="registerButton">Register</a></li>`
        }
      </ul>
    </nav>
        `;
    if (isAuthenticated) {
      // Jika pengguna sudah login, tambahkan event listener untuk tombol logout
      const logoutButton = this.querySelector(".logoutButton");
      if (logoutButton) {
        logoutButton.addEventListener("click", this.handleLogout.bind(this));
      }
    }
  }

  getUserName() {
    // Ambil nama pengguna dari penyimpanan lokal atau dari server (sesuai kebutuhan)
    const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    const username = loginInfo ? loginInfo.username : null;
    return username || "User";
  }
  handleLogout() {
    console.log("Logout button clicked");
    // Hapus informasi login dari localStorage
    localStorage.removeItem("loginInfo");

    // Redirect ke halaman login setelah logout
    window.location.href = "#/login";
  }
}

customElements.define("app-header", headerBar);
