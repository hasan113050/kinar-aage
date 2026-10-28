/* =========================================
   KINAR AAGE - RECOMMENDATIONS PAGE
========================================= */

import {
  getProductsFromFirestore,
  trackAffiliateClick
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
    product.slug ||
    product.id ||
    ""
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
  data-product-id="${escapeHtml(
    productId
  )}"
  data-product-slug="${escapeHtml(
    product.slug ||
    product.id ||
    ""
  )}"
>
  Buy Now
</a>      


        </div>


      </div>


    </article>

  `;

}



/* =========================================
   RECOMMENDATIONS PAGE SEO
========================================= */

function applyRecommendationsPageSeo() {

  const title =
    "Product Recommendations | Kinar Aage";


  const description =
    "Explore useful product recommendations from Kinar Aage, selected to help you compare options and make better buying decisions.";


  const canonicalUrl =
    `${window.location.origin}${window.location.pathname}`;


  function setMeta(
    selector,
    attributes,
    content
  ) {

    let element =
      document.head.querySelector(
        selector
      );


    if (!element) {

      element =
        document.createElement(
          "meta"
        );


      Object.entries(
        attributes
      )
        .forEach(
          function([
            attribute,
            value
          ]) {

            element.setAttribute(
              attribute,
              value
            );

          }
        );


      document.head.appendChild(
        element
      );

    }


    element.setAttribute(
      "content",
      String(
        content ||
        ""
      )
    );

  }


  document.title =
    title;


  setMeta(
    'meta[name="description"]',
    {
      name:
        "description"
    },
    description
  );


  setMeta(
    'meta[name="robots"]',
    {
      name:
        "robots"
    },
    "index, follow"
  );


  let canonical =
    document.head.querySelector(
      'link[rel="canonical"]'
    );


  if (!canonical) {

    canonical =
      document.createElement(
        "link"
      );


    canonical.rel =
      "canonical";


    document.head.appendChild(
      canonical
    );

  }


  canonical.href =
    canonicalUrl;


  setMeta(
    'meta[property="og:title"]',
    {
      property:
        "og:title"
    },
    title
  );


  setMeta(
    'meta[property="og:description"]',
    {
      property:
        "og:description"
    },
    description
  );


  setMeta(
    'meta[property="og:type"]',
    {
      property:
        "og:type"
    },
    "website"
  );


  setMeta(
    'meta[property="og:url"]',
    {
      property:
        "og:url"
    },
    canonicalUrl
  );


  setMeta(
    'meta[name="twitter:card"]',
    {
      name:
        "twitter:card"
    },
    "summary"
  );


  setMeta(
    'meta[name="twitter:title"]',
    {
      name:
        "twitter:title"
    },
    title
  );


  setMeta(
    'meta[name="twitter:description"]',
    {
      name:
        "twitter:description"
    },
    description
  );

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

    /* =========================================
   AFFILIATE CLICK TRACKING
========================================= */

recommendationsProductsGrid
  .querySelectorAll(
    ".product-buy-link"
  )
  .forEach(
    function(button) {

      button.addEventListener(
        "click",
        function() {

          const affiliateUrl =
            button.getAttribute(
              "href"
            );


          if (
            !affiliateUrl ||
            affiliateUrl === "#"
          ) {
            return;
          }


          trackAffiliateClick({

            productId:
              button.dataset
                .productId ||
              "",

            productSlug:
              button.dataset
                .productSlug ||
              "",

            source:
              "recommendations_page"

          }).catch(
            function(error) {

              console.error(
                "Recommendations Buy Now tracking error:",
                error
              );

            }
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

    applyRecommendationsPageSeo();


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