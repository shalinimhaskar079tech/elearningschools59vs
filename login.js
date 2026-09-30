const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Login successful!");

    window.location.href = "home.html";
});