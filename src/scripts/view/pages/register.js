const Register = {
  async render() {
    return `
      <div id="register-container">
          <form id="register-form">
              <h2>Daftar</h2>
              <input type="text" name="username" id="name" placeholder="Masukkan Nama Anda" required>
              <br>
              <input type="email" name="email" id="email" placeholder="Masukkan Email" required>
              <br>
              <input type="password" name="password" id="password" placeholder="Masukkan kata sandi" required>
              <br>
              <input type="password" name="confirm_password" placeholder="Masukkan ulang kata sandi" required>
              <br>
              <button type="submit">Daftar</button>
              <br>
              <p id="register" class="login-link">Sudah punya akun? <a href="#/login">Login</a></p>
          </form>
      </div>
    `;
  },

  async afterRender() {
    // Kode logika atau manipulasi DOM setelah rendering
  },
};

export default Register;
