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

const SITE_SEO_KEY =
  "kinarAageSiteSeo";

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
   WHY SECTION DOM
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

const homepageNewsletterInput =
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
   TRUST DOM
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
   DISCLOSURE DOM
========================================= */

const homepageAffiliateDisclosure =
  document.getElementById(
    "homepageAffiliateDisclosure"
  );


/* =========================================
   FOOTER DOM
========================================= */

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

const footerCategoryLinks =
  document.getElementById(
    "footerCategoryLinks"
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


/* =========================================
   DEFAULT CATEGORIES
========================================= */

const DEFAULT_CATEGORIES = [

  {
    id:
      "electronics-gadgets",

    name:
      "Electronics & Gadgets",

    slug:
      "electronics-gadgets",

    description:
      "Explore useful devices, accessories and everyday technology recommendations.",

    image:
      "",

    status:
      "active",

    order:
      1
  },


  {
    id:
      "home-kitchen",

    name:
      "Home & Kitchen",

    slug:
      "home-kitchen",

    description:
      "Discover practical products for a smarter, easier and more comfortable home.",

    image:
      "",

    status:
      "active",

    order:
      2
  },


  {
    id:
      "fashion",

    name:
      "Fashion",

    slug:
      "fashion",

    description:
      "Explore everyday style essentials and practical fashion recommendations.",

    image:
      "",

    status:
      "active",

    order:
      3
  },


  {
    id:
      "beauty-personal-care",

    name:
      "Beauty & Personal Care",

    slug:
      "beauty-personal-care",

    description:
      "Discover grooming, personal care and lifestyle products worth considering.",

    image:
      "",

    status:
      "active",

    order:
      4
  },


  {
    id:
      "books",

    name:
      "Books",

    slug:
      "books",

    description:
      "Explore books worth reading, learning from and adding to your collection.",

    image:
      "",

    status:
      "active",

    order:
      5
  },


  {
    id:
      "baby-kids",

    name:
      "Baby & Kids",

    slug:
      "baby-kids",

    description:
      "Discover useful products for children, parents and everyday family needs.",

    image:
      "",

    status:
      "active",

    order:
      6
  },


  {
    id:
      "sports-fitness",

    name:
      "Sports & Fitness",

    slug:
      "sports-fitness",

    description:
      "Explore products that support exercise, movement, training and wellness.",

    image:
      "",

    status:
      "active",

    order:
      7
  }

];

/* =========================================
   DEFAULT HOMEPAGE CONTENT
========================================= */

const DEFAULT_HOMEPAGE_CONTENT = {

  topInfo: [

    {
      icon:
        "✦",

      text:
        "Curated Product Recommendations"
    },


    {
      icon:
        "📘",

      text:
        "Practical Reviews & Buying Guides"
    },


    {
      icon:
        "↗",

      text:
        "A Simpler Way to Compare"
    }

  ],


  utilityItems: [

    {
      icon:
        "✦",

      title:
        "Focused Product Shortlists",

      subtitle:
        "Less clutter, easier browsing"
    },


    {
      icon:
        "✓",

      title:
        "Useful Buying Context",

      subtitle:
        "Key details before you decide"
    },


    {
      icon:
        "↗",

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
      image:
        "",

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
      image:
        "",

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
      image:
        "",

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
        icon:
          "🔎",

        title:
          "Research Before You Buy",

        description:
          "We bring together useful product information, key features and practical points so you can compare more confidently."
      },


      {
        icon:
          "✓",

        title:
          "Curated Recommendations",

        description:
          "Instead of showing endless products, Kinar Aage focuses on selected recommendations that are easier to understand and explore."
      },


      {
        icon:
          "↗",

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

      facebook:
        "",

      instagram:
        "",

      youtube:
        "",

      x:
        "",

      pinterest:
        ""

    }

  }

};


/* =========================================
   STORAGE HELPERS
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


function saveStoredData(
  key,
  data
) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(
        data
      )
    );

  }

  catch (error) {

    console.error(
      `Could not save ${key}`,
      error
    );

  }

}


/* =========================================
   GENERAL HELPERS
========================================= */

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
  value
) {

  if (!element) {

    return;

  }


  element.textContent =
    value ?? "";

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
   FIREBASE MODULE HELPER
========================================= */

let firebaseModulePromise =
  null;


function getFirebaseModule() {

  if (
    !firebaseModulePromise
  ) {

    firebaseModulePromise =
      import(
        "./firebase-db.js"
      )
        .catch(
          error => {

            console.error(
              "Firebase module load error:",
              error
            );


            firebaseModulePromise =
              null;


            return null;

          }
        );

  }


  return firebaseModulePromise;

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

  saveStoredData(
    WISHLIST_KEY,
    wishlist
  );


  updateWishlistCount();

}


function updateWishlistCount() {

  const count =
    getWishlist()
      .length;


  if (
    wishlistCount
  ) {

    wishlistCount.textContent =
      count;

  }


  const sharedCount =
    document.getElementById(
      "wishlistCount"
    );


  if (
    sharedCount &&
    sharedCount !==
      wishlistCount
  ) {

    sharedCount.textContent =
      count;

  }

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
          item !==
          id
      );


    button
      ?.classList.remove(
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


    button
      ?.classList.add(
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
   FIREBASE PRODUCTS
========================================= */

async function getProducts() {

  try {

    const firebaseModule =
      await getFirebaseModule();


    if (
      firebaseModule &&
      typeof firebaseModule
        .getProductsFromFirestore ===
        "function"
    ) {

      const firebaseProducts =
        await firebaseModule
          .getProductsFromFirestore();


      if (
        Array.isArray(
          firebaseProducts
        )
      ) {

        saveStoredData(
          PRODUCTS_KEY,
          firebaseProducts
        );


        return firebaseProducts.filter(
          product =>
            product &&
            product.status !==
              "draft"
        );

      }

    }

  }

  catch (error) {

    console.error(
      "Firebase product load error:",
      error
    );

  }


  const localProducts =
    getStoredData(
      PRODUCTS_KEY,
      []
    );


  if (
    !Array.isArray(
      localProducts
    )
  ) {

    return [];

  }


  return localProducts.filter(
    product =>
      product &&
      product.status !==
        "draft"
  );

}


/* =========================================
   FIREBASE CATEGORIES
========================================= */

async function getCategories() {

  try {

    const firebaseModule =
      await getFirebaseModule();


    if (
      firebaseModule &&
      typeof firebaseModule
        .getCategoriesFromFirestore ===
        "function"
    ) {

      const firebaseCategories =
        await firebaseModule
          .getCategoriesFromFirestore();


      if (
        Array.isArray(
          firebaseCategories
        )
      ) {

        saveStoredData(
          CATEGORIES_KEY,
          firebaseCategories
        );


        return firebaseCategories

          .filter(
            category =>
              category &&
              category.status !==
                "inactive"
          )

          .slice()

          .sort(
            function(
              a,
              b
            ) {

              return (
                Number(
                  a.order ||
                  999
                ) -

                Number(
                  b.order ||
                  999
                )
              );

            }
          );

      }

    }

  }

  catch (error) {

    console.error(
      "Firebase category load error:",
      error
    );

  }


  let localCategories =
    getStoredData(
      CATEGORIES_KEY,
      null
    );


  if (
    !Array.isArray(
      localCategories
    )
  ) {

    localCategories =
      DEFAULT_CATEGORIES;

  }


  return localCategories

    .filter(
      category =>
        category &&
        category.status !==
          "inactive"
    )

    .slice()

    .sort(
      function(
        a,
        b
      ) {

        return (
          Number(
            a.order ||
            999
          ) -

          Number(
            b.order ||
            999
          )
        );

      }
    );

}


/* =========================================
   PRODUCT HELPERS
========================================= */

function getProductId(
  product
) {

  return String(
    product?.id ||
    product?.slug ||
    product?.name ||
    ""
  );

}


function getProductSlug(
  product
) {

  return String(
    product?.slug ||
    product?.id ||
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


  const productSlug =
    getProductSlug(
      product
    );


  const saved =
    isSavedProduct(
      productId
    );


  const productName =
    product?.name ||
    "Untitled Product";


  const category =
    product?.category ||
    "Recommendation";


  const summary =
    product?.shortDescription ||
    product?.metaDescription ||
    "";


  const affiliateUrl =
    product?.affiliateUrl ||
    "#";


  const ctaLabel =
    product?.ctaLabel ||
    "Buy Now";


  const imageHtml =
    product?.image

      ? `
          <img
            src="${escapeHtml(
              product.image
            )}"
            alt="${escapeHtml(
              productName
            )}"
            loading="lazy"
          >
        `

      : `
          <div class="product-placeholder">
            ${escapeHtml(
              productName
                .charAt(0)
                .toUpperCase()
            )}
          </div>
        `;


  const badgeHtml =
    product?.badge

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

        ${imageHtml}

        ${badgeHtml}

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
            category
          )}
        </span>


        <h3>
          ${escapeHtml(
            productName
          )}
        </h3>


        <p class="product-card-summary">
          ${escapeHtml(
            summary
          )}
        </p>


        <div class="product-card-actions">

        <a
  class="product-details-link"
  href="product.html?slug=${encodeURIComponent(
    productSlug
  )}"
>
  Details
</a>


          <a
  class="product-buy-link"

  href="${escapeHtml(
    product.affiliateUrl ||
    "#"
  )}"

  data-product-id="${escapeHtml(
    productId
  )}"

  data-product-slug="${escapeHtml(
    productSlug
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
   PRODUCT CARD EVENTS
