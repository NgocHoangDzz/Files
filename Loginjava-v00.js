document.addEventListener('DOMContentLoaded', () => {
      const loginButton = document.getElementById('login-button');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const loginMessage = document.getElementById('login-message');
      const CORRECT_PASSWORD = "03944";

      if (sessionStorage.getItem("loggedIn") === "true") {
        window.location.href = "index.html";
      }

      loginButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value.trim();
        if (enteredPassword === CORRECT_PASSWORD) {
          sessionStorage.setItem("loggedIn", "true");
          loginMessage.textContent = "Đăng nhập thành công! Đang chuyển hướng...";
          loginMessage.style.color = "green";
          setTimeout(() => {
            window.location.href = "index.html";
          }, 1000);
        } else {
          loginMessage.textContent = "Mật khẩu không chính xác!";
          loginMessage.style.color = "red";
        }
      });
      passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          loginButton.click();
        }
      });
    });
