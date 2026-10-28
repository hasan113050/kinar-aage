/* =========================================
   KINAR AAGE ADMIN - FULL REPLACEMENT
========================================= */

const PRODUCTS_KEY = "kinarAageProducts";
const CATEGORIES_KEY = "kinarAageCategories";
const SITE_SEO_KEY = "kinarAageSiteSeo";
const SITE_SETTINGS_KEY = "kinarAageSiteSettings";
const BANNER_SETTINGS_KEY = "kinarAageBannerSettings";
const HOMEPAGE_CONTENT_KEY = "kinarAageHomepageContent";
const ADMIN_SESSION_KEY = "kinarAageAdminSession";
const ACTIVE_PAGE_KEY = "kinarAageAdminActivePage";


const $ = id =>
  document.getElementById(id);


const value = id =>
  ($(id)?.value || "").trim();


const setValue = (
  id,
  val = ""
) => {

  const node =
    $(id);

  if (node) {
    node.value =
      val ?? "";
  }

};


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

    name:
      "Best Wireless Earbuds for Everyday Use",

    category:
      "Electronics & Gadgets",

    status:
      "published",

    featured:
      true,

    badge:
      "Editor's Pick",

    image:
      "",

    shortDescription:
      "A practical wireless earbuds recommendation for everyday calls, music and casual use.",

    highlights: [
      "Comfortable for everyday use",
      "Good battery performance",
      "Easy wireless connectivity"
    ],

    intro:
      "",

    description:
      "",

    pros: [],

    cons: [],

    verdict:
      "",

    affiliateUrl:
      "https://example.com",

    ctaLabel:
      "Buy Now",

    merchantName:
      "",

    affiliateDisclosure:
      "",

    slug:
      "best-wireless-earbuds-for-everyday-use",

    canonical:
      "",

    metaTitle:
      "Best Wireless Earbuds for Everyday Use",

    metaDescription:
      "",

    tags: [
      "wireless earbuds",
      "electronics",
      "gadgets"
    ],

    ogTitle:
      "",

    ogDescription:
      "",

    ogImage:
      ""
  },


  {
    id: 2,

    name:
      "Smart Kitchen Appliance Worth Considering",

    category:
      "Home & Kitchen",

    status:
      "published",

    featured:
      true,

    badge:
      "Recommended",

    image:
      "",

    shortDescription:
      "A useful kitchen appliance recommendation for making daily home tasks easier.",

    highlights: [
      "Useful for daily cooking",
      "Easy to operate",
      "Practical home appliance"
    ],

    intro:
      "",

    description:
      "",

    pros: [],

    cons: [],

    verdict:
      "",

    affiliateUrl:
      "https://example.com",

    ctaLabel:
      "Buy Now",

    merchantName:
      "",

    affiliateDisclosure:
      "",

    slug:
      "smart-kitchen-appliance-worth-considering",

    canonical:
      "",

    metaTitle:
      "Smart Kitchen Appliance Worth Considering",

    metaDescription:
      "",

    tags: [
      "home",
      "kitchen",
      "appliance"
    ],

    ogTitle:
      "",

    ogDescription:
      "",

    ogImage:
      ""
  },


  {
    id: 3,

    name:
      "Everyday Fashion Essential",

    category:
      "Fashion",

    status:
      "published",

    featured:
      false,

    badge:
      "",

    image:
      "",

    shortDescription:
      "A simple everyday fashion recommendation focused on comfort and versatility.",

    highlights: [
      "Versatile styling",
      "Comfortable for regular use",
      "Easy to match"
    ],

    intro:
      "",

    description:
      "",

    pros: [],

    cons: [],

    verdict:
      "",

    affiliateUrl:
      "https://example.com",

    ctaLabel:
      "Buy Now",

    merchantName:
      "",

    affiliateDisclosure:
      "",

    slug:
      "everyday-fashion-essential",

    canonical:
      "",

    metaTitle:
      "Everyday Fashion Essential",

    metaDescription:
      "",

    tags: [
      "fashion",
      "style"
    ],

    ogTitle:
      "",

    ogDescription:
      "",

    ogImage:
      ""
  },


  {
    id: 4,

    name:
      "Personal Care Product We Recommend",

    category:
      "Beauty & Personal Care",

    status:
      "published",

    featured:
      false,

    badge:
      "",

    image:
      "",

    shortDescription:
      "A practical personal care recommendation for regular everyday use.",

    highlights: [
      "Simple everyday use",
      "Easy care routine",
      "Practical choice"
    ],

    intro:
      "",

    description:
      "",

    pros: [],

    cons: [],

    verdict:
      "",

    affiliateUrl:
      "https://example.com",

    ctaLabel:
      "Buy Now",

    merchantName:
      "",

    affiliateDisclosure:
      "",

    slug:
      "personal-care-product-we-recommend",

    canonical:
      "",

    metaTitle:
      "Personal Care Product We Recommend",

    metaDescription:
      "",

    tags: [
      "beauty",
      "personal care"
    ],

    ogTitle:
      "",

    ogDescription:
      "",

    ogImage:
      ""
  },


  {
    id: 5,

    name:
      "A Book Worth Reading",

    category:
      "Books",

    status:
      "published",

    featured:
      false,

    badge:
      "",

    image:
      "",

    shortDescription:
      "A book recommendation worth considering for learning, ideas and personal growth.",

    highlights: [
      "Useful insights",
      "Easy to revisit",
      "Good learning value"
    ],

    intro:
      "",

    description:
      "",

    pros: [],

    cons: [],

    verdict:
      "",

    affiliateUrl:
      "https://example.com",

    ctaLabel:
      "Buy Now",

    merchantName:
      "",

    affiliateDisclosure:
      "",

    slug:
      "a-book-worth-reading",

    canonical:
      "",

    metaTitle:
      "A Book Worth Reading",

    metaDescription:
      "",

    tags: [
      "books",
      "reading"
    ],

    ogTitle:
      "",

    ogDescription:
      "",

    ogImage:
      ""
  },


  {
    id: 6,

    name:
      "Fitness Product Recommendation",

    category:
      "Sports & Fitness",

    status:
      "published",

    featured:
      false,

    badge:
      "",

    image:
      "",

    shortDescription:
      "A practical fitness product recommendation for regular training and movement.",

    highlights: [
      "Useful for regular exercise",
      "Simple to use",
      "Practical fitness support"
    ],

    intro:
      "",

    description:
      "",

    pros: [],

    cons: [],

    verdict:
      "",

    affiliateUrl:
      "https://example.com",

    ctaLabel:
      "Buy Now",

    merchantName:
      "",

    affiliateDisclosure:
      "",

    slug:
      "fitness-product-recommendation",

    canonical:
      "",

    metaTitle:
      "Fitness Product Recommendation",

    metaDescription:
      "",

    tags: [
      "sports",
      "fitness"
    ],

    ogTitle:
      "",

    ogDescription:
      "",

    ogImage:
      ""
  }

].map(
  product => ({
    ...product,

    createdAt:
      new Date()
        .toISOString(),

    updatedAt:
      new Date()
        .toISOString()
  })
);


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
   PAGE CONFIG
========================================= */

const PAGE_CONFIG = {

  dashboardPage: [
    "Dashboard",
    "Manage Kinar Aage content and affiliate products."
  ],

  productsPage: [
    "Products",
    "Manage all affiliate products and recommendations."
  ],

  createProductPage: [
    "Add Product",
    "Create or edit affiliate product content."
  ],

  categoriesPage: [
    "Categories",
    "Manage category names, images, descriptions and display order."
  ],

  homepagePage: [
    "Homepage",
    "Manage homepage text, promotional content and footer settings."
  ],

  bannersPage: [
    "Banners",
    "Manage homepage hero and promotional visuals."
  ],

   seoPage: [
    "Site SEO",
    "Manage default search and social metadata."
  ],

   affiliateAnalyticsPage: [
    "Affiliate Analytics",
    "Track affiliate clicks, traffic sources and product performance."
  ],

   newsletterSubscribersPage: [
    "Newsletter Subscribers",
    "View newsletter subscribers, growth and email audience data."
  ],

  contactInboxPage: [
    "Contact Inbox",
    "View and manage messages submitted through the contact page."
  ],

  settingsPage: [
    "Settings",
    "Manage general Kinar Aage website settings."
  ]

};


/* =========================================
   STORAGE HELPERS
========================================= */

function readStore(
  key,
  fallback
) {

  try {

    const raw =
      localStorage.getItem(
        key
      );


    return raw
      ? JSON.parse(
          raw
        )
      : fallback;

  }

  catch (error) {

    console.error(
      `Could not read ${key}`,
      error
    );


    return fallback;

  }

}


function writeStore(
  key,
  data
) {

  localStorage.setItem(
    key,
    JSON.stringify(
      data
    )
  );

}


/* =========================================
   GENERAL HELPERS
========================================= */

function escapeHtml(
  input = ""
) {

  return String(
    input
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


function linesToArray(
  input
) {

  return String(
    input ||
    ""
  )

    .split(
      /\r?\n/
    )

    .map(
      item =>
        item
          .replace(
            /^[-•*]\s*/,
            ""
          )
          .trim()
    )

    .filter(
      Boolean
    );

}


function arrayToLines(
  input
) {

  return Array.isArray(
    input
  )
    ? input.join(
        "\n"
      )
    : "";

}


function tagsToArray(
  input
) {

  return String(
    input ||
    ""
  )

    .split(
      ","
    )

    .map(
      item =>
        item.trim()
    )

    .filter(
      Boolean
    );

}


function arrayToTags(
  input
) {

  return Array.isArray(
    input
  )
    ? input.join(
        ", "
      )
    : "";

}


function createSlug(
  input = ""
) {

  return String(
    input
  )

    .normalize(
      "NFKD"
    )

    .toLowerCase()

    .trim()

    .replace(
      /[^\p{L}\p{N}\s-]/gu,
      ""
    )

    .replace(
      /\s+/g,
      "-"
    )

    .replace(
      /-+/g,
      "-"
    )

    .replace(
      /^-|-$/g,
      ""
    );

}


function generateId() {

  return (
    Date.now()
      .toString() +

    Math.random()
      .toString(16)
      .slice(2)
  );

}


function toast(
  message
) {

  const node =
    $("adminToast");


  if (!node) {
    return;
  }


  node.textContent =
    message;


  node.classList.add(
    "show"
  );


  clearTimeout(
    toast.timer
  );


  toast.timer =
    setTimeout(
      function() {

        node.classList.remove(
          "show"
        );

      },
      2300
    );

}


function refreshIcons() {

  if (
    typeof lucide !==
    "undefined"
  ) {

    lucide.createIcons();

  }

}


/* =========================================
   PRODUCTS / CATEGORIES STORAGE
========================================= */

function getProducts() {

  const data =
    readStore(
      PRODUCTS_KEY,
      null
    );


  if (
    Array.isArray(
      data
    )
  ) {

    return data;

  }


  writeStore(
    PRODUCTS_KEY,
    INITIAL_PRODUCTS
  );


  return [
    ...INITIAL_PRODUCTS
  ];

}


function saveProducts(
  data
) {

  writeStore(
    PRODUCTS_KEY,
    data
  );

}


function getCategories() {

  const data =
    readStore(
      CATEGORIES_KEY,
      null
    );


  const list =
    Array.isArray(
      data
    )
      ? data
      : [
          ...INITIAL_CATEGORIES
        ];


  if (
    !Array.isArray(
      data
    )
  ) {

    writeStore(
      CATEGORIES_KEY,
      list
    );

  }


  return list

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


function saveCategories(
  data
) {

  writeStore(
    CATEGORIES_KEY,
    data
  );

}


/* =========================================
   FIREBASE / CLOUDINARY
========================================= */

async function firebaseModule() {

  try {

    return await import(
      "./firebase-db.js"
    );

  }

  catch (error) {

    console.warn(
      "Firebase module unavailable:",
      error
    );


    return null;

  }

}


async function cloudinaryUpload(
  file
) {

  const module =
    await import(
      "./cloudinary-upload.js"
    );


  const result =
    await module
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


  return result.url;

}


/* =========================================
   ADMIN NAVIGATION
========================================= */

function openPage(
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
          page.id ===
            pageId
        );

      }
    );


  document
    .querySelectorAll(
      ".admin-nav-item"
    )
    .forEach(
      item => {

        item.classList.toggle(
          "active",
          item.dataset.page ===
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
      $("adminPageTitle")
    ) {

      $("adminPageTitle")
        .textContent =
        config[0];

    }


    if (
      $("adminPageSubtitle")
    ) {

      $("adminPageSubtitle")
        .textContent =
        config[1];

    }

  }


  localStorage.setItem(
    ACTIVE_PAGE_KEY,
    pageId
  );


  closeSidebar();

}


function closeSidebar() {

  $("adminSidebar")
    ?.classList.remove(
      "open"
    );


  $("adminSidebarOverlay")
    ?.classList.remove(
      "show"
    );

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

          openPage(
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

          openPage(
            button.dataset.openPage
          );

        }
      );

    }
  );


$("adminMenuButton")
  ?.addEventListener(
    "click",
    function() {

      $("adminSidebar")
        ?.classList.toggle(
          "open"
        );


      $("adminSidebarOverlay")
        ?.classList.toggle(
          "show"
        );

    }
  );


