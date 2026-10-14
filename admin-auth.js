import { app } from "./firebase-config.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";


const auth = getAuth(app);

const adminLogoutButton =
  document.getElementById("adminLogoutButton");


onAuthStateChanged(
  auth,
  function(user) {

    if (!user) {

      window.location.href =
        "login.html";

    }

  }
);


if (adminLogoutButton) {

  adminLogoutButton.addEventListener(
    "click",
    async function() {

      try {

        await signOut(auth);

        window.location.href =
          "login.html";

      }

      catch (error) {

        console.error(
          "Logout error:",
          error
        );

        alert(
          "Unable to logout. Please try again."
        );

      }

    }
  );

}