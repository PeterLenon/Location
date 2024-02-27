function getSignupInfo() {
    const inputName = document.getElementById('name-signin-input');
    const inputEmail = document.getElementById('email-signin-input');
    const inputPassword = document.getElementById('password-signin-input');

    const signinName = inputName.value;
    const signinEmail = inputEmail.value;
    const signinPassword = inputPassword.value;

    return {
        signinName: signinName,
        signinEmail: signinEmail,
        signinPassword: signinPassword
    };

}

const signinButton = document.getElementById('signin-button');

