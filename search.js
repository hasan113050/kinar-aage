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

  }

  catch (error) {

    console.error(
      "Firebase product load error:",
      error
    );

  }


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
        product.status !==
          "draft"
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


const SEARCH_SYNONYM_GROUPS = [

  [
    "earbuds",
    "earbud",
    "tws",
    "true wireless",
    "wireless earbuds",
    "wireless earphones"
  ],

  [
    "phone",
    "phones",
    "mobile",
    "mobiles",
    "smartphone",
    "smartphones"
  ],

  [
    "laptop",
    "laptops",
    "notebook",
    "notebooks"
  ],

  [
    "tv",
    "television",
    "televisions"
  ],

  [
    "fridge",
    "refrigerator",
    "refrigerators"
  ],

  [
    "ac",
    "air conditioner",
    "air conditioners"
  ],

  [
    "washing machine",
    "washing machines",
    "washer"
  ],

  [
    "smartwatch",
    "smartwatches",
    "smart watch",
    "smart watches"
  ],

  [
    "tablet",
    "tablets"
  ]

];


function getSearchVariants(
  query
) {

  const cleanQuery =
    normalizeText(
      query
    );


  if (!cleanQuery) {

    return [];

  }


  const variants =
    new Set([
      cleanQuery
    ]);


  SEARCH_SYNONYM_GROUPS
    .forEach(
      function(group) {

        group
          .forEach(
            function(term) {

              const normalizedTerm =
                normalizeText(
                  term
                );


              if (
                !cleanQuery.includes(
                  normalizedTerm
                )
              ) {

                return;

              }


              group
                .forEach(
                  function(alternative) {

                    variants.add(
                      cleanQuery.replace(
                        normalizedTerm,
                        normalizeText(
                          alternative
                        )
                      )
                    );

                  }
                );

            }
          );

      }
    );


  return [
    ...variants
  ];

}


async function searchProducts(
  query
) {

  const searchVariants =
    getSearchVariants(
      query
    );


  const products =
    await getProducts();


  if (
    !searchVariants.length
  ) {

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


      return searchVariants.some(
        function(searchTerm) {

          return searchableText.includes(
            searchTerm
          );

        }
      );

    }
  );

}


/* =========================================
   SEARCH PAGE SEO
========================================= */

function applySearchSeo(
  query
) {

  const cleanQuery =
    String(
      query ||
      ""
    )
      .trim();


  const title =
    cleanQuery
      ? `${cleanQuery} Search | Kinar Aage`
      : "Search | Kinar Aage";


  const description =
    cleanQuery
      ? `Search results for ${cleanQuery} on Kinar Aage. Explore relevant product recommendations and buying information.`
      : "Search products, recommendations and buying information on Kinar Aage.";


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
   RENDER SEARCH RESULTS
========================================= */

async function renderSearchResults(
  query
) {

  const results =
    await searchProducts(
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


   applySearchSeo(
    query
  );


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

bindAffiliateTracking();

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
   AFFILIATE CLICK TRACKING
========================================= */

function bindAffiliateTracking() {

  document

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
                        "search_page"

                    });

                }
              )

              .catch(
                function(error) {

                  console.error(
                    "Search Buy Now tracking error:",
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
   START
========================================= */

async function startSearchPage() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const query =
    params.get(
      "q"
    ) || "";



  updateWishlistCount();


  await renderSearchResults(
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