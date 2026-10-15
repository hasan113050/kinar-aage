/* =========================================
   KINAR AAGE ADMIN
========================================= */


/* =========================================
   STORAGE KEYS
========================================= */

const PRODUCTS_KEY =
  "kinarAageProducts";

const CATEGORIES_KEY =
  "kinarAageCategories";

const SITE_SEO_KEY =
  "kinarAageSiteSeo";

const SITE_SETTINGS_KEY =
  "kinarAageSiteSettings";

const BANNER_SETTINGS_KEY =
  "kinarAageBannerSettings";

const HOMEPAGE_CONTENT_KEY =
  "kinarAageHomepageContent";

/* =========================================
   INITIAL CATEGORIES
========================================= */

const INITIAL_CATEGORIES = [

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
   INITIAL PRODUCTS
========================================= */

const INITIAL_PRODUCTS = [

  {
    id: 1,
    name: "Best Wireless Earbuds for Everyday Use",
    category: "Electronics & Gadgets",
    status: "published",
    featured: true,
    badge: "Editor's Pick",
    image: "",
    shortDescription:
      "A practical wireless earbuds recommendation for everyday calls, music and casual use.",
    highlights: [
      "Comfortable for everyday use",
      "Good battery performance",
      "Easy wireless connectivity"
    ],
    intro: "",
    description: "",
    pros: [],
    cons: [],
    verdict: "",
    affiliateUrl: "https://example.com",
    ctaLabel: "Buy Now",
    merchantName: "",
    affiliateDisclosure: "",
    slug:
      "best-wireless-earbuds-for-everyday-use",
    canonical: "",
    metaTitle:
      "Best Wireless Earbuds for Everyday Use",
    metaDescription: "",
    tags: [
      "wireless earbuds",
      "electronics",
      "gadgets"
    ],
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    createdAt:
      new Date().toISOString(),
    updatedAt:
      new Date().toISOString()
  },

  {
    id: 2,
    name: "Smart Kitchen Appliance Worth Considering",
    category: "Home & Kitchen",
    status: "published",
    featured: true,
    badge: "Recommended",
    image: "",
    shortDescription:
      "A useful kitchen appliance recommendation for making daily home tasks easier.",
    highlights: [
      "Useful for daily cooking",
      "Easy to operate",
      "Practical home appliance"
    ],
    intro: "",
    description: "",
    pros: [],
    cons: [],
    verdict: "",
    affiliateUrl: "https://example.com",
    ctaLabel: "Buy Now",
    merchantName: "",
    affiliateDisclosure: "",
    slug:
      "smart-kitchen-appliance-worth-considering",
    canonical: "",
    metaTitle:
      "Smart Kitchen Appliance Worth Considering",
    metaDescription: "",
    tags: [
      "home",
      "kitchen",
      "appliance"
    ],
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    createdAt:
      new Date().toISOString(),
    updatedAt:
      new Date().toISOString()
  },

  {
    id: 3,
    name: "Everyday Fashion Essential",
    category: "Fashion",
    status: "published",
    featured: false,
    badge: "",
    image: "",
    shortDescription:
      "A simple everyday fashion recommendation focused on comfort and versatility.",
    highlights: [
      "Versatile styling",
      "Comfortable for regular use",
      "Easy to match"
    ],
    intro: "",
    description: "",
    pros: [],
    cons: [],
    verdict: "",
    affiliateUrl: "https://example.com",
    ctaLabel: "Buy Now",
    merchantName: "",
    affiliateDisclosure: "",
    slug:
      "everyday-fashion-essential",
    canonical: "",
    metaTitle:
      "Everyday Fashion Essential",
    metaDescription: "",
    tags: [
      "fashion",
      "style"
    ],
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    createdAt:
      new Date().toISOString(),
    updatedAt:
      new Date().toISOString()
  },

  {
    id: 4,
    name: "Personal Care Product We Recommend",
    category: "Beauty & Personal Care",
    status: "published",
    featured: false,
    badge: "",
    image: "",
    shortDescription:
      "A practical personal care recommendation for regular everyday use.",
    highlights: [
      "Simple everyday use",
      "Easy care routine",
      "Practical choice"
    ],
    intro: "",
    description: "",
    pros: [],
    cons: [],
    verdict: "",
    affiliateUrl: "https://example.com",
    ctaLabel: "Buy Now",
    merchantName: "",
    affiliateDisclosure: "",
    slug:
      "personal-care-product-we-recommend",
    canonical: "",
    metaTitle:
      "Personal Care Product We Recommend",
    metaDescription: "",
    tags: [
      "beauty",
      "personal care"
    ],
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    createdAt:
      new Date().toISOString(),
    updatedAt:
      new Date().toISOString()
  },

  {
    id: 5,
    name: "A Book Worth Reading",
    category: "Books",
    status: "published",
    featured: false,
    badge: "",
    image: "",
    shortDescription:
      "A book recommendation worth considering for learning, ideas and personal growth.",
    highlights: [
      "Useful insights",
      "Easy to revisit",
      "Good learning value"
    ],
    intro: "",
    description: "",
    pros: [],
    cons: [],
    verdict: "",
    affiliateUrl: "https://example.com",
    ctaLabel: "Buy Now",
    merchantName: "",
    affiliateDisclosure: "",
    slug:
      "a-book-worth-reading",
    canonical: "",
    metaTitle:
      "A Book Worth Reading",
    metaDescription: "",
    tags: [
      "books",
      "reading"
    ],
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    createdAt:
      new Date().toISOString(),
    updatedAt:
      new Date().toISOString()
  },

  {
    id: 6,
    name: "Fitness Product Recommendation",
    category: "Sports & Fitness",
    status: "published",
    featured: false,
    badge: "",
    image: "",
    shortDescription:
      "A practical fitness product recommendation for regular training and movement.",
    highlights: [
      "Useful for regular exercise",
      "Simple to use",
      "Practical fitness support"
    ],
    intro: "",
    description: "",
    pros: [],
    cons: [],
    verdict: "",
    affiliateUrl: "https://example.com",
    ctaLabel: "Buy Now",
    merchantName: "",
    affiliateDisclosure: "",
    slug:
      "fitness-product-recommendation",
    canonical: "",
    metaTitle:
      "Fitness Product Recommendation",
    metaDescription: "",
    tags: [
      "sports",
      "fitness"
    ],
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    createdAt:
      new Date().toISOString(),
    updatedAt:
      new Date().toISOString()
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
   BASIC DOM
========================================= */

const adminSidebar =
  document.getElementById(
    "adminSidebar"
  );

const adminSidebarOverlay =
  document.getElementById(
    "adminSidebarOverlay"
  );

const adminMenuButton =
  document.getElementById(
    "adminMenuButton"
  );

const adminPageTitle =
  document.getElementById(
    "adminPageTitle"
  );

const adminPageSubtitle =
  document.getElementById(
    "adminPageSubtitle"
  );

const adminToast =
  document.getElementById(
    "adminToast"
  );


/* =========================================
   PRODUCT DOM
========================================= */

const productForm =
  document.getElementById(
    "productForm"
  );

const editingProductId =
  document.getElementById(
    "editingProductId"
  );

const productFormHeading =
  document.getElementById(
    "productFormHeading"
  );

const productImageUpload =
  document.getElementById(
    "productImageUpload"
  );

const productImageSelectButton =
  document.getElementById(
    "productImageSelectButton"
  );

const productImagePreview =
  document.getElementById(
    "productImagePreview"
  );

const productImageData =
  document.getElementById(
    "productImageData"
  );

const adminProductsList =
  document.getElementById(
    "adminProductsList"
  );

const dashboardProductTable =
  document.getElementById(
    "dashboardProductTable"
  );

const adminProductSearch =
  document.getElementById(
    "adminProductSearch"
  );

const adminCategoryFilter =
  document.getElementById(
    "adminCategoryFilter"
  );

const adminStatusFilter =
  document.getElementById(
    "adminStatusFilter"
  );

const cancelProductEditButton =
  document.getElementById(
    "cancelProductEditButton"
  );

const metaTitleCount =
  document.getElementById(
    "metaTitleCount"
  );

const metaDescriptionCount =
  document.getElementById(
    "metaDescriptionCount"
  );


/* =========================================
   CATEGORY DOM
========================================= */

const categoryForm =
  document.getElementById(
    "categoryForm"
  );

const editingCategoryId =
  document.getElementById(
    "editingCategoryId"
  );

const categoryFormHeading =
  document.getElementById(
    "categoryFormHeading"
  );

const categoryName =
  document.getElementById(
    "categoryName"
  );

const categorySlug =
  document.getElementById(
    "categorySlug"
  );

const categoryDescription =
  document.getElementById(
    "categoryDescription"
  );

const categoryStatus =
  document.getElementById(
    "categoryStatus"
  );

const categoryOrder =
  document.getElementById(
    "categoryOrder"
  );

const categoryImageUpload =
  document.getElementById(
    "categoryImageUpload"
  );

const categoryImageSelectButton =
  document.getElementById(
    "categoryImageSelectButton"
  );

const categoryImagePreview =
  document.getElementById(
    "categoryImagePreview"
  );

const categoryImageData =
  document.getElementById(
    "categoryImageData"
  );

const categoryImageWarning =
  document.getElementById(
    "categoryImageWarning"
  );

const adminCategoriesList =
  document.getElementById(
    "adminCategoriesList"
  );

const cancelCategoryEditButton =
  document.getElementById(
    "cancelCategoryEditButton"
  );


/* =========================================
   HOMEPAGE DOM
========================================= */

const homepageContentForm =
  document.getElementById(
    "homepageContentForm"
  );

const homepagePromo1ImageUpload =
  document.getElementById(
    "homepagePromo1ImageUpload"
  );

const homepagePromo1ImageButton =
  document.getElementById(
    "homepagePromo1ImageButton"
  );

const homepagePromo1ImagePreview =
  document.getElementById(
    "homepagePromo1ImagePreview"
  );

const homepagePromo1ImageData =
  document.getElementById(
    "homepagePromo1ImageData"
  );

const homepagePromo1ImageWarning =
  document.getElementById(
    "homepagePromo1ImageWarning"
  );


const homepagePromo2ImageUpload =
  document.getElementById(
    "homepagePromo2ImageUpload"
  );

const homepagePromo2ImageButton =
  document.getElementById(
    "homepagePromo2ImageButton"
  );

const homepagePromo2ImagePreview =
  document.getElementById(
    "homepagePromo2ImagePreview"
  );

const homepagePromo2ImageData =
  document.getElementById(
    "homepagePromo2ImageData"
  );

const homepagePromo2ImageWarning =
  document.getElementById(
    "homepagePromo2ImageWarning"
  );


const homepagePromo3ImageUpload =
  document.getElementById(
    "homepagePromo3ImageUpload"
  );

const homepagePromo3ImageButton =
  document.getElementById(
    "homepagePromo3ImageButton"
  );

const homepagePromo3ImagePreview =
  document.getElementById(
    "homepagePromo3ImagePreview"
  );

const homepagePromo3ImageData =
  document.getElementById(
    "homepagePromo3ImageData"
  );

const homepagePromo3ImageWarning =
  document.getElementById(
    "homepagePromo3ImageWarning"
  );


/* =========================================
   BANNER DOM
========================================= */

const heroBannerUpload =
  document.getElementById(
    "heroBannerUpload"
  );

const heroBannerSelectButton =
  document.getElementById(
    "heroBannerSelectButton"
  );

const heroBannerPreview =
  document.getElementById(
    "heroBannerPreview"
  );

const heroBannerData =
  document.getElementById(
    "heroBannerData"
  );

const heroBannerWarning =
  document.getElementById(
    "heroBannerWarning"
  );

const promoBannerUpload =
  document.getElementById(
    "promoBannerUpload"
  );

const promoBannerSelectButton =
  document.getElementById(
    "promoBannerSelectButton"
  );

const promoBannerPreview =
  document.getElementById(
    "promoBannerPreview"
  );

const promoBannerData =
  document.getElementById(
    "promoBannerData"
  );

const promoBannerWarning =
  document.getElementById(
    "promoBannerWarning"
  );

const saveBannerSettingsButton =
  document.getElementById(
    "saveBannerSettingsButton"
  );


/* =========================================
   PAGE CONFIG
========================================= */

const PAGE_CONFIG = {

  dashboardPage: {
    title: "Dashboard",
    subtitle:
      "Manage Kinar Aage content and affiliate products."
  },

  productsPage: {
    title: "Products",
    subtitle:
      "Manage all affiliate products and recommendations."
  },

  createProductPage: {
    title: "Add Product",
    subtitle:
      "Create or edit affiliate product content."
  },

  categoriesPage: {
    title: "Categories",
    subtitle:
      "Manage category names, images, descriptions and display order."
  },

  homepagePage: {
    title: "Homepage",
    subtitle:
      "Manage homepage text, promotional content and footer settings."
  },

  bannersPage: {
    title: "Banners",
    subtitle:
      "Manage homepage hero and promotional visuals."
  },

  seoPage: {
    title: "Site SEO",
    subtitle:
      "Manage default search and social metadata."
  },

  settingsPage: {
    title: "Settings",
    subtitle:
      "Manage general Kinar Aage website settings."
  }

};


/* =========================================
   HELPERS
========================================= */

function getStoredData(
  key,
  fallback
) {

  try {

    const raw =
      localStorage.getItem(
        key
      );

    if (!raw) {
      return fallback;
    }

    return JSON.parse(
      raw
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
  value
) {

  localStorage.setItem(
    key,
    JSON.stringify(
      value
    )
  );

}


function escapeHtml(
  value = ""
) {

  return String(
    value
  )
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function getValue(
  id
) {

  return (
    document.getElementById(
      id
    )?.value ||
    ""
  ).trim();

}


function setValue(
  id,
  value = ""
) {

  const element =
    document.getElementById(
      id
    );

  if (element) {

    element.value =
      value ?? "";

  }

}


function linesToArray(
  value
) {

  return String(
    value || ""
  )
    .split(/\r?\n/)
    .map(
      item =>
        item
          .replace(
            /^[-•*]\s*/,
            ""
          )
          .trim()
    )
    .filter(Boolean);

}


function arrayToLines(
  value
) {

  return Array.isArray(
    value
  )
    ? value.join("\n")
    : "";

}


function tagsToArray(
  value
) {

  return String(
    value || ""
  )
    .split(",")
    .map(
      item =>
        item.trim()
    )
    .filter(Boolean);

}


function arrayToTags(
  value
) {

  return Array.isArray(
    value
  )
    ? value.join(", ")
    : "";

}


function createSlug(
  text = ""
) {

  return String(
    text
  )
    .normalize("NFKD")
    .toLowerCase()
    .trim()
    .replace(
      /[^\p{L}\p{N}\s-]/gu,
      ""
    )
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

}


function generateId() {

  return (
    Date.now().toString() +
    Math.random()
      .toString(16)
      .slice(2)
  );

}


function showAdminToast(
  message
) {

  if (!adminToast) {
    return;
  }

  adminToast.textContent =
    message;

  adminToast.classList.add(
    "show"
  );

  clearTimeout(
    showAdminToast.timer
  );

  showAdminToast.timer =
    setTimeout(
      function() {

        adminToast.classList.remove(
          "show"
        );

      },
      2200
    );

}

/* =========================================
   PRODUCTS STORAGE
========================================= */

function getProducts() {

  let products =
    getStoredData(
      PRODUCTS_KEY,
      null
    );

  if (
    !Array.isArray(
      products
    )
  ) {

    products =
      INITIAL_PRODUCTS;

    saveStoredData(
      PRODUCTS_KEY,
      products
    );

  }

  return products;

}


function saveProducts(
  products
) {

  saveStoredData(
    PRODUCTS_KEY,
    products
  );

}


/* =========================================
   CATEGORIES STORAGE
========================================= */

function getCategories() {

  let categories =
    getStoredData(
      CATEGORIES_KEY,
      null
    );

  if (
    !Array.isArray(
      categories
    )
  ) {

    categories =
      INITIAL_CATEGORIES;

    saveStoredData(
      CATEGORIES_KEY,
      categories
    );

  }

  return categories
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


function saveCategories(
  categories
) {

  saveStoredData(
    CATEGORIES_KEY,
    categories
  );

}


/* =========================================
   NAVIGATION
========================================= */

function openAdminPage(
  pageId
) {

  document
    .querySelectorAll(
      ".admin-page"
    )
    .forEach(
      page => {

        page.classList.toggle(
          "active",
          page.id === pageId
        );

      }
    );


  document
    .querySelectorAll(
      ".admin-nav-item"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.page ===
            pageId
        );

      }
    );


  const config =
    PAGE_CONFIG[
      pageId
    ];


  if (config) {

    if (
      adminPageTitle
    ) {

      adminPageTitle.textContent =
        config.title;

    }


    if (
      adminPageSubtitle
    ) {

      adminPageSubtitle.textContent =
        config.subtitle;

    }

  }

localStorage.setItem(
  "kinarAageAdminActivePage",
  pageId
);

  closeAdminSidebar();

}


document
  .querySelectorAll(
    "[data-page]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        function() {

          openAdminPage(
            button.dataset.page
          );

        }
      );

    }
  );


document
  .querySelectorAll(
    "[data-open-page]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        function() {

          openAdminPage(
            button.dataset.openPage
          );

        }
      );

    }
  );


