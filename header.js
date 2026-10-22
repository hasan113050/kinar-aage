/* =========================================
   KINAR AAGE - SHARED HEADER
========================================= */


/* =========================================
   FIREBASE MODULE CACHE
========================================= */

let headerFirebaseModulePromise = null;


function getHeaderFirebaseModule() {

  if (!headerFirebaseModulePromise) {

    headerFirebaseModulePromise =
      import("./firebase-db.js")
        .catch(
          error => {

            console.error(
              "Header Firebase module load error:",
              error
            );

            headerFirebaseModulePromise =
              null;

            return null;

          }
        );

  }


  return headerFirebaseModulePromise;

}


/* =========================================
   HTML ESCAPE
========================================= */

function escapeHeaderSearchHtml(
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


/* =========================================
   SHARED HEADER
========================================= */

function loadSharedHeader() {

  const header =
    document.querySelector(
      ".site-header"
    );


  if (!header) {
    return;
  }


  header.innerHTML = `

    <div class="container header-inner">


      <a
        href="index.html"
        class="site-logo"
        aria-label="Kinar Aage Home"
        style="
          visibility:hidden;
          min-width:120px;
          min-height:40px;
          display:flex;
          align-items:center;
        "
      >

        <span class="logo-main">
          Kinar
        </span>

        <span class="logo-accent">
          Aage
        </span>

      </a>


      <nav
        class="desktop-nav"
        aria-label="Primary Navigation"
      >

        <a href="index.html">
          Home
        </a>

        <a href="index.html#categories">
          Categories
        </a>

        <a href="featured.html">
          Featured
        </a>

        <a href="recommendations.html">
          Recommendations
        </a>

        <a href="about.html">
          About
        </a>

      </nav>


      <form
        id="headerSearchForm"
        class="top-search-form"
        autocomplete="off"
      >

        <input
          id="headerSearchInput"
          type="search"
          placeholder="Search products..."
          autocomplete="off"
          aria-label="Search products"
        >

        <div
          id="headerSearchSuggestions"
          class="header-search-suggestions"
          hidden
        ></div>

      </form>


      <div class="header-actions">

        <a
          href="wishlist.html"
          class="header-icon-button"
        >

          Saved

          <span
            id="wishlistCount"
            class="header-count"
          >
            0
          </span>

        </a>


        <button
          id="mobileMenuButton"
          class="mobile-menu-button"
          type="button"
          aria-label="Open Menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


    </div>


    <!-- =========================================
         SHARED UTILITY ROW
    ========================================== -->

    <section class="utility-row-section">

  <div class="container utility-row">


    <div class="category-dropdown">


      <button
        id="allCategoriesButton"
        class="all-category-button"
        type="button"
        aria-expanded="false"
      >

        <span class="all-category-icon">
          ☰
        </span>

        <span>
          All Categories
        </span>

        <span class="category-dropdown-arrow">
          ▾
        </span>

      </button>


      <div
        id="categoryDropdownMenu"
        class="category-dropdown-menu"
        hidden
      >

        <div
          id="categoryDropdownList"
          class="category-dropdown-list"
        >

          <div class="category-dropdown-loading">
            Loading categories...
          </div>

        </div>

      </div>


    </div>



    <div class="utility-features">


      <!-- =========================
           UTILITY ITEM 1
      ========================== -->

      <div class="utility-feature">

        <span
          id="utility1Icon"
          class="utility-feature-icon"
        >
          ✦
        </span>

        <div>

          <strong id="utility1Title">
            Focused Product Shortlists
          </strong>

          <small id="utility1Subtitle">
            Less clutter, easier browsing
          </small>

        </div>

      </div>



      <!-- =========================
           UTILITY ITEM 2
      ========================== -->

      <div class="utility-feature">

        <span
          id="utility2Icon"
          class="utility-feature-icon"
        >
          ✓
        </span>

        <div>

          <strong id="utility2Title">
            Useful Buying Context
          </strong>

          <small id="utility2Subtitle">
            Key details before you decide
          </small>

        </div>

      </div>



      <!-- =========================
           UTILITY ITEM 3
      ========================== -->

      <div class="utility-feature">

        <span
          id="utility3Icon"
          class="utility-feature-icon"
        >
          ↗
        </span>

        <div>

          <strong id="utility3Title">
            External Merchant Links
          </strong>

          <small id="utility3Subtitle">
            Compare here, buy from merchants
          </small>

        </div>

      </div>


    </div>


  </div>

</section>


    <!-- =========================================
         MOBILE MENU
    ========================================== -->

    <div
      id="mobileMenu"
      class="mobile-menu"
    >

      <div class="mobile-menu-inner">


        <div class="mobile-menu-head">

          <strong>
            Menu
          </strong>


          <button
            id="mobileMenuCloseButton"
            type="button"
            aria-label="Close Menu"
          >
            ×
          </button>

        </div>


        <nav>

          <a href="index.html">
            Home
          </a>

          <a href="index.html#categories">
            Categories
          </a>

          <a href="featured.html">
            Featured
          </a>

          <a href="recommendations.html">
            Recommendations
          </a>

          <a href="wishlist.html">
            Saved Products
          </a>

          <a href="about.html">
            About
          </a>

          <a href="contact.html">
            Contact
          </a>

        </nav>


      </div>

    </div>

  `;


  loadSharedLogo();

  setupCategoryDropdown();

  setupMobileMenu();

  setupHeaderSearch();

  updateSharedWishlistCount();

}


/* =========================================
   SHARED WEBSITE LOGO
========================================= */

async function loadSharedLogo() {

  const logos =
    document.querySelectorAll(
      ".site-logo"
    );


  if (!logos.length) {
    return;
  }


  const fallbackContent =
    `
      <span class="logo-main">
        Kinar
      </span>

      <span class="logo-accent">
        Aage
      </span>
    `;


  logos.forEach(
    logo => {

      logo.style.visibility =
        "hidden";

    }
  );


  let settings = null;


  /* =====================================
     LOCAL FALLBACK
  ===================================== */

  try {

    const stored =
      localStorage.getItem(
        "kinarAageSiteSettings"
      );


    if (stored) {

      settings =
        JSON.parse(
          stored
        );

    }

  }

  catch (error) {

    console.warn(
      "Local site settings load error:",
      error
    );

  }


  /* =====================================
     FIRESTORE LATEST SETTINGS
  ===================================== */

  try {

    const firebaseModule =
      await getHeaderFirebaseModule();


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


        localStorage.setItem(
          "kinarAageSiteSettings",
          JSON.stringify(
            firebaseSettings
          )
        );

      }

    }

  }

  catch (error) {

    console.error(
      "Shared logo Firestore load error:",
      error
    );

  }


  const siteName =
    settings?.siteName ||
    "Kinar Aage";


  const imageUrl =
    String(
      settings?.logoUrl ||
      ""
    )
      .trim();


  /* =====================================
     FALLBACK TEXT LOGO
  ===================================== */

  if (!imageUrl) {

    logos.forEach(
      logo => {

        logo.innerHTML =
          fallbackContent;


        logo.setAttribute(
          "aria-label",
          `${siteName} Home`
        );


        logo.style.visibility =
          "visible";

      }
    );


    return;

  }


  /* =====================================
     PRELOAD IMAGE
  ===================================== */

  const preloadImage =
    new Image();


  preloadImage.onload =
    function() {

      logos.forEach(
        logo => {

          logo.setAttribute(
            "aria-label",
            `${siteName} Home`
          );


          logo.innerHTML =
            `
              <img
                class="site-logo-image"
                src="${escapeHeaderSearchHtml(
                  imageUrl
                )}"
                alt="${escapeHeaderSearchHtml(
                  siteName
                )}"
              >
            `;


          const image =
            logo.querySelector(
              ".site-logo-image"
            );


          if (image) {

            image.style.display =
              "block";

            image.style.width =
              "auto";

            image.style.objectFit =
              "contain";


            if (
              logo.classList.contains(
                "footer-logo"
              )
            ) {

              image.style.maxWidth =
                "180px";

              image.style.maxHeight =
                "55px";

            }

            else {

              image.style.maxWidth =
                "180px";

              image.style.maxHeight =
                "48px";

            }

          }


          logo.style.visibility =
            "visible";

        }
      );

    };


  preloadImage.onerror =
    function() {

      logos.forEach(
        logo => {

          logo.innerHTML =
            fallbackContent;


          logo.style.visibility =
            "visible";

        }
      );

    };


  preloadImage.src =
    imageUrl;

}