========================================= */

function bindProductCardEvents(
  container
) {

  if (!container) {

    return;

  }


  /* =====================================
     WISHLIST
  ===================================== */

  container
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


  /* =====================================
     AFFILIATE CLICK TRACKING
  ===================================== */

  container
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


            let source =
              "homepage_product";


            if (
              container.id ===
              "featuredProductsGrid"
            ) {

              source =
                "homepage_featured";

            }


            else if (
              container.id ===
              "recommendedProductsGrid"
            ) {

              source =
                "homepage_recommended";

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
                        source

                    });

                }
              )
              .catch(
                function(error) {

                  console.error(
                    "Homepage Buy Now tracking error:",
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
   RENDER HOMEPAGE CATEGORIES
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

    homepageCategoryGrid
      .innerHTML =
      `
        <div class="category-empty-state">
          No categories available.
        </div>
      `;

    return;

  }


  homepageCategoryGrid
    .innerHTML =
    categories
      .map(
        category => {

          const firstLetter =
            String(
              category.name ||
              "C"
            )
              .charAt(0)
              .toUpperCase();


          const visual =
            category.image

              ? `
                  <img
                    src="${escapeHtml(
                      category.image
                    )}"
                    alt="${escapeHtml(
                      category.name
                    )}"
                    loading="lazy"
                  >
                `

              : `
                  <span class="category-fallback-icon">
                    ${escapeHtml(
                      firstLetter
                    )}
                  </span>
                `;


          return `
            <a
              class="category-icon-card"
              href="category.html?category=${encodeURIComponent(
                category.name
              )}"
            >

              <div class="category-icon-circle">
                ${visual}
              </div>

              <span>
                ${escapeHtml(
                  category.name
                )}
              </span>

            </a>
          `;

        }
      )
      .join("");

}


/* =========================================
   RENDER FOOTER CATEGORIES
========================================= */

async function renderFooterCategories() {

  if (
    !footerCategoryLinks
  ) {

    return;

  }


  const categories =
    await getCategories();


  footerCategoryLinks
    .innerHTML =
    categories
      .slice(
        0,
        6
      )
      .map(
        category =>
          `
            <a
              href="category.html?category=${encodeURIComponent(
                category.name
              )}"
            >
              ${escapeHtml(
                category.name
              )}
            </a>
          `
      )
      .join("");

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

    let featuredProducts =
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


    if (
      !featuredProducts.length
    ) {

      featuredProducts =
        products.slice(
          0,
          5
        );

    }


    featuredProductsGrid
      .innerHTML =
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


    recommendedProductsGrid
      .innerHTML =
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


  setupHomepageCarousels();

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


  const parts =
    String(
      title
    )
      .split(
        "."
      )
      .map(
        part =>
          part.trim()
      )
      .filter(
        Boolean
      );


  if (
    parts.length >= 2
  ) {

    const first =
      escapeHtml(
        parts[0] + "."
      );


    const rest =
      escapeHtml(
        parts
          .slice(1)
          .join(". ") +
        "."
      );


    heroTitle.innerHTML =
      `
        ${first}
        <span>
          ${rest}
        </span>
      `;

  }

  else {

    heroTitle.textContent =
      title;

  }

}


/* =========================================
   BANNER SETTINGS - FIRESTORE FIRST
========================================= */

async function loadBannerSettings() {

  let localData =
    getStoredData(
      BANNER_SETTINGS_KEY,
      {}
    );


  let firebaseData =
    null;


  try {

    const firebaseModule =
      await getFirebaseModule();


    if (
      firebaseModule &&
      typeof firebaseModule
        .getBannerSettingsFromFirestore ===
        "function"
    ) {

      firebaseData =
        await firebaseModule
          .getBannerSettingsFromFirestore();

    }

  }

  catch (error) {

    console.error(
      "Firebase banner load error:",
      error
    );

  }


  if (
    firebaseData &&
    typeof firebaseData ===
      "object"
  ) {

    localData = {

      ...localData,

      ...firebaseData,

      hero: {

        ...(localData.hero || {}),

        ...(firebaseData.hero || {})

      },

      promo: {

        ...(localData.promo || {}),

        ...(firebaseData.promo || {})

      }

    };


    saveStoredData(
      BANNER_SETTINGS_KEY,
      localData
    );

  }


  const hero =
    localData.hero ||
    {};


  if (
    heroBackground
  ) {

    if (
      hero.image
    ) {

      heroBackground
        .style
        .backgroundImage =
        `
          url("${hero.image}")
        `;

    }

    else {

      heroBackground
        .style
        .backgroundImage =
        "";

    }

  }


  setText(
    heroOverline,
    hero.overline ||
    "A SMARTER WAY TO SHOP"
  );


  applyHeroTitle(
    hero.title ||
    "Know More. Choose Better."
  );


  setText(
    heroSubtitle,
    hero.subtitle ||
    "In-depth reviews, buying guides and selected product recommendations for better everyday decisions."
  );


  if (
    heroPrimaryButton
  ) {

    heroPrimaryButton
      .textContent =
      hero.buttonText ||
      "Explore Top Picks";


    heroPrimaryButton.href =
      hero.buttonLink ||
      "#featured";

  }


  setText(
    heroPoint1,
    hero.point1 ||
    "Curated Shortlists"
  );


  setText(
    heroPoint2,
    hero.point2 ||
    "Buying Context"
  );


  setText(
    heroPoint3,
    hero.point3 ||
    "Merchant Links"
  );


  if (
    promoBannerSection &&
    promoBannerImage
  ) {

    const promoImage =
      localData.promo?.image ||
      "";


    if (
      promoImage
    ) {

      promoBannerImage.src =
        promoImage;


      promoBannerSection.hidden =
        false;

    }

    else {

      promoBannerSection.hidden =
        true;

    }

  }

}

/* =========================================
   HOMEPAGE CONTENT MERGE
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
   FIREBASE HOMEPAGE CONTENT
========================================= */

async function loadHomepageContentFromFirebase() {

  let localData =
    getHomepageContent();


  try {

    const firebaseModule =
      await getFirebaseModule();


    if (
      firebaseModule &&
      typeof firebaseModule
        .getHomepageContentFromFirestore ===
        "function"
    ) {

      const firebaseData =
        await firebaseModule
          .getHomepageContentFromFirestore();


      if (
        firebaseData &&
        typeof firebaseData ===
          "object"
      ) {

        saveStoredData(
          HOMEPAGE_CONTENT_KEY,
          firebaseData
        );


        localData =
          getHomepageContent();

      }

    }

  }

  catch (error) {

    console.error(
      "Firebase homepage content load error:",
      error
    );

  }


  return localData;

}


/* =========================================
   LOAD HOMEPAGE CONTENT
========================================= */

async function loadHomepageContent() {

  const data =
    await loadHomepageContentFromFirebase();


  /* =====================================
     TOP INFO
  ===================================== */

  setText(
    topInfo1Icon,
    data.topInfo[0].icon
  );

  setText(
    topInfo1Text,
    data.topInfo[0].text
  );


  setText(
    topInfo2Icon,
    data.topInfo[1].icon
  );

  setText(
    topInfo2Text,
    data.topInfo[1].text
  );


  setText(
    topInfo3Icon,
    data.topInfo[2].icon
  );

  setText(
    topInfo3Text,
    data.topInfo[2].text
  );


 /* =====================================
   UTILITY ROW
===================================== */

setText(
  document.getElementById(
    "utility1Icon"
  ),
  data.utilityItems[0].icon
);

setText(
  document.getElementById(
    "utility1Title"
  ),
  data.utilityItems[0].title
);

setText(
  document.getElementById(
    "utility1Subtitle"
  ),
  data.utilityItems[0].subtitle
);


setText(
  document.getElementById(
    "utility2Icon"
  ),
  data.utilityItems[1].icon
);

setText(
  document.getElementById(
    "utility2Title"
  ),
  data.utilityItems[1].title
);

setText(
  document.getElementById(
    "utility2Subtitle"
  ),
  data.utilityItems[1].subtitle
);


setText(
  document.getElementById(
    "utility3Icon"
  ),
  data.utilityItems[2].icon
);

setText(
  document.getElementById(
    "utility3Title"
  ),
  data.utilityItems[2].title
);

setText(
  document.getElementById(
    "utility3Subtitle"
  ),
  data.utilityItems[2].subtitle
);

  /* =====================================
     SECTION HEADINGS
  ===================================== */

  setText(
    homepageCategoriesTitle,
    data.categoriesTitle
  );

  setText(
    homepageCategoriesSubtitle,
    data.categoriesSubtitle
  );


  setText(
    homepageFeaturedTitle,
    data.featuredTitle
  );

  setText(
    homepageFeaturedSubtitle,
    data.featuredSubtitle
  );


  setText(
    homepageRecommendedTitle,
    data.recommendedTitle
  );

  setText(
    homepageRecommendedSubtitle,
    data.recommendedSubtitle
  );


  /* =====================================
     PROMO TILES
  ===================================== */

  setupPromoTile(
    homepagePromo1,
    homepagePromo1Title,
    homepagePromo1Subtitle,
    homepagePromo1ButtonText,
    homepagePromo1Image,
    data.promos[0]
  );


  setupPromoTile(
    homepagePromo2,
    homepagePromo2Title,
    homepagePromo2Subtitle,
    homepagePromo2ButtonText,
    homepagePromo2Image,
    data.promos[1]
  );


  setupPromoTile(
    homepagePromo3,
    homepagePromo3Title,
    homepagePromo3Subtitle,
    homepagePromo3ButtonText,
    homepagePromo3Image,
    data.promos[2]
  );


  /* =====================================
     WHY
  ===================================== */

  setText(
    homepageWhyTitle,
    data.why.title
  );

  setText(
    homepageWhySubtitle,
    data.why.subtitle
  );


  setText(
    homepageWhy1Icon,
    data.why.cards[0].icon
  );

  setText(
    homepageWhy1Title,
    data.why.cards[0].title
  );

  setText(
    homepageWhy1Description,
    data.why.cards[0].description
  );


  setText(
    homepageWhy2Icon,
    data.why.cards[1].icon
  );

  setText(
    homepageWhy2Title,
    data.why.cards[1].title
  );

  setText(
    homepageWhy2Description,
    data.why.cards[1].description
  );


  setText(
    homepageWhy3Icon,
    data.why.cards[2].icon
  );

  setText(
    homepageWhy3Title,
    data.why.cards[2].title
  );

  setText(
    homepageWhy3Description,
    data.why.cards[2].description
  );


  /* =====================================
     NEWSLETTER
  ===================================== */

  setText(
    homepageNewsletterOverline,
    data.newsletter.overline
  );

  setText(
    homepageNewsletterTitle,
    data.newsletter.title
  );

  setText(
    homepageNewsletterDescription,
    data.newsletter.description
  );


  if (
    homepageNewsletterInput
  ) {

    homepageNewsletterInput.placeholder =
      data.newsletter.placeholder ||
      "Enter your email address";

  }


  setText(
    homepageNewsletterButton,
    data.newsletter.buttonText
  );

  setText(
    homepageNewsletterNote,
    data.newsletter.note
  );


  /* =====================================
     TRUST
  ===================================== */

  setText(
    homepageTrust1Title,
    data.trustItems[0].title
  );

  setText(
    homepageTrust1Subtitle,
    data.trustItems[0].subtitle
  );


  setText(
    homepageTrust2Title,
    data.trustItems[1].title
  );

  setText(
    homepageTrust2Subtitle,
    data.trustItems[1].subtitle
  );


  setText(
    homepageTrust3Title,
    data.trustItems[2].title
  );

  setText(
    homepageTrust3Subtitle,
    data.trustItems[2].subtitle
  );


  setText(
    homepageTrust4Title,
    data.trustItems[3].title
  );

  setText(
    homepageTrust4Subtitle,
    data.trustItems[3].subtitle
  );


  /* =====================================
     DISCLOSURE
  ===================================== */

  setText(
    homepageAffiliateDisclosure,
    data.affiliateDisclosure
  );


  /* =====================================
     FOOTER
  ===================================== */

  setText(
    homepageFooterDescription,
    data.footer.description
  );

  setText(
    homepageFooterCommunityTitle,
    data.footer.communityTitle
  );

  setText(
    homepageFooterCommunityText,
    data.footer.communityText
  );

  setText(
    homepageFooterTagline,
    data.footer.tagline
  );


  setupFooterSocials(
    data.footer.social
  );

}


/* =========================================
   PROMO TILE
========================================= */

function setupPromoTile(
  tile,
  titleElement,
  subtitleElement,
  buttonElement,
  imageElement,
  data
) {

  if (
    !data
  ) {

    return;

  }


  setText(
    titleElement,
    data.title
  );


  setText(
    subtitleElement,
    data.subtitle
  );


  setText(
    buttonElement,
    data.buttonText
  );


  if (
    tile &&
    data.link
  ) {

    tile.style.cursor =
      "pointer";


    tile.onclick =
      function(event) {

        const target =
          event.target;


        if (
          target.closest(
            "a"
          )
        ) {

          return;

        }


        window.location.href =
          data.link;

      };

  }


  if (
    buttonElement &&
    data.link
  ) {

    if (
      buttonElement.tagName
        .toLowerCase() ===
        "a"
    ) {

      buttonElement.href =
        data.link;

    }

    else {

      buttonElement.style.cursor =
        "pointer";


      buttonElement.onclick =
        function(event) {

          event.stopPropagation();


          window.location.href =
            data.link;

        };

    }

  }


  if (
  imageElement
) {

  const imageUrl =
    String(
      data.image || ""
    ).trim();


  tile
    ?.classList.toggle(
      "has-promo-image",
      Boolean(imageUrl)
    );


  if (
    imageUrl
  ) {

    imageElement.style
      .backgroundImage =
      `url("${imageUrl}")`;

    imageElement.style
      .backgroundSize =
      "cover";

    imageElement.style
      .backgroundPosition =
      "center center";

    imageElement.style
      .backgroundRepeat =
      "no-repeat";

  }

  else {

    imageElement.style
      .backgroundImage =
      "";

  }

}

}


/* =========================================
   FOOTER SOCIALS
========================================= */

function setupFooterSocials(
  social
) {

  if (
    !homepageFooterSocials
  ) {

    return;

  }


  const items = [

    {
      element:
        footerFacebookLink,

      url:
        social?.facebook
    },

    {
      element:
        footerInstagramLink,

      url:
        social?.instagram
    },

    {
      element:
        footerYoutubeLink,

      url:
        social?.youtube
    },

    {
      element:
        footerXLink,

      url:
        social?.x
    },

    {
      element:
        footerPinterestLink,

      url:
        social?.pinterest
    }

  ];


  let visibleCount =
    0;


  items.forEach(
    item => {

      if (
        !item.element
      ) {

        return;

      }


      if (
        item.url
      ) {

        item.element.href =
          item.url;


        item.element.hidden =
          false;


        visibleCount++;

      }

      else {

        item.element.hidden =
          true;

      }

    }
  );


  homepageFooterSocials.hidden =
    visibleCount ===
    0;

}

/* =========================================
   SITE SETTINGS - FIRESTORE FIRST
========================================= */

async function loadSiteSettings() {

  let settings =
    getStoredData(
      SITE_SETTINGS_KEY,
      null
    );


  try {

    const firebaseModule =
      await getFirebaseModule();


    if (
      firebaseModule &&
      typeof firebaseModule
        .getSiteSettingsFromFirestore ===
        "function"
    ) {

      const firebaseSettings =
        await firebaseModule
          .getSiteSettingsFromFirestore();


      if (
        firebaseSettings &&
        typeof firebaseSettings ===
          "object"
      ) {

        settings =
          firebaseSettings;


        saveStoredData(
          SITE_SETTINGS_KEY,
          firebaseSettings
        );

      }

    }

  }

  catch (error) {

    console.error(
      "Firebase site settings load error:",
      error
    );

  }


  if (
    !settings ||
    typeof settings !==
      "object"
  ) {

    return;

  }


  if (
    settings.siteName
  ) {

    document
      .querySelectorAll(
        ".site-logo"
      )
      .forEach(
        logo => {

          logo.setAttribute(
            "aria-label",
            `${settings.siteName} Home`
          );

        }
      );

  }

}


/* =========================================
   SEO HELPERS
========================================= */

function getOrCreateMeta(
  selector,
  attributes
) {

  let element =
    document.head
      .querySelector(
        selector
      );


  if (
    !element
  ) {

    element =
      document.createElement(
        "meta"
      );


    Object.entries(
      attributes
    )
      .forEach(
        ([key, value]) => {

          element.setAttribute(
            key,
            value
          );

        }
      );


    document.head.appendChild(
      element
    );

  }


  return element;

}


function setMetaContent(
  selector,
  attributes,
  content
) {

  if (
    !content
  ) {

    return;

  }


  const element =
    getOrCreateMeta(
      selector,
      attributes
    );


  element.setAttribute(
    "content",
    String(
      content
    )
  );

}


function setCanonicalUrl(
  url
) {

  if (
    !url
  ) {

    return;

  }


  let canonical =
    document.head
      .querySelector(
        'link[rel="canonical"]'
      );


  if (
    !canonical
  ) {

    canonical =
      document.createElement(
        "link"
      );


    canonical.setAttribute(
      "rel",
      "canonical"
    );


    document.head.appendChild(
      canonical
    );

  }


  canonical.setAttribute(
    "href",
    String(
      url
    )
  );

}


function applyStructuredData(
  schema
) {

  if (
    !schema
  ) {

    return;

  }


  let parsedSchema =
    schema;


  if (
    typeof schema ===
      "string"
  ) {

    try {

      parsedSchema =
        JSON.parse(
          schema
        );

    }

    catch (error) {

      console.warn(
        "Invalid SEO schema JSON:",
        error
      );


      return;

    }

  }


  if (
    !parsedSchema ||
    typeof parsedSchema !==
      "object"
  ) {

    return;

  }


  let script =
    document.head
      .querySelector(
        'script[data-kinar-aage-schema="true"]'
      );


  if (
    !script
  ) {

    script =
      document.createElement(
        "script"
      );


    script.type =
      "application/ld+json";


    script.dataset
      .kinarAageSchema =
      "true";


    document.head.appendChild(
      script
    );

  }


  script.textContent =
    JSON.stringify(
      parsedSchema
    );

}


/* =========================================
   APPLY SITE SEO
========================================= */

function applySiteSeo(
  seo
) {

  if (
    !seo ||
    typeof seo !==
      "object"
  ) {

    return;

  }


  if (
    seo.title
  ) {

    document.title =
      seo.title;

  }


  if (
    seo.language
  ) {

    document.documentElement
      .setAttribute(
        "lang",
        seo.language
      );

  }


  setMetaContent(
    'meta[name="description"]',
    {
      name:
        "description"
    },
    seo.description
  );


  setMetaContent(
    'meta[name="keywords"]',
    {
      name:
        "keywords"
    },
    seo.keywords
  );


  setCanonicalUrl(
    seo.url
  );


  setMetaContent(
    'meta[property="og:title"]',
    {
      property:
        "og:title"
    },
    seo.title
  );


  setMetaContent(
    'meta[property="og:description"]',
    {
      property:
        "og:description"
    },
    seo.description
  );


  setMetaContent(
    'meta[property="og:url"]',
    {
      property:
        "og:url"
    },
    seo.url
  );


  setMetaContent(
    'meta[property="og:type"]',
    {
      property:
        "og:type"
    },
    "website"
  );


  setMetaContent(
    'meta[property="og:image"]',
    {
      property:
        "og:image"
    },
    seo.ogImage
  );


  setMetaContent(
    'meta[name="twitter:card"]',
    {
      name:
        "twitter:card"
    },
    seo.ogImage
      ? "summary_large_image"
      : "summary"
  );


  setMetaContent(
    'meta[name="twitter:title"]',
    {
      name:
        "twitter:title"
    },
    seo.title
  );


  setMetaContent(
    'meta[name="twitter:description"]',
    {
      name:
        "twitter:description"
    },
    seo.description
  );


  setMetaContent(
    'meta[name="twitter:image"]',
    {
      name:
        "twitter:image"
    },
    seo.ogImage
  );


  if (
    seo.twitterHandle
  ) {

    const twitterHandle =
      String(
        seo.twitterHandle
      )
        .trim();


    setMetaContent(
      'meta[name="twitter:site"]',
      {
        name:
          "twitter:site"
      },
      twitterHandle.startsWith(
        "@"
      )
        ? twitterHandle
        : `@${twitterHandle}`
    );

  }


  applyStructuredData(
    seo.schema
  );

}


/* =========================================
   SITE SEO - FIRESTORE FIRST
========================================= */

async function loadSiteSeo() {

  let seo =
    getStoredData(
      SITE_SEO_KEY,
      null
    );


  try {

    const firebaseModule =
      await getFirebaseModule();


    if (
      firebaseModule &&
      typeof firebaseModule
        .getSiteSeoFromFirestore ===
        "function"
    ) {

      const firebaseSeo =
        await firebaseModule
          .getSiteSeoFromFirestore();


      if (
        firebaseSeo &&
        typeof firebaseSeo ===
          "object"
      ) {

        seo =
          firebaseSeo;


        saveStoredData(
          SITE_SEO_KEY,
          firebaseSeo
        );

      }

    }

  }

  catch (error) {

    console.error(
      "Firebase SEO load error:",
      error
    );

  }


  if (
    seo &&
    typeof seo ===
      "object"
  ) {

    applySiteSeo(
      seo
    );

  }

}


/* =========================================
   NEWSLETTER
========================================= */

const homepageNewsletterForm =
  document.querySelector(
    ".newsletter-form"
  );


homepageNewsletterForm
  ?.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const email =
        homepageNewsletterInput
          ?.value
          .trim();


      if (
        !email
      ) {

        showSiteToast(
          "Please enter your email address."
        );

        homepageNewsletterInput
          ?.focus();

        return;

      }


      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (
        !emailPattern.test(
          email
        )
      ) {

        showSiteToast(
          "Please enter a valid email address."
        );

        homepageNewsletterInput
          ?.focus();

        return;

      }


   const submitButton =
  homepageNewsletterButton;


const originalNewsletterButtonText =
  submitButton
    ?.textContent
    ?.trim() ||
  "Subscribe";


try {

  if (
    submitButton
  ) {

    submitButton.disabled =
      true;

    submitButton.textContent =
      "Subscribing...";
  }


        const firebaseModule =
          await import(
            "./firebase-db.js"
          );


        if (
          typeof firebaseModule
            .subscribeToNewsletter !==
            "function"
        ) {

          throw new Error(
            "Newsletter service is unavailable."
          );

        }


        await firebaseModule
          .subscribeToNewsletter(
            email
          );


        showSiteToast(
          "Thanks! You’re subscribed."
        );


        homepageNewsletterForm
          .reset();

      }

      catch (error) {

        console.error(
          "Newsletter signup error:",
          error
        );


        showSiteToast(
          "Subscription failed. Please try again."
        );

      }

     finally {

  if (
    submitButton
  ) {

    submitButton.disabled =
      false;

    submitButton.textContent =
      originalNewsletterButtonText;

  }

}

    }
  );