$("adminSidebarOverlay")
  ?.addEventListener(
    "click",
    closeSidebar
  );


document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key ===
      "Escape"
    ) {

      closeSidebar();

    }

  }
);


/* =========================================
   IMAGE HELPERS
========================================= */

function showPreview(
  container,
  src,
  emptyText =
    "No image selected"
) {

  if (!container) {
    return;
  }


  if (src) {

    container.innerHTML =
      `
        <img
          src="${escapeHtml(
            src
          )}"
          alt="Preview"
        >
      `;

  }

  else {

    container.innerHTML =
      `
        <i data-lucide="image"></i>

        <span>
          ${escapeHtml(
            emptyText
          )}
        </span>
      `;

  }


  refreshIcons();

}


function setWarning(
  node,
  message = "",
  styleMode = false
) {

  if (!node) {
    return;
  }


  node.textContent =
    message;


  if (styleMode) {

    node.style.display =
      message
        ? "block"
        : "none";

  }

  else {

    node.hidden =
      !message;

  }

}


function validateImage(
  file,
  warning,
  styleMode = false
) {

  setWarning(
    warning,
    "",
    styleMode
  );


  if (!file) {
    return false;
  }


  if (
    !file.type.startsWith(
      "image/"
    )
  ) {

    setWarning(
      warning,
      "Please select a valid image file.",
      styleMode
    );


    return false;

  }


  if (
    file.size >
    2 * 1024 * 1024
  ) {

    setWarning(
      warning,
      "Image must be 2 MB or smaller.",
      styleMode
    );


    toast(
      "Image must be 2 MB or smaller."
    );


    return false;

  }


  return true;

}

/* =========================================
   CLOUDINARY IMAGE SETUP
========================================= */

function setupCloudinaryImage({

  inputId,
  buttonId,
  previewId,
  dataId,
  warningId,
  styleMode = false,
  label = "Image"

}) {

  const input =
    $(inputId);

  const button =
    $(buttonId);

  const preview =
    $(previewId);

  const hidden =
    $(dataId);

  const warning =
    $(warningId);


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
      async function() {

        const file =
          input.files?.[0];


        if (
          !validateImage(
            file,
            warning,
            styleMode
          )
        ) {

          input.value =
            "";

          return;

        }


        try {

          if (button) {

            button.disabled =
              true;

          }


          toast(
            `Uploading ${label.toLowerCase()}...`
          );


          const url =
            await cloudinaryUpload(
              file
            );


          if (hidden) {

            hidden.value =
              url;

          }


          showPreview(
            preview,
            url
          );


          setWarning(
            warning,
            "",
            styleMode
          );


          toast(
            `${label} uploaded successfully.`
          );

        }

        catch (error) {

          console.error(
            `${label} upload error:`,
            error
          );


          setWarning(
            warning,
            error?.message ||
              `${label} upload failed.`,
            styleMode
          );


          toast(
            `${label} upload failed.`
          );

        }

        finally {

          if (button) {

            button.disabled =
              false;

          }


          input.value =
            "";

        }

      }
    );

}

const productGalleryUpload =
  document.getElementById(
    "productGalleryUpload"
  );

const productGallerySelectButton =
  document.getElementById(
    "productGallerySelectButton"
  );

const productGalleryData =
  document.getElementById(
    "productGalleryData"
  );

const productGalleryPreview =
  document.getElementById(
    "productGalleryPreview"
  );

const productGalleryWarning =
  document.getElementById(
    "productGalleryWarning"
  );

/* =========================================
   PRODUCT GALLERY HELPERS
========================================= */

function getProductGalleryUrls() {

  if (!productGalleryData) {
    return [];
  }

  try {

    const parsed =
      JSON.parse(
        productGalleryData.value ||
        "[]"
      );

    return Array.isArray(parsed)
      ? parsed
      : [];

  }

  catch (error) {

    console.error(
      "Gallery parse error:",
      error
    );

    return [];

  }

}


function saveProductGalleryUrls(
  urls
) {

  if (!productGalleryData) {
    return;
  }

  productGalleryData.value =
    JSON.stringify(
      Array.isArray(urls)
        ? urls
        : []
    );

}


function renderProductGalleryPreview() {

  if (!productGalleryPreview) {
    return;
  }


  const urls =
    getProductGalleryUrls();


  if (!urls.length) {

    productGalleryPreview.innerHTML =
      `
        <span class="admin-gallery-empty">
          No gallery images added
        </span>
      `;

    return;

  }


  productGalleryPreview.innerHTML =
    urls
      .map(
        function(url, index) {

          return `
            <div class="admin-gallery-item">

              <img
                src="${url}"
                alt="Gallery image ${index + 1}"
              >

              <button
                type="button"
                class="admin-gallery-remove"
                data-gallery-remove="${index}"
                aria-label="Remove gallery image"
              >
                ×
              </button>

            </div>
          `;

        }
      )
      .join("");


  productGalleryPreview
    .querySelectorAll(
      "[data-gallery-remove]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const index =
              Number(
                button.dataset
                  .galleryRemove
              );


            const current =
              getProductGalleryUrls();


            current.splice(
              index,
              1
            );


            saveProductGalleryUrls(
              current
            );


            renderProductGalleryPreview();

          }
        );

      }
    );

}

/* =========================================
   ALL CLOUDINARY UPLOADS
========================================= */

setupCloudinaryImage({

  inputId:
    "productImageUpload",

  buttonId:
    "productImageSelectButton",

  previewId:
    "productImagePreview",

  dataId:
    "productImageData",

  label:
    "Product image"

});

/* =========================================
   PRODUCT GALLERY CLOUDINARY UPLOAD
========================================= */

productGallerySelectButton
  ?.addEventListener(
    "click",
    function() {

      productGalleryUpload
        ?.click();

    }
  );


productGalleryUpload
  ?.addEventListener(
    "change",
    async function() {

      const files =
        Array.from(
          productGalleryUpload.files ||
          []
        );


      if (!files.length) {
        return;
      }


      const currentGallery =
        getProductGalleryUrls();


      const availableSlots =
        5 -
        currentGallery.length;


      if (
        availableSlots <= 0
      ) {

        toast(
          "Maximum 5 gallery images are allowed."
        );

        productGalleryUpload.value =
          "";

        return;

      }


      const selectedFiles =
        files.slice(
          0,
          availableSlots
        );


      if (
        files.length >
        availableSlots
      ) {

        toast(
          `Only ${availableSlots} more gallery image(s) can be added.`
        );

      }


      const validFiles =
        selectedFiles.filter(
          function(file) {

            return (
              file.type.startsWith(
                "image/"
              ) &&
              file.size <=
                2 * 1024 * 1024
            );

          }
        );


      if (!validFiles.length) {

        toast(
          "Please select valid images under 2 MB."
        );

        productGalleryUpload.value =
          "";

        return;

      }


      try {

        productGallerySelectButton.disabled =
          true;


        if (
          productGalleryWarning
        ) {

          productGalleryWarning.textContent =
            "Uploading gallery images...";

        }


        const cloudinary =
          await import(
            "./cloudinary-upload.js"
          );


        const uploadedUrls = [];


        for (
          const file of validFiles
        ) {

          const result =
            await cloudinary
              .uploadImageToCloudinary(
                file
              );


          if (
            result?.url
          ) {

            uploadedUrls.push(
              result.url
            );

          }

        }


        const finalGallery =
          [
            ...currentGallery,
            ...uploadedUrls
          ]
            .slice(
              0,
              5
            );


        saveProductGalleryUrls(
          finalGallery
        );


        renderProductGalleryPreview();


        if (
          productGalleryWarning
        ) {

          productGalleryWarning.textContent =
            "";

        }


        toast(
          uploadedUrls.length
            ? "Gallery images uploaded."
            : "No gallery image uploaded."
        );

      }

      catch (error) {

        console.error(
          "Product gallery upload error:",
          error
        );


        if (
          productGalleryWarning
        ) {

          productGalleryWarning.textContent =
            "Gallery upload failed.";

        }


        toast(
          "Gallery upload failed."
        );

      }

      finally {

        productGallerySelectButton.disabled =
          false;

        productGalleryUpload.value =
          "";

      }

    }
  );

setupCloudinaryImage({

  inputId:
    "categoryImageUpload",

  buttonId:
    "categoryImageSelectButton",

  previewId:
    "categoryImagePreview",

  dataId:
    "categoryImageData",

  warningId:
    "categoryImageWarning",

  label:
    "Category image"

});

setupCloudinaryImage({

  inputId:
    "siteLogoUpload",

  buttonId:
    "siteLogoSelectButton",

  previewId:
    "siteLogoPreview",

  dataId:
    "siteLogoData",

  warningId:
    "siteLogoWarning",

  label:
    "Website logo"

});

setupCloudinaryImage({

  inputId:
    "siteFaviconUpload",

  buttonId:
    "siteFaviconSelectButton",

  previewId:
    "siteFaviconPreview",

  dataId:
    "siteFaviconData",

  warningId:
    "siteFaviconWarning",

  label:
    "Website favicon"

});

setupCloudinaryImage({

  inputId:
    "homepagePromo1ImageUpload",

  buttonId:
    "homepagePromo1ImageButton",

  previewId:
    "homepagePromo1ImagePreview",

  dataId:
    "homepagePromo1ImageData",

  warningId:
    "homepagePromo1ImageWarning",

  label:
    "Promo image"

});


setupCloudinaryImage({

  inputId:
    "homepagePromo2ImageUpload",

  buttonId:
    "homepagePromo2ImageButton",

  previewId:
    "homepagePromo2ImagePreview",

  dataId:
    "homepagePromo2ImageData",

  warningId:
    "homepagePromo2ImageWarning",

  label:
    "Promo image"

});


setupCloudinaryImage({

  inputId:
    "homepagePromo3ImageUpload",

  buttonId:
    "homepagePromo3ImageButton",

  previewId:
    "homepagePromo3ImagePreview",

  dataId:
    "homepagePromo3ImageData",

  warningId:
    "homepagePromo3ImageWarning",

  label:
    "Promo image"

});


setupCloudinaryImage({

  inputId:
    "heroBannerUpload",

  buttonId:
    "heroBannerSelectButton",

  previewId:
    "heroBannerPreview",

  dataId:
    "heroBannerData",

  warningId:
    "heroBannerWarning",

  styleMode:
    true,

  label:
    "Hero banner"

});


setupCloudinaryImage({

  inputId:
    "promoBannerUpload",

  buttonId:
    "promoBannerSelectButton",

  previewId:
    "promoBannerPreview",

  dataId:
    "promoBannerData",

  warningId:
    "promoBannerWarning",

  styleMode:
    true,

  label:
    "Promo banner"

});


/* =========================================
   CATEGORY SELECTS
========================================= */

