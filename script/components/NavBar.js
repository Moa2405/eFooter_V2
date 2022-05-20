import storageKeys from "../storage/storageKeys.js";
import handelLogout from "../utils/handelLogOut.js";
import * as localStorage from "../storage/localStorage.js";
import updateCartIcon from "../utils/updateCartIcon.js";
import Search from "./search/Search.js";
import handleSearch from "../utils/eventListeners/handleSearch.js";



const NavBar = () => {

  window.onload = () => {
    const searchForm = document.querySelector(".search-container")
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
      href="favorites.html"><i class="bi bi-heart"></i></a>`;

  let signInLink = !loggedIn.username
    ? `<a class="nav-link ${pathname === "/login.html" ? "active" : ""
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
            <i class="nav-item bi bi-cart3"></i>
            <div class="cart__count_container d-none bg-primary rounded-circle text-white">
              <span class="cart__count"></span>
            </div>
          </a>
        </div>`;

  let welcomeLink = loggedIn.username
    ? `<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-person"></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>${adminLink}</li>
          <li>${logOutLink}</li>
        </ul>
      </li>`
    : "";

  container.innerHTML = `
   
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-lg d-flex justify-content-between">
          <a class="navbar-brand" href="/index.html">eFooter</a>
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
              <li class="nav-item">
                ${signUpLink}
              </li>
              <li class="nav-item">
                ${signInLink}
              </li>
            </ul>
            <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-2">
              <form class="search-container 
                mx-lg-4
                d-flex 
                justify-content-around 
                align-items-center 
                py-0 px-2 
                bg-light 
                rounded-pill">           
              </form>
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
      </nav>`
    ;

  const logoutLinkBtn = document.querySelector(".logout-link");
  if (logoutLinkBtn) {
    logoutLinkBtn.addEventListener("click", handelLogout);
  }
  const searchContainer = document.querySelector(".search-container")
  updateCartIcon();
  Search(searchContainer)

};

export default NavBar;