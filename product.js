/* =========================================
   KINAR AAGE - PRODUCT DETAIL SCRIPT
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

const productDetailImage =
  document.getElementById(
    "productDetailImage"
  );

const productCategoryLink =
  document.getElementById(
    "productCategoryLink"
  );

const productDetailBadge =
  document.getElementById(
    "productDetailBadge"
  );

const productDetailName =
  document.getElementById(
    "productDetailName"
  );

const productDetailShortDescription =
  document.getElementById(
    "productDetailShortDescription"
  );

const productHighlights =
  document.getElementById(
    "productHighlights"
  );

const productAffiliateButton =
  document.getElementById(
    "productAffiliateButton"
  );

const productSideAffiliateButton =
  document.getElementById(
    "productSideAffiliateButton"
  );

const productSaveButton =
  document.getElementById(
    "productSaveButton"
  );

const productMerchantName =
  document.getElementById(
    "productMerchantName"
  );

const productAffiliateDisclosure =
  document.getElementById(
    "productAffiliateDisclosure"
  );

const productIntro =
  document.getElementById(
    "productIntro"
  );

const productDescription =
  document.getElementById(
    "productDescription"
  );

const productPros =
  document.getElementById(
    "productPros"
  );

const productCons =
  document.getElementById(
    "productCons"
  );

const productVerdict =
  document.getElementById(
    "productVerdict"
  );

const productSideName =
  document.getElementById(
    "productSideName"
  );

const relatedProductsGrid =
  document.getElementById(
    "relatedProductsGrid"
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
   TEXT FORMATTERS
========================================= */

function formatParagraphs(
  text
) {

  if (!text) {
    return "";
  }


  return String(
    text
  )

    .split(
      /\n\s*\n/
    )

    .map(
      function(paragraph) {

        const clean =
          paragraph.trim();


        if (!clean) {
          return "";
        }


        return `

          <p>
            ${escapeHtml(
              clean
            ).replace(
              /\n/g,
              "<br>"
            )}
          </p>

        `;

      }
    )

    .join(
      ""
    );

}