/* =========================================
   HOMEPAGE CAROUSEL
========================================= */

const homepageCarouselState =
  new WeakMap();


function isMobileCarouselMode() {

  return window.matchMedia(
    "(max-width: 720px)"
  ).matches;

}


function clearCarouselTimers(
  grid
) {

  const state =
    homepageCarouselState.get(
      grid
    );


  if (
    !state
  ) {

    return;

  }


  if (
    state.autoTimer
  ) {

    clearInterval(
      state.autoTimer
    );


    state.autoTimer =
      null;

  }


  if (
    state.resumeTimer
  ) {

    clearTimeout(
      state.resumeTimer
    );


    state.resumeTimer =
      null;

  }

}


/* =========================================
   CAROUSEL CARD SIZE
========================================= */

function getCarouselStep(
  grid
) {

  const cards =
    grid.querySelectorAll(
      ".product-card"
    );


  if (
    !cards.length
  ) {

    return 0;

  }


  const firstCard =
    cards[0];


  const styles =
    window.getComputedStyle(
      grid
    );


  const gap =
    parseFloat(
      styles.columnGap ||
      styles.gap ||
      "0"
    ) || 0;


  return (
    firstCard
      .getBoundingClientRect()
      .width +
    gap
  );

}

/* =========================================
   CURRENT CAROUSEL INDEX
========================================= */

