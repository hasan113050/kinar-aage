/* =========================================
   KINAR AAGE - RECOMMENDATIONS PAGE
========================================= */

import {
  getProductsFromFirestore
} from "./firebase-db.js";


const recommendationsProductsGrid =
  document.getElementById(
    "recommendationsProductsGrid"
  );

const recommendationsPageCount =
  document.getElementById(
    "recommendationsPageCount"
  );

const footerYear =
  document.getElementById(
    "footerYear"
  );


const WISHLIST_KEY =
  "kinarAageWishlist";


/* =========================================
   HELPERS
========================================= */

function escapeHtml(
  value = ""
) {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


function getWishlist() {

  try {

    const data =
      JSON.parse(
        localStorage.getItem(
          WISHLIST_KEY
        ) || "[]"
      );


    return Array.isArray(data)
      ? data
      : [];

  }

  catch (error) {

    return [];

  }

}


function saveWishlist(
  wishlist
) {

  localStorage.setItem(
    WISHLIST_KEY,
    JSON.stringify(
      wishlist
    )
  );


  updateHeaderWishlistCount();

}


function updateHeaderWishlistCount() {

  const count =
    document.getElementById(
      "wishlistCount"
    );


  if (count) {

    count.textContent =
      getWishlist().length;

  }

}


function getProductId(
  product
) {

  return String(
    product.id || ""
  );

}


function isSavedProduct(
  productId
) {

  return getWishlist()
    .includes(
      String(productId)
    );

}


function isFeaturedProduct(
  product
) {

  return (
    product.featured === true ||
    product.featured === "true" ||
    product.isFeatured === true ||
    product.isFeatured === "true"
  );

}


/* =========================================
   TOGGLE WISHLIST
========================================= */

function toggleWishlist(
  productId,
  button
) {

  const id =
    String(productId);


  let wishlist =
    getWishlist();


  if (
    wishlist.includes(id)
  ) {

    wishlist =
      wishlist.filter(
        item =>
          item !== id
      );


    button.classList.remove(
      "active"
    );


    button.textContent =
      "♡";

  }

  else {

    wishlist.push(id);


    button.classList.add(
      "active"
    );


    button.textContent =
      "♥";

  }


  saveWishlist(
    wishlist
  );

}


/* =========================================
   PRODUCT CARD
========================================= */

function createProductCard(
  product
) {

  const productId =
    getProductId(
      product
    );


  const saved =
    isSavedProduct(
      productId
    );


  const image =
    product.image
      ? `
          <img
            src="${escapeHtml(product.image)}"
            alt="${escapeHtml(
              product.name || "Product"
            )}"
          >
        `
      : `
          <div class="product-placeholder">

            ${escapeHtml(
              String(
                product.name || "K"
              )
                .charAt(0)
                .toUpperCase()
            )}

          </div>
        `;


  const badge =
    product.badge
      ? `
          <span class="product-badge">
            ${escapeHtml(
              product.badge
            )}
          </span>
        `
      : "";


  const slug =
    encodeURIComponent(
      product.slug || ""
    );


  const affiliateUrl =
    product.affiliateUrl ||
    "#";


  return `

    <article class="product-card">


      <div class="product-card-image">

        ${image}

        ${badge}


        <button
          class="product-save-button ${saved ? "active" : ""}"
          type="button"
          data-save-product="${escapeHtml(productId)}"
          aria-label="Save product"
        >
          ${saved ? "♥" : "♡"}
        </button>

      </div>



      <div class="product-card-body">


        <span class="product-card-category">
          ${escapeHtml(
            product.category || ""
          )}
        </span>


        <h3>
          ${escapeHtml(
            product.name ||
            "Untitled Product"
          )}
        </h3>


        <p class="product-card-summary">
          ${escapeHtml(
            product.shortDescription ||
            ""
          )}
        </p>


        <div class="product-card-actions">


          <a
            href="product.html?slug=${slug}"
            class="product-details-link"
          >
            View Details
          </a>


          <a
            href="${escapeHtml(affiliateUrl)}"
            target="_blank"
            rel="sponsored nofollow noopener"
            class="product-buy-link"
          >
            Buy Now
          </a>


        </div>


      </div>


    </article>

  `;

}



/* =========================================
   RENDER RECOMMENDATIONS
========================================= */

async function renderRecommendations() {

  if (
    !recommendationsProductsGrid
  ) {
    return;
  }


  try {

    const products =
      await getProductsFromFirestore();


    const publishedProducts =
      (
        Array.isArray(products)
          ? products
          : []
      )
        .filter(
          product =>
            product.status !==
            "draft"
        );


    let recommendedProducts =
      publishedProducts
        .filter(
          product =>
            !isFeaturedProduct(
              product
            )
        );


    /*
      Same general fallback idea as
      the homepage recommendations:
      if there are no non-featured
      products, show available products.
    */

    if (
      !recommendedProducts.length
    ) {

      recommendedProducts =
        publishedProducts;

    }


    if (
      recommendationsPageCount
    ) {

      recommendationsPageCount.textContent =
        `${recommendedProducts.length} ${
          recommendedProducts.length === 1
            ? "Product"
            : "Products"
        }`;

    }


    if (
      !recommendedProducts.length
    ) {

      recommendationsProductsGrid.innerHTML =
        `
          <div class="product-empty-state">
            No recommendations available yet.
          </div>
        `;


      return;

    }


    recommendationsProductsGrid.innerHTML =
      recommendedProducts
        .map(
          createProductCard
        )
        .join("");


    recommendationsProductsGrid
      .querySelectorAll(
        "[data-save-product]"
      )
      .forEach(
        function(button) {

          button.addEventListener(
            "click",
            function() {

              toggleWishlist(
                button.dataset
                  .saveProduct,
                button
              );

            }
          );

        }
      );

  }

  catch (error) {

    console.error(
      "Recommendations load error:",
      error
    );


    recommendationsProductsGrid.innerHTML =
      `
        <div class="product-empty-state">
          Recommendations could not be loaded.
        </div>
      `;

  }

}


/* =========================================
   START
========================================= */

async function startRecommendationsPage() {

  try {

    if (footerYear) {

      footerYear.textContent =
        new Date()
          .getFullYear();

    }


    updateHeaderWishlistCount();


    await renderRecommendations();

  }

  catch (error) {

    console.error(
      "Recommendations page startup error:",
      error
    );

  }

  finally {

    document.body.classList.remove(
      "page-data-loading"
    );

  }

}


startRecommendationsPage();