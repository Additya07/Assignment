document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("Emailorphone").value;
      const password = document.getElementById("password").value;
  
      if (username === "user" && password === "password") {
        message.innerText = "Login successful!";
        message.style.color = "green";
      } else {
        message.innerText = "Invalid username or password.";
        message.style.color = "red";
      }
    });
  });
  