function getCarouselIndex(
  grid
) {

  const step =
    getCarouselStep(
      grid
    );


  if (
    !step
  ) {

    return 0;

  }


  return Math.round(
    grid.scrollLeft /
    step
  );

}


/* =========================================
   GO TO CAROUSEL CARD
========================================= */

function scrollCarouselToIndex(
  grid,
  index,
  behavior =
    "smooth"
) {

  const cards =
    grid.querySelectorAll(
      ".product-card"
    );


  if (
    !cards.length
  ) {

    return;

  }


  const maxIndex =
    Math.max(
      0,
      cards.length - 2
    );


  const safeIndex =
    Math.max(
      0,
      Math.min(
        index,
        maxIndex
      )
    );


  const step =
    getCarouselStep(
      grid
    );


  grid.scrollTo({

    left:
      safeIndex *
      step,

    behavior:
      behavior

  });

}


/* =========================================
   AUTO SLIDE
========================================= */

function startCarouselAutoPlay(
  grid
) {

  if (
    !grid ||
    !isMobileCarouselMode()
  ) {

    return;

  }


  clearCarouselTimers(
    grid
  );


  const cards =
    grid.querySelectorAll(
      ".product-card"
    );


  if (
    cards.length <= 2
  ) {

    return;

  }


  const state =
    homepageCarouselState.get(
      grid
    ) || {};


  state.autoTimer =
    setInterval(
      function() {

        if (
          !isMobileCarouselMode()
        ) {

          clearCarouselTimers(
            grid
          );

          return;

        }


        const currentIndex =
          getCarouselIndex(
            grid
          );


        const maxIndex =
          Math.max(
            0,
            cards.length - 2
          );


        if (
          currentIndex >=
          maxIndex
        ) {

          scrollCarouselToIndex(
            grid,
            0,
            "smooth"
          );

        }

        else {

          scrollCarouselToIndex(
            grid,
            currentIndex + 1,
            "smooth"
          );

        }

      },
      3500
    );


  homepageCarouselState.set(
    grid,
    state
  );

}


