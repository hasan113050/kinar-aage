/* =========================================
   KINAR AAGE - CATEGORY PAGE
========================================= */


/* =========================================
   STORAGE KEYS
========================================= */

const PRODUCTS_KEY =
  "kinarAageProducts";

const CATEGORIES_KEY =
  "kinarAageCategories";

const WISHLIST_KEY =
  "kinarAageWishlist";


/* =========================================
   DEFAULT CATEGORIES
========================================= */

const DEFAULT_CATEGORIES = [

  {
    id: "electronics-gadgets",
    name: "Electronics & Gadgets",
    slug: "electronics-gadgets",
    description:
      "Explore useful devices, accessories and everyday technology recommendations.",
    image: "",
    status: "active",
    order: 1
  },

  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    description:
      "Discover practical products for a smarter, easier and more comfortable home.",
    image: "",
    status: "active",
    order: 2
  },

  {
    id: "fashion",
    name: "Fashion",
    slug: "fashion",
    description:
      "Explore everyday style essentials and practical fashion recommendations.",
    image: "",
    status: "active",
    order: 3
  },

  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    description:
      "Discover grooming, personal care and lifestyle products worth considering.",
    image: "",
    status: "active",
    order: 4
  },

  {
    id: "books",
    name: "Books",
    slug: "books",
    description:
      "Explore books worth reading, learning from and adding to your collection.",
    image: "",
    status: "active",
    order: 5
  },

  {
    id: "baby-kids",
    name: "Baby & Kids",
    slug: "baby-kids",
    description:
      "Discover useful products for children, parents and everyday family needs.",
    image: "",
    status: "active",
    order: 6
  },

  {
    id: "sports-fitness",
    name: "Sports & Fitness",
    slug: "sports-fitness",
    description:
      "Explore products that support exercise, movement, training and wellness.",
    image: "",
    status: "active",
    order: 7
  }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const categoryPageTitle =
  document.getElementById(
    "categoryPageTitle"
  );

const categoryPageDescription =
  document.getElementById(
    "categoryPageDescription"
  );

  const categoryHeroVisual =
  document.getElementById(
    "categoryHeroVisual"
  );

const categoryHeroFallback =
  document.getElementById(
    "categoryHeroFallback"
  );

const categoryProductCount =
  document.getElementById(
    "categoryProductCount"
  );

const categoryProductsGrid =
  document.getElementById(
    "categoryProductsGrid"
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
   CATEGORY DATA
========================================= */

async function getCategories() {

  try {

    const firebaseModule =
      await import(
        "./firebase-db.js"
      );


    const firebaseCategories =
      await firebaseModule
        .getCategoriesFromFirestore();


    if (
      Array.isArray(
        firebaseCategories
      )
    ) {

      return firebaseCategories

        .slice()

        .sort(
          function(a, b) {

            return (
              Number(
                a.order || 999
              ) -
              Number(
                b.order || 999
              )
            );

          }
        );

    }


    return [];

  }

  catch (error) {

    console.error(
      "Firebase category load error:",
      error
    );


    return [];

  }

}


function getRequestedCategoryName() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  return (
    params.get(
      "category"
    ) ||
    ""
  ).trim();

}


async function getCurrentCategory() {

  const requestedCategory =
    getRequestedCategoryName();

  if (!requestedCategory) {
    return null;
  }

 const categories =
  await getCategories();

  return (
    categories.find(
      function(category) {

        return (
          String(
            category.name ||
            ""
          ).toLowerCase() ===
          requestedCategory.toLowerCase()
        );

      }
    ) ||
    null
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
   CATEGORY SEO
========================================= */

function applyCategorySeo({
  title,
  description,
  image = "",
  indexable = true
}) {

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
        content || ""
      )
    );

  }


  const currentUrl =
    new URL(
      window.location.href
    );


  currentUrl.hash =
    "";


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
    indexable
      ? "index, follow"
      : "noindex, follow"
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
    currentUrl.toString();


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
    currentUrl.toString()
  );


  if (image) {

    setMeta(
      'meta[property="og:image"]',
      {
        property:
          "og:image"
      },
      image
    );

  }


  setMeta(
    'meta[name="twitter:card"]',
    {
      name:
        "twitter:card"
    },
    image
      ? "summary_large_image"
      : "summary"
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


  if (image) {

    setMeta(
      'meta[name="twitter:image"]',
      {
        name:
          "twitter:image"
      },
      image
    );

  }

}


/* =========================================
   CATEGORY PAGE
========================================= */

