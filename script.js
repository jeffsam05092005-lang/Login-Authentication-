document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // Get the input values
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    // Clear previous messages
    messageElement.textContent = '';
    messageElement.className = 'error'; // Reset class
    const CORRECT_USERNAME = 'user123';
    const CORRECT_PASSWORD = 'password123';
    // --------------------------------------------------

    if (usernameInput === CORRECT_USERNAME && passwordInput === CORRECT_PASSWORD) {
        // SUCCESSFUL LOGIN (Client-side simulation)
        messageElement.textContent = 'Login Successful! Redirecting...';
        messageElement.className = 'success';
        
        // In a real app, you would receive a token from the server here
        // and then redirect the user:
        // window.location.href = '/dashboard.html'; 

    } else {
        // FAILED LOGIN
        messageElement.textContent = 'Invalid Username or Password.';
        messageElement.className = 'error';
    }
});
