// Assuming login.js is in the js folder
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const requestBody = {
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://panel.mait.ac.in:8001/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('accessToken', data.access);
            localStorage.setItem('refreshToken', data.refresh);
            window.location.href = 'dashboard.html'; // Redirect to dashboard after successful login
        } else {
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}