function closeAdminSidebar() {

  adminSidebar
    ?.classList.remove(
      "open"
    );

  adminSidebarOverlay
    ?.classList.remove(
      "show"
    );

}


adminMenuButton
  ?.addEventListener(
    "click",
    function() {

      adminSidebar
        ?.classList.toggle(
          "open"
        );

      adminSidebarOverlay
        ?.classList.toggle(
          "show"
        );

    }
  );


adminSidebarOverlay
  ?.addEventListener(
    "click",
    closeAdminSidebar
  );


/* =========================================
   IMAGE HELPERS
========================================= */

function showImagePreview(
  container,
  imageSource,
  emptyText =
    "No image selected"
) {

  if (!container) {
    return;
  }


  if (!imageSource) {

    container.innerHTML =
      `
        <i data-lucide="image"></i>
        <span>
          ${escapeHtml(
            emptyText
          )}
        </span>
      `;


    if (
      typeof lucide !==
      "undefined"
    ) {

      lucide.createIcons();

    }


    return;

  }


  container.innerHTML =
    `
      <img
        src="${escapeHtml(
          imageSource
        )}"
        alt="Preview"
      >
    `;

}


function setupImageUpload(
  input,
  button,
  preview,
  hiddenInput,
  warning,
  warningDisplayMode =
    "hidden"
) {

  button
    ?.addEventListener(
      "click",
      function() {

        input?.click();

      }
    );


  input
    ?.addEventListener(
      "change",
      function() {

        const file =
          input.files?.[0];


        if (!file) {
          return;
        }


        if (warning) {

          warning.textContent =
            "";

          if (
            warningDisplayMode ===
            "style"
          ) {

            warning.style.display =
              "none";

          }

          else {

            warning.hidden =
              true;

          }

        }


        if (
          !file.type.startsWith(
            "image/"
          )
        ) {

          if (warning) {

            warning.textContent =
              "Please select a valid image file.";


            if (
              warningDisplayMode ===
              "style"
            ) {

              warning.style.display =
                "block";

            }

            else {

              warning.hidden =
                false;

            }

          }


          input.value =
            "";

          return;

        }


        if (
          file.size >
          2 * 1024 * 1024
        ) {

          if (warning) {

            warning.textContent =
              "Image must be 2 MB or smaller.";


            if (
              warningDisplayMode ===
              "style"
            ) {

              warning.style.display =
                "block";

            }

            else {

              warning.hidden =
                false;

            }

          }

          else {

            showAdminToast(
              "Image must be 2 MB or smaller."
            );

          }


          input.value =
            "";

          return;

        }


        const reader =
          new FileReader();


        reader.onload =
          function(event) {

            if (
              hiddenInput
            ) {

              hiddenInput.value =
                event.target.result;

            }


            showImagePreview(
              preview,
              event.target.result
            );

          };


        reader.readAsDataURL(
          file
        );

      }
    );

}
/* =========================================
   PRODUCT IMAGE
========================================= */

