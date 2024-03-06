function getSignupInfo() {
  const inputEmail = document.getElementById("email-signin-input");
  const inputPassword = document.getElementById("password-signin-input");

  const signinEmail = inputEmail.value;
  const signinPassword = inputPassword.value;

  return {
    signinEmail: signinEmail,
    signinPassword: signinPassword,
  };
}

const signinButton = document.getElementById("signin-button");
signinButton.onclick = () => {
  let User = getSignupInfo();
  localStorage.setItem("userEmail", User.signinEmail);
  localStorage.setItem("userName", "Peter");
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
        localStorage.setItem("userName", response.JSON.username);
        localStorage.setItem("userEmail", response.JSON.email);
        window.location.href = "index.html";
      } else {
        document.getElementById("wrong-credentials").style.display = "block";
      }
    } else {
      document.getElementById("wrong-credentials").style.display = "block";
    }
  } catch (error) {
    document.getElementById("wrong-credentials").style.display = "block";
  }
};
