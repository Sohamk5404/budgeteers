document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        alert('Signup successful!');
        window.location.href = 'index.html';
    } else {
        const result = await response.json();
        alert(result.message || 'Signup failed');
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    if (response.ok) {
        localStorage.setItem('token', result.token);
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert(result.message || 'Login failed');
    }
});

if (!localStorage.getItem('token') && window.location.pathname === '/index.html') {
    window.location.href = 'login.html';
}
