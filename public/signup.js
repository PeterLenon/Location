function getSignupInfo() {
  const inputName = document.getElementById("name-signin-input");
  const inputEmail = document.getElementById("email-signin-input");
  const inputPassword = document.getElementById("password-signin-input");

  const signinName = inputName.value;
  const signinEmail = inputEmail.value;
  const signinPassword = inputPassword.value;

  return {
    signinName: signinName,
    signinEmail: signinEmail,
    signinPassword: signinPassword,
  };
}
let User = getSignupInfo();

const signinButton = document.getElementById("signin-button");
signinButton.onclick = () => {
  try {
    const response = fetch("http://localhost:3000/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: User.signinEmail,
      }),
    });
    if (response.ok) {
      if (response.password == User.signinPassword) {
        window.location.href = "index.html";
      } else {
        document
          .getElementById("wrong-credetials-div")
          .innerHTML("wrong password or email");
      }
    } else {
      document
        .getElementById("wrong-credetials-div")
        .innerHTML("wrong password or email");
    }
  } catch (error) {}
};

const signupButton = document.getElementById("signup-button");
signupButton.onclick = () => {
  try {
    const response = fetch("http://localhost:3000/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: User.signinEmail,
      }),
    });
    if (response.ok) {
      document
        .getElementById("wrong-credetials-div")
        .innerHTML("account with email already exists");
    } else {
      fetch("http://localhost:3000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: User.signinName,
          email: User.signinEmail,
          password: User.signinPassword,
        }),
      });
    }
  } catch (error) {}
};
