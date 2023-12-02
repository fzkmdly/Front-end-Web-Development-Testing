import Swal from 'sweetalert2';

const Login = {
  async render() {
    return `
      <div id="login-container">
        <form id="login-form">
          <h2>Masuk</h2>
          <input type="email" id="email" name="email" placeholder="Masukkan Email" required>
          <input type="password" id="password" name="password" placeholder="Masukkan Kata Sandi" required>
          <p id="forgot-password"><a href="#/forgot-password" id="forgot-password">Lupa Kata Sandi?</a></p>
          <button type="button" id="login-btn">Masuk</button>
          <br>
          <p id="register" class="login-link">Belum punya akun? <a href="#/register">Buat Akun</a></p>
        </form>
      </div>
    `;
  },

  async afterRender() {
    // Add event listener for login button
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', this.handleLogin);
  },

  async handleLogin() {
    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Make API call to login
    try {
      const response = await fetch('https://rental-online-dicoding-cycle-5.et.r.appspot.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      // Handle response
      if (response.ok) {
        // Login successful
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil!',
          text: 'Selamat datang kembali!',
        }).then(() => {
          // Redirect to a different page or perform other actions on successful login
          console.log('Login successful:', data);
        });
      } else {
        // Login failed
        console.error('Login failed:', data);
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal!',
          text: 'Email atau kata sandi salah. Silakan coba lagi.',
        });
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error during login:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Terjadi kesalahan saat melakukan login. Coba lagi nanti atau hubungi dukungan pelanggan.',
      });
    }
  },
};

export default Login;
