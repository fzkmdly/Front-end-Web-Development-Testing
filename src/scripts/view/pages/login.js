const Login = {
  async render() {
    return `
      <div id="login-container">
      <form id="login-form">
        <h2>Masuk</h2>
        <input type="email" id="email" name="email" placeholder="Masukkan Email" required>
        <input type="password" id="password" name="password" placeholder="Masukkan Kata Sandi" required>
        <p id="forgot-password"><a href="#/forgot-password" id="forgot-password">Lupa Kata Sandi?</a></p>
        <button type="button" onclick="login()">Masuk</button>
        <br>
        <p id="register"><a href="#/register">Buat Akun</a></p>
      </form>
    </div>
    `;
  },
  async afterRender() {

  },
};

export default Login;
