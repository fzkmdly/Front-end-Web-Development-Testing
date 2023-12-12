import Swal from 'sweetalert2/dist/sweetalert2.all.min';
import API_ENDPOINT from '../../globals/api-endpoint';

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
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');

    // Attach event listeners
    loginForm.addEventListener('submit', this.handleLogin);
    loginForm.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.handleLogin(event);
      }
    });
    loginBtn.addEventListener('click', this.handleLogin);
  },

  async handleLogin() {
    const email = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Silakan masukkan email dan kata sandi.',
      });
      return;
    }

    const storedLoginInfo = localStorage.getItem('loginInfo');

    if (storedLoginInfo) {
      const loginInfo = JSON.parse(storedLoginInfo);
      if (email === loginInfo.email && password === loginInfo.password) {
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil',
          text: 'Selamat datang kembali',
        }).then(() => {
          console.log('Login successful from localStorage:', loginInfo);
        });
        return;
      }
    }

    try {
      const response = await fetch(API_ENDPOINT.LOGIN, {
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
      console.log(data);

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil',
          text: 'Selamat datang kembali',
        }).then(() => {
          const loginInfo = {
            uid: data.data.uid,
            username: data.data.username,
            email: data.data.email,
            roles: data.data.roles,
          };
          localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
          console.log('Login successful from API:', data);
          window.location.hash = '/';
          window.location.reload();
        });
      } else {
        console.error('Login failed:', data);

        let errorMessage = 'Email atau kata sandi salah. Silakan coba lagi.';
        if (data.status === 'failed') {
          if (data.message === 'Email not found') {
            errorMessage = 'Email tidak ditemukan. Silakan daftar akun baru.';
          } else if (data.message === 'Password is wrong') {
            errorMessage = 'Kata sandi salah. Silakan coba lagi.';
          }
        }

        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
          text: errorMessage,
        });
      }
    } catch (error) {
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