productImageSelectButton
  ?.addEventListener(
    "click",
    function() {

      productImageUpload?.click();

    }
  );


productImageUpload
  ?.addEventListener(
    "change",
    async function() {

      const file =
        productImageUpload.files?.[0];


      if (!file) {
        return;
      }


      if (
        !file.type.startsWith(
          "image/"
        )
      ) {

        showAdminToast(
          "Please select a valid image file."
        );

        productImageUpload.value =
          "";

        return;

      }


      if (
        file.size >
        2 * 1024 * 1024
      ) {

        showAdminToast(
          "Image must be 2 MB or smaller."
        );

        productImageUpload.value =
          "";

        return;

      }


      try {

        productImageSelectButton.disabled =
          true;


        showAdminToast(
          "Uploading product image..."
        );


        const cloudinaryModule =
          await import(
            "./cloudinary-upload.js"
          );


        const result =
          await cloudinaryModule
            .uploadImageToCloudinary(
              file
            );


        if (
          !result?.url
        ) {

          throw new Error(
            "Cloudinary did not return an image URL."
          );

        }


        if (
          productImageData
        ) {

          productImageData.value =
            result.url;

        }


        showImagePreview(
          productImagePreview,
          result.url
        );


        showAdminToast(
          "Product image uploaded successfully."
        );

      }

      catch (error) {

        console.error(
          "Cloudinary product image upload error:",
          error
        );


        showAdminToast(
          "Product image upload failed."
        );

      }

      finally {

        productImageSelectButton.disabled =
          false;

        productImageUpload.value =
          "";

      }

    }
  );


/* =========================================
   PRODUCT FORM
========================================= */

function resetProductForm() {

  productForm?.reset();


  if (
    editingProductId
  ) {

    editingProductId.value =
      "";

  }


  if (
    productImageData
  ) {

    productImageData.value =
      "";

  }


  if (
    productFormHeading
  ) {

    productFormHeading.textContent =
      "Add New Product";

  }


  setValue(
    "productStatus",
    "published"
  );

  setValue(
    "productFeatured",
    "false"
  );

  setValue(
    "productCtaLabel",
    "Buy Now"
  );


  showImagePreview(
    productImagePreview,
    "",
    "No image selected"
  );

if (
  productSlugInput
) {

  delete productSlugInput
    .dataset
    .manual;

}
  updateMetaCounters();

}

/* =========================================
   PRODUCT AUTO SLUG
========================================= */

const productNameInput =
  document.getElementById(
    "productName"
  );

const productSlugInput =
  document.getElementById(
    "productSlug"
  );


productNameInput
  ?.addEventListener(
    "input",
    function() {

      if (
        !productSlugInput
      ) {
        return;
      }


      if (
        productSlugInput
          .dataset
          .manual ===
        "true"
      ) {
        return;
      }


      productSlugInput.value =
        createSlug(
          productNameInput.value
        );

    }
  );


productSlugInput
  ?.addEventListener(
    "input",
    function() {

      if (
        productSlugInput.value
          .trim()
      ) {

        productSlugInput.dataset.manual =
          "true";

      }

      else {

        delete productSlugInput
          .dataset
          .manual;

      }

    }
  );

function collectProductFormData() {

  const existingId =
    editingProductId
      ?.value ||
    "";


  return {

    id:
      existingId ||
      generateId(),

    name:
      getValue(
        "productName"
      ),

    category:
      getValue(
        "productCategory"
      ),

    status:
      getValue(
        "productStatus"
      ) ||
      "published",

    featured:
      getValue(
        "productFeatured"
      ) ===
      "true",

    badge:
      getValue(
        "productBadge"
      ),

    image:
      productImageData
        ?.value ||
      "",

    shortDescription:
      getValue(
        "productShortDescription"
      ),

    highlights:
      linesToArray(
        getValue(
          "productHighlights"
        )
      ),

    intro:
      getValue(
        "productIntro"
      ),

    description:
      getValue(
        "productDescription"
      ),

    pros:
      linesToArray(
        getValue(
          "productPros"
        )
      ),

    cons:
      linesToArray(
        getValue(
          "productCons"
        )
      ),

    verdict:
      getValue(
        "productVerdict"
      ),

    affiliateUrl:
      getValue(
        "productAffiliateUrl"
      ),

    ctaLabel:
      getValue(
        "productCtaLabel"
      ) ||
      "Buy Now",

    merchantName:
      getValue(
        "productMerchantName"
      ),

    affiliateDisclosure:
      getValue(
        "productAffiliateDisclosure"
      ),

    slug:
      getValue(
        "productSlug"
      ) ||
      createSlug(
        getValue(
          "productName"
        )
      ),

    canonical:
      getValue(
        "productCanonical"
      ),

    metaTitle:
      getValue(
        "productMetaTitle"
      ),

    metaDescription:
      getValue(
        "productMetaDescription"
      ),

    tags:
      tagsToArray(
        getValue(
          "productTags"
        )
      ),

    ogTitle:
      getValue(
        "productOgTitle"
      ),

    ogImage:
      getValue(
        "productOgImage"
      ),

    ogDescription:
      getValue(
        "productOgDescription"
      )

  };

}


productForm
  ?.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const newData =
        collectProductFormData();


      if (
        !newData.name ||
        !newData.category ||
        !newData.affiliateUrl
      ) {

        showAdminToast(
          "Product name, category and affiliate URL are required."
        );

        return;

      }


      let products =
        getProducts();


      const existingIndex =
        products.findIndex(
          product =>
            String(
              product.id
            ) ===
            String(
              newData.id
            )
        );


      if (
        existingIndex >= 0
      ) {

        const oldProduct =
          products[
            existingIndex
          ];


        products[
          existingIndex
        ] = {

          ...oldProduct,
          ...newData,

          createdAt:
            oldProduct.createdAt ||
            new Date()
              .toISOString(),

          updatedAt:
            new Date()
              .toISOString()

        };


        showAdminToast(
          "Product updated."
        );

      }

      else {

        products.unshift({

          ...newData,

          createdAt:
            new Date()
              .toISOString(),

          updatedAt:
            new Date()
              .toISOString()

        });


        showAdminToast(
          "Product added."
        );

      }


      saveProducts(
        products
      );


      try {

        const firebaseModule =
          await import(
            "./firebase-db.js"
          );


        const savedProduct =
          products.find(
            product =>
              String(
                product.id
              ) ===
              String(
                newData.id
              )
          );


        if (savedProduct) {

          const firebaseProduct = {

            ...savedProduct,

            image:
              String(
                savedProduct.image ||
                ""
              )
                .startsWith(
                  "data:"
                )
                ? ""
                : (
                    savedProduct.image ||
                    ""
                  )

          };


          await firebaseModule
            .saveProductToFirestore(
              firebaseProduct
            );

        }

      }

      catch (error) {

        console.error(
          "Firebase product save error:",
          error
        );


        showAdminToast(
          "Product saved locally, but Firebase save failed."
        );

      }


      resetProductForm();

      renderAdminProducts();

      updateDashboard();

      openAdminPage(
        "productsPage"
      );

    }
  );


cancelProductEditButton
  ?.addEventListener(
    "click",
    function() {

      resetProductForm();

      openAdminPage(
        "productsPage"
      );

    }
  );


