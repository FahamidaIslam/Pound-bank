document.getElementById('btn-submit').addEventListener('click', function () {
    const emailInput = document.getElementById('email-field');
    const userEmail = emailInput.value;
    const passwordInput = document.getElementById('password-field');
    const userPassword = passwordInput.value;
    if (userEmail === 'fahamida.islam.prity@gmail.com' && userPassword === '123') {
        window.location.href = 'home.html';
    }

    else {
        alert('Invalid user name or password')
    }

    emailInput.value = '';
    passwordInput.value = '';

})



