/* =========================================
   KINAR AAGE - SEARCH PAGE
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

const searchPageForm =
  document.getElementById(
    "searchPageForm"
  );

const searchPageInput =
  document.getElementById(
    "searchPageInput"
  );

const searchResultsTitle =
  document.getElementById(
    "searchResultsTitle"
  );

const searchResultsCount =
  document.getElementById(
    "searchResultsCount"
  );

const searchResultsGrid =
  document.getElementById(
    "searchResultsGrid"
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

function getProducts() {

  const products =
    getStoredData(
      PRODUCTS_KEY,
      []
    );


  if (
    !Array.isArray(
      products
    )
  ) {

    return [];

  }


  return products.filter(
    function(product) {

      return (
        product &&
        product.status !== "draft"
      );

    }
  );

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
    ? wishlist
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


function isSavedProduct(
  productId
) {

  return getWishlist()
    .includes(
      String(
        productId
      )
    );

}


function toggleWishlist(
  productId,
  button
) {

  const id =
    String(
      productId
    );


  let wishlist =
    getWishlist();


  if (
    wishlist.includes(
      id
    )
  ) {

    wishlist =
      wishlist.filter(
        function(item) {

          return item !== id;

        }
      );


    button.classList.remove(
      "active"
    );

    button.textContent =
      "♡";


    showSiteToast(
      "Removed from saved products."
    );

  }

  else {

    wishlist.push(
      id
    );


    button.classList.add(
      "active"
    );

    button.textContent =
      "♥";


    showSiteToast(
      "Product saved."
    );

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
          class="product-save-button ${
            saved
              ? "active"
              : ""
          }"
          type="button"
          data-save-product="${escapeHtml(
            productId
          )}"
          aria-label="Save product"
        >
          ${
            saved
              ? "♥"
              : "♡"
          }
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
            href="product.html?id=${encodeURIComponent(
              productId
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
   SEARCH
========================================= */

function normalizeText(
  value
) {

  return String(
    value || ""
  )
    .toLowerCase()
    .trim();

}


function searchProducts(
  query
) {

  const cleanQuery =
    normalizeText(
      query
    );


  const products =
    getProducts();


  if (!cleanQuery) {
    return products;
  }


  return products.filter(
    function(product) {

      const searchableText =
        [

          product.name,

          product.category,

          product.badge,

          product.shortDescription,

          product.summary,

          product.highlights,

          product.intro,

          product.description,

          product.tags,

          product.merchantName

        ]
          .flat()
          .filter(
            Boolean
          )
          .join(
            " "
          )
          .toLowerCase();


      return searchableText.includes(
        cleanQuery
      );

    }
  );

}


/* =========================================
   RENDER SEARCH RESULTS
========================================= */

function renderSearchResults(
  query
) {

  const results =
    searchProducts(
      query
    );


  if (
    searchResultsTitle
  ) {

    searchResultsTitle.textContent =
      query
        ? `Results for “${query}”`
        : "All Products";

  }


  if (
    searchResultsCount
  ) {

    searchResultsCount.textContent =
      `${results.length} ${
        results.length === 1
          ? "Product"
          : "Products"
      }`;

  }


  document.title =
    query
      ? `${query} Search | Kinar Aage`
      : "Search | Kinar Aage";


  if (
    !searchResultsGrid
  ) {

    return;

  }


  if (
    !results.length
  ) {

    searchResultsGrid.innerHTML =
      `

        <div class="search-empty-state">

          <span>
            Nothing Found
          </span>

          <h2>
            We couldn't find a matching product.
          </h2>

          <p>
            Try another product name, category or keyword.
          </p>

          <a
            href="index.html#categories"
            class="primary-button"
          >
            Browse Categories
          </a>

        </div>

      `;

    return;

  }


  searchResultsGrid.innerHTML =
    results
      .map(
        createProductCard
      )
      .join(
        ""
      );


  bindWishlistButtons();

}


/* =========================================
   WISHLIST EVENTS
========================================= */

function bindWishlistButtons() {

  document
    .querySelectorAll(
      "[data-save-product]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const productId =
              this.getAttribute(
                "data-save-product"
              );


            toggleWishlist(
              productId,
              this
            );

          }
        );

      }
    );

}


/* =========================================
   SEARCH FORM
========================================= */

searchPageForm
  ?.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const query =
        searchPageInput
          ?.value
          .trim();


      if (!query) {

        window.location.href =
          "search.html";

        return;

      }


      window.location.href =
        `search.html?q=${encodeURIComponent(
          query
        )}`;

    }
  );


/* =========================================
   START
========================================= */

function startSearchPage() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const query =
    params.get(
      "q"
    ) || "";


  if (
    searchPageInput
  ) {

    searchPageInput.value =
      query;

  }


  updateWishlistCount();

  renderSearchResults(
    query
  );

}


if (
  footerYear
) {

  footerYear.textContent =
    new Date()
      .getFullYear();

}


startSearchPage();