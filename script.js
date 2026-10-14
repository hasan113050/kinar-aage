/* =========================================
   KINAR AAGE - HOMEPAGE SCRIPT
========================================= */


/* =========================================
   STORAGE KEYS
========================================= */

const PRODUCTS_KEY =
  "kinarAageProducts";

const CATEGORIES_KEY =
  "kinarAageCategories";

const BANNER_SETTINGS_KEY =
  "kinarAageBannerSettings";

const SITE_SETTINGS_KEY =
  "kinarAageSiteSettings";

const HOMEPAGE_CONTENT_KEY =
  "kinarAageHomepageContent";

const WISHLIST_KEY =
  "kinarAageWishlist";


/* =========================================
   GENERAL DOM
========================================= */

const siteToast =
  document.getElementById(
    "siteToast"
  );

const footerYear =
  document.getElementById(
    "footerYear"
  );

const wishlistCount =
  document.getElementById(
    "wishlistCount"
  );


/* =========================================
   HERO DOM
========================================= */

const heroBackground =
  document.getElementById(
    "heroBackground"
  );

const heroOverline =
  document.getElementById(
    "heroOverline"
  );

const heroTitle =
  document.getElementById(
    "heroTitle"
  );

const heroSubtitle =
  document.getElementById(
    "heroSubtitle"
  );

const heroPrimaryButton =
  document.getElementById(
    "heroPrimaryButton"
  );

const heroPoint1 =
  document.getElementById(
    "heroPoint1"
  );

const heroPoint2 =
  document.getElementById(
    "heroPoint2"
  );

const heroPoint3 =
  document.getElementById(
    "heroPoint3"
  );


/* =========================================
   PROMO BANNER DOM
========================================= */

const promoBannerSection =
  document.getElementById(
    "promoBannerSection"
  );

const promoBannerImage =
  document.getElementById(
    "promoBannerImage"
  );


/* =========================================
   TOP INFO DOM
========================================= */

const topInfo1Icon =
  document.getElementById(
    "topInfo1Icon"
  );

const topInfo1Text =
  document.getElementById(
    "topInfo1Text"
  );

const topInfo2Icon =
  document.getElementById(
    "topInfo2Icon"
  );

const topInfo2Text =
  document.getElementById(
    "topInfo2Text"
  );

const topInfo3Icon =
  document.getElementById(
    "topInfo3Icon"
  );

const topInfo3Text =
  document.getElementById(
    "topInfo3Text"
  );


/* =========================================
   UTILITY DOM
========================================= */

const utility1Icon =
  document.getElementById(
    "utility1Icon"
  );

const utility1Title =
  document.getElementById(
    "utility1Title"
  );

const utility1Subtitle =
  document.getElementById(
    "utility1Subtitle"
  );


const utility2Icon =
  document.getElementById(
    "utility2Icon"
  );

const utility2Title =
  document.getElementById(
    "utility2Title"
  );

const utility2Subtitle =
  document.getElementById(
    "utility2Subtitle"
  );


const utility3Icon =
  document.getElementById(
    "utility3Icon"
  );

const utility3Title =
  document.getElementById(
    "utility3Title"
  );

const utility3Subtitle =
  document.getElementById(
    "utility3Subtitle"
  );


/* =========================================
   HOMEPAGE SECTION DOM
========================================= */

const homepageCategoryGrid =
  document.getElementById(
    "homepageCategoryGrid"
  );

const homepageCategoriesTitle =
  document.getElementById(
    "homepageCategoriesTitle"
  );

const homepageCategoriesSubtitle =
  document.getElementById(
    "homepageCategoriesSubtitle"
  );

const featuredProductsGrid =
  document.getElementById(
    "featuredProductsGrid"
  );

const homepageFeaturedTitle =
  document.getElementById(
    "homepageFeaturedTitle"
  );

const homepageFeaturedSubtitle =
  document.getElementById(
    "homepageFeaturedSubtitle"
  );

const recommendedProductsGrid =
  document.getElementById(
    "recommendedProductsGrid"
  );

const homepageRecommendedTitle =
  document.getElementById(
    "homepageRecommendedTitle"
  );

const homepageRecommendedSubtitle =
  document.getElementById(
    "homepageRecommendedSubtitle"
  );


/* =========================================
   PROMO TILE DOM
========================================= */