function editProduct(
  productId
) {

  const product =
    getProducts()
      .find(
        item =>
          String(
            item.id
          ) ===
          String(
            productId
          )
      );


  if (!product) {
    return;
  }


  editingProductId.value =
    product.id;


  productFormHeading.textContent =
    "Edit Product";


  setValue(
    "productName",
    product.name
  );

  renderCategorySelects(
    product.category
  );

  setValue(
    "productCategory",
    product.category
  );

  setValue(
    "productStatus",
    product.status ||
    "published"
  );

  setValue(
    "productFeatured",
    product.featured
      ? "true"
      : "false"
  );

  setValue(
    "productBadge",
    product.badge
  );


  productImageData.value =
    product.image ||
    "";


  showImagePreview(
    productImagePreview,
    product.image ||
    ""
  );


  setValue(
    "productShortDescription",
    product.shortDescription
  );

  setValue(
    "productHighlights",
    arrayToLines(
      product.highlights
    )
  );

  setValue(
    "productIntro",
    product.intro
  );

  setValue(
    "productDescription",
    product.description
  );

  setValue(
    "productPros",
    arrayToLines(
      product.pros
    )
  );

  setValue(
    "productCons",
    arrayToLines(
      product.cons
    )
  );

  setValue(
    "productVerdict",
    product.verdict
  );

  setValue(
    "productAffiliateUrl",
    product.affiliateUrl
  );

  setValue(
    "productCtaLabel",
    product.ctaLabel ||
    "Buy Now"
  );

  setValue(
    "productMerchantName",
    product.merchantName
  );

  setValue(
    "productAffiliateDisclosure",
    product.affiliateDisclosure
  );

  setValue(
    "productSlug",
    product.slug
  );

  if (
  productSlugInput
) {

  delete productSlugInput
    .dataset
    .manual;

}

  setValue(
    "productCanonical",
    product.canonical
  );

  setValue(
    "productMetaTitle",
    product.metaTitle
  );

  setValue(
    "productMetaDescription",
    product.metaDescription
  );

  setValue(
    "productTags",
    arrayToTags(
      product.tags
    )
  );

  setValue(
    "productOgTitle",
    product.ogTitle
  );

  setValue(
    "productOgImage",
    product.ogImage
  );

  setValue(
    "productOgDescription",
    product.ogDescription
  );


  updateMetaCounters();


  openAdminPage(
    "createProductPage"
  );

}


async function deleteProduct(
  productId
) {

  const confirmed =
    window.confirm(
      "Delete this product permanently?"
    );


  if (!confirmed) {
    return;
  }


  try {

    const firebaseModule =
      await import(
        "./firebase-db.js"
      );


    await firebaseModule
      .deleteProductFromFirestore(
        productId
      );


    const products =
      getProducts()
        .filter(
          product =>
            String(
              product.id
            ) !==
            String(
              productId
            )
        );


    saveProducts(
      products
    );


    renderAdminProducts();

    updateDashboard();


    showAdminToast(
      "Product deleted."
    );

  }

  catch (error) {

    console.error(
      "Product delete error:",
      error
    );


    showAdminToast(
      "Product delete failed."
    );

  }

}


/* =========================================
   CATEGORY SELECTS
========================================= */

function renderCategorySelects(
  forcedProductCategory = ""
) {

  const allCategories =
    getCategories();


  const activeCategories =
    allCategories.filter(
      category =>
        category.status !==
        "inactive"
    );


  const productCategory =
    document.getElementById(
      "productCategory"
    );


  if (
    productCategory
  ) {

    const currentValue =
      forcedProductCategory ||
      productCategory.value;


    let options =
      activeCategories.slice();


    if (
      currentValue &&
      !options.some(
        item =>
          item.name ===
          currentValue
      )
    ) {

      const existingCategory =
        allCategories.find(
          item =>
            item.name ===
            currentValue
        );


      if (
        existingCategory
      ) {

        options.push(
          existingCategory
        );

      }

    }


    productCategory.innerHTML =
      `
        <option value="">
          Select Category
        </option>
      ` +
      options
        .map(
          category => `
            <option
              value="${escapeHtml(
                category.name
              )}"
            >
              ${escapeHtml(
                category.name
              )}
              ${
                category.status ===
                "inactive"
                  ? " (Inactive)"
                  : ""
              }
            </option>
          `
        )
        .join("");


    if (currentValue) {

      productCategory.value =
        currentValue;

    }

  }


  if (
    adminCategoryFilter
  ) {

    const currentFilter =
      adminCategoryFilter.value;


    adminCategoryFilter.innerHTML =
      `
        <option value="">
          All Categories
        </option>
      ` +
      activeCategories
        .map(
          category => `
            <option
              value="${escapeHtml(
                category.name
              )}"
            >
              ${escapeHtml(
                category.name
              )}
            </option>
          `
        )
        .join("");


    if (
      activeCategories.some(
        category =>
          category.name ===
          currentFilter
      )
    ) {

      adminCategoryFilter.value =
        currentFilter;

    }

  }

}


/* =========================================
   PRODUCT LIST
========================================= */

function renderAdminProducts() {

  if (
    !adminProductsList
  ) {
    return;
  }


  const search =
    String(
      adminProductSearch
        ?.value ||
      ""
    )
      .toLowerCase()
      .trim();


  const category =
    adminCategoryFilter
      ?.value ||
    "";


  const status =
    adminStatusFilter
      ?.value ||
    "";


  const products =
    getProducts()
      .filter(
        product => {

          const matchesSearch =
            !search ||
            String(
              product.name ||
              ""
            )
              .toLowerCase()
              .includes(
                search
              ) ||
            String(
              product.category ||
              ""
            )
              .toLowerCase()
              .includes(
                search
              );


          const matchesCategory =
            !category ||
            product.category ===
              category;


          const matchesStatus =
            !status ||
            product.status ===
              status;


          return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
          );

        }
      );


  if (
    !products.length
  ) {

    adminProductsList.innerHTML =
      `
        <div class="admin-empty-state">
          No products found.
        </div>
      `;

    return;

  }


  adminProductsList.innerHTML =
    products
      .map(
        product => {

          const image =
            product.image
              ? `
                  <img
                    src="${escapeHtml(
                      product.image
                    )}"
                    alt=""
                  >
                `
              : `
                  <div class="admin-product-placeholder">
                    ${escapeHtml(
                      String(
                        product.name ||
                        "K"
                      )
                        .charAt(0)
                        .toUpperCase()
                    )}
                  </div>
                `;


          return `
            <article class="admin-product-row">

              <div class="admin-product-thumb">
                ${image}
              </div>

              <div class="admin-product-main">

                <strong>
                  ${escapeHtml(
                    product.name ||
                    "Untitled Product"
                  )}
                </strong>

                <span>
                  ${escapeHtml(
                    product.category ||
                    "No Category"
                  )}
                </span>

              </div>

              <div class="admin-product-status">

                <span class="status-badge ${
                  product.status ===
                  "draft"
                    ? "draft"
                    : "published"
                }">
                  ${escapeHtml(
                    product.status ||
                    "published"
                  )}
                </span>

              </div>

              <div class="admin-product-actions">

                <button
                  type="button"
                  data-edit-product="${escapeHtml(
                    product.id
                  )}"
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="danger"
                  data-delete-product="${escapeHtml(
                    product.id
                  )}"
                >
                  Delete
                </button>

              </div>

            </article>
          `;

        }
      )
      .join("");


  adminProductsList
    .querySelectorAll(
      "[data-edit-product]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          function() {

            editProduct(
              button.dataset
                .editProduct
            );

          }
        );

      }
    );


  adminProductsList
    .querySelectorAll(
      "[data-delete-product]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          function() {

            deleteProduct(
              button.dataset
                .deleteProduct
            );

          }
        );

      }
    );

}


adminProductSearch
  ?.addEventListener(
    "input",
    renderAdminProducts
  );

adminCategoryFilter
  ?.addEventListener(
    "change",
    renderAdminProducts
  );

adminStatusFilter
  ?.addEventListener(
    "change",
    renderAdminProducts
  );


/* =========================================
   DASHBOARD
========================================= */

function updateDashboard() {

  const products =
    getProducts();


  const total =
    products.length;

  const featured =
    products.filter(
      product =>
        product.featured
    ).length;

  const published =
    products.filter(
      product =>
        product.status !==
        "draft"
    ).length;

  const drafts =
    products.filter(
      product =>
        product.status ===
        "draft"
    ).length;


  const totalElement =
    document.getElementById(
      "dashboardTotalProducts"
    );

  const featuredElement =
    document.getElementById(
      "dashboardFeaturedProducts"
    );

  const publishedElement =
    document.getElementById(
      "dashboardPublishedProducts"
    );

  const draftsElement =
    document.getElementById(
      "dashboardDraftProducts"
    );


  if (totalElement) {
    totalElement.textContent =
      total;
  }

  if (featuredElement) {
    featuredElement.textContent =
      featured;
  }

  if (publishedElement) {
    publishedElement.textContent =
      published;
  }

  if (draftsElement) {
    draftsElement.textContent =
      drafts;
  }


  if (
    dashboardProductTable
  ) {

    const latest =
      products
        .slice()
        .sort(
          function(a, b) {

            return (
              new Date(
                b.updatedAt ||
                b.createdAt ||
                0
              ) -
              new Date(
                a.updatedAt ||
                a.createdAt ||
                0
              )
            );

          }
        )
        .slice(
          0,
          5
        );


    dashboardProductTable.innerHTML =
      latest.length
        ? latest
            .map(
              product => `
                <div class="dashboard-product-row">

                  <strong>
                    ${escapeHtml(
                      product.name ||
                      "Untitled Product"
                    )}
                  </strong>

                  <span>
                    ${escapeHtml(
                      product.category ||
                      "No Category"
                    )}
                  </span>

                  <span>
                    ${escapeHtml(
                      product.status ||
                      "published"
                    )}
                  </span>

                </div>
              `
            )
            .join("")

        : `
            <div class="admin-empty-state">
              No products yet.
            </div>
          `;

  }

}


/* =========================================
   META COUNTERS
========================================= */

