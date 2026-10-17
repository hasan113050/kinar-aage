/* =========================================
   KINAR AAGE - SECURE ADMIN LOGIN
========================================= */

import {
  app
} from "./firebase-config.js";


import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";


import {
  getFirestore,
  doc,
  getDocFromServer
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";


const auth =
  getAuth(
    app
  );


const db =
  getFirestore(
    app
  );


/* =========================================
   DOM
========================================= */

const adminLoginForm =
  document.getElementById(
    "adminLoginForm"
  );

const adminEmail =
  document.getElementById(
    "adminEmail"
  );

const adminPassword =
  document.getElementById(
    "adminPassword"
  );

const adminLoginButton =
  document.getElementById(
    "adminLoginButton"
  );

const forgotPasswordButton =
  document.getElementById(
    "forgotPasswordButton"
  );

const togglePasswordButton =
  document.getElementById(
    "togglePasswordButton"
  );

const loginMessage =
  document.getElementById(
    "loginMessage"
  );


/* =========================================
   MESSAGE
========================================= */

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


/* =========================================
   CHECK APPROVED ADMIN
========================================= */

async function isApprovedAdmin(
  user
) {

  if (
    !user?.uid
  ) {

    return false;

  }


  const adminRef =
    doc(
      db,
      "admins",
      user.uid
    );


  const snapshot =
    await getDocFromServer(
      adminRef
    );


  if (
    !snapshot.exists()
  ) {

    return false;

  }


  const adminData =
    snapshot.data();


  return (
    adminData.role === "admin" &&
    adminData.active === true
  );

}


/* =========================================
   EXISTING LOGIN SESSION
========================================= */

onAuthStateChanged(
  auth,
  async function(user) {

    if (!user) {
      return;
    }


    try {

      const approved =
        await isApprovedAdmin(
          user
        );


      if (
        approved
      ) {

        window.location.href =
          "admin.html";

        return;

      }


      await signOut(
        auth
      );


      showMessage(
        "This account does not have admin access.",
        "error"
      );

    }

    catch (error) {

      console.error(
        "Admin verification error:",
        error
      );


      showMessage(
        "Unable to verify admin access.",
        "error"
      );

    }

  }
);


/* =========================================
   LOGIN
========================================= */

if (
  adminLoginForm
) {

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


      showMessage(
        ""
      );


      try {

        const credential =
          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );


        const user =
          credential.user;


        const approved =
          await isApprovedAdmin(
            user
          );


        if (
          !approved
        ) {

          await signOut(
            auth
          );


          showMessage(
            "This account is not authorized as an admin.",
            "error"
          );


          return;

        }


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


        else if (
          error.code ===
          "auth/invalid-email"
        ) {

          message =
            "Please enter a valid email address.";

        }


        else if (
          error.code ===
          "auth/user-disabled"
        ) {

          message =
            "This account has been disabled.";

        }


        else if (
          error.code ===
          "auth/too-many-requests"
        ) {

          message =
            "Too many failed attempts. Please try again later.";

        }


        else if (
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


/* =========================================
   FORGOT PASSWORD
========================================= */

if (
  forgotPasswordButton
) {

  forgotPasswordButton.addEventListener(
    "click",
    async function() {

      const email =
        adminEmail.value.trim();


      if (
        !email
      ) {

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


      showMessage(
        ""
      );


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


        else if (
          error.code ===
          "auth/too-many-requests"
        ) {

          message =
            "Too many requests. Please try again later.";

        }


        else if (
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


/* =========================================
   SHOW / HIDE PASSWORD
========================================= */

if (
  togglePasswordButton
) {

  togglePasswordButton.addEventListener(
    "click",
    function() {

      const hidden =
        adminPassword.type ===
        "password";


      adminPassword.type =
        hidden
          ? "text"
          : "password";


      togglePasswordButton.setAttribute(
        "aria-label",
        hidden
          ? "Hide password"
          : "Show password"
      );

    }
  );

}