/* =========================================
   RESUME AUTO SLIDE
========================================= */

function scheduleCarouselResume(
  grid
) {

  const state =
    homepageCarouselState.get(
      grid
    ) || {};


  if (
    state.autoTimer
  ) {

    clearInterval(
      state.autoTimer
    );


    state.autoTimer =
      null;

  }


  if (
    state.resumeTimer
  ) {

    clearTimeout(
      state.resumeTimer
    );

  }


  state.resumeTimer =
    setTimeout(
      function() {

        startCarouselAutoPlay(
          grid
        );

      },
      5000
    );


  homepageCarouselState.set(
    grid,
    state
  );

}


/* =========================================
   BIND CAROUSEL INTERACTION
========================================= */

function bindCarouselInteraction(
  grid
) {

  if (
    !grid
  ) {

    return;

  }


  if (
    grid.dataset.carouselBound ===
    "true"
  ) {

    startCarouselAutoPlay(
      grid
    );

    return;

  }


  grid.dataset.carouselBound =
    "true";


  const interactionHandler =
    function() {

      if (
        !isMobileCarouselMode()
      ) {

        return;

      }


      scheduleCarouselResume(
        grid
      );

    };


  grid.addEventListener(
    "touchstart",
    interactionHandler,
    {
      passive: true
    }
  );


  grid.addEventListener(
    "touchend",
    interactionHandler,
    {
      passive: true
    }
  );


  grid.addEventListener(
    "pointerdown",
    interactionHandler
  );


  grid.addEventListener(
    "wheel",
    interactionHandler,
    {
      passive: true
    }
  );


  startCarouselAutoPlay(
    grid
  );

}