function toList(
  value
) {

  if (
    Array.isArray(
      value
    )
  ) {

    return value
      .map(
        function(item) {

          return String(
            item
          ).trim();

        }
      )
      .filter(
        Boolean
      );

  }


  if (!value) {
    return [];
  }


  return String(
    value
  )

    .split(
      /\r?\n/
    )

    .map(
      function(item) {

        return item
          .replace(
            /^[-•*]\s*/,
            ""
          )
          .trim();

      }
    )

    .filter(
      Boolean
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
      ) &&
      firebaseProducts.length
    ) {

      return firebaseProducts;

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


  return products;

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


async function getCurrentProduct() {

  const params =
    new URLSearchParams(
      window.location.search
    );


 const requestedSlug =
  params.get(
    "slug"
  );


if (!requestedSlug) {
  return null;
}


  const products =
    await getProducts();


 return (
  products.find(
    function(product) {

      return (
        String(
          product.slug ||
          ""
        ) === requestedSlug
      );

    }
  ) ||
  null
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


function isSaved(
  productId
) {

  return getWishlist()
    .includes(
      String(
        productId
      )
    );

}


function updateSaveButton(
  productId
) {

  if (!productSaveButton) {
    return;
  }


  if (
    isSaved(
      productId
    )
  ) {

    productSaveButton.classList.add(
      "active"
    );

    productSaveButton.textContent =
      "♥ Saved";

  }

  else {

    productSaveButton.classList.remove(
      "active"
    );

    productSaveButton.textContent =
      "♡ Save Product";

  }

}


/* =========================================
   PRODUCT IMAGE
========================================= */

function renderProductImage(
  product
) {

  if (!productDetailImage) {
    return;
  }


  if (
    product.image
  ) {

    productDetailImage.innerHTML =
      `

        <img
          src="${escapeHtml(
            product.image
          )}"
          alt="${escapeHtml(
            product.name ||
            "Product image"
          )}"
        >

      `;

  }

  else {

    const firstLetter =
      String(
        product.name ||
        "K"
      )
        .trim()
        .charAt(0)
        .toUpperCase();


    productDetailImage.innerHTML =
      `

        <div class="product-detail-placeholder">
          ${escapeHtml(
            firstLetter
          )}
        </div>

      `;

  }

}


/* =========================================
   HIGHLIGHTS
========================================= */

function renderHighlights(
  product
) {

  if (!productHighlights) {
    return;
  }


  const highlights =
    toList(
      product.highlights
    );


  if (
    !highlights.length
  ) {

    productHighlights.innerHTML =
      "";

    return;

  }


  productHighlights.innerHTML =
    highlights
      .map(
        function(item) {

          return `

            <div class="product-highlight-item">
              ${escapeHtml(
                item
              )}
            </div>

          `;

        }
      )
      .join(
        ""
      );

}


/* =========================================
   PROS / CONS
========================================= */

function renderListContent(
  element,
  value
) {

  if (!element) {
    return;
  }


  const items =
    toList(
      value
    );


  if (
    !items.length
  ) {

    element.innerHTML =
      "<p>No information added yet.</p>";

    return;

  }


  element.innerHTML =
    `

      <ul>

        ${items
          .map(
            function(item) {

              return `

                <li>
                  ${escapeHtml(
                    item
                  )}
                </li>

              `;

            }
          )
          .join(
            ""
          )}

      </ul>

    `;

}


/* =========================================
   SEO
========================================= */

function applyProductSeo(
  product
) {

  document.title =
    product.metaTitle ||
    product.seoTitle ||
    `${product.name} | Kinar Aage`;


  const description =
    product.metaDescription ||
    product.shortDescription ||
    product.summary ||
    "";


  let metaDescription =
    document.querySelector(
      'meta[name="description"]'
    );


  if (
    metaDescription
  ) {

    metaDescription.setAttribute(
      "content",
      description
    );

  }


  if (
    product.canonical
  ) {

    let canonical =
      document.querySelector(
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
      product.canonical;

  }

}


/* =========================================
   LOAD MAIN PRODUCT
========================================= */

async function loadProduct() {

  const product =
  await getCurrentProduct();


  if (!product) {

    window.location.href =
      "index.html";

    return;

  }


  const productId =
    getProductId(
      product
    );


  renderProductImage(
    product
  );


  if (
    productCategoryLink
  ) {

    productCategoryLink.textContent =
      product.category ||
      "Recommendation";


    productCategoryLink.href =
      `category.html?category=${encodeURIComponent(
        product.category ||
        ""
      )}`;

  }


  if (
    product.badge &&
    productDetailBadge
  ) {

    productDetailBadge.hidden =
      false;

    productDetailBadge.textContent =
      product.badge;

  }

  else if (
    productDetailBadge
  ) {

    productDetailBadge.hidden =
      true;

  }


  if (
    productDetailName
  ) {

    productDetailName.textContent =
      product.name ||
      "Product";

  }


  if (
    productDetailShortDescription
  ) {

    productDetailShortDescription.textContent =
      product.shortDescription ||
      product.summary ||
      "";

  }


  renderHighlights(
    product
  );


  const affiliateUrl =
    product.affiliateUrl ||
    "#";


  const ctaLabel =
    product.ctaLabel ||
    "Buy Now";


  if (
    productAffiliateButton
  ) {

    productAffiliateButton.href =
      affiliateUrl;

    productAffiliateButton.textContent =
      ctaLabel;

  }


  if (
    productSideAffiliateButton
  ) {

    productSideAffiliateButton.href =
      affiliateUrl;

    productSideAffiliateButton.textContent =
      ctaLabel;

  }


  if (
    productMerchantName
  ) {

    productMerchantName.textContent =
      product.merchantName ||
      "External Merchant";

  }


  if (
    productAffiliateDisclosure
  ) {

    productAffiliateDisclosure.textContent =
      product.affiliateDisclosure ||
      "Kinar Aage may earn a commission when you purchase through this link.";

  }


  if (
    productIntro
  ) {

    productIntro.innerHTML =
      formatParagraphs(
        product.intro
      ) ||
      "<p>No overview added yet.</p>";

  }


  if (
    productDescription
  ) {

    productDescription.innerHTML =
      formatParagraphs(
        product.description
      ) ||
      "<p>No detailed information added yet.</p>";

  }


  renderListContent(
    productPros,
    product.pros
  );


  renderListContent(
    productCons,
    product.cons
  );


  if (
    productVerdict
  ) {

    productVerdict.innerHTML =
      formatParagraphs(
        product.verdict
      ) ||
      "<p>No verdict added yet.</p>";

  }


  if (
    productSideName
  ) {

    productSideName.textContent =
      product.name ||
      "Product";

  }


  updateSaveButton(
    productId
  );


  productSaveButton
    ?.addEventListener(
      "click",
      function() {

        let wishlist =
          getWishlist();


        if (
          wishlist.includes(
            productId
          )
        ) {

          wishlist =
            wishlist.filter(
              function(item) {

                return (
                  item !== productId
                );

              }
            );


          showSiteToast(
            "Removed from saved products."
          );

        }

        else {

          wishlist.push(
            productId
          );


          showSiteToast(
            "Product saved."
          );

        }


        saveWishlist(
          wishlist
        );


        updateSaveButton(
          productId
        );

      }
    );


  applyProductSeo(
    product
  );


  renderRelatedProducts(
    product
  );

}


/* =========================================
   RELATED PRODUCTS
========================================= */

function createRelatedCard(
  product
) {

  const productId =
    getProductId(
      product
    );


  const image =
    product.image
      ? `

        <img
          src="${escapeHtml(
            product.image
          )}"
          alt="${escapeHtml(
            product.name ||
            "Product"
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


  return `

    <article class="product-card">

      <div class="product-card-image">

        ${image}

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
            "Product"
          )}

        </h3>


        <p class="product-card-summary">

          ${escapeHtml(
            product.shortDescription ||
            product.summary ||
            ""
          )}

        </p>


       <a
  class="product-details-link"
  href="product.html?slug=${encodeURIComponent(
    product.slug ||
    ""
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


async function renderRelatedProducts(
  currentProduct
) {

  if (!relatedProductsGrid) {
    return;
  }


  const currentId =
    getProductId(
      currentProduct
    );


  const allProducts =
    await getProducts();


  const products =
    allProducts.filter(
      function(product) {

        return (
          getProductId(
            product
          ) !== currentId &&
          product.status !== "draft"
        );

      }
    );


  const sameCategory =
    products.filter(
      function(product) {

        return (
          product.category ===
          currentProduct.category
        );

      }
    );


  const others =
    products.filter(
      function(product) {

        return (
          product.category !==
          currentProduct.category
        );

      }
    );


  const related =
    [
      ...sameCategory,
      ...others
    ]
      .slice(
        0,
        3
      );


  if (
    !related.length
  ) {

    relatedProductsGrid.innerHTML =
      `

        <div
          style="
            grid-column:1 / -1;
            padding:30px;
            border:1px solid #e5e1d8;
            border-radius:20px;
            background:white;
            color:#6f6f6f;
            text-align:center;
          "
        >
          No related products available yet.
        </div>

      `;

    return;

  }


  relatedProductsGrid.innerHTML =
    related
      .map(
        createRelatedCard
      )
      .join(
        ""
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
   START
========================================= */

updateWishlistCount();

loadProduct();