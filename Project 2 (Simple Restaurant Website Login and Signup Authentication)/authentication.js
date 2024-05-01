const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    
    if (loginEmail === 'user@example.com' && loginPassword === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const signupName = document.getElementById('signupName').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPassword = document.getElementById('signupPassword').value;
    alert(`Welcome, ${signupName}! Your account has been created.`);
});

function toggleForm() {
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');
    loginBox.style.display = loginBox.style.display === 'none' ? 'block' : 'none';
    signupBox.style.display = signupBox.style.display === 'none' ? 'block' : 'none';
}