/* =========================================
   KINAR AAGE - SHARED HEADER
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

        <a href="index.html#featured">
          Featured
        </a>

        <a href="index.html#recommended">
          Recommendations
        </a>

        <a href="about.html">
          About
        </a>

      </nav>


      <form
        class="top-search-form"
        action="search.html"
        method="get"
      >

        <input
          type="search"
          name="q"
          placeholder="Search products..."
          autocomplete="off"
          aria-label="Search products"
        >

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

  `;

}


loadSharedHeader();