async function renderCategoryPage() {

  const requestedCategory =
    getRequestedCategoryName();

 const currentCategory =
  await getCurrentCategory();


  if (
    !requestedCategory
  ) {

    if (
      categoryPageTitle
    ) {

      categoryPageTitle.textContent =
        "All Products";

    }

    if (
      categoryPageDescription
    ) {

      categoryPageDescription.textContent =
        "Explore recommendations and useful product insights.";

    }

        applyCategorySeo({
      title:
        "All Products | Kinar Aage",

      description:
        "Explore recommendations and useful product insights.",

      indexable:
        true
    });


    await renderCategoryProducts(
      ""
    );

    return;

  }


  if (
    !currentCategory
  ) {

    if (
      categoryPageTitle
    ) {

      categoryPageTitle.textContent =
        requestedCategory;

    }

    if (
      categoryPageDescription
    ) {

      categoryPageDescription.textContent =
        "This category is currently unavailable.";

    }

    if (
      categoryProductCount
    ) {

      categoryProductCount.textContent =
        "0 Products";

    }

    if (
      categoryProductsGrid
    ) {

      categoryProductsGrid.innerHTML =
        `
          <div class="category-empty-state">
            This category is not available.
          </div>
        `;

    }

        applyCategorySeo({
      title:
        `${requestedCategory} | Kinar Aage`,

      description:
        "This category is currently unavailable.",

      indexable:
        false
    });

    return;

  }


  if (
    currentCategory.status ===
    "inactive"
  ) {

    if (
      categoryPageTitle
    ) {

      categoryPageTitle.textContent =
        currentCategory.name;

    }

    if (
      categoryPageDescription
    ) {

      categoryPageDescription.textContent =
        "This category is currently unavailable.";

    }

    if (
      categoryProductCount
    ) {

      categoryProductCount.textContent =
        "0 Products";

    }

    if (
      categoryProductsGrid
    ) {

      categoryProductsGrid.innerHTML =
        `
          <div class="category-empty-state">
            This category is currently inactive.
          </div>
        `;

    }

       applyCategorySeo({
      title:
        `${currentCategory.name} | Kinar Aage`,

      description:
        "This category is currently unavailable.",

      image:
        currentCategory.image ||
        "",

      indexable:
        false
    });

    return;

  }


  if (
    categoryPageTitle
  ) {

    categoryPageTitle.textContent =
      currentCategory.name;

  }

  if (
    categoryPageDescription
  ) {

    categoryPageDescription.textContent =
      currentCategory.description ||
      "Explore recommendations and useful product insights.";

  }

  if (
    categoryHeroVisual
  ) {

    const categoryImage =
      String(
        currentCategory.image ||
        ""
      ).trim();


    if (categoryImage) {

      categoryHeroVisual.style.backgroundImage =
        `url("${categoryImage}")`;

      categoryHeroVisual.classList.add(
        "has-image"
      );


      if (
        categoryHeroFallback
      ) {

        categoryHeroFallback.style.display =
          "none";

      }

    }

    else {

      categoryHeroVisual.style.backgroundImage =
        "";

      categoryHeroVisual.classList.remove(
        "has-image"
      );


      if (
        categoryHeroFallback
      ) {

        categoryHeroFallback.style.display =
          "flex";

        categoryHeroFallback.textContent =
          String(
            currentCategory.name ||
            "K"
          )
            .trim()
            .charAt(0)
            .toUpperCase();

      }

    }

  }

    applyCategorySeo({
    title:
      `${currentCategory.name} | Kinar Aage`,

    description:
      currentCategory.description ||
      "Explore recommendations and useful product insights.",

    image:
      currentCategory.image ||
      "",

    indexable:
      true
  });


  await renderCategoryProducts(
    currentCategory.name
  );

}


/* =========================================
   CATEGORY PRODUCTS
========================================= */

async function renderCategoryProducts(
  categoryName
) {

  const products =
    await getProducts();


  const filteredProducts =
    categoryName
      ? products.filter(
          function(product) {

            return (
              product.category ===
              categoryName
            );

          }
        )
      : products;


  if (
    categoryProductCount
  ) {

    categoryProductCount.textContent =
      `${filteredProducts.length} ${
        filteredProducts.length === 1
          ? "Product"
          : "Products"
      }`;

  }


  if (
    !categoryProductsGrid
  ) {
    return;
  }


  if (
    !filteredProducts.length
  ) {

    categoryProductsGrid.innerHTML =
      `
        <div class="category-empty-state">
          No products are available in this category yet.
        </div>
      `;

    return;

  }


  categoryProductsGrid.innerHTML =
    filteredProducts

      .map(
        createProductCard
      )

      .join(
        ""
      );


  categoryProductsGrid

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

categoryProductsGrid

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
                      "category_page"

                  });

              }
            )

            .catch(
              function(error) {

                console.error(
                  "Category Buy Now tracking error:",
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
   STORAGE SYNC
========================================= */

window.addEventListener(
  "storage",
  function(event) {

    if (
      event.key ===
      CATEGORIES_KEY ||
      event.key ===
      PRODUCTS_KEY
    ) {

      renderCategoryPage();

    }


    if (
      event.key ===
      WISHLIST_KEY
    ) {

      updateWishlistCount();

      renderCategoryPage();

    }

  }
);


/* =========================================
   START
========================================= */

async function startCategoryPage() {

  try {

    updateWishlistCount();

    await renderCategoryPage();

  }

  catch (error) {

    console.error(
      "Category page startup error:",
      error
    );

  }

  finally {

    document.body.classList.remove(
      "page-data-loading"
    );

  }

}


startCategoryPage();