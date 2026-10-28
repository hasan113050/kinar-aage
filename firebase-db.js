/* =========================================
   KINAR AAGE - FIREBASE DATABASE
========================================= */

import {
  app
} from "./firebase-config.js";


import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocFromServer,
  setDoc,
  deleteDoc,
  getDocsFromServer,
  serverTimestamp
}
from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

export const db =
  getFirestore(
    app
  );


/* =========================================
   GENERAL HELPERS
========================================= */

function ensureObject(
  value,
  fallback = {}
) {

  if (
    value &&
    typeof value === "object" &&
    !Array.isArray(value)
  ) {

    return value;

  }


  return fallback;

}


async function getSiteSettingsDocument(
  documentName
) {

  const settingsRef =
    doc(
      db,
      "siteSettings",
      documentName
    );


  const snapshot =
    await getDocFromServer(
      settingsRef
    );


  if (
    !snapshot.exists()
  ) {

    return null;

  }


  return snapshot.data();

}


/* =========================================
   BANNER SETTINGS
========================================= */

export async function saveBannerSettingsToFirestore(
  bannerSettings
) {

  const data =
    ensureObject(
      bannerSettings
    );


  const bannerRef =
    doc(
      db,
      "siteSettings",
      "banner"
    );


  await setDoc(
    bannerRef,
    data,
    {
      merge: true
    }
  );

}


export async function getBannerSettingsFromFirestore() {

  return await getSiteSettingsDocument(
    "banner"
  );

}


/* =========================================
   HOMEPAGE CONTENT
========================================= */

export async function saveHomepageContentToFirestore(
  homepageContent
) {

  const data =
    ensureObject(
      homepageContent
    );


  const homepageRef =
    doc(
      db,
      "siteSettings",
      "homepage"
    );


  await setDoc(
    homepageRef,
    data,
    {
      merge: false
    }
  );

}


export async function getHomepageContentFromFirestore() {

  return await getSiteSettingsDocument(
    "homepage"
  );

}


/* =========================================
   GENERAL SITE SETTINGS
========================================= */

export async function saveSiteSettingsToFirestore(
  siteSettings
) {

  const data =
    ensureObject(
      siteSettings
    );


  const settingsRef =
    doc(
      db,
      "siteSettings",
      "general"
    );


  await setDoc(
    settingsRef,
    data,
    {
      merge: true
    }
  );

}


export async function getSiteSettingsFromFirestore() {

  return await getSiteSettingsDocument(
    "general"
  );

}


/* =========================================
   SITE SEO SETTINGS
========================================= */

export async function saveSiteSeoToFirestore(
  seoSettings
) {

  const data =
    ensureObject(
      seoSettings
    );


  const seoRef =
    doc(
      db,
      "siteSettings",
      "seo"
    );


  await setDoc(
    seoRef,
    data,
    {
      merge: true
    }
  );

}


export async function getSiteSeoFromFirestore() {

  return await getSiteSettingsDocument(
    "seo"
  );

}


/* =========================================
   PRODUCTS
========================================= */

export async function saveProductToFirestore(
  product
) {

  if (
    !product?.id
  ) {

    throw new Error(
      "Product ID is required."
    );

  }


  const productRef =
    doc(
      db,
      "products",
      String(
        product.id
      )
    );


  await setDoc(
    productRef,
    product,
    {
      merge: true
    }
  );

}


export async function getProductsFromFirestore() {

  const productsRef =
    collection(
      db,
      "products"
    );


  const snapshot =
    await getDocsFromServer(
      productsRef
    );


  const products =
    [];


  snapshot.forEach(
    function(
      documentSnapshot
    ) {

      products.push({
        id:
          documentSnapshot.id,

        ...documentSnapshot.data()
      });

    }
  );


  return products;

}


export async function deleteProductFromFirestore(
  productId
) {

  if (
    !productId
  ) {

    throw new Error(
      "Product ID is required."
    );

  }


  const productRef =
    doc(
      db,
      "products",
      String(
        productId
      )
    );


  await deleteDoc(
    productRef
  );

}


