/* =========================================
   KINAR AAGE - ADMIN ACCESS PROTECTION
========================================= */

import {
  app
} from "./firebase-config.js";


import {
  getAuth,
  onAuthStateChanged,
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
   HIDE ADMIN UNTIL VERIFIED
========================================= */

document.documentElement.style.visibility =
  "hidden";


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
   SECURE LOGOUT
========================================= */

function setupSecureLogout() {

  const adminLogoutButton =
    document.getElementById(
      "adminLogoutButton"
    );


  if (
    !adminLogoutButton
  ) {

    return;

  }


  adminLogoutButton.addEventListener(
    "click",
    async function(event) {

      event.preventDefault();

      event.stopImmediatePropagation();


      adminLogoutButton.disabled =
        true;


      try {

        await signOut(
          auth
        );

      }

      catch (error) {

        console.error(
          "Logout error:",
          error
        );

      }


      localStorage.removeItem(
        "kinarAageAdminSession"
      );


      sessionStorage.removeItem(
        "kinarAageAdminSession"
      );


      window.location.replace(
        "login.html"
      );

    },
    true
  );

}


/* =========================================
   ADMIN AUTH CHECK
========================================= */

onAuthStateChanged(
  auth,
  async function(user) {

    if (
      !user
    ) {

      window.location.replace(
        "login.html"
      );

      return;

    }


    try {

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


        window.location.replace(
          "login.html"
        );


        return;

      }


      document.documentElement
        .style
        .visibility =
        "visible";


      setupSecureLogout();

    }

    catch (error) {

      console.error(
        "Admin access verification error:",
        error
      );


      try {

        await signOut(
          auth
        );

      }

      catch (signOutError) {

        console.error(
          "Forced logout error:",
          signOutError
        );

      }


      window.location.replace(
        "login.html"
      );

    }

  }
);