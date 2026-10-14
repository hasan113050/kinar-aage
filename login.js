import { app } from "./firebase-config.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";


const auth = getAuth(app);


const adminLoginForm =
  document.getElementById("adminLoginForm");

const adminEmail =
  document.getElementById("adminEmail");

const adminPassword =
  document.getElementById("adminPassword");

const adminLoginButton =
  document.getElementById("adminLoginButton");

const forgotPasswordButton =
  document.getElementById("forgotPasswordButton");

const togglePasswordButton =
  document.getElementById("togglePasswordButton");

const loginMessage =
  document.getElementById("loginMessage");


function showMessage(
  message,
  type = ""
) {

  if (!loginMessage) {
    return;
  }

  loginMessage.textContent =
    message;

  loginMessage.className =
    "login-message";

  if (type) {

    loginMessage.classList.add(
      type
    );

  }

}


onAuthStateChanged(
  auth,
  function(user) {

    if (user) {

      window.location.href =
        "admin.html";

    }

  }
);


if (adminLoginForm) {

  adminLoginForm.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const email =
        adminEmail.value.trim();

      const password =
        adminPassword.value;


      if (
        !email ||
        !password
      ) {

        showMessage(
          "Please enter your email and password.",
          "error"
        );

        return;

      }


      adminLoginButton.disabled =
        true;

      adminLoginButton.textContent =
        "Logging in...";

      showMessage("");


      try {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );


        showMessage(
          "Login successful.",
          "success"
        );


        window.location.href =
          "admin.html";

      }

      catch (error) {

        console.error(
          "Login error:",
          error
        );


        let message =
          "Unable to login. Please check your email and password.";


        if (
          error.code ===
          "auth/invalid-credential"
        ) {

          message =
            "Invalid email or password.";

        }


        if (
          error.code ===
          "auth/invalid-email"
        ) {

          message =
            "Please enter a valid email address.";

        }


        if (
          error.code ===
          "auth/user-disabled"
        ) {

          message =
            "This admin account has been disabled.";

        }


        if (
          error.code ===
          "auth/too-many-requests"
        ) {

          message =
            "Too many failed attempts. Please try again later.";

        }


        if (
          error.code ===
          "auth/network-request-failed"
        ) {

          message =
            "Network error. Please check your internet connection.";

        }


        showMessage(
          message,
          "error"
        );

      }

      finally {

        adminLoginButton.disabled =
          false;

        adminLoginButton.textContent =
          "Login";

      }

    }
  );

}


if (forgotPasswordButton) {

  forgotPasswordButton.addEventListener(
    "click",
    async function() {

      const email =
        adminEmail.value.trim();


      if (!email) {

        showMessage(
          "Enter your email first, then click Forgot Password.",
          "error"
        );

        adminEmail.focus();

        return;

      }


      forgotPasswordButton.disabled =
        true;

      forgotPasswordButton.textContent =
        "Sending...";

      showMessage("");


      try {

        await sendPasswordResetEmail(
          auth,
          email
        );


        showMessage(
          "Password reset email sent. Please check your inbox.",
          "success"
        );

      }

      catch (error) {

        console.error(
          "Password reset error:",
          error
        );


        let message =
          "Unable to send password reset email. Please try again.";


        if (
          error.code ===
          "auth/invalid-email"
        ) {

          message =
            "Please enter a valid email address.";

        }


        if (
          error.code ===
          "auth/too-many-requests"
        ) {

          message =
            "Too many requests. Please try again later.";

        }


        if (
          error.code ===
          "auth/network-request-failed"
        ) {

          message =
            "Network error. Please check your internet connection.";

        }


        showMessage(
          message,
          "error"
        );

      }

      finally {

        forgotPasswordButton.disabled =
          false;

        forgotPasswordButton.textContent =
          "Forgot Password?";

      }

    }
  );

}


if (togglePasswordButton) {

  togglePasswordButton.addEventListener(
    "click",
    function() {

      const isPasswordHidden =
        adminPassword.type === "password";


      adminPassword.type =
        isPasswordHidden
          ? "text"
          : "password";


      togglePasswordButton.setAttribute(
        "aria-label",
        isPasswordHidden
          ? "Hide password"
          : "Show password"
      );

    }
  );

}