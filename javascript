let registeredUsers = [];

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    clearErrors();
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    clearErrors();
}

function clearErrors() {
    document.getElementById('loginError').textContent = '';
    document.getElementById('registerError').textContent = '';
}

function registerUser() {
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;
    if (registeredUsers.find(user => user.username === newUsername)) {
        document.getElementById('registerError').textContent = 'Username already exists.';
        return false;
    }
    registeredUsers.push({
        username: newUsername,
        password: newPassword
    });
    alert('Registration successful! Please login.');
    showLoginForm();
    return false;
}

function loginUser() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = registeredUsers.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'secured.html';
        return false;
    } else {
        document.getElementById('loginError').textContent = 'Invalid username or password.';
        return false;
    }
}

function checkLoggedInUser() {
    let loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('loggedInUser').textContent = loggedInUser;
    } else {
        window.location.href = 'index.html';
    }
}

function logout() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}
if (window.location.pathname === '/secured.html') {
    checkLoggedInUser();
}