function updateMetaCounters() {

  const title =
    getValue(
      "productMetaTitle"
    );

  const description =
    getValue(
      "productMetaDescription"
    );


  if (
    metaTitleCount
  ) {

    metaTitleCount.textContent =
      title.length;

  }


  if (
    metaDescriptionCount
  ) {

    metaDescriptionCount.textContent =
      description.length;

  }

}


document
  .getElementById(
    "productMetaTitle"
  )
  ?.addEventListener(
    "input",
    updateMetaCounters
  );


document
  .getElementById(
    "productMetaDescription"
  )
  ?.addEventListener(
    "input",
    updateMetaCounters
  );


/* =========================================
   CATEGORY IMAGE
========================================= */

setupImageUpload(
  categoryImageUpload,
  categoryImageSelectButton,
  categoryImagePreview,
  categoryImageData,
  categoryImageWarning,
  "hidden"
);

/* =========================================
   RESET CATEGORY FORM
========================================= */

function resetCategoryForm() {

  categoryForm?.reset();


  if (
    editingCategoryId
  ) {

    editingCategoryId.value =
      "";

  }


  if (
    categoryImageData
  ) {

    categoryImageData.value =
      "";

  }


  if (
    categoryFormHeading
  ) {

    categoryFormHeading.textContent =
      "Add Category";

  }


  if (
    categoryStatus
  ) {

    categoryStatus.value =
      "active";

  }


  if (
    categoryOrder
  ) {

    const categories =
      getCategories();


    const highestOrder =
      categories.reduce(
        function(max, item) {

          return Math.max(
            max,
            Number(
              item.order || 0
            )
          );

        },
        0
      );


    categoryOrder.value =
      highestOrder + 1;

  }


  if (
    cancelCategoryEditButton
  ) {

    cancelCategoryEditButton.hidden =
      true;

  }


  if (
    categoryImageWarning
  ) {

    categoryImageWarning.hidden =
      true;

    categoryImageWarning.textContent =
      "";

  }


  if (
    categorySlug
  ) {

    delete categorySlug.dataset.manual;

  }


  showImagePreview(
    categoryImagePreview,
    "",
    "No category image selected"
  );

}


/* =========================================
   CATEGORY AUTO SLUG
========================================= */

categoryName
  ?.addEventListener(
    "input",
    function() {

      if (
        editingCategoryId
          ?.value
      ) {
        return;
      }


      if (
        categorySlug &&
        !categorySlug.dataset.manual
      ) {

        categorySlug.value =
          createSlug(
            categoryName.value
          );

      }

    }
  );


categorySlug
  ?.addEventListener(
    "input",
    function() {

      if (
        categorySlug.value
      ) {

        categorySlug.dataset.manual =
          "true";

      }

      else {

        delete categorySlug
          .dataset.manual;

      }

    }
  );


/* =========================================
   CATEGORY SAVE
========================================= */

categoryForm
  ?.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const name =
        categoryName
          ?.value
          .trim() ||
        "";


      if (!name) {

        showAdminToast(
          "Category name is required."
        );

        return;

      }


      const categoryId =
        editingCategoryId
          ?.value ||
        generateId();


      const slug =
        categorySlug
          ?.value
          .trim() ||
        createSlug(
          name
        );


      const newCategory = {

        id:
          categoryId,

        name,

        slug,

        description:
          categoryDescription
            ?.value
            .trim() ||
          "",

        image:
          categoryImageData
            ?.value ||
          "",

        status:
          categoryStatus
            ?.value ||
          "active",

        order:
          Number(
            categoryOrder
              ?.value ||
            999
          )

      };


      let categories =
        getCategories();


      const duplicateName =
        categories.some(
          item =>
            item.name
              .toLowerCase() ===
              name.toLowerCase() &&
            String(
              item.id
            ) !==
            String(
              categoryId
            )
        );


      if (
        duplicateName
      ) {

        showAdminToast(
          "A category with this name already exists."
        );

        return;

      }


      const duplicateSlug =
        categories.some(
          item =>
            String(
              item.slug ||
              ""
            )
              .toLowerCase() ===
              slug.toLowerCase() &&
            String(
              item.id
            ) !==
            String(
              categoryId
            )
        );


      if (
        duplicateSlug
      ) {

        showAdminToast(
          "This category slug is already in use."
        );

        return;

      }


      const existingIndex =
        categories.findIndex(
          item =>
            String(
              item.id
            ) ===
            String(
              categoryId
            )
        );


      if (
        existingIndex >= 0
      ) {

        const oldCategory =
          categories[
            existingIndex
          ];


        const oldName =
          oldCategory.name;


        categories[
          existingIndex
        ] = {

          ...oldCategory,
          ...newCategory,

          image:
            newCategory.image ||
            oldCategory.image ||
            ""

        };


       if (
  oldName !==
  name
) {

  const updatedProducts =
    [];


  const products =
    getProducts()
      .map(
        product => {

          if (
            product.category ===
            oldName
          ) {

            const updatedProduct = {

              ...product,

              category:
                name,

              updatedAt:
                new Date()
                  .toISOString()

            };


            updatedProducts.push(
              updatedProduct
            );


            return updatedProduct;

          }


          return product;

        }
      );


  try {

    const firebaseModule =
      await import(
        "./firebase-db.js"
      );


    for (
      const product
      of updatedProducts
    ) {

      await firebaseModule
        .saveProductToFirestore(
          product
        );

    }

  }

  catch (error) {

    console.error(
      "Category product sync error:",
      error
    );


    showAdminToast(
      "Category rename failed to sync products."
    );


    return;

  }


  saveProducts(
    products
  );

}


        showAdminToast(
          "Category updated."
        );

      }

      else {

        categories.push(
          newCategory
        );


        showAdminToast(
          "Category added."
        );

      }
try {

  const firebaseModule =
    await import(
      "./firebase-db.js"
    );


  await firebaseModule
    .saveCategoryToFirestore(
      newCategory
    );

}

catch (error) {

  console.error(
    "Category Firebase save error:",
    error
  );


  showAdminToast(
    "Category Firebase save failed."
  );

  return;

}

      saveCategories(
        categories
      );


      resetCategoryForm();

      renderCategories();

      renderCategorySelects();

      renderAdminProducts();

      updateDashboard();

    }
  );


cancelCategoryEditButton
  ?.addEventListener(
    "click",
    resetCategoryForm
  );


function editCategory(
  categoryId
) {

  const category =
    getCategories()
      .find(
        item =>
          String(
            item.id
          ) ===
          String(
            categoryId
          )
      );


  if (!category) {
    return;
  }


  editingCategoryId.value =
    category.id;

  categoryFormHeading.textContent =
    "Edit Category";

  categoryName.value =
    category.name ||
    "";

  categorySlug.value =
    category.slug ||
    "";

  categorySlug.dataset.manual =
    "true";

  categoryDescription.value =
    category.description ||
    "";

  categoryStatus.value =
    category.status ||
    "active";

  categoryOrder.value =
    Number(
      category.order ||
      1
    );

  categoryImageData.value =
    category.image ||
    "";


  showImagePreview(
    categoryImagePreview,
    category.image ||
    "",
    "No category image selected"
  );


  if (
    cancelCategoryEditButton
  ) {

    cancelCategoryEditButton.hidden =
      false;

  }


  openAdminPage(
    "categoriesPage"
  );


  categoryName?.focus();

}


async function deleteCategory(
  categoryId
) {

  const categories =
    getCategories();


  const category =
    categories.find(
      item =>
        String(
          item.id
        ) ===
        String(
          categoryId
        )
    );


  if (!category) {

    showAdminToast(
      "Category not found."
    );

    return;

  }


  let firebaseModule;

  let currentProducts =
    [];


  try {

    firebaseModule =
      await import(
        "./firebase-db.js"
      );


    const firebaseProducts =
      await firebaseModule
        .getProductsFromFirestore();


    currentProducts =
      Array.isArray(
        firebaseProducts
      )
        ? firebaseProducts
        : [];

  }

  catch (error) {

    console.error(
      "Category delete safety check error:",
      error
    );


    showAdminToast(
      "Could not verify category usage. Delete cancelled."
    );


    return;

  }


  const productsUsingCategory =
    currentProducts.filter(
      product =>
        product &&
        product.category ===
          category.name
    );


  if (
    productsUsingCategory.length
  ) {

    showAdminToast(
      `Cannot delete. ${productsUsingCategory.length} product(s) are using this category.`
    );


    return;

  }


  const confirmed =
    window.confirm(
      `Delete "${category.name}" category?`
    );


  if (!confirmed) {
    return;
  }


  try {

    await firebaseModule
      .deleteCategoryFromFirestore(
        categoryId
      );

  }

  catch (error) {

    console.error(
      "Category delete error:",
      error
    );


    showAdminToast(
      "Category delete failed."
    );


    return;

  }


  const updated =
    categories.filter(
      item =>
        String(
          item.id
        ) !==
        String(
          categoryId
        )
    );


  saveCategories(
    updated
  );


  renderCategories();

  renderCategorySelects();

  resetCategoryForm();


  showAdminToast(
    "Category deleted."
  );

}

/* =========================================
   CATEGORY LIST
========================================= */