/* =========================================
   CAROUSEL ARROW CONTROLS
========================================= */

function ensureCarouselControls(
  grid
) {

  if (!grid) {

    return;

  }


  let shell =
    grid.parentElement;


  if (
    !shell ||
    !shell.classList.contains(
      "homepage-carousel-shell"
    )
  ) {

    shell =
      document.createElement(
        "div"
      );


    shell.className =
      "homepage-carousel-shell";


    grid.parentNode.insertBefore(
      shell,
      grid
    );


    shell.appendChild(
      grid
    );

  }


  let controls =
    shell.querySelector(
      ".homepage-carousel-controls"
    );


  if (controls) {

    return;

  }


  controls =
    document.createElement(
      "div"
    );


  controls.className =
    "homepage-carousel-controls";


  controls.innerHTML = `
    <button
      class="homepage-carousel-arrow homepage-carousel-arrow-prev"
      type="button"
      aria-label="Previous product"
    >
      ‹
    </button>

    <button
      class="homepage-carousel-arrow homepage-carousel-arrow-next"
      type="button"
      aria-label="Next product"
    >
      ›
    </button>
  `;


  shell.appendChild(
    controls
  );


  const previousButton =
    controls.querySelector(
      ".homepage-carousel-arrow-prev"
    );


  const nextButton =
    controls.querySelector(
      ".homepage-carousel-arrow-next"
    );


  previousButton
    ?.addEventListener(
      "click",
      function() {

        const cards =
          grid.querySelectorAll(
            ".product-card"
          );


        if (
          cards.length <= 2
        ) {

          return;

        }


        const currentIndex =
          getCarouselIndex(
            grid
          );


        const maxIndex =
          Math.max(
            0,
            cards.length - 2
          );


        const previousIndex =
          currentIndex <= 0
            ? maxIndex
            : currentIndex - 1;


        scrollCarouselToIndex(
          grid,
          previousIndex,
          "smooth"
        );


        scheduleCarouselResume(
          grid
        );

      }
    );


  nextButton
    ?.addEventListener(
      "click",
      function() {

        const cards =
          grid.querySelectorAll(
            ".product-card"
          );


        if (
          cards.length <= 2
        ) {

          return;

        }


        const currentIndex =
          getCarouselIndex(
            grid
          );


        const maxIndex =
          Math.max(
            0,
            cards.length - 2
          );


        const nextIndex =
          currentIndex >= maxIndex
            ? 0
            : currentIndex + 1;


        scrollCarouselToIndex(
          grid,
          nextIndex,
          "smooth"
        );


        scheduleCarouselResume(
          grid
        );

      }
    );

}


