const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Registration successful!");

    window.location.href = "login.html";

});