const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "password") {
    alert("Login successful!");
  } else {
    alert("Username or password is incorrect!");
  }
});



