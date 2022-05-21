import storageKeys from "../storage/storageKeys.js";
import handelLogout from "../utils/handelLogOut.js";
import * as localStorage from "../storage/localStorage.js";
import updateCartIcon from "../utils/updateCartIcon.js";
import Search from "./search/Search.js";
import handleSearch from "../utils/eventListeners/handleSearch.js";



const NavBar = () => {

  window.onload = () => {
    const searchForm = document.querySelector("#navbar__search-container")
    searchForm.onsubmit = (event) => handleSearch(event)
  }

  const { pathname } = document.location;

  const container = document.querySelector(".navbar-container");

  const loggedIn = localStorage.getData(storageKeys.USER_KEY);

  let homeLink =
    `<a class="nav-link ${pathname === "/" ? "active" : ""}" 
      aria-current="page" href="/">Home</a>`;

  let productsLink = `<a class="nav-link ${pathname === "/products.html" ? "active" : ""
    }" href="products.html">Products</a>`;

  let favoritesLink =
    `<a class="nav-link ${pathname === "/favorites.html" ? "active" : ""}" 
      href="favorites.html">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
    </a>`;

  let signInLink = !loggedIn.username
    ? `<a class="nav-link ${pathname === "sign-in.html" ? "active" : ""
    }" href="sign-in.html">Sign in</a>`
    : "";

  let signUpLink = !loggedIn.username
    ? `<a class="nav-link ${pathname === "/sign-up.html" ? "active" : ""
    }" href="sign-up.html">Sign up</a>`
    : "";

  let logOutLink = loggedIn.username
    ? `<span class="logout-link dropdown-item" style="cursor: pointer;">Log out<span>`
    : "";

  let adminLink = loggedIn.admin
    ? `<a class="dropdown-item ${pathname === "/admin.html" ? "active" : ""
    }" href="admin.html">Admin panel</a>`
    : "";

  let cartLink = `
        <div class="cart_container">
          <a class="nav-link ${pathname === "cart.html" ? "active" : ""}" href="cart.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div class="cart__count_container d-none bg-primary rounded-circle text-white">
              <span class="cart__count"></span>
            </div>
          </a>
        </div>`;

  let welcomeLink = loggedIn.username
    ? `<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" 
          href="#" id="navbarDropdown" 
          role="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>${adminLink}</li>
          <li>${logOutLink}</li>
        </ul>
      </li>`
    : "";

  container.innerHTML = `
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-lg d-flex justify-content-between">
            <a class="navbar-brand fs-3 fw-bold border border-3 border-dark px-1 py-0" 
              href="/index.html"
            >
              <span class="text-primary logo-span">e</span>
              Footer
            </a>
            <button class="navbar-toggler" type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target="#navbarSupportedContent" 
                          aria-controls="navbarSupportedContent" 
                          aria-expanded="false" 
                          aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
                <li class="nav-item">
                  ${homeLink}
                </li>
                <li class="nav-item">
                  ${productsLink}
                </li>
                <div class="d-none d-lg-block">
                  <form id="navbar__search-container" class="search-container 
                    shadow
                    mx-lg-4
                    d-flex 
                    justify-content-around 
                    align-items-center 
                    py-0 px-2 
                    rounded-pill">
                  </form>
                </div>
              </ul>
              <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-lg-center">
                <li class="nav-item">
                  ${signUpLink}
                </li>
                <li class="nav-item">
                  ${signInLink}
                </li>
                <li class="nav-item">
                  ${welcomeLink}
                </li>
                <li class="nav-item">
                  ${favoritesLink}
                </li>
                <li class="nav-item">
                  ${cartLink}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="cloned-search-bar__container container-lg d-block d-lg-none d-flex justify-content-center py-2">
          
        </div>
      </div>`
    ;

  const logoutLinkBtn = document.querySelector(".logout-link");
  if (logoutLinkBtn) {
    logoutLinkBtn.addEventListener("click", handelLogout);
  }

  const searchContainer = document.querySelector(".search-container");
  Search(searchContainer)

  const clonedSearchBar = searchContainer.cloneNode(true);

  const clonedSearchBarContainer = document.querySelector(".cloned-search-bar__container");
  clonedSearchBarContainer.appendChild(clonedSearchBar);

  updateCartIcon();
};

export default NavBar;