function renderCategories() {

  if (
    !adminCategoriesList
  ) {
    return;
  }


  const categories =
    getCategories();


  if (
    !categories.length
  ) {

    adminCategoriesList.innerHTML =
      `
        <div class="admin-empty-state">
          No categories found.
        </div>
      `;

    return;

  }


  adminCategoriesList.innerHTML =
    categories
      .map(
        category => {

          const image =
            category.image
              ? `
                  <img
                    src="${escapeHtml(
                      category.image
                    )}"
                    alt="${escapeHtml(
                      category.name
                    )}"
                  >
                `
              : `
                  <div class="category-admin-placeholder">
                    ${escapeHtml(
                      String(
                        category.name ||
                        "C"
                      )
                        .charAt(0)
                        .toUpperCase()
                    )}
                  </div>
                `;


          return `
            <article class="admin-category-card">

              <div class="admin-category-card-image">
                ${image}
              </div>

              <div class="admin-category-card-content">

                <div class="admin-category-card-top">

                  <strong>
                    ${escapeHtml(
                      category.name
                    )}
                  </strong>

                  <span class="status-badge ${
                    category.status ===
                    "inactive"
                      ? "draft"
                      : "published"
                  }">
                    ${escapeHtml(
                      category.status ||
                      "active"
                    )}
                  </span>

                </div>

                <p>
                  ${escapeHtml(
                    category.description ||
                    "No description added."
                  )}
                </p>

                <small>
                  Order:
                  ${escapeHtml(
                    category.order ||
                    ""
                  )}
                  ·
                  ${escapeHtml(
                    category.slug ||
                    ""
                  )}
                </small>

              </div>

              <div class="admin-category-card-actions">

                <button
                  type="button"
                  data-edit-category="${escapeHtml(
                    category.id
                  )}"
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="danger"
                  data-delete-category="${escapeHtml(
                    category.id
                  )}"
                >
                  Delete
                </button>

              </div>

            </article>
          `;

        }
      )
      .join("");


  adminCategoriesList
    .querySelectorAll(
      "[data-edit-category]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          function() {

            editCategory(
              button.dataset
                .editCategory
            );

          }
        );

      }
    );


  adminCategoriesList
    .querySelectorAll(
      "[data-delete-category]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          function() {

            deleteCategory(
              button.dataset
                .deleteCategory
            );

          }
        );

      }
    );

}


/* =========================================
   HOMEPAGE IMAGE UPLOADS
========================================= */

setupImageUpload(
  homepagePromo1ImageUpload,
  homepagePromo1ImageButton,
  homepagePromo1ImagePreview,
  homepagePromo1ImageData,
  homepagePromo1ImageWarning,
  "hidden"
);

setupImageUpload(
  homepagePromo2ImageUpload,
  homepagePromo2ImageButton,
  homepagePromo2ImagePreview,
  homepagePromo2ImageData,
  homepagePromo2ImageWarning,
  "hidden"
);

setupImageUpload(
  homepagePromo3ImageUpload,
  homepagePromo3ImageButton,
  homepagePromo3ImagePreview,
  homepagePromo3ImageData,
  homepagePromo3ImageWarning,
  "hidden"
);


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
   LOAD HOMEPAGE CONTENT
========================================= */

function loadHomepageContent() {

  const data =
    getHomepageContent();


  /* TOP INFO */

  setValue(
    "homepageTopInfo1Icon",
    data.topInfo[0].icon
  );

  setValue(
    "homepageTopInfo1Text",
    data.topInfo[0].text
  );

  setValue(
    "homepageTopInfo2Icon",
    data.topInfo[1].icon
  );

  setValue(
    "homepageTopInfo2Text",
    data.topInfo[1].text
  );

  setValue(
    "homepageTopInfo3Icon",
    data.topInfo[2].icon
  );

  setValue(
    "homepageTopInfo3Text",
    data.topInfo[2].text
  );


  /* UTILITY */

  setValue(
    "homepageUtility1Icon",
    data.utilityItems[0].icon
  );

  setValue(
    "homepageUtility1Title",
    data.utilityItems[0].title
  );

  setValue(
    "homepageUtility1Subtitle",
    data.utilityItems[0].subtitle
  );

  setValue(
    "homepageUtility2Icon",
    data.utilityItems[1].icon
  );

  setValue(
    "homepageUtility2Title",
    data.utilityItems[1].title
  );

  setValue(
    "homepageUtility2Subtitle",
    data.utilityItems[1].subtitle
  );

  setValue(
    "homepageUtility3Icon",
    data.utilityItems[2].icon
  );

  setValue(
    "homepageUtility3Title",
    data.utilityItems[2].title
  );

  setValue(
    "homepageUtility3Subtitle",
    data.utilityItems[2].subtitle
  );


  /* HEADINGS */

  setValue(
    "homepageCategoriesTitle",
    data.categoriesTitle
  );

  setValue(
    "homepageCategoriesSubtitle",
    data.categoriesSubtitle
  );

  setValue(
    "homepageFeaturedTitle",
    data.featuredTitle
  );

  setValue(
    "homepageFeaturedSubtitle",
    data.featuredSubtitle
  );

  setValue(
    "homepageRecommendedTitle",
    data.recommendedTitle
  );

  setValue(
    "homepageRecommendedSubtitle",
    data.recommendedSubtitle
  );


  /* PROMOS */

  const promo1 =
    data.promos[0];

  const promo2 =
    data.promos[1];

  const promo3 =
    data.promos[2];


  setValue(
    "homepagePromo1Title",
    promo1.title
  );

  setValue(
    "homepagePromo1Subtitle",
    promo1.subtitle
  );

  setValue(
    "homepagePromo1ButtonText",
    promo1.buttonText
  );

  setValue(
    "homepagePromo1Link",
    promo1.link
  );


  if (
    homepagePromo1ImageData
  ) {

    homepagePromo1ImageData.value =
      promo1.image ||
      "";

  }


  showImagePreview(
    homepagePromo1ImagePreview,
    promo1.image ||
    "",
    "No image selected"
  );


  setValue(
    "homepagePromo2Title",
    promo2.title
  );

  setValue(
    "homepagePromo2Subtitle",
    promo2.subtitle
  );

  setValue(
    "homepagePromo2ButtonText",
    promo2.buttonText
  );

  setValue(
    "homepagePromo2Link",
    promo2.link
  );


  if (
    homepagePromo2ImageData
  ) {

    homepagePromo2ImageData.value =
      promo2.image ||
      "";

  }


  showImagePreview(
    homepagePromo2ImagePreview,
    promo2.image ||
    "",
    "No image selected"
  );


  setValue(
    "homepagePromo3Title",
    promo3.title
  );

  setValue(
    "homepagePromo3Subtitle",
    promo3.subtitle
  );

  setValue(
    "homepagePromo3ButtonText",
    promo3.buttonText
  );

  setValue(
    "homepagePromo3Link",
    promo3.link
  );


  if (
    homepagePromo3ImageData
  ) {

    homepagePromo3ImageData.value =
      promo3.image ||
      "";

  }


  showImagePreview(
    homepagePromo3ImagePreview,
    promo3.image ||
    "",
    "No image selected"
  );


  /* WHY */

  setValue(
    "homepageWhyTitle",
    data.why.title
  );

  setValue(
    "homepageWhySubtitle",
    data.why.subtitle
  );

  setValue(
    "homepageWhy1Icon",
    data.why.cards[0].icon
  );

  setValue(
    "homepageWhy1Title",
    data.why.cards[0].title
  );

  setValue(
    "homepageWhy1Description",
    data.why.cards[0].description
  );

  setValue(
    "homepageWhy2Icon",
    data.why.cards[1].icon
  );

  setValue(
    "homepageWhy2Title",
    data.why.cards[1].title
  );

  setValue(
    "homepageWhy2Description",
    data.why.cards[1].description
  );

  setValue(
    "homepageWhy3Icon",
    data.why.cards[2].icon
  );

  setValue(
    "homepageWhy3Title",
    data.why.cards[2].title
  );

  setValue(
    "homepageWhy3Description",
    data.why.cards[2].description
  );


  /* NEWSLETTER */

  setValue(
    "homepageNewsletterOverline",
    data.newsletter.overline
  );

  setValue(
    "homepageNewsletterTitle",
    data.newsletter.title
  );

  setValue(
    "homepageNewsletterDescription",
    data.newsletter.description
  );

  setValue(
    "homepageNewsletterPlaceholder",
    data.newsletter.placeholder
  );

  setValue(
    "homepageNewsletterButtonText",
    data.newsletter.buttonText
  );

  setValue(
    "homepageNewsletterNote",
    data.newsletter.note
  );


  /* TRUST */

  setValue(
    "homepageTrust1Title",
    data.trustItems[0].title
  );

  setValue(
    "homepageTrust1Subtitle",
    data.trustItems[0].subtitle
  );

  setValue(
    "homepageTrust2Title",
    data.trustItems[1].title
  );

  setValue(
    "homepageTrust2Subtitle",
    data.trustItems[1].subtitle
  );

  setValue(
    "homepageTrust3Title",
    data.trustItems[2].title
  );

  setValue(
    "homepageTrust3Subtitle",
    data.trustItems[2].subtitle
  );

  setValue(
    "homepageTrust4Title",
    data.trustItems[3].title
  );

  setValue(
    "homepageTrust4Subtitle",
    data.trustItems[3].subtitle
  );


  /* DISCLOSURE */

  setValue(
    "homepageAffiliateDisclosure",
    data.affiliateDisclosure
  );


  /* FOOTER */

  setValue(
    "homepageFooterDescription",
    data.footer.description
  );

  setValue(
    "homepageFooterCommunityTitle",
    data.footer.communityTitle
  );

  setValue(
    "homepageFooterCommunityText",
    data.footer.communityText
  );

  setValue(
    "homepageFooterTagline",
    data.footer.tagline
  );

  setValue(
    "homepageFacebookUrl",
    data.footer.social.facebook
  );

  setValue(
    "homepageInstagramUrl",
    data.footer.social.instagram
  );

  setValue(
    "homepageYoutubeUrl",
    data.footer.social.youtube
  );

  setValue(
    "homepageXUrl",
    data.footer.social.x
  );

  setValue(
    "homepagePinterestUrl",
    data.footer.social.pinterest
  );

}

