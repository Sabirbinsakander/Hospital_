document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const loginButton = document.querySelector(".login-button");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents form from submitting immediately

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Simulated login validation
        if (username === "admin" && password === "admin123") {
            alert("Login successful! Redirecting...");
            window.location.href = "/Html/billing.html"; // Redirect to dashboard
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