const homepagePromo1 =
  document.getElementById(
    "homepagePromo1"
  );

const homepagePromo1Title =
  document.getElementById(
    "homepagePromo1Title"
  );

const homepagePromo1Subtitle =
  document.getElementById(
    "homepagePromo1Subtitle"
  );

const homepagePromo1ButtonText =
  document.getElementById(
    "homepagePromo1ButtonText"
  );

const homepagePromo1Image =
  document.getElementById(
    "homepagePromo1Image"
  );


const homepagePromo2 =
  document.getElementById(
    "homepagePromo2"
  );

const homepagePromo2Title =
  document.getElementById(
    "homepagePromo2Title"
  );

const homepagePromo2Subtitle =
  document.getElementById(
    "homepagePromo2Subtitle"
  );

const homepagePromo2ButtonText =
  document.getElementById(
    "homepagePromo2ButtonText"
  );

const homepagePromo2Image =
  document.getElementById(
    "homepagePromo2Image"
  );


const homepagePromo3 =
  document.getElementById(
    "homepagePromo3"
  );

const homepagePromo3Title =
  document.getElementById(
    "homepagePromo3Title"
  );

const homepagePromo3Subtitle =
  document.getElementById(
    "homepagePromo3Subtitle"
  );

const homepagePromo3ButtonText =
  document.getElementById(
    "homepagePromo3ButtonText"
  );

const homepagePromo3Image =
  document.getElementById(
    "homepagePromo3Image"
  );


/* =========================================
   WHY KINAR AAGE DOM
========================================= */

const homepageWhyTitle =
  document.getElementById(
    "homepageWhyTitle"
  );

const homepageWhySubtitle =
  document.getElementById(
    "homepageWhySubtitle"
  );

const homepageWhy1Icon =
  document.getElementById(
    "homepageWhy1Icon"
  );

const homepageWhy1Title =
  document.getElementById(
    "homepageWhy1Title"
  );

const homepageWhy1Description =
  document.getElementById(
    "homepageWhy1Description"
  );

const homepageWhy2Icon =
  document.getElementById(
    "homepageWhy2Icon"
  );

const homepageWhy2Title =
  document.getElementById(
    "homepageWhy2Title"
  );

const homepageWhy2Description =
  document.getElementById(
    "homepageWhy2Description"
  );

const homepageWhy3Icon =
  document.getElementById(
    "homepageWhy3Icon"
  );

const homepageWhy3Title =
  document.getElementById(
    "homepageWhy3Title"
  );

const homepageWhy3Description =
  document.getElementById(
    "homepageWhy3Description"
  );


/* =========================================
   NEWSLETTER DOM
========================================= */

const homepageNewsletterOverline =
  document.getElementById(
    "homepageNewsletterOverline"
  );

const homepageNewsletterTitle =
  document.getElementById(
    "homepageNewsletterTitle"
  );

const homepageNewsletterDescription =
  document.getElementById(
    "homepageNewsletterDescription"
  );

const homepageNewsletterEmail =
  document.getElementById(
    "homepageNewsletterEmail"
  );

const homepageNewsletterButton =
  document.getElementById(
    "homepageNewsletterButton"
  );

const homepageNewsletterNote =
  document.getElementById(
    "homepageNewsletterNote"
  );


/* =========================================
   MINI INFO DOM
========================================= */

const homepageTrust1Title =
  document.getElementById(
    "homepageTrust1Title"
  );

const homepageTrust1Subtitle =
  document.getElementById(
    "homepageTrust1Subtitle"
  );

const homepageTrust2Title =
  document.getElementById(
    "homepageTrust2Title"
  );

const homepageTrust2Subtitle =
  document.getElementById(
    "homepageTrust2Subtitle"
  );

const homepageTrust3Title =
  document.getElementById(
    "homepageTrust3Title"
  );

const homepageTrust3Subtitle =
  document.getElementById(
    "homepageTrust3Subtitle"
  );

const homepageTrust4Title =
  document.getElementById(
    "homepageTrust4Title"
  );

const homepageTrust4Subtitle =
  document.getElementById(
    "homepageTrust4Subtitle"
  );


/* =========================================
   DISCLOSURE + FOOTER DOM
========================================= */

const homepageAffiliateDisclosure =
  document.getElementById(
    "homepageAffiliateDisclosure"
  );

