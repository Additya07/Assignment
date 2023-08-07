document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Clear previous error messages
      usernameError.innerText = "";
      passwordError.innerText = "";
  
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Check credentials (This is a basic example, replace with your authentication logic)
      if (username === "user" && password === "password") {
        alert("Login successful!");
      } else {
        if (username !== "user") {
          usernameError.innerText = "Invalid username.";
        }
        if (password !== "password") {
          passwordError.innerText = "Invalid password.";
        }
      }
    });
  });
  