/* =========================================
   SHARED WEBSITE FAVICON
========================================= */

async function loadSharedFavicon() {

  let settings = null;


  /* LOCAL FALLBACK */

  try {

    const stored =
      localStorage.getItem(
        "kinarAageSiteSettings"
      );


    if (stored) {

      settings =
        JSON.parse(
          stored
        );

    }

  }

  catch (error) {

    console.warn(
      "Local favicon settings load error:",
      error
    );

  }


  /* FIRESTORE LATEST SETTINGS */

  try {

    const firebaseModule =
      await getHeaderFirebaseModule();


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


        localStorage.setItem(
          "kinarAageSiteSettings",
          JSON.stringify(
            firebaseSettings
          )
        );

      }

    }

  }

  catch (error) {

    console.error(
      "Shared favicon Firestore load error:",
      error
    );

  }


  const faviconUrl =
    String(
      settings?.faviconUrl ||
      ""
    )
      .trim();


  if (!faviconUrl) {
    return;
  }


  let favicon =
    document.querySelector(
      'link[rel="icon"]'
    );


  if (!favicon) {

    favicon =
      document.createElement(
        "link"
      );


    favicon.rel =
      "icon";


    document.head.appendChild(
      favicon
    );

  }


  favicon.href =
    faviconUrl;

}