/* =========================================
   CATEGORIES
========================================= */

export async function saveCategoryToFirestore(
  category
) {

  if (
    !category?.id
  ) {

    throw new Error(
      "Category ID is required."
    );

  }


  const categoryRef =
    doc(
      db,
      "categories",
      String(
        category.id
      )
    );


  await setDoc(
    categoryRef,
    category,
    {
      merge: true
    }
  );

}


export async function getCategoriesFromFirestore() {

  const categoriesRef =
    collection(
      db,
      "categories"
    );


  const snapshot =
    await getDocsFromServer(
      categoriesRef
    );


  const categories =
    [];


  snapshot.forEach(
    function(
      documentSnapshot
    ) {

      categories.push({
        id:
          documentSnapshot.id,

        ...documentSnapshot.data()
      });

    }
  );


  return categories;

}


export async function deleteCategoryFromFirestore(
  categoryId
) {

  if (
    !categoryId
  ) {

    throw new Error(
      "Category ID is required."
    );

  }


  const categoryRef =
    doc(
      db,
      "categories",
      String(
        categoryId
      )
    );


  await deleteDoc(
    categoryRef
  );

}

/* =========================================
   AFFILIATE CLICK TRACKING
========================================= */

export async function trackAffiliateClick(
  {
    productId,
    productSlug = "",
    source
  }
) {

  if (
    !productId ||
    !source
  ) {
    return false;
  }


  try {

    await addDoc(
      collection(
        db,
        "affiliateClicks"
      ),
      {
        productId:
          String(
            productId
          ),

        productSlug:
          String(
            productSlug ||
            ""
          ),

        source:
          String(
            source
          ),

        clickedAt:
          serverTimestamp()
      }
    );


    return true;

  }

  catch (error) {

    console.error(
      "Affiliate click tracking failed:",
      error
    );


    return false;

  }

}


/* =========================================
   AFFILIATE CLICK ANALYTICS
========================================= */

export async function getAffiliateClicksFromFirestore() {

  try {

    const snapshot =
      await getDocsFromServer(
        collection(
          db,
          "affiliateClicks"
        )
      );


    return snapshot.docs.map(
      function(documentSnapshot) {

        return {

          id:
            documentSnapshot.id,

          ...documentSnapshot.data()

        };

      }
    );

  }

  catch (error) {

    console.error(
      "Affiliate clicks load failed:",
      error
    );


    throw error;

  }

}

/* =========================================
   NEWSLETTER SUBSCRIBER
========================================= */

export async function subscribeToNewsletter(
  email
) {

  const normalizedEmail =
    String(
      email ||
      ""
    )
      .trim()
      .toLowerCase();


  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (
    !normalizedEmail ||
    !emailPattern.test(
      normalizedEmail
    ) ||
    normalizedEmail.length > 320
  ) {

    throw new Error(
      "Please enter a valid email address."
    );

  }


  const subscriberDocumentId =
    encodeURIComponent(
      normalizedEmail
    );


  const subscriberReference =
    doc(
      db,
      "newsletterSubscribers",
      subscriberDocumentId
    );


  try {

    await setDoc(
      subscriberReference,
      {
        email:
          normalizedEmail,

        source:
          "homepage",

        subscribedAt:
          serverTimestamp()
      }
    );


    return {

      success:
        true,

      alreadySubscribed:
        false,

      id:
        subscriberDocumentId,

      email:
        normalizedEmail

    };

  }

  catch (error) {

    if (
      error?.code ===
      "permission-denied"
    ) {

      return {

        success:
          true,

        alreadySubscribed:
          true,

        id:
          subscriberDocumentId,

        email:
          normalizedEmail

      };

    }


    console.error(
      "Newsletter subscription failed:",
      error
    );


    throw error;

  }

}

/* =========================================
   NEWSLETTER SUBSCRIBERS - ADMIN
========================================= */

