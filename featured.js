/* =========================================
   KINAR AAGE - FEATURED PAGE
========================================= */

import {
  getProductsFromFirestore,
  trackAffiliateClick
} from "./firebase-db.js";


const featuredProductsGrid =
  document.getElementById(
    "featuredProductsGrid"
  );

const featuredPageCount =
  document.getElementById(
    "featuredPageCount"
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
            alt="${escapeHtml(product.name || "Product")}"
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
            ${escapeHtml(product.badge)}
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
   FEATURED PAGE SEO
========================================= */

function applyFeaturedPageSeo() {

  const title =
    "Featured Products | Kinar Aage";


  const description =
    "Explore featured product recommendations and selected picks from Kinar Aage to help you compare and choose better.";


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
   RENDER FEATURED PRODUCTS
========================================= */

async function renderFeaturedProducts() {

  if (
    !featuredProductsGrid
  ) {
    return;
  }


  try {

    const products =
      await getProductsFromFirestore();


    const featuredProducts =
      (
        Array.isArray(products)
          ? products
          : []
      )
        .filter(
          product =>
            product.status !==
              "draft" &&
            (
              product.featured ===
                true ||
              product.isFeatured ===
                true
            )
        );


    if (
      featuredPageCount
    ) {

      featuredPageCount.textContent =
        `${featuredProducts.length} ${
          featuredProducts.length === 1
            ? "Product"
            : "Products"
        }`;

    }


    if (
      !featuredProducts.length
    ) {

      featuredProductsGrid.innerHTML =
        `
          <div class="product-empty-state">
            No featured products available yet.
          </div>
        `;


      return;

    }


    featuredProductsGrid.innerHTML =
      featuredProducts
        .map(
          createProductCard
        )
        .join("");


    featuredProductsGrid
      .querySelectorAll(
        "[data-save-product]"
      )
      .forEach(
        button => {

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

featuredProductsGrid
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
              "featured_page"

          }).catch(
            function(error) {

              console.error(
                "Featured Buy Now tracking error:",
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
      "Featured products load error:",
      error
    );


    featuredProductsGrid.innerHTML =
      `
        <div class="product-empty-state">
          Featured products could not be loaded.
        </div>
      `;

  }

}


/* =========================================
   START
========================================= */

async function startFeaturedPage() {

  try {

    applyFeaturedPageSeo();


    if (footerYear) {

      footerYear.textContent =
        new Date()
          .getFullYear();

    }


    updateHeaderWishlistCount();


    await renderFeaturedProducts();

  }

  catch (error) {

    console.error(
      "Featured page startup error:",
      error
    );

  }

  finally {

    document.body.classList.remove(
      "page-data-loading"
    );

  }

}


startFeaturedPage();