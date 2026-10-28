/* =========================================
   KINAR AAGE - WISHLIST PAGE
========================================= */


/* =========================================
   STORAGE KEYS
========================================= */

const PRODUCTS_KEY =
  "kinarAageProducts";

const WISHLIST_KEY =
  "kinarAageWishlist";


/* =========================================
   DOM ELEMENTS
========================================= */

const wishlistProductsGrid =
  document.getElementById(
    "wishlistProductsGrid"
  );

const wishlistPageCount =
  document.getElementById(
    "wishlistPageCount"
  );

const wishlistCount =
  document.getElementById(
    "wishlistCount"
  );

const footerYear =
  document.getElementById(
    "footerYear"
  );

const siteToast =
  document.getElementById(
    "siteToast"
  );


/* =========================================
   HELPERS
========================================= */

function getStoredData(
  key,
  fallback
) {

  try {

    const rawData =
      localStorage.getItem(
        key
      );

    if (!rawData) {
      return fallback;
    }

    return JSON.parse(
      rawData
    );

  }

  catch (error) {

    console.error(
      `Could not read ${key}`,
      error
    );

    return fallback;

  }

}


function escapeHtml(
  value = ""
) {

  return String(
    value
  )

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


function showSiteToast(
  message
) {

  if (!siteToast) {
    return;
  }

  siteToast.textContent =
    message;

  siteToast.classList.add(
    "show"
  );

  clearTimeout(
    showSiteToast.timer
  );

  showSiteToast.timer =
    setTimeout(
      function() {

        siteToast.classList.remove(
          "show"
        );

      },
      2200
    );

}


/* =========================================
   PRODUCT DATA
========================================= */

async function getProducts() {

  try {

    const firebaseModule =
      await import(
        "./firebase-db.js"
      );


    const firebaseProducts =
      await firebaseModule
        .getProductsFromFirestore();


    if (
      Array.isArray(
        firebaseProducts
      )
    ) {

      return firebaseProducts.filter(
        function(product) {

          return (
            product &&
            product.status !==
              "draft"
          );

        }
      );

    }


    return [];

  }

  catch (error) {

    console.error(
      "Firebase product load error:",
      error
    );


    return [];

  }

}


function getProductId(
  product
) {

  return String(
    product.id ||
    product.slug ||
    product.name ||
    ""
  );

}


/* =========================================
   WISHLIST
========================================= */

function getWishlist() {

  const wishlist =
    getStoredData(
      WISHLIST_KEY,
      []
    );

  return Array.isArray(
    wishlist
  )
    ? wishlist.map(
        function(item) {
          return String(item);
        }
      )
    : [];

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

  updateWishlistCount();

}


function updateWishlistCount() {

  if (!wishlistCount) {
    return;
  }

  wishlistCount.textContent =
    getWishlist().length;

}


function removeFromWishlist(
  productId
) {

  const id =
    String(
      productId
    );

  const wishlist =
    getWishlist().filter(
      function(item) {

        return item !== id;

      }
    );

  saveWishlist(
    wishlist
  );

  showSiteToast(
    "Removed from saved products."
  );

  renderWishlistPage();

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

  const productSlug =
    String(
      product.slug ||
      ""
    );


  const productImage =
    product.image
      ? `
          <img
            src="${escapeHtml(
              product.image
            )}"
            alt="${escapeHtml(
              product.name ||
              "Product image"
            )}"
            loading="lazy"
          >
        `
      : `
          <div class="product-placeholder">
            ${escapeHtml(
              String(
                product.name ||
                "K"
              )
                .trim()
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


  return `
    <article class="product-card">

      <div class="product-card-image">

        ${productImage}

        ${badge}

        <button
          class="product-save-button active"
          type="button"
          data-remove-product="${escapeHtml(
            productId
          )}"
          aria-label="Remove saved product"
        >
          ♥
        </button>

      </div>


      <div class="product-card-body">

        <span class="product-card-category">
          ${escapeHtml(
            product.category ||
            "Recommendation"
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
            product.summary ||
            "Explore this product before making your buying decision."
          )}
        </p>


        <div class="product-card-actions">

          <a
            class="product-details-link"
            href="product.html?slug=${encodeURIComponent(
              productSlug
            )}"
          >
            View Details
          </a>


     <a
  class="product-buy-link"
  href="${escapeHtml(
    product.affiliateUrl ||
    "#"
  )}"
  target="_blank"
  rel="sponsored nofollow noopener"
  data-product-id="${escapeHtml(
    productId
  )}"
  data-product-slug="${escapeHtml(
    productSlug
  )}"