export async function getNewsletterSubscribersFromFirestore() {

  try {

    const snapshot =
      await getDocsFromServer(
        collection(
          db,
          "newsletterSubscribers"
        )
      );


    return snapshot.docs.map(
      function(documentSnapshot) {

        return {

          id:
            documentSnapshot.id,

          ...documentSnapshot.data()

        };

      }
    );

  }

  catch (error) {

    console.error(
      "Newsletter subscribers load failed:",
      error
    );


    throw error;

  }

}

/* =========================================
   CONTACT MESSAGE
========================================= */

export async function submitContactMessage(
  {
    name,
    email,
    subject,
    message
  }
) {

  const cleanName =
    String(
      name ||
      ""
    )
      .trim();


  const cleanEmail =
    String(
      email ||
      ""
    )
      .trim()
      .toLowerCase();


  const cleanSubject =
    String(
      subject ||
      ""
    )
      .trim();


  const cleanMessage =
    String(
      message ||
      ""
    )
      .trim();


  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (
    cleanName.length < 2 ||
    cleanName.length > 100
  ) {

    throw new Error(
      "Please enter a valid name."
    );

  }


  if (
    !emailPattern.test(
      cleanEmail
    ) ||
    cleanEmail.length > 254
  ) {

    throw new Error(
      "Please enter a valid email address."
    );

  }


  if (
    cleanSubject.length < 3 ||
    cleanSubject.length > 200
  ) {

    throw new Error(
      "Please enter a valid subject."
    );

  }


  if (
    cleanMessage.length < 10 ||
    cleanMessage.length > 5000
  ) {

    throw new Error(
      "Message must be between 10 and 5000 characters."
    );

  }


  try {

    const documentReference =
      await addDoc(
        collection(
          db,
          "contactMessages"
        ),
        {
          name:
            cleanName,

          email:
            cleanEmail,

          subject:
            cleanSubject,

          message:
            cleanMessage,

          source:
            "contact_page",

          status:
            "new",

          submittedAt:
            serverTimestamp()
        }
      );


    return {

      success:
        true,

      id:
        documentReference.id

    };

  }

  catch (error) {

    console.error(
      "Contact message submission failed:",
      error
    );


    throw error;

  }

}

/* =========================================
   CONTACT MESSAGES - ADMIN
========================================= */

export async function getContactMessagesFromFirestore() {

  try {

    const snapshot =
      await getDocsFromServer(
        collection(
          db,
          "contactMessages"
        )
      );


    return snapshot.docs.map(
      function(documentSnapshot) {

        return {

          id:
            documentSnapshot.id,

          ...documentSnapshot.data()

        };

      }
    );

  }

  catch (error) {

    console.error(
      "Contact messages load failed:",
      error
    );


    throw error;

  }

}

/* =========================================
   CONTACT MESSAGE STATUS - ADMIN
========================================= */

export async function updateContactMessageStatus(
  messageId,
  status
) {

  const cleanMessageId =
    String(
      messageId ||
      ""
    )
      .trim();


  const cleanStatus =
    String(
      status ||
      ""
    )
      .trim()
      .toLowerCase();


  const allowedStatuses =
    [
      "new",
      "read",
      "replied"
    ];


  if (
    !cleanMessageId
  ) {

    throw new Error(
      "Contact message ID is required."
    );

  }


  if (
    !allowedStatuses.includes(
      cleanStatus
    )
  ) {

    throw new Error(
      "Invalid contact message status."
    );

  }


  try {

    const messageReference =
      doc(
        db,
        "contactMessages",
        cleanMessageId
      );


    await setDoc(
      messageReference,
      {
        status:
          cleanStatus,

        updatedAt:
          serverTimestamp()
      },
      {
        merge:
          true
      }
    );


    return {

      success:
        true,

      id:
        cleanMessageId,

      status:
        cleanStatus

    };

  }

  catch (error) {

    console.error(
      "Contact message status update failed:",
      error
    );


    throw error;

  }

}