/* =========================================
   SETUP HOMEPAGE CAROUSELS
========================================= */

function setupHomepageCarousels() {

  const grids = [

    featuredProductsGrid,

    recommendedProductsGrid

  ];


  grids.forEach(
    grid => {

      if (!grid) {

        return;

      }


      ensureCarouselControls(
        grid
      );


      if (
        isMobileCarouselMode()
      ) {

        bindCarouselInteraction(
          grid
        );

      }

      else {

        clearCarouselTimers(
          grid
        );


        grid.scrollTo({

          left: 0,

          behavior:
            "auto"

        });

      }

    }
  );

}


/* =========================================
   RESIZE HANDLING
========================================= */

let carouselResizeTimer =
  null;


window.addEventListener(
  "resize",
  function() {

    clearTimeout(
      carouselResizeTimer
    );


    carouselResizeTimer =
      setTimeout(
        function() {

          setupHomepageCarousels();

        },
        220
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
      PRODUCTS_KEY
    ) {

      renderProducts();

    }


    if (
      event.key ===
      CATEGORIES_KEY
    ) {

      renderHomepageCategories();

      renderFooterCategories();

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
      HOMEPAGE_CONTENT_KEY
    ) {

      loadHomepageContent();

    }


    if (
      event.key ===
      SITE_SETTINGS_KEY
    ) {

      loadSiteSettings();

    }


    if (
      event.key ===
      SITE_SEO_KEY
    ) {

      loadSiteSeo();

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
   START HOMEPAGE
========================================= */

async function startHomepage() {

  try {

    updateWishlistCount();


    await Promise.all([

      loadBannerSettings(),

      loadHomepageContent(),

      loadSiteSettings(),

      loadSiteSeo(),

      renderHomepageCategories(),

      renderFooterCategories(),

      renderProducts()

    ]);


    setupHomepageCarousels();

  }

  catch (error) {

    console.error(
      "Homepage startup error:",
      error
    );


    showSiteToast(
      "Some homepage content could not be loaded."
    );

  }

  finally {

    document.body
      .classList.remove(
        "page-data-loading"
      );

  }

}


startHomepage();