const homepageFooterDescription =
  document.getElementById(
    "homepageFooterDescription"
  );

const homepageFooterCommunityTitle =
  document.getElementById(
    "homepageFooterCommunityTitle"
  );

const homepageFooterCommunityText =
  document.getElementById(
    "homepageFooterCommunityText"
  );

const homepageFooterTagline =
  document.getElementById(
    "homepageFooterTagline"
  );

const homepageFooterSocials =
  document.getElementById(
    "homepageFooterSocials"
  );

const footerFacebookLink =
  document.getElementById(
    "footerFacebookLink"
  );

const footerInstagramLink =
  document.getElementById(
    "footerInstagramLink"
  );

const footerYoutubeLink =
  document.getElementById(
    "footerYoutubeLink"
  );

const footerXLink =
  document.getElementById(
    "footerXLink"
  );

const footerPinterestLink =
  document.getElementById(
    "footerPinterestLink"
  );

const footerCategoryColumn =
  document.getElementById(
    "footerCategoryColumn"
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


function setText(
  element,
  value,
  fallback = ""
) {

  if (!element) {
    return;
  }


  element.textContent =
    value ||
    fallback;

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
   DEFAULT HOMEPAGE CONTENT
========================================= */

const DEFAULT_HOMEPAGE_CONTENT = {

  topInfo: [

    {
      icon: "✦",
      text:
        "Curated Product Recommendations"
    },

    {
      icon: "📘",
      text:
        "Practical Reviews & Buying Guides"
    },

    {
      icon: "↗",
      text:
        "A Simpler Way to Compare"
    }

  ],


  utilityItems: [

    {
      icon: "✦",
      title:
        "Focused Product Shortlists",
      subtitle:
        "Less clutter, easier browsing"
    },

    {
      icon: "✓",
      title:
        "Useful Buying Context",
      subtitle:
        "Key details before you decide"
    },

    {
      icon: "↗",
      title:
        "External Merchant Links",
      subtitle:
        "Compare here, buy from merchants"
    }

  ],


  categoriesTitle:
    "Browse Categories",

  categoriesSubtitle:
    "Find recommendations by category.",

  featuredTitle:
    "Top Picks For You ✨",

  featuredSubtitle:
    "Products worth checking first.",

  recommendedTitle:
    "More Recommendations",

  recommendedSubtitle:
    "More useful products to explore.",


  promos: [

    {
      image: "",
      title:
        "Smart Tech Picks",
      subtitle:
        "Useful gadgets worth exploring.",
      buttonText:
        "Explore",
      link:
        "category.html?category=Electronics%20%26%20Gadgets"
    },

    {
      image: "",
      title:
        "Home Essentials",
      subtitle:
        "Practical picks for everyday living.",
      buttonText:
        "Explore",
      link:
        "category.html?category=Home%20%26%20Kitchen"
    },

    {
      image: "",
      title:
        "Everyday Recommendations",
      subtitle:
        "More products worth knowing about.",
      buttonText:
        "Explore",
      link:
        "index.html#recommended"
    }

  ],


  why: {

    title:
      "Why Kinar Aage",

    subtitle:
      "A simpler way to understand products before making a buying decision.",

    cards: [

      {
        icon: "🔎",
        title:
          "Research Before You Buy",
        description:
          "We bring together useful product information, key features and practical points so you can compare more confidently."
      },

      {
        icon: "✓",
        title:
          "Curated Recommendations",
        description:
          "Instead of showing endless products, Kinar Aage focuses on selected recommendations that are easier to understand and explore."
      },

      {
        icon: "↗",
        title:
          "Simple Buying Journey",
        description:
          "When you find a suitable product, you can continue directly to the relevant merchant through the provided purchase link."
      }

    ]

  },


  newsletter: {

    overline:
      "STAY UPDATED",

    title:
      "Get Useful Picks, Straight to Your Inbox",

    description:
      "Product recommendations, buying guides and useful updates.",

    placeholder:
      "Enter your email address",

    buttonText:
      "Subscribe",

    note:
      "No spam. Just helpful content."

  },


  trustItems: [

    {
      title:
        "Product Shortlists",
      subtitle:
        "Focused recommendations"
    },

    {
      title:
        "Buying Context",
      subtitle:
        "Key things to consider"
    },

    {
      title:
        "Helpful Resources",
      subtitle:
        "Guides & practical tips"
    },

    {
      title:
        "Affiliate Transparency",
      subtitle:
        "Clear disclosure on eligible links"
    }

  ],


  affiliateDisclosure:
    "Kinar Aage may earn a commission when you purchase through certain links on this website. This does not increase the price you pay.",


  footer: {

    description:
      "A product discovery platform for recommendations, buying guides and practical comparison context.",

    communityTitle:
      "Stay Connected",

    communityText:
      "Follow Kinar Aage for new recommendations, guides and updates.",

    tagline:
      "Know more. Choose better.",

    social: {

      facebook: "",
      instagram: "",
      youtube: "",
      x: "",
      pinterest: ""

    }

  }

};


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
        .filter(
          function(category) {

            return (
              category &&
              category.status !==
                "inactive"
            );

          }
        )
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

  }

  catch (error) {

    console.error(
      "Firebase category load error:",
      error
    );

  }


  const storedCategories =
    getStoredData(
      CATEGORIES_KEY,
      null
    );


  const categories =
    Array.isArray(
      storedCategories
    )
      ? storedCategories
      : DEFAULT_CATEGORIES;


  return categories
    .filter(
      function(category) {

        return (
          category &&
          category.status !==
            "inactive"
        );

      }
    )
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


/* =========================================
   CATEGORY FALLBACK ICON
========================================= */

function getCategoryFallbackIcon(
  category
) {

  const name =
    String(
      category?.name ||
      ""
    ).toLowerCase();


  if (
    name.includes("electronic") ||
    name.includes("gadget")
  ) {
    return "💻";
  }


  if (
    name.includes("home") ||
    name.includes("kitchen")
  ) {
    return "🏠";
  }


  if (
    name.includes("fashion")
  ) {
    return "👕";
  }


  if (
    name.includes("beauty") ||
    name.includes("personal care")
  ) {
    return "✨";
  }


  if (
    name.includes("book")
  ) {
    return "📚";
  }


  if (
    name.includes("baby") ||
    name.includes("kids")
  ) {
    return "🧸";
  }


  if (
    name.includes("sport") ||
    name.includes("fitness")
  ) {
    return "🏋️";
  }


  return "✦";

}


/* =========================================
   HOMEPAGE CATEGORIES
========================================= */

async function renderHomepageCategories() {

  if (
    !homepageCategoryGrid
  ) {
    return;
  }


  const categories =
  await getCategories();


  if (
    !categories.length
  ) {

    homepageCategoryGrid.innerHTML =
      `
        <div class="category-empty-state">
          No categories available.
        </div>
      `;

    return;

  }


  homepageCategoryGrid.innerHTML =
    categories
      .map(
        function(category) {

          const name =
            category.name ||
            "Category";


          const visual =
            category.image
              ? `
                  <img
                    src="${escapeHtml(
                      category.image
                    )}"
                    alt="${escapeHtml(
                      name
                    )}"
                    loading="lazy"
                  >
                `
              : `
                  <span
                    class="category-fallback-icon"
                    aria-hidden="true"
                  >
                    ${getCategoryFallbackIcon(
                      category
                    )}
                  </span>
                `;


          return `
            <a
              href="category.html?category=${encodeURIComponent(
                name
              )}"
              class="category-icon-card"
            >

              <div class="category-icon-circle">
                ${visual}
              </div>

              <span>
                ${escapeHtml(
                  name
                )}
              </span>

            </a>
          `;

        }
      )
      .join("");

}


/* =========================================
   FOOTER CATEGORIES
========================================= */

async function renderFooterCategories() {

  if (
    !footerCategoryColumn
  ) {
    return;
  }


 const categories =
  await getCategories();


  footerCategoryColumn.innerHTML =
    `
      <strong>
        Shop by Category
      </strong>

      ${
        categories.length
          ? categories
              .map(
                function(category) {

                  const name =
                    category.name ||
                    "Category";


                  return `
                    <a
                      href="category.html?category=${encodeURIComponent(
                        name
                      )}"
                    >
                      ${escapeHtml(
                        name
                      )}
                    </a>
                  `;

                }
              )
              .join("")

          : `
              <span>
                No categories available.
              </span>
            `
      }
    `;

}


