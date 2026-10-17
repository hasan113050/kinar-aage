/* =========================================
   KINAR AAGE - FIREBASE DATABASE
========================================= */

import {
  app
} from "./firebase-config.js";


import {
  getFirestore,
  doc,
  getDocFromServer,
  setDoc,
  collection,
  getDocsFromServer,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";


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