/* =========================================
   CATEGORY DROPDOWN
========================================= */

function setupCategoryDropdown() {

  const button =
    document.getElementById(
      "allCategoriesButton"
    );


  const menu =
    document.getElementById(
      "categoryDropdownMenu"
    );


  if (
    !button ||
    !menu
  ) {

    return;

  }


  button.addEventListener(
    "click",
    function(event) {

      event.stopPropagation();


      const isOpen =
        !menu.hidden;


      menu.hidden =
        isOpen;


      button.setAttribute(
        "aria-expanded",
        String(
          !isOpen
        )
      );

    }
  );


  menu.addEventListener(
    "click",
    function(event) {

      event.stopPropagation();

    }
  );


  document.addEventListener(
    "click",
    function() {

      menu.hidden =
        true;


      button.setAttribute(
        "aria-expanded",
        "false"
      );

    }
  );


  document.addEventListener(
    "keydown",
    function(event) {

      if (
        event.key ===
        "Escape"
      ) {

        menu.hidden =
          true;


        button.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );


  loadHeaderCategories();

}


/* =========================================
   MOBILE MENU
========================================= */

function setupMobileMenu() {

  const openButton =
    document.getElementById(
      "mobileMenuButton"
    );


  const menu =
    document.getElementById(
      "mobileMenu"
    );


  const closeButton =
    document.getElementById(
      "mobileMenuCloseButton"
    );


  if (
    !openButton ||
    !menu ||
    !closeButton
  ) {

    return;

  }


  function openMenu() {

    menu.classList.add(
      "active"
    );


    document.body.style.overflow =
      "hidden";

  }


  function closeMenu() {

    menu.classList.remove(
      "active"
    );


    document.body.style.overflow =
      "";

  }


  openButton.addEventListener(
    "click",
    openMenu
  );


  closeButton.addEventListener(
    "click",
    closeMenu
  );


  menu.addEventListener(
    "click",
    function(event) {

      if (
        event.target ===
        menu
      ) {

        closeMenu();

      }

    }
  );


  menu
    .querySelectorAll(
      "a"
    )
    .forEach(
      function(link) {

        link.addEventListener(
          "click",
          closeMenu
        );

      }
    );


  document.addEventListener(
    "keydown",
    function(event) {

      if (
        event.key ===
        "Escape"
      ) {

        closeMenu();

      }

    }
  );

}


/* =========================================
   LOAD FIREBASE CATEGORIES
========================================= */

async function loadHeaderCategories() {

  const list =
    document.getElementById(
      "categoryDropdownList"
    );


  if (!list) {
    return;
  }


  try {

    const firebaseModule =
      await getHeaderFirebaseModule();


    if (
      !firebaseModule ||
      typeof firebaseModule
        .getCategoriesFromFirestore !==
        "function"
    ) {

      throw new Error(
        "Category loader unavailable."
      );

    }


    const firebaseCategories =
      await firebaseModule
        .getCategoriesFromFirestore();


    const categories =
      Array.isArray(
        firebaseCategories
      )

        ? firebaseCategories
            .filter(
              category =>
                category &&
                category.status !==
                  "inactive"
            )
            .sort(
              (a, b) =>
                Number(
                  a.order || 0
                ) -
                Number(
                  b.order || 0
                )
            )

        : [];


    list.innerHTML =
      "";


    if (
      !categories.length
    ) {

      const empty =
        document.createElement(
          "div"
        );


      empty.className =
        "category-dropdown-empty";


      empty.textContent =
        "No categories available.";


      list.appendChild(
        empty
      );


      return;

    }


    categories.forEach(
      function(category) {

        const link =
          document.createElement(
            "a"
          );


        link.className =
          "category-dropdown-item";


        link.href =
          `category.html?category=${encodeURIComponent(
            category.name || ""
          )}`;


        link.textContent =
          category.name ||
          "Category";


        list.appendChild(
          link
        );

      }
    );

  }


  catch (error) {

    console.error(
      "Header category load error:",
      error
    );


    list.innerHTML =
      "";


    const errorMessage =
      document.createElement(
        "div"
      );


    errorMessage.className =
      "category-dropdown-empty";


    errorMessage.textContent =
      "Categories could not be loaded.";


    list.appendChild(
      errorMessage
    );

  }

}


/* =========================================
   HEADER LIVE SEARCH
========================================= */

function setupHeaderSearch() {

  const form =
    document.getElementById(
      "headerSearchForm"
    );


  const input =
    document.getElementById(
      "headerSearchInput"
    );


  const suggestions =
    document.getElementById(
      "headerSearchSuggestions"
    );


  if (
    !form ||
    !input ||
    !suggestions
  ) {

    return;

  }


  let products = [];


  async function loadSearchProducts() {

    try {

      const firebaseModule =
        await getHeaderFirebaseModule();


      if (
        !firebaseModule ||
        typeof firebaseModule
          .getProductsFromFirestore !==
          "function"
      ) {

        products =
          [];

        return;

      }


      const firebaseProducts =
        await firebaseModule
          .getProductsFromFirestore();


      products =
        Array.isArray(
          firebaseProducts
        )

          ? firebaseProducts.filter(
              function(product) {

                return (
                  product &&
                  product.status !==
                    "draft"
                );

              }
            )

          : [];

    }


    catch (error) {

      console.error(
        "Header search product load error:",
        error
      );


      products =
        [];

    }

  }


  function closeSuggestions() {

    suggestions.hidden =
      true;


    suggestions.innerHTML =
      "";

  }


  function showSuggestions(
    query
  ) {

    const searchTerm =
      String(
        query || ""
      )
        .trim()
        .toLowerCase();


    if (
      !searchTerm
    ) {

      closeSuggestions();

      return;

    }


    const matches =
      products
        .filter(
          function(product) {

            const name =
              String(
                product.name || ""
              )
                .toLowerCase();


            const category =
              String(
                product.category || ""
              )
                .toLowerCase();


            const shortDescription =
              String(
                product.shortDescription ||
                product.summary ||
                ""
              )
                .toLowerCase();


            return (
              name.includes(
                searchTerm
              ) ||

              category.includes(
                searchTerm
              ) ||

              shortDescription.includes(
                searchTerm
              )
            );

          }
        )

        .slice(
          0,
          6
        );


    if (
      !matches.length
    ) {

      suggestions.innerHTML =
        `
          <div class="header-search-empty">
            No matching products found.
          </div>
        `;


      suggestions.hidden =
        false;


      return;

    }


    suggestions.innerHTML =
      matches
        .map(
          function(product) {

            const productSlug =
              product.slug ||
              product.id ||
              "";


            const image =
              product.image

                ? `
                    <img
                      src="${escapeHeaderSearchHtml(
                        product.image
                      )}"
                      alt=""
                    >
                  `

                : `
                    <div class="header-search-placeholder">
                      ${escapeHeaderSearchHtml(
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
              <a
                class="header-search-result"
                href="product.html?product=${encodeURIComponent(
                  productSlug
                )}"
              >

                <div class="header-search-result-image">
                  ${image}
                </div>

                <div class="header-search-result-content">

                  <strong>
                    ${escapeHeaderSearchHtml(
                      product.name ||
                      "Untitled Product"
                    )}
                  </strong>

                  <span>
                    ${escapeHeaderSearchHtml(
                      product.category ||
                      "Recommendation"
                    )}
                  </span>

                </div>

              </a>
            `;

          }
        )
        .join("");


    suggestions.hidden =
      false;

  }


  input.addEventListener(
    "input",
    function() {

      showSuggestions(
        input.value
      );

    }
  );


  form.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const query =
        input.value
          .trim();


      if (!query) {
        return;
      }


      window.location.href =
        `search.html?q=${encodeURIComponent(
          query
        )}`;

    }
  );


  document.addEventListener(
    "click",
    function(event) {

      if (
        !form.contains(
          event.target
        )
      ) {

        closeSuggestions();

      }

    }
  );


  input.addEventListener(
    "keydown",
    function(event) {

      if (
        event.key ===
        "Escape"
      ) {

        closeSuggestions();

        input.blur();

      }

    }
  );


  loadSearchProducts();

}