function renderCategorySelects(
  forcedProductCategory = ""
) {

  const categories =
    getCategories();


  const active =
    categories.filter(
      category =>
        category.status !==
        "inactive"
    );


  const productSelect =
    $("productCategory");


  const filter =
    $("adminCategoryFilter");


  if (productSelect) {

    const current =
      forcedProductCategory ||
      productSelect.value;


    let html =
      '<option value="">Select category</option>';


    active.forEach(
      category => {

        html +=
          `
            <option
              value="${escapeHtml(
                category.name
              )}"
            >
              ${escapeHtml(
                category.name
              )}
            </option>
          `;

      }
    );


    if (
      current &&
      !active.some(
        category =>
          category.name ===
          current
      )
    ) {

      html +=
        `
          <option
            value="${escapeHtml(
              current
            )}"
          >
            ${escapeHtml(
              current
            )} (Inactive)
          </option>
        `;

    }


    productSelect.innerHTML =
      html;


    productSelect.value =
      current ||
      "";

  }


  if (filter) {

    const current =
      filter.value;


    filter.innerHTML =
      '<option value="">All Categories</option>' +

      categories
        .map(
          category =>
            `
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


    filter.value =
      current ||
      "";

  }

}


/* =========================================
   META COUNTERS
========================================= */

function updateMetaCounters() {

  const title =
    value(
      "productMetaTitle"
    );


  const description =
    value(
      "productMetaDescription"
    );


  if (
    $("metaTitleCount")
  ) {

    $("metaTitleCount")
      .textContent =
      `${title.length}/60`;

  }


  if (
    $("metaDescriptionCount")
  ) {

    $("metaDescriptionCount")
      .textContent =
      `${description.length}/160`;

  }

}


$("productMetaTitle")
  ?.addEventListener(
    "input",
    updateMetaCounters
  );


$("productMetaDescription")
  ?.addEventListener(
    "input",
    updateMetaCounters
  );


/* =========================================
   PRODUCT AUTO SLUG
========================================= */

$("productName")
  ?.addEventListener(
    "input",
    function() {

      const slug =
        $("productSlug");


      if (
        slug &&
        slug.dataset.manual !==
          "true"
      ) {

        slug.value =
          createSlug(
            value(
              "productName"
            )
          );

      }

    }
  );


$("productSlug")
  ?.addEventListener(
    "input",
    function() {

      const slug =
        $("productSlug");


      if (!slug) {
        return;
      }


      if (
        slug.value.trim()
      ) {

        slug.dataset.manual =
          "true";

      }

      else {

        delete slug.dataset
          .manual;

      }

    }
  );


/* =========================================
   RESET PRODUCT FORM
========================================= */

function resetProductForm() {

  $("productForm")
    ?.reset();


  setValue(
    "editingProductId",
    ""
  );


  setValue(
    "productImageData",
    ""
  );

  if (
  productGalleryData
) {

  productGalleryData.value =
    "[]";

}


renderProductGalleryPreview();

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


  if (
    $("productFormHeading")
  ) {

    $("productFormHeading")
      .textContent =
      "Add New Product";

  }


  if (
    $("productSlug")
  ) {

    delete $("productSlug")
      .dataset.manual;

  }


  showPreview(
    $("productImagePreview"),
    ""
  );


  updateMetaCounters();

}


/* =========================================
   COLLECT PRODUCT
========================================= */

function collectProduct() {

  const existingId =
    value(
      "editingProductId"
    );


  const old =
    getProducts()
      .find(
        product =>
          String(
            product.id
          ) ===
          String(
            existingId
          )
      );


  return {

    id:
      existingId ||
      generateId(),

    name:
      value(
        "productName"
      ),

    category:
      value(
        "productCategory"
      ),

    status:
      value(
        "productStatus"
      ) ||
      "published",

    featured:
      value(
        "productFeatured"
      ) ===
      "true",

    badge:
      value(
        "productBadge"
      ),

    image:
      value(
        "productImageData"
      ) ||
      old?.image ||
      "",
gallery:
  getProductGalleryUrls(),

    shortDescription:
      value(
        "productShortDescription"
      ),

    highlights:
      linesToArray(
        value(
          "productHighlights"
        )
      ),

    intro:
      value(
        "productIntro"
      ),

    description:
      value(
        "productDescription"
      ),

    pros:
      linesToArray(
        value(
          "productPros"
        )
      ),

    cons:
      linesToArray(
        value(
          "productCons"
        )
      ),

    verdict:
      value(
        "productVerdict"
      ),

    affiliateUrl:
      value(
        "productAffiliateUrl"
      ),

    ctaLabel:
      value(
        "productCtaLabel"
      ) ||
      "Buy Now",

    merchantName:
      value(
        "productMerchantName"
      ),

    affiliateDisclosure:
      value(
        "productAffiliateDisclosure"
      ),

    slug:
      value(
        "productSlug"
      ) ||
      createSlug(
        value(
          "productName"
        )
      ),

    canonical:
      value(
        "productCanonical"
      ),

    metaTitle:
      value(
        "productMetaTitle"
      ) ||
      value(
        "productName"
      ),

    metaDescription:
      value(
        "productMetaDescription"
      ),

    tags:
      tagsToArray(
        value(
          "productTags"
        )
      ),

    ogTitle:
      value(
        "productOgTitle"
      ),

    ogImage:
      value(
        "productOgImage"
      ),

    ogDescription:
      value(
        "productOgDescription"
      ),

    createdAt:
      old?.createdAt ||
      new Date()
        .toISOString(),

    updatedAt:
      new Date()
        .toISOString()

  };

}


/* =========================================
   SAVE PRODUCT
========================================= */

$("productForm")
  ?.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const product =
        collectProduct();


      if (
        !product.name
      ) {

        toast(
          "Product name is required."
        );

        return;

      }


      if (
        !product.category
      ) {

        toast(
          "Please select a category."
        );

        return;

      }


      const products =
        getProducts();


      const index =
        products.findIndex(
          item =>
            String(
              item.id
            ) ===
            String(
              product.id
            )
        );


      if (
        index >= 0
      ) {

        products[index] =
          product;

      }

      else {

        products.unshift(
          product
        );

      }


      saveProducts(
        products
      );


      try {

        const firebase =
          await firebaseModule();


        if (
          typeof firebase
            ?.saveProductToFirestore ===
          "function"
        ) {

          await firebase
            .saveProductToFirestore(
              product
            );

        }


        toast(
          index >= 0
            ? "Product updated."
            : "Product added."
        );

      }

      catch (error) {

        console.error(
          error
        );


        toast(
          "Saved locally, but Firebase save failed."
        );

      }


      resetProductForm();

      renderAdminProducts();

      updateDashboard();

      openPage(
        "productsPage"
      );

    }
  );

  /* =========================================
   EDIT PRODUCT
========================================= */

function editProduct(
  id
) {

  const product =
    getProducts()
      .find(
        item =>
          String(
            item.id
          ) ===
          String(
            id
          )
      );


  if (!product) {
    return;
  }


  setValue(
    "editingProductId",
    product.id
  );


  setValue(
    "productName",
    product.name
  );


  renderCategorySelects(
    product.category
  );


  setValue(
    "productStatus",
    product.status ||
    "published"
  );


  setValue(
    "productFeatured",
    String(
      Boolean(
        product.featured
      )
    )
  );


  setValue(
    "productBadge",
    product.badge ||
    ""
  );


  setValue(
    "productImageData",
    product.image ||
    ""
  );
if (
  productGalleryData
) {

  productGalleryData.value =
    JSON.stringify(
      Array.isArray(
        product.gallery
      )
        ? product.gallery
        : []
    );

}


renderProductGalleryPreview();

  setValue(
    "productShortDescription",
    product.shortDescription ||
    ""
  );


  setValue(
    "productHighlights",
    arrayToLines(
      product.highlights
    )
  );


  setValue(
    "productIntro",
    product.intro ||
    ""
  );


  setValue(
    "productDescription",
    product.description ||
    ""
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
    product.verdict ||
    ""
  );


  setValue(
    "productAffiliateUrl",
    product.affiliateUrl ||
    ""
  );


  setValue(
    "productCtaLabel",
    product.ctaLabel ||
    "Buy Now"
  );


  setValue(
    "productMerchantName",
    product.merchantName ||
    ""
  );


  setValue(
    "productAffiliateDisclosure",
    product.affiliateDisclosure ||
    ""
  );


  setValue(
    "productSlug",
    product.slug ||
    ""
  );


  setValue(
    "productCanonical",
    product.canonical ||
    ""
  );


  setValue(
    "productMetaTitle",
    product.metaTitle ||
    ""
  );


  setValue(
    "productMetaDescription",
    product.metaDescription ||
    ""
  );


  setValue(
    "productTags",
    arrayToTags(
      product.tags
    )
  );


  setValue(
    "productOgTitle",
    product.ogTitle ||
    ""
  );


  setValue(
    "productOgImage",
    product.ogImage ||
    ""
  );


  setValue(
    "productOgDescription",
    product.ogDescription ||
    ""
  );


  if (
    $("productSlug")
  ) {

    $("productSlug")
      .dataset.manual =
      "true";

  }


  if (
    $("productFormHeading")
  ) {

    $("productFormHeading")
      .textContent =
      "Edit Product";

  }


  showPreview(
    $("productImagePreview"),
    product.image ||
    ""
  );


  updateMetaCounters();


  openPage(
    "createProductPage"
  );


  window.scrollTo({

    top:
      0,

    behavior:
      "smooth"

  });

}


/* =========================================
   DELETE PRODUCT
========================================= */

async function deleteProduct(
  id
) {

  if (
    !confirm(
      "Delete this product?"
    )
  ) {

    return;

  }


  const products =
    getProducts()
      .filter(
        product =>
          String(
            product.id
          ) !==
          String(
            id
          )
      );


  saveProducts(
    products
  );


  try {

    const firebase =
      await firebaseModule();


    if (
      typeof firebase
        ?.deleteProductFromFirestore ===
      "function"
    ) {

      await firebase
        .deleteProductFromFirestore(
          id
        );

    }

  }

  catch (error) {

    console.error(
      error
    );


    toast(
      "Deleted locally, but Firebase delete failed."
    );

  }


  renderAdminProducts();

  updateDashboard();

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderAdminProducts() {

  const list =
    $("adminProductsList");


  if (!list) {
    return;
  }


  const search =
    value(
      "adminProductSearch"
    )
      .toLowerCase();


  const category =
    value(
      "adminCategoryFilter"
    );


  const status =
    value(
      "adminStatusFilter"
    );


  const products =
    getProducts()
      .filter(
        product => {

          const text =
            `
              ${product.name || ""}
              ${product.category || ""}
              ${product.merchantName || ""}
            `
              .toLowerCase();


          return (

            (
              !search ||
              text.includes(
                search
              )
            )

            &&

            (
              !category ||
              product.category ===
                category
            )

            &&

            (
              !status ||
              product.status ===
                status
            )

          );

        }
      );


  if (
    !products.length
  ) {

    list.innerHTML =
      `
        <div class="admin-empty-state">
          No products found.
        </div>
      `;

    return;

  }


  list.innerHTML =
    products
      .map(
        product => {

          return `
            <div class="admin-product-row">

              <div class="admin-product-thumb">

                ${
                  product.image

                    ? `
                        <img
                          src="${escapeHtml(
                            product.image
                          )}"
                          alt="${escapeHtml(
                            product.name
                          )}"
                        >
                      `

                    : ""
                }

              </div>


              <div class="admin-product-main admin-product-info">

                <strong>
                  ${escapeHtml(
                    product.name ||
                    "Untitled"
                  )}
                </strong>

                <span>
                  ${escapeHtml(
                    product.category ||
                    "Uncategorized"
                  )}
                </span>

              </div>


              <div
                class="admin-product-status ${
                  product.status ===
                  "draft"
                    ? "draft"
                    : ""
                }"
              >
                ${escapeHtml(
                  product.status ||
                  "published"
                )}
              </div>


              <div>

                ${
                  product.featured

                    ? `
                        <span class="status-badge published">
                          Featured
                        </span>
                      `

                    : ""
                }

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

            </div>
          `;

        }
      )
      .join("");


  list
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


  list
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


/* =========================================
   PRODUCT FILTER EVENTS
========================================= */

[
  "adminProductSearch",
  "adminCategoryFilter",
  "adminStatusFilter"

].forEach(
  id => {

    const eventName =
      id ===
      "adminProductSearch"
        ? "input"
        : "change";


    $(id)
      ?.addEventListener(
        eventName,
        renderAdminProducts
      );

  }
);


$("cancelProductEditButton")
  ?.addEventListener(
    "click",
    function() {

      resetProductForm();

      openPage(
        "productsPage"
      );

    }
  );


/* =========================================
   DASHBOARD
========================================= */

function updateDashboard() {

  const products =
    getProducts();


  if (
    $("dashboardTotalProducts")
  ) {

    $("dashboardTotalProducts")
      .textContent =
      products.length;

  }


  if (
    $("dashboardFeaturedProducts")
  ) {

    $("dashboardFeaturedProducts")
      .textContent =
      products.filter(
        product =>
          product.featured
      ).length;

  }


  if (
    $("dashboardPublishedProducts")
  ) {

    $("dashboardPublishedProducts")
      .textContent =
      products.filter(
        product =>
          product.status !==
          "draft"
      ).length;

  }


  if (
    $("dashboardDraftProducts")
  ) {

    $("dashboardDraftProducts")
      .textContent =
      products.filter(
        product =>
          product.status ===
          "draft"
      ).length;

  }


  const table =
    $("dashboardProductTable");


  if (!table) {
    return;
  }


  const recent =
    products

      .slice()

      .sort(
        function(
          a,
          b
        ) {

          return String(
            b.updatedAt ||
            ""
          )
            .localeCompare(
              String(
                a.updatedAt ||
                ""
              )
            );

        }
      )

      .slice(
        0,
        6
      );


  if (
    !recent.length
  ) {

    table.innerHTML =
      `
        <div class="admin-empty-state">
          No products yet.
        </div>
      `;

    return;

  }


  table.innerHTML =
    recent
      .map(
        product => {

          return `
            <div class="dashboard-product-row">

              <strong>
                ${escapeHtml(
                  product.name ||
                  "Untitled"
                )}
              </strong>

              <span>
                ${escapeHtml(
                  product.category ||
                  "Uncategorized"
                )}
              </span>

              <span>
                ${escapeHtml(
                  product.status ||
                  "published"
                )}
              </span>

            </div>
          `;

        }
      )
      .join("");

}


/* =========================================
   CATEGORY FORM
========================================= */

function resetCategoryForm() {

  $("categoryForm")
    ?.reset();


  setValue(
    "editingCategoryId",
    ""
  );


  setValue(
    "categoryStatus",
    "active"
  );


  setValue(
    "categoryImageData",
    ""
  );


  if (
    $("categorySlug")
  ) {

    delete $("categorySlug")
      .dataset.manual;

  }


  if (
    $("categoryFormHeading")
  ) {

    $("categoryFormHeading")
      .textContent =
      "Add Category";

  }


  showPreview(
    $("categoryImagePreview"),
    ""
  );


  setWarning(
    $("categoryImageWarning"),
    ""
  );

}


/* =========================================
   GET CATEGORY
========================================= */

function getCategoryById(
  id
) {

  return getCategories()
    .find(
      category =>
        String(
          category.id
        ) ===
        String(
          id
        )
    );

}


/* =========================================
   COLLECT CATEGORY
========================================= */

function collectCategory() {

  const editingId =
    value(
      "editingCategoryId"
    );


  const old =
    getCategoryById(
      editingId
    );


  const name =
    value(
      "categoryName"
    );


  const slug =
    value(
      "categorySlug"
    ) ||
    createSlug(
      name
    );


  return {

    id:
      editingId ||
      slug ||
      generateId(),

    name:
      name,

    slug:
      slug,

    description:
      value(
        "categoryDescription"
      ),

    status:
      value(
        "categoryStatus"
      ) ||
      "active",

    order:
      Number(
        value(
          "categoryOrder"
        ) ||
        999
      ),

    image:
      value(
        "categoryImageData"
      ) ||
      old?.image ||
      "",

    createdAt:
      old?.createdAt ||
      new Date()
        .toISOString(),

    updatedAt:
      new Date()
        .toISOString()

  };

}


/* =========================================
   SAVE CATEGORY
========================================= */

$("categoryForm")
  ?.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const category =
        collectCategory();


      if (
        !category.name
      ) {

        toast(
          "Category name is required."
        );

        return;

      }


      if (
        !category.slug
      ) {

        toast(
          "Category slug is required."
        );

        return;

      }


      const categories =
        getCategories();


      const existingCategory =
        categories.find(
          item =>
            String(
              item.id
            ) ===
            String(
              category.id
            )
        );


      const duplicateName =
        categories.some(
          item =>
            String(
              item.id
            ) !==
              String(
                category.id
              ) &&
            String(
              item.name ||
              ""
            )
              .trim()
              .toLowerCase() ===
            String(
              category.name ||
              ""
            )
              .trim()
              .toLowerCase()
        );


      if (
        duplicateName
      ) {

        toast(
          "A category with this name already exists."
        );

        return;

      }


      const duplicateSlug =
        categories.some(
          item =>
            String(
              item.id
            ) !==
              String(
                category.id
              ) &&
            String(
              item.slug ||
              ""
            )
              .trim()
              .toLowerCase() ===
            String(
              category.slug ||
              ""
            )
              .trim()
              .toLowerCase()
        );


      if (
        duplicateSlug
      ) {

        toast(
          "A category with this slug already exists."
        );

        return;

      }


      const oldCategoryName =
        existingCategory?.name ||
        "";


      const index =
        categories.findIndex(
          item =>
            String(
              item.id
            ) ===
            String(
              category.id
            )
        );


      if (
        index >= 0
      ) {

        categories[index] =
          category;

      }

      else {

        categories.push(
          category
        );

      }


      saveCategories(
        categories
      );


      /* =====================================
         UPDATE PRODUCTS IF CATEGORY RENAMED
      ===================================== */

      let changedProducts =
        [];


      if (
        oldCategoryName &&
        oldCategoryName !==
          category.name
      ) {

        const products =
          getProducts();


        products.forEach(
          product => {

            if (
              product.category ===
              oldCategoryName
            ) {

              product.category =
                category.name;


              product.updatedAt =
                new Date()
                  .toISOString();


              changedProducts.push(
                product
              );

            }

          }
        );


        if (
          changedProducts.length
        ) {

          saveProducts(
            products
          );

        }

      }


      try {

        const firebase =
          await firebaseModule();


        if (
          typeof firebase
            ?.saveCategoryToFirestore ===
            "function"
        ) {

          await firebase
            .saveCategoryToFirestore(
              category
            );

        }


        if (
          changedProducts.length &&
          typeof firebase
            ?.saveProductToFirestore ===
            "function"
        ) {

          for (
            const product
            of changedProducts
          ) {

            await firebase
              .saveProductToFirestore(
                product
              );

          }

        }


        toast(
          index >= 0
            ? "Category updated."
            : "Category added."
        );

      }

      catch (error) {

        console.error(
          "Category Firebase save error:",
          error
        );


        toast(
          "Saved locally, but Firebase save failed."
        );

      }


      resetCategoryForm();

      renderCategories();

      renderCategorySelects();

      renderAdminProducts();

      updateDashboard();

    }
  );


/* =========================================
   EDIT CATEGORY
========================================= */

function editCategory(
  id
) {

  const category =
    getCategoryById(
      id
    );


  if (!category) {

    return;

  }


  setValue(
    "editingCategoryId",
    category.id
  );


  setValue(
    "categoryName",
    category.name
  );


  setValue(
    "categorySlug",
    category.slug
  );


  setValue(
    "categoryDescription",
    category.description
  );


  setValue(
    "categoryStatus",
    category.status ||
    "active"
  );


  setValue(
    "categoryOrder",
    category.order
  );


  setValue(
    "categoryImageData",
    category.image ||
    ""
  );


  if (
    $("categorySlug")
  ) {

    $("categorySlug")
      .dataset.manual =
      "true";

  }


  if (
    $("categoryFormHeading")
  ) {

    $("categoryFormHeading")
      .textContent =
      "Edit Category";

  }


  showPreview(
    $("categoryImagePreview"),
    category.image ||
    ""
  );


  openPage(
    "categoriesPage"
  );

}


/* =========================================
   DELETE CATEGORY
========================================= */

async function deleteCategory(
  id
) {

  const category =
    getCategoryById(
      id
    );


  if (
    !category
  ) {

    return;

  }


  const categoryInUse =
    getProducts()
      .some(
        product =>
          product.category ===
          category.name
      );


  if (
    categoryInUse
  ) {

    toast(
      "This category is being used by one or more products. Move those products first."
    );

    return;

  }


  if (
    !confirm(
      `Delete "${category.name}"?`
    )
  ) {

    return;

  }


  try {

    const firebase =
      await firebaseModule();


    if (
      typeof firebase
        ?.deleteCategoryFromFirestore ===
        "function"
    ) {

      await firebase
        .deleteCategoryFromFirestore(
          id
        );

    }


    const categories =
      getCategories()
        .filter(
          item =>
            String(
              item.id
            ) !==
            String(
              id
            )
        );


    saveCategories(
      categories
    );


    toast(
      "Category deleted."
    );

  }

  catch (error) {

    console.error(
      "Category delete error:",
      error
    );


    toast(
      "Category could not be deleted."
    );


    return;

  }


  resetCategoryForm();

  renderCategories();

  renderCategorySelects();

}


/* =========================================
   CATEGORY AUTO SLUG
========================================= */

$("categoryName")
  ?.addEventListener(
    "input",
    function() {

      const slug =
        $("categorySlug");


      if (
        slug &&
        slug.dataset.manual !==
          "true"
      ) {

        slug.value =
          createSlug(
            value(
              "categoryName"
            )
          );

      }

    }
  );


$("categorySlug")
  ?.addEventListener(
    "input",
    function() {

      const node =
        $("categorySlug");


      if (!node) {

        return;

      }


      if (
        node.value.trim()
      ) {

        node.dataset.manual =
          "true";

      }

      else {

        delete node.dataset
          .manual;

      }

    }
  );


/* =========================================
   RENDER CATEGORIES
========================================= */

function renderCategories() {

  const list =
    $("adminCategoriesList");


  if (!list) {

    return;

  }


  const categories =
    getCategories();


  if (
    !categories.length
  ) {

    list.innerHTML =
      `
        <div class="admin-empty-state">
          No categories yet.
        </div>
      `;

    return;

  }


  list.innerHTML =
    categories
      .map(
        category => {

          return `
            <article class="admin-category-card">

              <div class="admin-category-card-image">

                ${
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
                            (
                              category.name ||
                              "C"
                            )
                              .charAt(0)
                              .toUpperCase()
                          )}
                        </div>
                      `
                }

              </div>


              <div class="admin-category-card-content">

                <div class="admin-category-card-top">

                  <strong>
                    ${escapeHtml(
                      category.name
                    )}
                  </strong>

                  <span
                    class="status-badge ${
                      category.status ===
                      "inactive"
                        ? "inactive"
                        : "active"
                    }"
                  >
                    ${escapeHtml(
                      category.status ||
                      "active"
                    )}
                  </span>

                </div>


                <p>
                  ${escapeHtml(
                    category.description ||
                    "No description."
                  )}
                </p>


                <small>
                  Order:
                  ${escapeHtml(
                    category.order ||
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


  list
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


  list
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


$("cancelCategoryEditButton")
  ?.addEventListener(
    "click",
    function() {

      resetCategoryForm();

    }
  );

/* =========================================
   HOMEPAGE CONTENT HELPERS
========================================= */

function getHomepageContent() {

  const stored =
    readStore(
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


  setValue(
    "homepagePromo1ImageData",
    data.promos[0].image
  );

  setValue(
    "homepagePromo1Title",
    data.promos[0].title
  );

  setValue(
    "homepagePromo1Subtitle",
    data.promos[0].subtitle
  );

  setValue(
    "homepagePromo1ButtonText",
    data.promos[0].buttonText
  );

  setValue(
    "homepagePromo1Link",
    data.promos[0].link
  );


  setValue(
    "homepagePromo2ImageData",
    data.promos[1].image
  );

  setValue(
    "homepagePromo2Title",
    data.promos[1].title
  );

  setValue(
    "homepagePromo2Subtitle",
    data.promos[1].subtitle
  );

  setValue(
    "homepagePromo2ButtonText",
    data.promos[1].buttonText
  );

  setValue(
    "homepagePromo2Link",
    data.promos[1].link
  );


  setValue(
    "homepagePromo3ImageData",
    data.promos[2].image
  );

  setValue(
    "homepagePromo3Title",
    data.promos[2].title
  );

  setValue(
    "homepagePromo3Subtitle",
    data.promos[2].subtitle
  );

  setValue(
    "homepagePromo3ButtonText",
    data.promos[2].buttonText
  );

  setValue(
    "homepagePromo3Link",
    data.promos[2].link
  );


  showPreview(
    $("homepagePromo1ImagePreview"),
    data.promos[0].image
  );

  showPreview(
    $("homepagePromo2ImagePreview"),
    data.promos[1].image
  );

  showPreview(
    $("homepagePromo3ImagePreview"),
    data.promos[2].image
  );


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


  setValue(
    "homepageAffiliateDisclosure",
    data.affiliateDisclosure
  );


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
   COLLECT HOMEPAGE CONTENT
========================================= */

function collectHomepageContent() {

  const old =
    getHomepageContent();


  return {

    topInfo: [

      {
        icon:
          value(
            "homepageTopInfo1Icon"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .topInfo[0].icon,

        text:
          value(
            "homepageTopInfo1Text"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .topInfo[0].text
      },

      {
        icon:
          value(
            "homepageTopInfo2Icon"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .topInfo[1].icon,

        text:
          value(
            "homepageTopInfo2Text"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .topInfo[1].text
      },

      {
        icon:
          value(
            "homepageTopInfo3Icon"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .topInfo[2].icon,

        text:
          value(
            "homepageTopInfo3Text"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .topInfo[2].text
      }

    ],


    utilityItems: [

      {
        icon:
          value(
            "homepageUtility1Icon"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[0].icon,

        title:
          value(
            "homepageUtility1Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[0].title,

        subtitle:
          value(
            "homepageUtility1Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[0].subtitle
      },

      {
        icon:
          value(
            "homepageUtility2Icon"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[1].icon,

        title:
          value(
            "homepageUtility2Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[1].title,

        subtitle:
          value(
            "homepageUtility2Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[1].subtitle
      },

      {
        icon:
          value(
            "homepageUtility3Icon"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[2].icon,

        title:
          value(
            "homepageUtility3Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[2].title,

        subtitle:
          value(
            "homepageUtility3Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .utilityItems[2].subtitle
      }

    ],


    categoriesTitle:
      value(
        "homepageCategoriesTitle"
      ) ||
      DEFAULT_HOMEPAGE_CONTENT
        .categoriesTitle,


    categoriesSubtitle:
      value(
        "homepageCategoriesSubtitle"
      ) ||
      DEFAULT_HOMEPAGE_CONTENT
        .categoriesSubtitle,


    featuredTitle:
      value(
        "homepageFeaturedTitle"
      ) ||
      DEFAULT_HOMEPAGE_CONTENT
        .featuredTitle,


    featuredSubtitle:
      value(
        "homepageFeaturedSubtitle"
      ) ||
      DEFAULT_HOMEPAGE_CONTENT
        .featuredSubtitle,


    recommendedTitle:
      value(
        "homepageRecommendedTitle"
      ) ||
      DEFAULT_HOMEPAGE_CONTENT
        .recommendedTitle,


    recommendedSubtitle:
      value(
        "homepageRecommendedSubtitle"
      ) ||
      DEFAULT_HOMEPAGE_CONTENT
        .recommendedSubtitle,


    promos: [

      {
        image:
          value(
            "homepagePromo1ImageData"
          ) ||
          old.promos[0].image ||
          "",

        title:
          value(
            "homepagePromo1Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[0].title,

        subtitle:
          value(
            "homepagePromo1Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[0].subtitle,

        buttonText:
          value(
            "homepagePromo1ButtonText"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[0].buttonText,

        link:
          value(
            "homepagePromo1Link"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[0].link
      },

      {
        image:
          value(
            "homepagePromo2ImageData"
          ) ||
          old.promos[1].image ||
          "",

        title:
          value(
            "homepagePromo2Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[1].title,

        subtitle:
          value(
            "homepagePromo2Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[1].subtitle,

        buttonText:
          value(
            "homepagePromo2ButtonText"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[1].buttonText,

        link:
          value(
            "homepagePromo2Link"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[1].link
      },

      {
        image:
          value(
            "homepagePromo3ImageData"
          ) ||
          old.promos[2].image ||
          "",

        title:
          value(
            "homepagePromo3Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[2].title,

        subtitle:
          value(
            "homepagePromo3Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[2].subtitle,

        buttonText:
          value(
            "homepagePromo3ButtonText"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[2].buttonText,

        link:
          value(
            "homepagePromo3Link"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .promos[2].link
      }

    ],


    why: {

      title:
        value(
          "homepageWhyTitle"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .why.title,

      subtitle:
        value(
          "homepageWhySubtitle"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .why.subtitle,

      cards: [

        {
          icon:
            value(
              "homepageWhy1Icon"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[0].icon,

          title:
            value(
              "homepageWhy1Title"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[0].title,

          description:
            value(
              "homepageWhy1Description"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[0].description
        },

        {
          icon:
            value(
              "homepageWhy2Icon"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[1].icon,

          title:
            value(
              "homepageWhy2Title"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[1].title,

          description:
            value(
              "homepageWhy2Description"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[1].description
        },

        {
          icon:
            value(
              "homepageWhy3Icon"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[2].icon,

          title:
            value(
              "homepageWhy3Title"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[2].title,

          description:
            value(
              "homepageWhy3Description"
            ) ||
            DEFAULT_HOMEPAGE_CONTENT
              .why.cards[2].description
        }

      ]

    },


    newsletter: {

      overline:
        value(
          "homepageNewsletterOverline"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .newsletter.overline,

      title:
        value(
          "homepageNewsletterTitle"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .newsletter.title,

      description:
        value(
          "homepageNewsletterDescription"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .newsletter.description,

      placeholder:
        value(
          "homepageNewsletterPlaceholder"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .newsletter.placeholder,

      buttonText:
        value(
          "homepageNewsletterButtonText"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .newsletter.buttonText,

      note:
        value(
          "homepageNewsletterNote"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .newsletter.note

    },


    trustItems: [

      {
        title:
          value(
            "homepageTrust1Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .trustItems[0].title,

        subtitle:
          value(
            "homepageTrust1Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .trustItems[0].subtitle
      },

      {
        title:
          value(
            "homepageTrust2Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .trustItems[1].title,

        subtitle:
          value(
            "homepageTrust2Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .trustItems[1].subtitle
      },

      {
        title:
          value(
            "homepageTrust3Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .trustItems[2].title,

        subtitle:
          value(
            "homepageTrust3Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .trustItems[2].subtitle
      },

      {
        title:
          value(
            "homepageTrust4Title"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .trustItems[3].title,

        subtitle:
          value(
            "homepageTrust4Subtitle"
          ) ||
          DEFAULT_HOMEPAGE_CONTENT
            .trustItems[3].subtitle
      }

    ],


    affiliateDisclosure:
      value(
        "homepageAffiliateDisclosure"
      ) ||
      DEFAULT_HOMEPAGE_CONTENT
        .affiliateDisclosure,


    footer: {

      description:
        value(
          "homepageFooterDescription"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .footer.description,

      communityTitle:
        value(
          "homepageFooterCommunityTitle"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .footer.communityTitle,

      communityText:
        value(
          "homepageFooterCommunityText"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .footer.communityText,

      tagline:
        value(
          "homepageFooterTagline"
        ) ||
        DEFAULT_HOMEPAGE_CONTENT
          .footer.tagline,

      social: {

        facebook:
          value(
            "homepageFacebookUrl"
          ),

        instagram:
          value(
            "homepageInstagramUrl"
          ),

        youtube:
          value(
            "homepageYoutubeUrl"
          ),

        x:
          value(
            "homepageXUrl"
          ),

        pinterest:
          value(
            "homepagePinterestUrl"
          )

      }

    },


    updatedAt:
      new Date()
        .toISOString()

  };

}


/* =========================================
   SAVE HOMEPAGE CONTENT
========================================= */

$("homepageContentForm")
  ?.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const button =
        $("saveHomepageContentButton");


      const data =
        collectHomepageContent();


      writeStore(
        HOMEPAGE_CONTENT_KEY,
        data
      );


      try {

        if (button) {

          button.disabled =
            true;

        }


        const firebase =
          await firebaseModule();


        if (
          firebase &&
          typeof firebase
            .saveHomepageContentToFirestore ===
            "function"
        ) {

          await firebase
            .saveHomepageContentToFirestore(
              data
            );


          toast(
            "Homepage content saved."
          );

        }

        else {

          toast(
            "Homepage content saved locally."
          );

        }

      }

      catch (error) {

        console.error(
          "Homepage Firebase save error:",
          error
        );


        toast(
          "Saved locally, but Firebase save failed."
        );

      }

      finally {

        if (button) {

          button.disabled =
            false;

        }

      }

    }
  );


/* =========================================
   BANNERS
========================================= */

function getBannerSettings() {

  const data =
    readStore(
      BANNER_SETTINGS_KEY,
      {}
    );


  return {

    hero: {

      image:
        data.hero?.image ||
        "",

      overline:
        data.hero?.overline ||
        "A SMARTER WAY TO SHOP",

      title:
        data.hero?.title ||
        "Know More. Choose Better.",

      subtitle:
        data.hero?.subtitle ||
        "In-depth reviews, buying guides and selected product recommendations for better everyday decisions.",

      buttonText:
        data.hero?.buttonText ||
        "Explore Top Picks",

      buttonLink:
        data.hero?.buttonLink ||
        "#featured",

      point1:
        data.hero?.point1 ||
        "Curated Shortlists",

      point2:
        data.hero?.point2 ||
        "Buying Context",

      point3:
        data.hero?.point3 ||
        "Merchant Links"

    },


    promo: {

      image:
        data.promo?.image ||
        ""

    }

  };

}


function loadBannerSettings() {

  const data =
    getBannerSettings();


  setValue(
    "heroBannerData",
    data.hero.image
  );

  setValue(
    "heroBannerOverline",
    data.hero.overline
  );

  setValue(
    "heroBannerTitle",
    data.hero.title
  );

  setValue(
    "heroBannerSubtitle",
    data.hero.subtitle
  );

  setValue(
    "heroBannerButtonText",
    data.hero.buttonText
  );

  setValue(
    "heroBannerButtonLink",
    data.hero.buttonLink
  );

  setValue(
    "heroPoint1",
    data.hero.point1
  );

  setValue(
    "heroPoint2",
    data.hero.point2
  );

  setValue(
    "heroPoint3",
    data.hero.point3
  );


  setValue(
    "promoBannerData",
    data.promo.image
  );


  showPreview(
    $("heroBannerPreview"),
    data.hero.image
  );


  showPreview(
    $("promoBannerPreview"),
    data.promo.image
  );

}


$("saveBannerSettingsButton")
  ?.addEventListener(
    "click",
    async function() {

      const button =
        $("saveBannerSettingsButton");


      const data = {

        hero: {

          image:
            value(
              "heroBannerData"
            ),

          overline:
            value(
              "heroBannerOverline"
            ) ||
            "A SMARTER WAY TO SHOP",

          title:
            value(
              "heroBannerTitle"
            ) ||
            "Know More. Choose Better.",

          subtitle:
            value(
              "heroBannerSubtitle"
            ),

          buttonText:
            value(
              "heroBannerButtonText"
            ) ||
            "Explore Top Picks",

          buttonLink:
            value(
              "heroBannerButtonLink"
            ) ||
            "#featured",

          point1:
            value(
              "heroPoint1"
            ) ||
            "Curated Shortlists",

          point2:
            value(
              "heroPoint2"
            ) ||
            "Buying Context",

          point3:
            value(
              "heroPoint3"
            ) ||
            "Merchant Links"

        },


        promo: {

          image:
            value(
              "promoBannerData"
            )

        },


        updatedAt:
          new Date()
            .toISOString()

      };


      writeStore(
        BANNER_SETTINGS_KEY,
        data
      );


      try {

        if (button) {

          button.disabled =
            true;

        }


        const firebase =
          await firebaseModule();


        if (
          firebase &&
          typeof firebase
            .saveBannerSettingsToFirestore ===
            "function"
        ) {

          await firebase
            .saveBannerSettingsToFirestore(
              data
            );


          toast(
            "Banner settings saved."
          );

        }

        else {

          toast(
            "Banner settings saved locally."
          );

        }

      }

      catch (error) {

        console.error(
          "Banner save error:",
          error
        );


        toast(
          "Saved locally, but Firebase save failed."
        );

      }

      finally {

        if (button) {

          button.disabled =
            false;

        }

      }

    }
  );

 /* =========================================
   SITE SEO
========================================= */

function loadSiteSeo() {

  const data =
    readStore(
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


$("siteSeoForm")
  ?.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const data = {

        title:
          value(
            "siteSeoTitle"
          ),

        description:
          value(
            "siteSeoDescription"
          ),

        url:
          value(
            "siteSeoUrl"
          ),

        language:
          value(
            "siteSeoLanguage"
          ),

        keywords:
          tagsToArray(
            value(
              "siteSeoKeywords"
            )
          ),

        ogImage:
          value(
            "siteSeoOgImage"
          ),

        twitterHandle:
          value(
            "siteSeoTwitterHandle"
          ),

        schema:
          value(
            "siteSeoSchema"
          ),

        updatedAt:
          new Date()
            .toISOString()

      };


      writeStore(
        SITE_SEO_KEY,
        data
      );


      try {

        const firebase =
          await firebaseModule();


        if (
          firebase &&
          typeof firebase
            .saveSiteSeoToFirestore ===
            "function"
        ) {

          await firebase
            .saveSiteSeoToFirestore(
              data
            );


          toast(
            "SEO settings saved."
          );

        }

        else {

          toast(
            "SEO settings saved locally."
          );

        }

      }

      catch (error) {

        console.error(
          "SEO Firebase save error:",
          error
        );


        toast(
          "Saved locally, but Firebase save failed."
        );

      }

    }
  );



  /* =========================================
   SITE SETTINGS
========================================= */

function loadSiteSettings() {

  const data =
    readStore(
      SITE_SETTINGS_KEY,
      null
    );


  if (!data) {
    return;
  }


  setValue(
    "siteName",
    data.siteName
  );


  setValue(
    "siteTagline",
    data.tagline
  );


  setValue(
    "siteLogoData",
    data.logoUrl
  );


  showPreview(
    $("siteLogoPreview"),
    data.logoUrl || "",
    "No logo selected"
  );

  setValue(
    "siteFaviconData",
    data.faviconUrl
  );


  showPreview(
    $("siteFaviconPreview"),
    data.faviconUrl || "",
    "No favicon selected"
  );

  setValue(
    "siteAffiliateDisclosure",
    data.affiliateDisclosure
  );

}


$("siteSettingsForm")
  ?.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();


      const data = {

        siteName:
          value(
            "siteName"
          ) ||
          "Kinar Aage",

        tagline:
          value(
            "siteTagline"
          ),

        logoUrl:
          value(
            "siteLogoData"
          ),

          faviconUrl:
          value(
            "siteFaviconData"
          ),

        affiliateDisclosure:
          value(
            "siteAffiliateDisclosure"
          ),

        updatedAt:
          new Date()
            .toISOString()

      };


      writeStore(
        SITE_SETTINGS_KEY,
        data
      );


      try {

        const firebase =
          await firebaseModule();


        if (
          firebase &&
          typeof firebase
            .saveSiteSettingsToFirestore ===
            "function"
        ) {

          await firebase
            .saveSiteSettingsToFirestore(
              data
            );


          toast(
            "Website settings saved."
          );

        }

        else {

          toast(
            "Website settings saved locally."
          );

        }

      }

      catch (error) {

        console.error(
          "Site settings Firebase save error:",
          error
        );


        toast(
          "Saved locally, but Firebase save failed."
        );

      }

    }
  );


/* =========================================
   LOGOUT
========================================= */

/*
  Secure Firebase logout is handled by
  admin-auth.js.

  No second logout handler is needed here.
*/

/* =========================================
   AFFILIATE ANALYTICS
========================================= */

function affiliateClickDate(
  click
) {

  const clickedAt =
    click?.clickedAt;


  if (!clickedAt) {
    return null;
  }


  if (
    typeof clickedAt.toDate ===
    "function"
  ) {

    const date =
      clickedAt.toDate();

    return Number.isNaN(
      date.getTime()
    )
      ? null
      : date;

  }


  if (
    typeof clickedAt.seconds ===
    "number"
  ) {

    const date =
      new Date(
        clickedAt.seconds *
        1000
      );

    return Number.isNaN(
      date.getTime()
    )
      ? null
      : date;

  }


  const date =
    new Date(
      clickedAt
    );


  return Number.isNaN(
    date.getTime()
  )
    ? null
    : date;

}


function subtractCalendarMonths(
  date,
  months
) {

  const result =
    new Date(
      date
    );


  const originalDay =
    result.getDate();


  result.setDate(
    1
  );


  result.setMonth(
    result.getMonth() -
    months
  );


  const lastDayOfTargetMonth =
    new Date(
      result.getFullYear(),
      result.getMonth() + 1,
      0
    )
      .getDate();


  result.setDate(
    Math.min(
      originalDay,
      lastDayOfTargetMonth
    )
  );


  return result;

}


function countAffiliateClicksSince(
  clicks,
  cutoff
) {

  return clicks.filter(
    function(click) {

      const date =
        affiliateClickDate(
          click
        );


      return (
        date &&
        date >= cutoff
      );

    }
  )
    .length;

}


function affiliateSourceLabel(
  source
) {

  const cleanSource =
    String(
      source ||
      "unknown"
    )
      .trim();


  const knownLabels = {

    category_page:
      "Category Page",

    search_page:
      "Search Page",

    wishlist_page:
      "Wishlist Page",

    featured_page:
      "Featured Page",

    recommendations_page:
      "Recommendations Page",

    product_page:
      "Product Page",

    related_products:
      "Related Products",

    homepage_featured:
      "Homepage Featured",

    homepage_recommended:
      "Homepage Recommendations",

    homepage:
      "Homepage"

  };


  if (
    knownLabels[
      cleanSource
    ]
  ) {

    return knownLabels[
      cleanSource
    ];

  }


  return cleanSource
    .replace(
      /[_-]+/g,
      " "
    )
    .replace(
      /\b\w/g,
      function(character) {

        return character
          .toUpperCase();

      }
    );

}


function findAffiliateProduct(
  click,
  products
) {

  const productId =
    String(
      click?.productId ||
      ""
    );


  const productSlug =
    String(
      click?.productSlug ||
      ""
    );


  return (
    products.find(
      function(product) {

        return (
          productId &&
          String(
            product.id ||
            ""
          ) ===
          productId
        );

      }
    ) ||

    products.find(
      function(product) {

        return (
          productSlug &&
          String(
            product.slug ||
            ""
          ) ===
          productSlug
        );

      }
    ) ||

    null
  );

}


function getAffiliateProductName(
  click,
  products
) {

  const product =
    findAffiliateProduct(
      click,
      products
    );


  if (
    product?.name
  ) {

    return product.name;

  }


  if (
    click?.productSlug
  ) {

    return String(
      click.productSlug
    )
      .replace(
        /[-_]+/g,
        " "
      )
      .replace(
        /\b\w/g,
        function(character) {

          return character
            .toUpperCase();

        }
      );

  }


  return (
    String(
      click?.productId ||
      ""
    ) ||
    "Unknown Product"
  );

}


function getAffiliateProductKey(
  click
) {

  return (
    String(
      click?.productId ||
      ""
    ) ||

    String(
      click?.productSlug ||
      ""
    ) ||

    "unknown-product"
  );

}


function renderAffiliateSourceBreakdown(
  clicks
) {

  const container =
    $(
      "affiliateSourceBreakdown"
    );


  if (!container) {
    return;
  }


  if (
    !clicks.length
  ) {

    container.innerHTML =
      `
        <div class="admin-empty-state">
          No affiliate click data yet.
        </div>
      `;

    return;

  }


  const sources =
    {};


  clicks.forEach(
    function(click) {

      const source =
        String(
          click.source ||
          "unknown"
        );


      sources[source] =
        (
          sources[source] ||
          0
        ) + 1;

    }
  );


  const rows =
    Object.entries(
      sources
    )
      .sort(
        function(a, b) {

          return (
            b[1] -
            a[1]
          );

        }
      );


  container.innerHTML =
    rows
      .map(
        function(
          [source, count]
        ) {

          const percentage =
            clicks.length
              ? (
                  count /
                  clicks.length *
                  100
                )
                  .toFixed(
                    1
                  )
              : "0.0";


          return `
            <div class="dashboard-product-row">

              <strong>
                ${escapeHtml(
                  affiliateSourceLabel(
                    source
                  )
                )}
              </strong>

              <span>
                ${count} ${
                  count === 1
                    ? "Click"
                    : "Clicks"
                }
              </span>

              <span>
                ${percentage}%
              </span>

            </div>
          `;

        }
      )
      .join("");

}


function renderAffiliateProductPerformance(
  clicks
) {

  const container =
    $(
      "affiliateProductTable"
    );


  if (!container) {
    return;
  }


  if (
    !clicks.length
  ) {

    container.innerHTML =
      `
        <div class="admin-empty-state">
          No product click data yet.
        </div>
      `;

    return;

  }


  const products =
    getProducts();


  const grouped =
    {};


  clicks.forEach(
    function(click) {

      const key =
        getAffiliateProductKey(
          click
        );


      if (
        !grouped[key]
      ) {

        grouped[key] = {

          click:
            click,

          count:
            0

        };

      }


      grouped[key].count +=
        1;

    }
  );


  const rows =
    Object.values(
      grouped
    )
      .sort(
        function(a, b) {

          return (
            b.count -
            a.count
          );

        }
      );


  container.innerHTML =
    rows
      .map(
        function(item) {

          const productName =
            getAffiliateProductName(
              item.click,
              products
            );


          const productSlug =
            String(
              item.click
                ?.productSlug ||
              ""
            );


          return `
            <div class="dashboard-product-row">

              <strong>
                ${escapeHtml(
                  productName
                )}
              </strong>

              <span>
                ${
                  productSlug
                    ? escapeHtml(
                        productSlug
                      )
                    : "—"
                }
              </span>

              <span>
                ${item.count} ${
                  item.count === 1
                    ? "Click"
                    : "Clicks"
                }
              </span>

            </div>
          `;

        }
      )
      .join("");

}


function renderAffiliateTopProduct(
  clicks
) {

  const node =
    $(
      "affiliateTopProduct"
    );


  if (!node) {
    return;
  }


  if (
    !clicks.length
  ) {

    node.textContent =
      "—";

    return;

  }


  const grouped =
    {};


  clicks.forEach(
    function(click) {

      const key =
        getAffiliateProductKey(
          click
        );


      if (
        !grouped[key]
      ) {

        grouped[key] = {

          click:
            click,

          count:
            0

        };

      }


      grouped[key].count +=
        1;

    }
  );


  const top =
    Object.values(
      grouped
    )
      .sort(
        function(a, b) {

          return (
            b.count -
            a.count
          );

        }
      )[0];


  if (!top) {

    node.textContent =
      "—";

    return;

  }


  const productName =
    getAffiliateProductName(
      top.click,
      getProducts()
    );


  node.textContent =
    `${productName} (${top.count})`;

}


async function loadAffiliateAnalytics() {

  const status =
    $(
      "affiliateAnalyticsStatus"
    );


  const refreshButton =
    $(
      "affiliateAnalyticsRefresh"
    );


  if (
    refreshButton
  ) {

    refreshButton.disabled =
      true;

  }


  if (
    status
  ) {

    status.textContent =
      "Loading affiliate analytics...";

  }


  try {

    const firebase =
      await firebaseModule();


    if (
      !firebase ||
      typeof firebase
        .getAffiliateClicksFromFirestore !==
        "function"
    ) {

      throw new Error(
        "Affiliate analytics service is unavailable."
      );

    }


    const result =
      await firebase
        .getAffiliateClicksFromFirestore();


    const clicks =
      Array.isArray(
        result
      )
        ? result
        : [];


    const now =
      new Date();


    const todayStart =
      new Date(
        now
      );


    todayStart.setHours(
      0,
      0,
      0,
      0
    );


    const sevenDaysAgo =
      new Date(
        now.getTime() -
        (
          7 *
          24 *
          60 *
          60 *
          1000
        )
      );


    const oneMonthAgo =
      subtractCalendarMonths(
        now,
        1
      );


    const threeMonthsAgo =
      subtractCalendarMonths(
        now,
        3
      );


    const sixMonthsAgo =
      subtractCalendarMonths(
        now,
        6
      );


    const twelveMonthsAgo =
      subtractCalendarMonths(
        now,
        12
      );


    const twentyFourMonthsAgo =
      subtractCalendarMonths(
        now,
        24
      );


    if (
      $("affiliateTotalClicks")
    ) {

      $("affiliateTotalClicks")
        .textContent =
        clicks.length;

    }


    if (
      $("affiliateTodayClicks")
    ) {

      $("affiliateTodayClicks")
        .textContent =
        countAffiliateClicksSince(
          clicks,
          todayStart
        );

    }


    if (
      $("affiliateLast7DaysClicks")
    ) {

      $("affiliateLast7DaysClicks")
        .textContent =
        countAffiliateClicksSince(
          clicks,
          sevenDaysAgo
        );

    }


    if (
      $("affiliateLast1MonthClicks")
    ) {

      $("affiliateLast1MonthClicks")
        .textContent =
        countAffiliateClicksSince(
          clicks,
          oneMonthAgo
        );

    }


    if (
      $("affiliateLast3MonthsClicks")
    ) {

      $("affiliateLast3MonthsClicks")
        .textContent =
        countAffiliateClicksSince(
          clicks,
          threeMonthsAgo
        );

    }


    if (
      $("affiliateLast6MonthsClicks")
    ) {

      $("affiliateLast6MonthsClicks")
        .textContent =
        countAffiliateClicksSince(
          clicks,
          sixMonthsAgo
        );

    }


    if (
      $("affiliateLast12MonthsClicks")
    ) {

      $("affiliateLast12MonthsClicks")
        .textContent =
        countAffiliateClicksSince(
          clicks,
          twelveMonthsAgo
        );

    }


    if (
      $("affiliateLast24MonthsClicks")
    ) {

      $("affiliateLast24MonthsClicks")
        .textContent =
        countAffiliateClicksSince(
          clicks,
          twentyFourMonthsAgo
        );

    }


    renderAffiliateTopProduct(
      clicks
    );


    renderAffiliateSourceBreakdown(
      clicks
    );


    renderAffiliateProductPerformance(
      clicks
    );


    if (
      status
    ) {

      status.textContent =
        clicks.length
          ? `Showing ${clicks.length} recorded affiliate click${
              clicks.length === 1
                ? ""
                : "s"
            }. Last updated ${now.toLocaleString()}.`
          : "No affiliate clicks have been recorded yet.";

    }

  }

  catch (error) {

    console.error(
      "Affiliate analytics load error:",
      error
    );


    if (
      status
    ) {

      status.textContent =
        "Affiliate analytics could not be loaded.";

    }


    if (
      $("affiliateSourceBreakdown")
    ) {

      $("affiliateSourceBreakdown")
        .innerHTML =
        `
          <div class="admin-empty-state">
            Analytics data could not be loaded.
          </div>
        `;

    }


    if (
      $("affiliateProductTable")
    ) {

      $("affiliateProductTable")
        .innerHTML =
        `
          <div class="admin-empty-state">
            Analytics data could not be loaded.
          </div>
        `;

    }

  }

  finally {

    if (
      refreshButton
    ) {

      refreshButton.disabled =
        false;

    }

  }

}


/* =========================================
   AFFILIATE ANALYTICS EVENTS
========================================= */

$(
  "affiliateAnalyticsRefresh"
)
  ?.addEventListener(
    "click",
    function() {

      loadAffiliateAnalytics();

    }
  );


document
  .querySelector(
    '[data-page="affiliateAnalyticsPage"]'
  )
  ?.addEventListener(
    "click",
    function() {

      loadAffiliateAnalytics();

    }
  );

/* =========================================
   NEWSLETTER SUBSCRIBERS
========================================= */

let newsletterSubscribersCache =
  [];

let newsletterSubscribersRawCount =
  0;


/* =========================================
   NEWSLETTER DATE HELPER
========================================= */

function newsletterSubscriberDate(
  subscriber
) {

  const subscribedAt =
    subscriber?.subscribedAt;


  if (!subscribedAt) {

    return null;

  }


  if (
    typeof subscribedAt.toDate ===
    "function"
  ) {

    const date =
      subscribedAt.toDate();


    return Number.isNaN(
      date.getTime()
    )
      ? null
      : date;

  }


  if (
    typeof subscribedAt.seconds ===
    "number"
  ) {

    const date =
      new Date(
        subscribedAt.seconds *
        1000
      );


    return Number.isNaN(
      date.getTime()
    )
      ? null
      : date;

  }


  const date =
    new Date(
      subscribedAt
    );


  return Number.isNaN(
    date.getTime()
  )
    ? null
    : date;

}


/* =========================================
   DHAKA DATE KEY
========================================= */

function dhakaDateKey(
  date
) {

  if (
    !(date instanceof Date) ||
    Number.isNaN(
      date.getTime()
    )
  ) {

    return "";

  }


  const parts =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone:
          "Asia/Dhaka",

        year:
          "numeric",

        month:
          "2-digit",

        day:
          "2-digit"
      }
    )
      .formatToParts(
        date
      );


  const values =
    {};


  parts.forEach(
    function(part) {

      if (
        part.type !==
        "literal"
      ) {

        values[
          part.type
        ] =
          part.value;

      }

    }
  );


  return [
    values.year,
    values.month,
    values.day
  ]
    .join("-");

}


/* =========================================
   NEWSLETTER DATE DISPLAY
========================================= */

function formatNewsletterDate(
  date
) {

  if (
    !(date instanceof Date) ||
    Number.isNaN(
      date.getTime()
    )
  ) {

    return "—";

  }


  return new Intl.DateTimeFormat(
    "en-GB",
    {
      timeZone:
        "Asia/Dhaka",

      day:
        "2-digit",

      month:
        "2-digit",

      year:
        "numeric",

      hour:
        "2-digit",

      minute:
        "2-digit",

      hour12:
        true
    }
  )
    .format(
      date
    );

}


/* =========================================
   REMOVE DUPLICATE SUBSCRIBERS
========================================= */

function normalizeNewsletterSubscribers(
  subscribers
) {

  const unique =
    new Map();


  (
    Array.isArray(
      subscribers
    )
      ? subscribers
      : []
  )
    .forEach(
      function(subscriber) {

        const email =
          String(
            subscriber?.email ||
            ""
          )
            .trim()
            .toLowerCase();


        if (!email) {

          return;

        }


        const date =
          newsletterSubscriberDate(
            subscriber
          );


        const existing =
          unique.get(
            email
          );


        /*
         * If the same email was submitted
         * more than once, keep its earliest
         * subscription record.
         */

        if (
          !existing ||
          (
            date &&
            (
              !existing.subscriptionDate ||
              date <
                existing.subscriptionDate
            )
          )
        ) {

          unique.set(
            email,
            {
              ...subscriber,

              email:
                email,

              subscriptionDate:
                date
            }
          );

        }

      }
    );


  return Array.from(
    unique.values()
  )
    .sort(
      function(a, b) {

        const aTime =
          a.subscriptionDate
            ?.getTime() ||
          0;

        const bTime =
          b.subscriptionDate
            ?.getTime() ||
          0;


        return (
          bTime -
          aTime
        );

      }
    );

}


/* =========================================
   NEWSLETTER STATS
========================================= */

function updateNewsletterSubscriberStats(
  subscribers
) {

  const now =
    new Date();


  const todayKey =
    dhakaDateKey(
      now
    );


  const sevenDaysAgo =
    new Date(
      now.getTime() -
      (
        7 *
        24 *
        60 *
        60 *
        1000
      )
    );


  const thirtyDaysAgo =
    new Date(
      now.getTime() -
      (
        30 *
        24 *
        60 *
        60 *
        1000
      )
    );


  const todayCount =
    subscribers.filter(
      function(subscriber) {

        const date =
          subscriber
            .subscriptionDate;


        return (
          date &&
          dhakaDateKey(
            date
          ) ===
            todayKey
        );

      }
    )
      .length;


  const last7Days =
    subscribers.filter(
      function(subscriber) {

        const date =
          subscriber
            .subscriptionDate;


        return (
          date &&
          date >=
            sevenDaysAgo &&
          date <=
            now
        );

      }
    )
      .length;


  const last30Days =
    subscribers.filter(
      function(subscriber) {

        const date =
          subscriber
            .subscriptionDate;


        return (
          date &&
          date >=
            thirtyDaysAgo &&
          date <=
            now
        );

      }
    )
      .length;


  if (
    $("newsletterTotalSubscribers")
  ) {

    $("newsletterTotalSubscribers")
      .textContent =
      subscribers.length;

  }


  if (
    $("newsletterTodaySubscribers")
  ) {

    $("newsletterTodaySubscribers")
      .textContent =
      todayCount;

  }


  if (
    $("newsletterLast7DaysSubscribers")
  ) {

    $("newsletterLast7DaysSubscribers")
      .textContent =
      last7Days;

  }


  if (
    $("newsletterLast30DaysSubscribers")
  ) {

    $("newsletterLast30DaysSubscribers")
      .textContent =
      last30Days;

  }

}


/* =========================================
   NEWSLETTER LIST
========================================= */

function renderNewsletterSubscribers() {

  const container =
    $(
      "newsletterSubscribersTable"
    );


  if (!container) {

    return;

  }


  const searchValue =
    String(
      $(
        "newsletterSubscriberSearch"
      )
        ?.value ||
      ""
    )
      .trim()
      .toLowerCase();


  const filtered =
    newsletterSubscribersCache
      .filter(
        function(subscriber) {

          const email =
            String(
              subscriber.email ||
              ""
            )
              .toLowerCase();


          const source =
            String(
              subscriber.source ||
              ""
            )
              .toLowerCase();


          return (
            !searchValue ||
            email.includes(
              searchValue
            ) ||
            source.includes(
              searchValue
            )
          );

        }
      );


  if (
    !filtered.length
  ) {

    container.innerHTML =
      `
        <div class="admin-empty-state">
          ${
            searchValue
              ? "No subscriber matched your search."
              : "No newsletter subscribers yet."
          }
        </div>
      `;

    return;

  }


  container.innerHTML =
    filtered
      .map(
        function(subscriber) {

          const source =
            String(
              subscriber.source ||
              "homepage"
            );


          const sourceLabel =
            source ===
              "homepage"
              ? "Homepage"
              : source
                  .replace(
                    /_/g,
                    " "
                  )
                  .replace(
                    /\b\w/g,
                    function(letter) {

                      return letter
                        .toUpperCase();

                    }
                  );


          return `
            <div class="dashboard-product-row">

              <strong>
                ${escapeHtml(
                  subscriber.email
                )}
              </strong>

              <span>
                ${escapeHtml(
                  sourceLabel
                )}
              </span>

              <span>
                ${escapeHtml(
                  formatNewsletterDate(
                    subscriber
                      .subscriptionDate
                  )
                )}
              </span>

            </div>
          `;

        }
      )
      .join("");

}


/* =========================================
   LOAD NEWSLETTER SUBSCRIBERS
========================================= */

async function loadNewsletterSubscribers() {

  const status =
    $(
      "newsletterSubscribersStatus"
    );


  const refreshButton =
    $(
      "newsletterSubscribersRefresh"
    );


  if (
    refreshButton
  ) {

    refreshButton.disabled =
      true;

  }


  if (
    status
  ) {

    status.textContent =
      "Loading newsletter subscribers...";

  }


  try {

    const firebase =
      await firebaseModule();


    if (
      !firebase ||
      typeof firebase
        .getNewsletterSubscribersFromFirestore !==
        "function"
    ) {

      throw new Error(
        "Newsletter subscriber service is unavailable."
      );

    }


    const result =
      await firebase
        .getNewsletterSubscribersFromFirestore();


    const rawSubscribers =
      Array.isArray(
        result
      )
        ? result
        : [];


    newsletterSubscribersRawCount =
      rawSubscribers.length;


    newsletterSubscribersCache =
      normalizeNewsletterSubscribers(
        rawSubscribers
      );


    updateNewsletterSubscriberStats(
      newsletterSubscribersCache
    );


    renderNewsletterSubscribers();


    if (
      status
    ) {

      const duplicateCount =
        Math.max(
          0,
          newsletterSubscribersRawCount -
          newsletterSubscribersCache.length
        );


      status.textContent =
        newsletterSubscribersCache.length
          ? `${
              newsletterSubscribersCache.length
            } unique subscriber${
              newsletterSubscribersCache.length ===
              1
                ? ""
                : "s"
            }${
              duplicateCount
                ? ` · ${duplicateCount} duplicate submission${
                    duplicateCount ===
                    1
                      ? ""
                      : "s"
                  } hidden`
                : ""
            }. Last updated ${
              new Intl.DateTimeFormat(
                "en-GB",
                {
                  timeZone:
                    "Asia/Dhaka",

                  day:
                    "2-digit",

                  month:
                    "2-digit",

                  year:
                    "numeric",

                  hour:
                    "2-digit",

                  minute:
                    "2-digit",

                  second:
                    "2-digit",

                  hour12:
                    true
                }
              )
                .format(
                  new Date()
                )
            }.`
          : "No newsletter subscribers have been recorded yet.";

    }

  }

  catch (error) {

    console.error(
      "Newsletter subscribers load error:",
      error
    );


    newsletterSubscribersCache =
      [];


    newsletterSubscribersRawCount =
      0;


    updateNewsletterSubscriberStats(
      []
    );


    renderNewsletterSubscribers();


    if (
      status
    ) {

      status.textContent =
        "Newsletter subscribers could not be loaded.";

    }

  }

  finally {

    if (
      refreshButton
    ) {

      refreshButton.disabled =
        false;

    }

  }

}


/* =========================================
   NEWSLETTER CSV EXPORT
========================================= */

function newsletterCsvValue(
  value
) {

  const text =
    String(
      value ??
      ""
    );


  return (
    '"' +
    text.replace(
      /"/g,
      '""'
    ) +
    '"'
  );

}


function exportNewsletterSubscribersCsv() {

  if (
    !newsletterSubscribersCache.length
  ) {

    toast(
      "No newsletter subscribers to export."
    );

    return;

  }


  const rows =
    [
      [
        "Email",
        "Source",
        "Subscribed At"
      ],

      ...newsletterSubscribersCache
        .map(
          function(subscriber) {

            return [

              subscriber.email,

              subscriber.source ||
                "homepage",

              formatNewsletterDate(
                subscriber
                  .subscriptionDate
              )

            ];

          }
        )
    ];


  const csv =
    rows
      .map(
        function(row) {

          return row
            .map(
              newsletterCsvValue
            )
            .join(",");

        }
      )
      .join("\n");


  const blob =
    new Blob(
      [
        "\uFEFF",
        csv
      ],
      {
        type:
          "text/csv;charset=utf-8;"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `kinar-aage-newsletter-subscribers-${
      dhakaDateKey(
        new Date()
      )
    }.csv`;


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();


  URL.revokeObjectURL(
    url
  );


  toast(
    "Newsletter subscribers exported."
  );

}


/* =========================================
   NEWSLETTER EVENTS
========================================= */

$(
  "newsletterSubscribersRefresh"
)
  ?.addEventListener(
    "click",
    function() {

      loadNewsletterSubscribers();

    }
  );


$(
  "newsletterSubscriberSearch"
)
  ?.addEventListener(
    "input",
    function() {

      renderNewsletterSubscribers();

    }
  );


$(
  "newsletterSubscribersExport"
)
  ?.addEventListener(
    "click",
    function() {

      exportNewsletterSubscribersCsv();

    }
  );


document
  .querySelector(
    '[data-page="newsletterSubscribersPage"]'
  )
  ?.addEventListener(
    "click",
    function() {

      loadNewsletterSubscribers();

    }
  );

  

/* =========================================
   CONTACT INBOX
========================================= */

let contactMessagesCache =
  [];


/* =========================================
   CONTACT DATE HELPER
========================================= */

function contactMessageDate(
  message
) {

  const submittedAt =
    message?.submittedAt;


  if (!submittedAt) {

    return null;

  }


  if (
    typeof submittedAt.toDate ===
    "function"
  ) {

    const date =
      submittedAt.toDate();


    return Number.isNaN(
      date.getTime()
    )
      ? null
      : date;

  }


  if (
    typeof submittedAt.seconds ===
    "number"
  ) {

    const date =
      new Date(
        submittedAt.seconds *
        1000
      );


    return Number.isNaN(
      date.getTime()
    )
      ? null
      : date;

  }


  const date =
    new Date(
      submittedAt
    );


  return Number.isNaN(
    date.getTime()
  )
    ? null
    : date;

}


/* =========================================
   CONTACT DATE DISPLAY
========================================= */

function formatContactMessageDate(
  date
) {

  if (
    !(date instanceof Date) ||
    Number.isNaN(
      date.getTime()
    )
  ) {

    return "—";

  }


  return new Intl.DateTimeFormat(
    "en-GB",
    {
      timeZone:
        "Asia/Dhaka",

      day:
        "2-digit",

      month:
        "2-digit",

      year:
        "numeric",

      hour:
        "2-digit",

      minute:
        "2-digit",

      hour12:
        true
    }
  )
    .format(
      date
    );

}


/* =========================================
   CONTACT STATUS LABEL
========================================= */

function contactStatusLabel(
  status
) {

  const cleanStatus =
    String(
      status ||
      "new"
    )
      .toLowerCase();


  if (
    cleanStatus ===
    "replied"
  ) {

    return "Replied";

  }


  if (
    cleanStatus ===
    "read"
  ) {

    return "Read";

  }


  return "New";

}


/* =========================================
   CONTACT STATS
========================================= */

function updateContactInboxStats() {

  const total =
    contactMessagesCache.length;


  const newCount =
    contactMessagesCache
      .filter(
        function(message) {

          return (
            String(
              message.status ||
              "new"
            )
              .toLowerCase() ===
            "new"
          );

        }
      )
      .length;


  const readCount =
    contactMessagesCache
      .filter(
        function(message) {

          return (
            String(
              message.status ||
              ""
            )
              .toLowerCase() ===
            "read"
          );

        }
      )
      .length;


  const repliedCount =
    contactMessagesCache
      .filter(
        function(message) {

          return (
            String(
              message.status ||
              ""
            )
              .toLowerCase() ===
            "replied"
          );

        }
      )
      .length;


  if (
    $("contactTotalMessages")
  ) {

    $("contactTotalMessages")
      .textContent =
      total;

  }


  if (
    $("contactNewMessages")
  ) {

    $("contactNewMessages")
      .textContent =
      newCount;

  }


  if (
    $("contactReadMessages")
  ) {

    $("contactReadMessages")
      .textContent =
      readCount;

  }


  if (
    $("contactRepliedMessages")
  ) {

    $("contactRepliedMessages")
      .textContent =
      repliedCount;

  }

}


/* =========================================
   CONTACT INBOX RENDER
========================================= */

function renderContactInbox() {

  const container =
    $(
      "contactInboxTable"
    );


  if (!container) {

    return;

  }


  const searchValue =
    String(
      $(
        "contactInboxSearch"
      )
        ?.value ||
      ""
    )
      .trim()
      .toLowerCase();


  const statusFilter =
    String(
      $(
        "contactInboxFilter"
      )
        ?.value ||
      "all"
    )
      .toLowerCase();


  const messages =
    contactMessagesCache
      .filter(
        function(message) {

          const status =
            String(
              message.status ||
              "new"
            )
              .toLowerCase();


          if (
            statusFilter !==
              "all" &&
            status !==
              statusFilter
          ) {

            return false;

          }


          if (
            !searchValue
          ) {

            return true;

          }


          const searchable =
            [
              message.name,
              message.email,
              message.subject,
              message.message
            ]
              .filter(
                Boolean
              )
              .join(
                " "
              )
              .toLowerCase();


          return searchable.includes(
            searchValue
          );

        }
      );


  if (
    !messages.length
  ) {

    container.innerHTML =
      `
        <div class="admin-empty-state">
          ${
            searchValue ||
            statusFilter !== "all"
              ? "No contact message matched your filter."
              : "No contact messages yet."
          }
        </div>
      `;

    return;

  }


  container.innerHTML =
    messages
      .map(
        function(message) {

          const status =
            String(
              message.status ||
              "new"
            )
              .toLowerCase();


          const safeMessage =
            escapeHtml(
              message.message ||
              ""
            )
              .replace(
                /\n/g,
                "<br>"
              );


          return `
            <div class="dashboard-product-row">

              <div>

                <strong>
                  ${escapeHtml(
                    message.subject ||
                    "No Subject"
                  )}
                </strong>

                <span>
                  ${escapeHtml(
                    message.name ||
                    "Unknown"
                  )}
                  ·
                  ${escapeHtml(
                    message.email ||
                    "No email"
                  )}
                </span>

                <p>
                  ${safeMessage}
                </p>

              </div>


              <span>
                ${escapeHtml(
                  formatContactMessageDate(
                    message.submissionDate
                  )
                )}
              </span>


              <select
                data-contact-message-status="${escapeHtml(
                  message.id
                )}"
                data-current-status="${escapeHtml(
                  status
                )}"
                aria-label="Contact message status"
              >

                <option
                  value="new"
                  ${
                    status ===
                    "new"
                      ? "selected"
                      : ""
                  }
                >
                  New
                </option>

                <option
                  value="read"
                  ${
                    status ===
                    "read"
                      ? "selected"
                      : ""
                  }
                >
                  Read
                </option>

                <option
                  value="replied"
                  ${
                    status ===
                    "replied"
                      ? "selected"
                      : ""
                  }
                >
                  Replied
                </option>

              </select>

            </div>
          `;

        }
      )
      .join("");


  container
    .querySelectorAll(
      "[data-contact-message-status]"
    )
    .forEach(
      function(select) {

        select.addEventListener(
          "change",
          async function() {

            const messageId =
              select.getAttribute(
                "data-contact-message-status"
              );


            const newStatus =
              String(
                select.value ||
                ""
              )
                .toLowerCase();


            const previousStatus =
              String(
                select.getAttribute(
                  "data-current-status"
                ) ||
                "new"
              );


            if (
              !messageId ||
              newStatus ===
                previousStatus
            ) {

              return;

            }


            try {

              select.disabled =
                true;


              const firebase =
                await firebaseModule();


              if (
                !firebase ||
                typeof firebase
                  .updateContactMessageStatus !==
                "function"
              ) {

                throw new Error(
                  "Contact message update service is unavailable."
                );

              }


              await firebase
                .updateContactMessageStatus(
                  messageId,
                  newStatus
                );


              const message =
                contactMessagesCache
                  .find(
                    function(item) {

                      return (
                        String(
                          item.id
                        ) ===
                        String(
                          messageId
                        )
                      );

                    }
                  );


              if (
                message
              ) {

                message.status =
                  newStatus;

              }


              select.setAttribute(
                "data-current-status",
                newStatus
              );


              updateContactInboxStats();


              toast(
                `Message marked as ${contactStatusLabel(
                  newStatus
                )}.`
              );

            }

            catch (error) {

              console.error(
                "Contact message status change error:",
                error
              );


              select.value =
                previousStatus;


              toast(
                "Message status could not be updated."
              );

            }

            finally {

              select.disabled =
                false;

            }

          }
        );

      }
    );

}


/* =========================================
   LOAD CONTACT INBOX
========================================= */

async function loadContactInbox() {

  const status =
    $(
      "contactInboxStatus"
    );


  const refreshButton =
    $(
      "contactInboxRefresh"
    );


  if (
    refreshButton
  ) {

    refreshButton.disabled =
      true;

  }


  if (
    status
  ) {

    status.textContent =
      "Loading contact messages...";

  }


  try {

    const firebase =
      await firebaseModule();


    if (
      !firebase ||
      typeof firebase
        .getContactMessagesFromFirestore !==
      "function"
    ) {

      throw new Error(
        "Contact inbox service is unavailable."
      );

    }


    const result =
      await firebase
        .getContactMessagesFromFirestore();


    contactMessagesCache =
      (
        Array.isArray(
          result
        )
          ? result
          : []
      )
        .map(
          function(message) {

            return {

              ...message,

              status:
                String(
                  message.status ||
                  "new"
                )
                  .toLowerCase(),

              submissionDate:
                contactMessageDate(
                  message
                )

            };

          }
        )
        .sort(
          function(a, b) {

            const aTime =
              a.submissionDate
                ?.getTime() ||
              0;


            const bTime =
              b.submissionDate
                ?.getTime() ||
              0;


            return (
              bTime -
              aTime
            );

          }
        );


    updateContactInboxStats();


    renderContactInbox();


    if (
      status
    ) {

      const newMessages =
        contactMessagesCache
          .filter(
            function(message) {

              return (
                message.status ===
                "new"
              );

            }
          )
          .length;


      status.textContent =
        contactMessagesCache.length
          ? `${
              contactMessagesCache.length
            } message${
              contactMessagesCache.length ===
              1
                ? ""
                : "s"
            } · ${
              newMessages
            } new.`
          : "No contact messages have been recorded yet.";

    }

  }

  catch (error) {

    console.error(
      "Contact inbox load error:",
      error
    );


    contactMessagesCache =
      [];


    updateContactInboxStats();


    renderContactInbox();


    if (
      status
    ) {

      status.textContent =
        "Contact messages could not be loaded.";

    }

  }

  finally {

    if (
      refreshButton
    ) {

      refreshButton.disabled =
        false;

    }

  }

}


/* =========================================
   CONTACT INBOX EVENTS
========================================= */

$(
  "contactInboxRefresh"
)
  ?.addEventListener(
    "click",
    function() {

      loadContactInbox();

    }
  );


$(
  "contactInboxSearch"
)
  ?.addEventListener(
    "input",
    function() {

      renderContactInbox();

    }
  );


$(
  "contactInboxFilter"
)
  ?.addEventListener(
    "change",
    function() {

      renderContactInbox();

    }
  );


document
  .querySelector(
    '[data-page="contactInboxPage"]'
  )
  ?.addEventListener(
    "click",
    function() {

      loadContactInbox();

    }
  );


/* =========================================
   LOAD FIREBASE DATA
========================================= */

async function syncFromFirebase() {

  try {

    const firebase =
      await firebaseModule();


    if (!firebase) {

      return;

    }


    /* =====================================
       PRODUCTS
    ===================================== */

    if (
      typeof firebase
        .getProductsFromFirestore ===
        "function"
    ) {

      const firebaseProducts =
        await firebase
          .getProductsFromFirestore();


      if (
        Array.isArray(
          firebaseProducts
        ) &&
        firebaseProducts.length
      ) {

        saveProducts(
          firebaseProducts
        );

      }

      else {

        const localProducts =
          getProducts();


        if (
          Array.isArray(
            localProducts
          ) &&
          localProducts.length &&
          typeof firebase
            .saveProductToFirestore ===
            "function"
        ) {

          for (
            const product
            of localProducts
          ) {

            await firebase
              .saveProductToFirestore(
                product
              );

          }

        }

      }

    }


    /* =====================================
       CATEGORIES
    ===================================== */

    if (
      typeof firebase
        .getCategoriesFromFirestore ===
        "function"
    ) {

      const firebaseCategories =
        await firebase
          .getCategoriesFromFirestore();


      if (
        Array.isArray(
          firebaseCategories
        ) &&
        firebaseCategories.length
      ) {

        saveCategories(
          firebaseCategories
        );

      }

      else {

        const localCategories =
          getCategories();


        if (
          Array.isArray(
            localCategories
          ) &&
          localCategories.length &&
          typeof firebase
            .saveCategoryToFirestore ===
            "function"
        ) {

          for (
            const category
            of localCategories
          ) {

            await firebase
              .saveCategoryToFirestore(
                category
              );

          }

        }

      }

    }


    /* =====================================
       HOMEPAGE CONTENT
    ===================================== */

    if (
      typeof firebase
        .getHomepageContentFromFirestore ===
        "function"
    ) {

      const firebaseHomepage =
        await firebase
          .getHomepageContentFromFirestore();


      if (
        firebaseHomepage &&
        typeof firebaseHomepage ===
          "object"
      ) {

        writeStore(
          HOMEPAGE_CONTENT_KEY,
          firebaseHomepage
        );

      }

      else {

        const localHomepage =
          readStore(
            HOMEPAGE_CONTENT_KEY,
            null
          );


        if (
          localHomepage &&
          typeof firebase
            .saveHomepageContentToFirestore ===
            "function"
        ) {

          await firebase
            .saveHomepageContentToFirestore(
              localHomepage
            );

        }

      }

    }


    /* =====================================
       BANNER SETTINGS
    ===================================== */

    if (
      typeof firebase
        .getBannerSettingsFromFirestore ===
        "function"
    ) {

      const firebaseBanners =
        await firebase
          .getBannerSettingsFromFirestore();


      if (
        firebaseBanners &&
        typeof firebaseBanners ===
          "object"
      ) {

        writeStore(
          BANNER_SETTINGS_KEY,
          firebaseBanners
        );

      }

      else {

        const localBanners =
          readStore(
            BANNER_SETTINGS_KEY,
            null
          );


        if (
          localBanners &&
          typeof firebase
            .saveBannerSettingsToFirestore ===
            "function"
        ) {

          await firebase
            .saveBannerSettingsToFirestore(
              localBanners
            );

        }

      }

    }


    /* =====================================
       SITE SEO
    ===================================== */

    if (
      typeof firebase
        .getSiteSeoFromFirestore ===
        "function"
    ) {

      const firebaseSeo =
        await firebase
          .getSiteSeoFromFirestore();


      if (
        firebaseSeo &&
        typeof firebaseSeo ===
          "object"
      ) {

        writeStore(
          SITE_SEO_KEY,
          firebaseSeo
        );

      }

      else {

        const localSeo =
          readStore(
            SITE_SEO_KEY,
            null
          );


        if (
          localSeo &&
          typeof firebase
            .saveSiteSeoToFirestore ===
            "function"
        ) {

          await firebase
            .saveSiteSeoToFirestore(
              localSeo
            );

        }

      }

    }


    /* =====================================
       SITE SETTINGS
    ===================================== */

    if (
      typeof firebase
        .getSiteSettingsFromFirestore ===
        "function"
    ) {

      const firebaseSettings =
        await firebase
          .getSiteSettingsFromFirestore();


      if (
        firebaseSettings &&
        typeof firebaseSettings ===
          "object"
      ) {

        writeStore(
          SITE_SETTINGS_KEY,
          firebaseSettings
        );

      }

      else {

        const localSettings =
          readStore(
            SITE_SETTINGS_KEY,
            null
          );


        if (
          localSettings &&
          typeof firebase
            .saveSiteSettingsToFirestore ===
            "function"
        ) {

          await firebase
            .saveSiteSettingsToFirestore(
              localSettings
            );

        }

      }

    }


    console.log(
      "Firebase sync completed."
    );

  }

  catch (error) {

    console.error(
      "Firebase initial sync error:",
      error
    );

  }

}


/* =========================================
   START ADMIN
========================================= */

async function startAdmin() {

  const savedPage =
    localStorage.getItem(
      ACTIVE_PAGE_KEY
    );


  openPage(
    savedPage &&
    PAGE_CONFIG[
      savedPage
    ]
      ? savedPage
      : "dashboardPage"
  );


   await syncFromFirebase();


  if (
    localStorage.getItem(
      ACTIVE_PAGE_KEY
    ) ===
    "affiliateAnalyticsPage"
  ) {

    await loadAffiliateAnalytics();

  }


  if (
    localStorage.getItem(
      ACTIVE_PAGE_KEY
    ) ===
    "newsletterSubscribersPage"
  ) {

    await loadNewsletterSubscribers();

  }


  if (
    localStorage.getItem(
      ACTIVE_PAGE_KEY
    ) ===
    "contactInboxPage"
  ) {

    await loadContactInbox();

  }


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

  refreshIcons();

}


startAdmin(); 