>
  ${escapeHtml(
    product.ctaLabel ||
    "Buy Now"
  )}
</a>    

        </div>

      </div>

    </article>
  `;

}


/* =========================================
   WISHLIST SEO
========================================= */

function applyWishlistSeo() {

  const title =
    "Saved Products | Kinar Aage";


  const description =
    "View products you have saved on Kinar Aage for later comparison and consideration.";


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
    "noindex, follow"
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
   RENDER WISHLIST
========================================= */

async function renderWishlistPage() {

  applyWishlistSeo();


  const wishlist =
    getWishlist();

  const products =
    await getProducts();


  const savedProducts =
    products.filter(
      function(product) {

        return wishlist.includes(
          getProductId(
            product
          )
        );

      }
    );


  if (
    wishlistPageCount
  ) {

    wishlistPageCount.textContent =
      `${savedProducts.length} ${
        savedProducts.length === 1
          ? "Product"
          : "Products"
      }`;

  }


  if (
    !wishlistProductsGrid
  ) {
    return;
  }


  if (
    !savedProducts.length
  ) {

    wishlistProductsGrid.innerHTML =
      `
        <div
          class="search-empty-state"
          style="grid-column:1 / -1;"
        >

          <span>
            No Saved Products
          </span>

          <h2>
            You haven’t saved any products yet.
          </h2>

          <p>
            Save products you want to compare or check later.
          </p>

          <a
            href="index.html"
            class="primary-button"
          >
            Explore Products
          </a>

        </div>
      `;

    return;

  }


  wishlistProductsGrid.innerHTML =
    savedProducts

      .map(
        createProductCard
      )

      .join(
        ""
      );


bindRemoveButtons();

bindAffiliateTracking();

}


/* =========================================
   REMOVE EVENTS
========================================= */

function bindRemoveButtons() {

  document

    .querySelectorAll(
      "[data-remove-product]"
    )

    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const productId =
              this.getAttribute(
                "data-remove-product"
              );

            removeFromWishlist(
              productId
            );

          }
        );

      }
    );

}

/* =========================================
   AFFILIATE CLICK TRACKING
========================================= */

function bindAffiliateTracking() {

  if (
    !wishlistProductsGrid
  ) {

    return;

  }


  wishlistProductsGrid

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


            import(
              "./firebase-db.js"
            )

              .then(
                function(
                  firebaseModule
                ) {

                  return firebaseModule
                    .trackAffiliateClick({

                      productId:
                        button.dataset
                          .productId ||
                        "",

                      productSlug:
                        button.dataset
                          .productSlug ||
                        "",

                      source:
                        "wishlist_page"

                    });

                }
              )

              .catch(
                function(error) {

                  console.error(
                    "Wishlist Buy Now tracking error:",
                    error
                  );

                }
              );

          }
        );

      }
    );

}


/* =========================================
   STORAGE SYNC
========================================= */

window.addEventListener(
  "storage",
  function(event) {

    if (
      event.key ===
      WISHLIST_KEY ||
      event.key ===
      PRODUCTS_KEY
    ) {

      updateWishlistCount();

      renderWishlistPage();

    }

  }
);


/* =========================================
   FOOTER YEAR
========================================= */

if (
  footerYear
) {

  footerYear.textContent =
    new Date()
      .getFullYear();

}


/* =========================================
   START
========================================= */

async function startWishlistPage() {

  try {

    updateWishlistCount();

    await renderWishlistPage();

  }

  catch (error) {

    console.error(
      "Wishlist page startup error:",
      error
    );

  }

  finally {

    document.body.classList.remove(
      "page-data-loading"
    );

  }

}


startWishlistPage();