/* =========================================
   SHARED WISHLIST COUNT
========================================= */

function updateSharedWishlistCount() {

  const wishlistCount =
    document.getElementById(
      "wishlistCount"
    );


  if (!wishlistCount) {
    return;
  }


  try {

    const wishlist =
      JSON.parse(
        localStorage.getItem(
          "kinarAageWishlist"
        ) || "[]"
      );


    wishlistCount.textContent =
      Array.isArray(
        wishlist
      )
        ? wishlist.length
        : 0;

  }


  catch (error) {

    console.error(
      "Wishlist count load error:",
      error
    );


    wishlistCount.textContent =
      "0";

  }

}


/* =========================================
   STORAGE SYNC
========================================= */

window.addEventListener(
  "storage",
  function(event) {

    if (
      event.key ===
      "kinarAageWishlist"
    ) {

      updateSharedWishlistCount();

    }


    if (
      event.key ===
      "kinarAageSiteSettings"
    ) {

      loadSharedLogo();

    }

  }
);


/* =========================================
   START HEADER
========================================= */
/* =========================================
   SHARED FOOTER CATEGORIES
========================================= */

async function loadSharedFooterCategories() {

  const footerCategoryColumn =
    document.getElementById(
      "footerCategoryColumn"
    );


  if (!footerCategoryColumn) {
    return;
  }


  try {

    const firebaseModule =
      await getHeaderFirebaseModule();


    if (
      !firebaseModule ||
      typeof firebaseModule
        .getCategoriesFromFirestore !==
        "function"
    ) {

      return;

    }


    const firebaseCategories =
      await firebaseModule
        .getCategoriesFromFirestore();


    const categories =
      Array.isArray(
        firebaseCategories
      )
        ? firebaseCategories
            .filter(
              category =>
                category &&
                category.status !==
                  "inactive"
            )
            .sort(
              (a, b) =>
                Number(
                  a.order || 0
                ) -
                Number(
                  b.order || 0
                )
            )
        : [];


    footerCategoryColumn.innerHTML =
      `
        <strong>
          Shop by Category
        </strong>

        ${
          categories.length

            ? categories
                .map(
                  category => {

                    const name =
                      category.name ||
                      "Category";


                    return `
                      <a
                        href="category.html?category=${encodeURIComponent(
                          name
                        )}"
                      >
                        ${escapeHeaderSearchHtml(
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

  catch (error) {

    console.error(
      "Footer category load error:",
      error
    );

  }

}

loadSharedHeader();
loadSharedFavicon();
loadSharedFooterCategories();