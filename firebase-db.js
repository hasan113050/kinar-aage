import { app } from "./firebase-config.js";

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
  getFirestore(app);


/* =========================================
   BANNER SETTINGS
========================================= */

export async function saveBannerSettingsToFirestore(
  bannerSettings
) {

  const bannerRef =
    doc(
      db,
      "siteSettings",
      "banner"
    );


  await setDoc(
    bannerRef,
    bannerSettings,
    {
      merge: true
    }
  );

}


export async function getBannerSettingsFromFirestore() {

  const bannerRef =
    doc(
      db,
      "siteSettings",
      "banner"
    );


  const snapshot =
    await getDocFromServer(
      bannerRef
    );


  if (
    !snapshot.exists()
  ) {

    return null;

  }


  return snapshot.data();

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
    function(documentSnapshot) {

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
    function(documentSnapshot) {

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