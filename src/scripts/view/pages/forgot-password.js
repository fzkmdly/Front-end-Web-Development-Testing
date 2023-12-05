const ForgotPassword = {
  render() {
    return `
        <div id="forgot-password-container">
          <form id="forgot-password-form">
            <h2>Lupa Kata Sandi</h2>
            <input type="email" id="email" name="email" placeholder="Masukkan Email Terdaftar" required>
            <button type="submit" id="submit-btn">Kirim Link Reset Kata Sandi</button>
          </form>
        </div>
      `;
  },

  afterRender() {
    const form = document.getElementById('forgot-password-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;

      // You can add logic here to handle the submission, such as sending a reset email.
      // For demonstration purposes, let's log the email to the console.
      console.log('Email submitted:', email);
    });
  },
};

export default ForgotPassword;