/* =========================================
   SAVE HOMEPAGE CONTENT
========================================= */

homepageContentForm
  ?.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const oldData =
        getHomepageContent();


      const data = {

        topInfo: [

          {
            icon:
              getValue(
                "homepageTopInfo1Icon"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .topInfo[0].icon,

            text:
              getValue(
                "homepageTopInfo1Text"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .topInfo[0].text
          },

          {
            icon:
              getValue(
                "homepageTopInfo2Icon"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .topInfo[1].icon,

            text:
              getValue(
                "homepageTopInfo2Text"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .topInfo[1].text
          },

          {
            icon:
              getValue(
                "homepageTopInfo3Icon"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .topInfo[2].icon,

            text:
              getValue(
                "homepageTopInfo3Text"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .topInfo[2].text
          }

        ],


        utilityItems: [

          {
            icon:
              getValue(
                "homepageUtility1Icon"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[0].icon,

            title:
              getValue(
                "homepageUtility1Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[0].title,

            subtitle:
              getValue(
                "homepageUtility1Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[0].subtitle
          },

          {
            icon:
              getValue(
                "homepageUtility2Icon"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[1].icon,

            title:
              getValue(
                "homepageUtility2Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[1].title,

            subtitle:
              getValue(
                "homepageUtility2Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[1].subtitle
          },

          {
            icon:
              getValue(
                "homepageUtility3Icon"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[2].icon,

            title:
              getValue(
                "homepageUtility3Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[2].title,

            subtitle:
              getValue(
                "homepageUtility3Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .utilityItems[2].subtitle
          }

        ],


        categoriesTitle:
          getValue(
            "homepageCategoriesTitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .categoriesTitle,

        categoriesSubtitle:
          getValue(
            "homepageCategoriesSubtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .categoriesSubtitle,

        featuredTitle:
          getValue(
            "homepageFeaturedTitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .featuredTitle,

        featuredSubtitle:
          getValue(
            "homepageFeaturedSubtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .featuredSubtitle,

        recommendedTitle:
          getValue(
            "homepageRecommendedTitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .recommendedTitle,

        recommendedSubtitle:
          getValue(
            "homepageRecommendedSubtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .recommendedSubtitle,


        promos: [

          {
            image:
              homepagePromo1ImageData
                ?.value ||
              oldData.promos[0].image ||
              "",

            title:
              getValue(
                "homepagePromo1Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[0].title,

            subtitle:
              getValue(
                "homepagePromo1Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[0].subtitle,

            buttonText:
              getValue(
                "homepagePromo1ButtonText"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[0].buttonText,

            link:
              getValue(
                "homepagePromo1Link"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[0].link
          },

          {
            image:
              homepagePromo2ImageData
                ?.value ||
              oldData.promos[1].image ||
              "",

            title:
              getValue(
                "homepagePromo2Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[1].title,

            subtitle:
              getValue(
                "homepagePromo2Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[1].subtitle,

            buttonText:
              getValue(
                "homepagePromo2ButtonText"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[1].buttonText,

            link:
              getValue(
                "homepagePromo2Link"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[1].link
          },

          {
            image:
              homepagePromo3ImageData
                ?.value ||
              oldData.promos[2].image ||
              "",

            title:
              getValue(
                "homepagePromo3Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[2].title,

            subtitle:
              getValue(
                "homepagePromo3Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[2].subtitle,

            buttonText:
              getValue(
                "homepagePromo3ButtonText"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[2].buttonText,

            link:
              getValue(
                "homepagePromo3Link"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .promos[2].link
          }

        ],


        why: {

          title:
            getValue(
              "homepageWhyTitle"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.title,

          subtitle:
            getValue(
              "homepageWhySubtitle"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.subtitle,

          cards: [

            {
              icon:
                getValue(
                  "homepageWhy1Icon"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[0].icon,

              title:
                getValue(
                  "homepageWhy1Title"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[0].title,

              description:
                getValue(
                  "homepageWhy1Description"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[0].description
            },

            {
              icon:
                getValue(
                  "homepageWhy2Icon"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[1].icon,

              title:
                getValue(
                  "homepageWhy2Title"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[1].title,

              description:
                getValue(
                  "homepageWhy2Description"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[1].description
            },

            {
              icon:
                getValue(
                  "homepageWhy3Icon"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[2].icon,

              title:
                getValue(
                  "homepageWhy3Title"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[2].title,

              description:
                getValue(
                  "homepageWhy3Description"
                ) ||
                DEFAULT_HOMEPAGE_CONTENT
                  .why.cards[2].description
            }

          ]

        },


        newsletter: {

          overline:
            getValue(
              "homepageNewsletterOverline"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .newsletter.overline,

          title:
            getValue(
              "homepageNewsletterTitle"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .newsletter.title,

          description:
            getValue(
              "homepageNewsletterDescription"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .newsletter.description,

          placeholder:
            getValue(
              "homepageNewsletterPlaceholder"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .newsletter.placeholder,

          buttonText:
            getValue(
              "homepageNewsletterButtonText"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .newsletter.buttonText,

          note:
            getValue(
              "homepageNewsletterNote"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .newsletter.note

        },


        trustItems: [

          {
            title:
              getValue(
                "homepageTrust1Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .trustItems[0].title,

            subtitle:
              getValue(
                "homepageTrust1Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .trustItems[0].subtitle
          },

          {
            title:
              getValue(
                "homepageTrust2Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .trustItems[1].title,

            subtitle:
              getValue(
                "homepageTrust2Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .trustItems[1].subtitle
          },

          {
            title:
              getValue(
                "homepageTrust3Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .trustItems[2].title,

            subtitle:
              getValue(
                "homepageTrust3Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .trustItems[2].subtitle
          },

          {
            title:
              getValue(
                "homepageTrust4Title"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .trustItems[3].title,

            subtitle:
              getValue(
                "homepageTrust4Subtitle"
              ) ||
              DEFAULT_HOMEPAGE_CONTENT
                .trustItems[3].subtitle
          }

        ],


        affiliateDisclosure:
          getValue(
            "homepageAffiliateDisclosure"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .affiliateDisclosure,


        footer: {

          description:
            getValue(
              "homepageFooterDescription"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .footer.description,

          communityTitle:
            getValue(
              "homepageFooterCommunityTitle"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .footer.communityTitle,

          communityText:
            getValue(
              "homepageFooterCommunityText"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .footer.communityText,

          tagline:
            getValue(
              "homepageFooterTagline"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .footer.tagline,

          social: {

            facebook:
              getValue(
                "homepageFacebookUrl"
              ),

            instagram:
              getValue(
                "homepageInstagramUrl"
              ),

            youtube:
              getValue(
                "homepageYoutubeUrl"
              ),

            x:
              getValue(
                "homepageXUrl"
              ),

            pinterest:
              getValue(
                "homepagePinterestUrl"
              )

          }

        },


        updatedAt:
          new Date()
            .toISOString()

      };


      saveStoredData(
        HOMEPAGE_CONTENT_KEY,
        data
      );


      showAdminToast(
        "Homepage content saved."
      );

    }
  );


/* =========================================
   BANNER UPLOADS
========================================= */

heroBannerSelectButton
  ?.addEventListener(
    "click",
    function() {

      heroBannerUpload?.click();

    }
  );


heroBannerUpload
  ?.addEventListener(
    "change",
    async function() {

      const file =
        heroBannerUpload.files?.[0];


      if (!file) {
        return;
      }


      if (
        !file.type.startsWith(
          "image/"
        )
      ) {

        if (heroBannerWarning) {

          heroBannerWarning.textContent =
            "Please select a valid image file.";

          heroBannerWarning.style.display =
            "block";

        }

        heroBannerUpload.value =
          "";

        return;

      }


      if (
        file.size >
        2 * 1024 * 1024
      ) {

        if (heroBannerWarning) {

          heroBannerWarning.textContent =
            "Image must be 2 MB or smaller.";

          heroBannerWarning.style.display =
            "block";

        }

        heroBannerUpload.value =
          "";

        return;

      }


      if (heroBannerWarning) {

        heroBannerWarning.textContent =
          "";

        heroBannerWarning.style.display =
          "none";

      }


      try {

        heroBannerSelectButton.disabled =
          true;


        showAdminToast(
          "Uploading banner..."
        );


        const cloudinaryModule =
          await import(
            "./cloudinary-upload.js"
          );


        const result =
          await cloudinaryModule
            .uploadImageToCloudinary(
              file
            );


        if (
          !result?.url
        ) {

          throw new Error(
            "Cloudinary did not return an image URL."
          );

        }


        if (
          heroBannerData
        ) {

          heroBannerData.value =
            result.url;

        }


        showImagePreview(
          heroBannerPreview,
          result.url
        );


        showAdminToast(
          "Banner uploaded successfully."
        );

      }

      catch (error) {

        console.error(
          "Cloudinary banner upload error:",
          error
        );


        if (heroBannerWarning) {

          heroBannerWarning.textContent =
            error.message ||
            "Banner upload failed.";

          heroBannerWarning.style.display =
            "block";

        }


        showAdminToast(
          "Banner upload failed."
        );

      }

      finally {

        heroBannerSelectButton.disabled =
          false;

        heroBannerUpload.value =
          "";

      }

    }
  );


setupImageUpload(
  promoBannerUpload,
  promoBannerSelectButton,
  promoBannerPreview,
  promoBannerData,
  promoBannerWarning,
  "style"
);


/* =========================================
   SAVE BANNERS
========================================= */

saveBannerSettingsButton
  ?.addEventListener(
    "click",
    async function() {

      const previous =
        getStoredData(
          BANNER_SETTINGS_KEY,
          {}
        );


      const data = {

        ...previous,

        hero: {

          ...(previous.hero || {}),

          image:
            heroBannerData
              ?.value ||
            previous.hero?.image ||
            "",

          overline:
            getValue(
              "heroBannerOverline"
            ) ||
            "A SMARTER WAY TO SHOP",

          title:
            getValue(
              "heroBannerTitle"
            ) ||
            "Know More. Choose Better.",

          subtitle:
            getValue(
              "heroBannerSubtitle"
            ) ||
            "In-depth reviews, buying guides and selected product recommendations for better everyday decisions.",

          buttonText:
            getValue(
              "heroBannerButtonText"
            ) ||
            "Explore Top Picks",

          buttonLink:
            getValue(
              "heroBannerButtonLink"
            ) ||
            "#featured",

          point1:
            getValue(
              "heroPoint1"
            ) ||
            "Curated Shortlists",

          point2:
            getValue(
              "heroPoint2"
            ) ||
            "Buying Context",

          point3:
            getValue(
              "heroPoint3"
            ) ||
            "Merchant Links"

        },


        promo: {

          ...(previous.promo || {}),

          image:
            promoBannerData
              ?.value ||
            previous.promo?.image ||
            ""

        },


        updatedAt:
          new Date()
            .toISOString()

      };


      saveStoredData(
        BANNER_SETTINGS_KEY,
        data
      );


      const firebaseData = {

        hero: {

          image:
            data.hero.image ||
            "",

          overline:
            data.hero.overline,

          title:
            data.hero.title,

          subtitle:
            data.hero.subtitle,

          buttonText:
            data.hero.buttonText,

          buttonLink:
            data.hero.buttonLink,

          point1:
            data.hero.point1,

          point2:
            data.hero.point2,

          point3:
            data.hero.point3

        },

        updatedAt:
          data.updatedAt

      };


      try {

        saveBannerSettingsButton.disabled =
          true;


        const firebaseModule =
          await import(
            "./firebase-db.js"
          );


        await firebaseModule
          .saveBannerSettingsToFirestore(
            firebaseData
          );


        showAdminToast(
          "Banner settings saved to Firebase."
        );

      }

      catch (error) {

        console.error(
          "Firebase banner save error:",
          error
        );


        showAdminToast(
          "Saved locally, but Firebase save failed."
        );

      }

      finally {

        saveBannerSettingsButton.disabled =
          false;

      }

    }
  );

  /* =========================================
   LOAD BANNERS
========================================= */

async function loadBannerSettings() {

  const localData =
    getStoredData(
      BANNER_SETTINGS_KEY,
      {}
    );


  let firebaseData = null;


  try {

    const firebaseModule =
      await import(
        "./firebase-db.js"
      );


    firebaseData =
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
    localData.hero ||
    {};


  const firebaseHero =
    firebaseData?.hero ||
    {};


  const hero = {

    ...localHero,
    ...firebaseHero,

    image:
      firebaseHero.image ||
      localHero.image ||
      ""

  };


  const promo =
    localData.promo ||
    {};


  const mergedData = {

    ...localData,

    hero,

    promo,

    updatedAt:
      firebaseData?.updatedAt ||
      localData.updatedAt ||
      ""

  };


  saveStoredData(
    BANNER_SETTINGS_KEY,
    mergedData
  );


  if (
    heroBannerData
  ) {

    heroBannerData.value =
      hero.image ||
      "";

  }


  showImagePreview(
    heroBannerPreview,
    hero.image ||
    "",
    "No banner selected"
  );


  setValue(
    "heroBannerOverline",
    hero.overline ||
    "A SMARTER WAY TO SHOP"
  );


  setValue(
    "heroBannerTitle",
    hero.title ||
    "Know More. Choose Better."
  );


  setValue(
    "heroBannerSubtitle",
    hero.subtitle ||
    "In-depth reviews, buying guides and selected product recommendations for better everyday decisions."
  );


  setValue(
    "heroBannerButtonText",
    hero.buttonText ||
    "Explore Top Picks"
  );


  setValue(
    "heroBannerButtonLink",
    hero.buttonLink ||
    "#featured"
  );


  setValue(
    "heroPoint1",
    hero.point1 ||
    "Curated Shortlists"
  );


  setValue(
    "heroPoint2",
    hero.point2 ||
    "Buying Context"
  );


  setValue(
    "heroPoint3",
    hero.point3 ||
    "Merchant Links"
  );


  if (
    promoBannerData
  ) {

    promoBannerData.value =
      promo.image ||
      "";

  }


  showImagePreview(
    promoBannerPreview,
    promo.image ||
    "",
    "No banner selected"
  );

}


/* =========================================
   SITE SEO
========================================= */

const siteSeoForm =
  document.getElementById(
    "siteSeoForm"
  );


siteSeoForm
  ?.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const data = {

        title:
          getValue(
            "siteSeoTitle"
          ),

        description:
          getValue(
            "siteSeoDescription"
          ),

        url:
          getValue(
            "siteSeoUrl"
          ),

        language:
          getValue(
            "siteSeoLanguage"
          ),

        keywords:
          tagsToArray(
            getValue(
              "siteSeoKeywords"
            )
          ),

        ogImage:
          getValue(
            "siteSeoOgImage"
          ),

        twitterHandle:
          getValue(
            "siteSeoTwitterHandle"
          ),

        schema:
          getValue(
            "siteSeoSchema"
          ),

        updatedAt:
          new Date()
            .toISOString()

      };


      saveStoredData(
        SITE_SEO_KEY,
        data
      );


      showAdminToast(
        "SEO settings saved."
      );

    }
  );


function loadSiteSeo() {

  const data =
    getStoredData(
      SITE_SEO_KEY,
      null
    );


  if (!data) {
    return;
  }


  setValue(
    "siteSeoTitle",
    data.title
  );

  setValue(
    "siteSeoDescription",
    data.description
  );

  setValue(
    "siteSeoUrl",
    data.url
  );

  setValue(
    "siteSeoLanguage",
    data.language
  );

  setValue(
    "siteSeoKeywords",
    arrayToTags(
      data.keywords
    )
  );

  setValue(
    "siteSeoOgImage",
    data.ogImage
  );

  setValue(
    "siteSeoTwitterHandle",
    data.twitterHandle
  );

  setValue(
    "siteSeoSchema",
    data.schema
  );

}


/* =========================================
   SITE SETTINGS
========================================= */

const siteSettingsForm =
  document.getElementById(
    "siteSettingsForm"
  );


siteSettingsForm
  ?.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const settings = {

        siteName:
          getValue(
            "siteName"
          ) ||
          "Kinar Aage",

        tagline:
          getValue(
            "siteTagline"
          ),

        affiliateDisclosure:
          getValue(
            "siteAffiliateDisclosure"
          ),

        updatedAt:
          new Date()
            .toISOString()

      };


      saveStoredData(
        SITE_SETTINGS_KEY,
        settings
      );


      showAdminToast(
        "Website settings saved."
      );

    }
  );


function loadSiteSettings() {

  const settings =
    getStoredData(
      SITE_SETTINGS_KEY,
      null
    );


  if (!settings) {
    return;
  }


  setValue(
    "siteName",
    settings.siteName
  );

  setValue(
    "siteTagline",
    settings.tagline
  );

  setValue(
    "siteAffiliateDisclosure",
    settings.affiliateDisclosure
  );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key ===
      "Escape"
    ) {

      closeAdminSidebar();

    }

  }
);


/* =========================================
   START
========================================= */

async function startAdmin() {

  const savedAdminPage =
  localStorage.getItem(
    "kinarAageAdminActivePage"
  );

const initialAdminPage =
  savedAdminPage &&
  PAGE_CONFIG[
    savedAdminPage
  ]
    ? savedAdminPage
    : "dashboardPage";

openAdminPage(
  initialAdminPage
);

  try {

    const firebaseModule =
      await import(
        "./firebase-db.js"
      );

    const firebaseCategories =
      await firebaseModule
        .getCategoriesFromFirestore();

    saveCategories(
      Array.isArray(
        firebaseCategories
      )
        ? firebaseCategories
        : []
    );

     const firebaseProducts =
  await firebaseModule
    .getProductsFromFirestore();

saveProducts(
  Array.isArray(
    firebaseProducts
  )
    ? firebaseProducts
    : []
);

  }
  catch (error) {

    console.error(
      "Admin category Firebase load error:",
      error
    );

  }


  getProducts();

  renderCategorySelects();

  loadSiteSeo();

  loadSiteSettings();

  loadBannerSettings();

  loadHomepageContent();

  resetProductForm();

  resetCategoryForm();

  renderAdminProducts();

  renderCategories();

  updateDashboard();

  updateMetaCounters();



  if (
    typeof lucide !==
    "undefined"
  ) {

    lucide.createIcons();

  }

}


startAdmin();