/* =========================================
   PRODUCTS
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
        item =>
          item !== id
      );


    button?.classList.remove(
      "active"
    );


    if (button) {

      button.textContent =
        "♡";

    }


    showSiteToast(
      "Removed from saved products."
    );

  }

  else {

    wishlist.push(
      id
    );


    button?.classList.add(
      "active"
    );


    if (button) {

      button.textContent =
        "♥";

    }


    showSiteToast(
      "Product saved."
    );

  }


  saveWishlist(
    wishlist
  );

}


/* =========================================
   PRODUCT ID
========================================= */

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


/* =========================================
   PRODUCT EVENTS
========================================= */

function bindProductCardEvents(
  container
) {

  if (!container) {
    return;
  }


  container
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


/* =========================================
   RENDER PRODUCTS
========================================= */

async function renderProducts() {

  const products =
    await getProducts();


  if (
    featuredProductsGrid
  ) {

    const featuredProducts =
      products
        .filter(
          product =>
            product.featured ===
            true
        )
        .slice(
          0,
          5
        );


    featuredProductsGrid.innerHTML =
      featuredProducts.length
        ? featuredProducts
            .map(
              createProductCard
            )
            .join("")

        : `
            <div class="product-empty-state">
              No featured products yet.
            </div>
          `;


    bindProductCardEvents(
      featuredProductsGrid
    );

  }


  if (
    recommendedProductsGrid
  ) {

    let recommendedProducts =
      products
        .filter(
          product =>
            product.featured !==
            true
        )
        .slice(
          0,
          5
        );


    if (
      !recommendedProducts.length
    ) {

      recommendedProducts =
        products.slice(
          0,
          5
        );

    }


    recommendedProductsGrid.innerHTML =
      recommendedProducts.length
        ? recommendedProducts
            .map(
              createProductCard
            )
            .join("")

        : `
            <div class="product-empty-state">
              No recommendations yet.
            </div>
          `;


    bindProductCardEvents(
      recommendedProductsGrid
    );

  }

}

/* =========================================
   HERO TITLE
========================================= */

function applyHeroTitle(
  title
) {

  if (
    !heroTitle ||
    !title
  ) {
    return;
  }


  const cleanTitle =
    String(
      title
    ).trim();


  const firstPeriodIndex =
    cleanTitle.indexOf(".");


  if (
    firstPeriodIndex !== -1 &&
    firstPeriodIndex <
      cleanTitle.length - 1
  ) {

    const firstPart =
      cleanTitle
        .slice(
          0,
          firstPeriodIndex + 1
        )
        .trim();


    const secondPart =
      cleanTitle
        .slice(
          firstPeriodIndex + 1
        )
        .trim();


    heroTitle.textContent =
      firstPart + " ";


    const accent =
      document.createElement(
        "span"
      );


    accent.id =
      "heroTitleAccent";

    accent.textContent =
      secondPart;


    heroTitle.appendChild(
      accent
    );

  }

  else {

    heroTitle.textContent =
      cleanTitle;

  }

}


/* =========================================
   BANNER SETTINGS
========================================= */

async function loadBannerSettings() {

  const localBannerSettings =
    getStoredData(
      BANNER_SETTINGS_KEY,
      {}
    );


  let firebaseBannerSettings =
    null;


  try {

    const firebaseModule =
      await import(
        "./firebase-db.js"
      );


    firebaseBannerSettings =
      await firebaseModule
        .getBannerSettingsFromFirestore();

  }

  catch (error) {

    console.error(
      "Firebase banner load error:",
      error
    );

  }


  const localHero =
    localBannerSettings.hero ||
    {};


  const firebaseHero =
    firebaseBannerSettings?.hero ||
    {};


  const hero = {

    ...localHero,
    ...firebaseHero,

    /*
     * Image stays local for now.
     */
    image:
  firebaseHero.image ||
  localHero.image ||
  ""

  };


  if (
    heroBackground &&
    hero.image
  ) {

    heroBackground.style.backgroundImage =
      `url("${hero.image}")`;

  }


  setText(
    heroOverline,
    hero.overline
  );


  if (
    hero.title
  ) {

    applyHeroTitle(
      hero.title
    );

  }


  setText(
    heroSubtitle,
    hero.subtitle
  );


  if (
    heroPrimaryButton
  ) {

    if (
      hero.buttonText
    ) {

      heroPrimaryButton.textContent =
        hero.buttonText;

    }


    if (
      hero.buttonLink
    ) {

      heroPrimaryButton.href =
        hero.buttonLink;

    }

  }


  setText(
    heroPoint1,
    hero.point1
  );


  setText(
    heroPoint2,
    hero.point2
  );


  setText(
    heroPoint3,
    hero.point3
  );


  /*
   * Promo image remains local.
   */
  const promo =
    localBannerSettings.promo ||
    {};


  if (
    promoBannerSection &&
    promoBannerImage
  ) {

    if (
      promo.image
    ) {

      promoBannerImage.src =
        promo.image;

      promoBannerSection.hidden =
        false;

    }

    else {

      promoBannerImage.removeAttribute(
        "src"
      );

      promoBannerSection.hidden =
        true;

    }

  }

}

/* =========================================
   SITE SETTINGS
========================================= */

function loadSiteSettings() {

  const settings =
    getStoredData(
      SITE_SETTINGS_KEY,
      null
    );


  if (
    !settings
  ) {
    return;
  }


  if (
    homepageAffiliateDisclosure &&
    settings.affiliateDisclosure
  ) {

    homepageAffiliateDisclosure.textContent =
      settings.affiliateDisclosure;

  }

}


/* =========================================
   HOMEPAGE CONTENT
========================================= */

function getHomepageContent() {

  const stored =
    getStoredData(
      HOMEPAGE_CONTENT_KEY,
      null
    );


  if (
    !stored ||
    typeof stored !==
      "object"
  ) {

    return JSON.parse(
      JSON.stringify(
        DEFAULT_HOMEPAGE_CONTENT
      )
    );

  }


  return {

    ...DEFAULT_HOMEPAGE_CONTENT,
    ...stored,


    topInfo: [

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .topInfo[0],
        ...(stored.topInfo?.[0] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .topInfo[1],
        ...(stored.topInfo?.[1] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .topInfo[2],
        ...(stored.topInfo?.[2] || {})
      }

    ],


    utilityItems: [

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .utilityItems[0],
        ...(stored.utilityItems?.[0] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .utilityItems[1],
        ...(stored.utilityItems?.[1] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .utilityItems[2],
        ...(stored.utilityItems?.[2] || {})
      }

    ],


    promos: [

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .promos[0],
        ...(stored.promos?.[0] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .promos[1],
        ...(stored.promos?.[1] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .promos[2],
        ...(stored.promos?.[2] || {})
      }

    ],


    why: {

      ...DEFAULT_HOMEPAGE_CONTENT
        .why,

      ...(stored.why || {}),

      cards: [

        {
          ...DEFAULT_HOMEPAGE_CONTENT
            .why.cards[0],
          ...(stored.why?.cards?.[0] || {})
        },

        {
          ...DEFAULT_HOMEPAGE_CONTENT
            .why.cards[1],
          ...(stored.why?.cards?.[1] || {})
        },

        {
          ...DEFAULT_HOMEPAGE_CONTENT
            .why.cards[2],
          ...(stored.why?.cards?.[2] || {})
        }

      ]

    },


    newsletter: {

      ...DEFAULT_HOMEPAGE_CONTENT
        .newsletter,

      ...(stored.newsletter || {})

    },


    trustItems: [

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .trustItems[0],
        ...(stored.trustItems?.[0] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .trustItems[1],
        ...(stored.trustItems?.[1] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .trustItems[2],
        ...(stored.trustItems?.[2] || {})
      },

      {
        ...DEFAULT_HOMEPAGE_CONTENT
          .trustItems[3],
        ...(stored.trustItems?.[3] || {})
      }

    ],


    footer: {

      ...DEFAULT_HOMEPAGE_CONTENT
        .footer,

      ...(stored.footer || {}),

      social: {

        ...DEFAULT_HOMEPAGE_CONTENT
          .footer.social,

        ...(stored.footer?.social || {})

      }

    }

  };

}


/* =========================================
   APPLY PROMO TILE
========================================= */

function applyPromoContent(
  promo,
  elements
) {

  if (!promo) {
    return;
  }


  const {
    card,
    title,
    subtitle,
    buttonText,
    image
  } = elements;


  setText(
    title,
    promo.title
  );


  setText(
    subtitle,
    promo.subtitle
  );


  setText(
    buttonText,
    promo.buttonText
  );


  if (
    card &&
    promo.link
  ) {

    card.href =
      promo.link;

  }


  if (
    image
  ) {

    if (
      promo.image
    ) {

      image.style.backgroundImage =
        `url("${promo.image}")`;

      image.style.backgroundSize =
        "cover";

      image.style.backgroundPosition =
        "center";

      image.style.backgroundRepeat =
        "no-repeat";

    }

    else {

      image.style.backgroundImage =
        "";

    }

  }

}


/* =========================================
   SOCIAL LINK HELPER
========================================= */

function applySocialLink(
  element,
  url
) {

  if (!element) {
    return;
  }


  const cleanUrl =
    String(
      url ||
      ""
    ).trim();


  if (
    cleanUrl
  ) {

    element.href =
      cleanUrl;

    element.hidden =
      false;

  }

  else {

    element.removeAttribute(
      "href"
    );

    element.hidden =
      true;

  }

}


/* =========================================
   LOAD HOMEPAGE CONTENT
========================================= */

function loadHomepageContent() {

  const content =
    getHomepageContent();


  /* TOP INFO */

  setText(
    topInfo1Icon,
    content.topInfo[0].icon
  );

  setText(
    topInfo1Text,
    content.topInfo[0].text
  );

  setText(
    topInfo2Icon,
    content.topInfo[1].icon
  );

  setText(
    topInfo2Text,
    content.topInfo[1].text
  );

  setText(
    topInfo3Icon,
    content.topInfo[2].icon
  );

  setText(
    topInfo3Text,
    content.topInfo[2].text
  );


  /* UTILITY */

  setText(
    utility1Icon,
    content.utilityItems[0].icon
  );

  setText(
    utility1Title,
    content.utilityItems[0].title
  );

  setText(
    utility1Subtitle,
    content.utilityItems[0].subtitle
  );


  setText(
    utility2Icon,
    content.utilityItems[1].icon
  );

  setText(
    utility2Title,
    content.utilityItems[1].title
  );

  setText(
    utility2Subtitle,
    content.utilityItems[1].subtitle
  );


  setText(
    utility3Icon,
    content.utilityItems[2].icon
  );

  setText(
    utility3Title,
    content.utilityItems[2].title
  );

  setText(
    utility3Subtitle,
    content.utilityItems[2].subtitle
  );


  /* SECTION TITLES */

  setText(
    homepageCategoriesTitle,
    content.categoriesTitle
  );

  setText(
    homepageCategoriesSubtitle,
    content.categoriesSubtitle
  );

  setText(
    homepageFeaturedTitle,
    content.featuredTitle
  );

  setText(
    homepageFeaturedSubtitle,
    content.featuredSubtitle
  );

  setText(
    homepageRecommendedTitle,
    content.recommendedTitle
  );

  setText(
    homepageRecommendedSubtitle,
    content.recommendedSubtitle
  );


  /* PROMO TILES */

  applyPromoContent(
    content.promos[0],
    {

      card:
        homepagePromo1,

      title:
        homepagePromo1Title,

      subtitle:
        homepagePromo1Subtitle,

      buttonText:
        homepagePromo1ButtonText,

      image:
        homepagePromo1Image

    }
  );


  applyPromoContent(
    content.promos[1],
    {

      card:
        homepagePromo2,

      title:
        homepagePromo2Title,

      subtitle:
        homepagePromo2Subtitle,

      buttonText:
        homepagePromo2ButtonText,

      image:
        homepagePromo2Image

    }
  );


  applyPromoContent(
    content.promos[2],
    {

      card:
        homepagePromo3,

      title:
        homepagePromo3Title,

      subtitle:
        homepagePromo3Subtitle,

      buttonText:
        homepagePromo3ButtonText,

      image:
        homepagePromo3Image

    }
  );


  /* WHY KINAR AAGE */

  setText(
    homepageWhyTitle,
    content.why.title
  );

  setText(
    homepageWhySubtitle,
    content.why.subtitle
  );

  setText(
    homepageWhy1Icon,
    content.why.cards[0].icon
  );

  setText(
    homepageWhy1Title,
    content.why.cards[0].title
  );

  setText(
    homepageWhy1Description,
    content.why.cards[0].description
  );


  setText(
    homepageWhy2Icon,
    content.why.cards[1].icon
  );

  setText(
    homepageWhy2Title,
    content.why.cards[1].title
  );

  setText(
    homepageWhy2Description,
    content.why.cards[1].description
  );


  setText(
    homepageWhy3Icon,
    content.why.cards[2].icon
  );

  setText(
    homepageWhy3Title,
    content.why.cards[2].title
  );

  setText(
    homepageWhy3Description,
    content.why.cards[2].description
  );


  /* NEWSLETTER */

  setText(
    homepageNewsletterOverline,
    content.newsletter.overline
  );

  setText(
    homepageNewsletterTitle,
    content.newsletter.title
  );

  setText(
    homepageNewsletterDescription,
    content.newsletter.description
  );


  if (
    homepageNewsletterEmail
  ) {

    homepageNewsletterEmail.placeholder =
      content.newsletter.placeholder ||
      "Enter your email address";

  }


  setText(
    homepageNewsletterButton,
    content.newsletter.buttonText
  );

  setText(
    homepageNewsletterNote,
    content.newsletter.note
  );


  /* MINI INFO */

  setText(
    homepageTrust1Title,
    content.trustItems[0].title
  );

  setText(
    homepageTrust1Subtitle,
    content.trustItems[0].subtitle
  );

  setText(
    homepageTrust2Title,
    content.trustItems[1].title
  );

  setText(
    homepageTrust2Subtitle,
    content.trustItems[1].subtitle
  );

  setText(
    homepageTrust3Title,
    content.trustItems[2].title
  );

  setText(
    homepageTrust3Subtitle,
    content.trustItems[2].subtitle
  );

  setText(
    homepageTrust4Title,
    content.trustItems[3].title
  );

  setText(
    homepageTrust4Subtitle,
    content.trustItems[3].subtitle
  );


  /* DISCLOSURE */

  setText(
    homepageAffiliateDisclosure,
    content.affiliateDisclosure
  );


  /* FOOTER */

  setText(
    homepageFooterDescription,
    content.footer.description
  );

  setText(
    homepageFooterCommunityTitle,
    content.footer.communityTitle
  );

  setText(
    homepageFooterCommunityText,
    content.footer.communityText
  );

  setText(
    homepageFooterTagline,
    content.footer.tagline
  );


  applySocialLink(
    footerFacebookLink,
    content.footer.social.facebook
  );

  applySocialLink(
    footerInstagramLink,
    content.footer.social.instagram
  );

  applySocialLink(
    footerYoutubeLink,
    content.footer.social.youtube
  );

  applySocialLink(
    footerXLink,
    content.footer.social.x
  );

  applySocialLink(
    footerPinterestLink,
    content.footer.social.pinterest
  );


  if (
    homepageFooterSocials
  ) {

    const visibleLinks =
      homepageFooterSocials
        .querySelectorAll(
          "a:not([hidden])"
        );


    homepageFooterSocials.hidden =
      visibleLinks.length === 0;

  }

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
   NEWSLETTER
========================================= */

document
  .querySelector(
    ".newsletter-form"
  )
  ?.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      showSiteToast(
        "Newsletter signup will be connected later."
      );

    }
  );


/* =========================================
   STORAGE SYNC
========================================= */

window.addEventListener(
  "storage",
  function(event) {


    if (
      event.key ===
      CATEGORIES_KEY
    ) {

      renderHomepageCategories();

      renderFooterCategories();

    }


    if (
      event.key ===
      PRODUCTS_KEY
    ) {

      renderProducts();

    }


    if (
      event.key ===
      WISHLIST_KEY
    ) {

      updateWishlistCount();

      renderProducts();

    }


    if (
      event.key ===
      BANNER_SETTINGS_KEY
    ) {

      loadBannerSettings();

    }


    if (
      event.key ===
      SITE_SETTINGS_KEY
    ) {

      loadSiteSettings();

    }


    if (
      event.key ===
      HOMEPAGE_CONTENT_KEY
    ) {

      loadHomepageContent();

    }

  }
);


/* =========================================
   START
========================================= */

loadBannerSettings();

loadSiteSettings();


/*
Homepage content loads AFTER
general site settings.

This allows homepage-specific
affiliate disclosure text to override
the general site disclosure.
*/

loadHomepageContent();

renderHomepageCategories();

renderFooterCategories();

renderProducts();

updateWishlistCount();

