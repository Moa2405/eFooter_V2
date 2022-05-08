import storageKeys from "../storage/storageKeys.js";
import handelLogout from "../utils/handelLogOut.js";
import * as localStorage from "../storage/localStorage.js";
import updateCartIcon from "../utils/updateCartIcon.js";



const NavBar = () => {
  const { pathname } = document.location;

  const container = document.querySelector(".navbar-container");

  const loggedIn = localStorage.getData(storageKeys.USER_KEY);

  let homeLink = `<a class="nav-link ${pathname === "/" ? "active" : ""}" 
      aria-current="page" href="/">Home</a>`;

  let productsLink = `<a class="nav-link ${pathname === "/products.html" ? "active" : ""
    }" href="products.html">Products</a>`;

  let favoritesLink = loggedIn.username
    ? `<a class="nav-link ${pathname === "/favorites.html" ? "active" : ""
    }" href="favorites.html"><i class="bi bi-heart"></i></a>`
    : "";

  let signInLink = !loggedIn.username
    ? `<a class="nav-link ${pathname === "/login.html" ? "active" : ""
    }" href="sign-in.html">Sign in</a>`
    : "";

  let signUpLink = !loggedIn.username
    ? `<a class="nav-link ${pathname === "/sign-up.html" ? "active" : ""
    }" href="sign-up.html">Sign up</a>`
    : "";

  let logOutLink = loggedIn.username
    ? `<span class="logout-link nav-link" style="cursor: pointer;">Log out<span>`
    : "";

  let welcomeLink = loggedIn.username
    ? `<span class="nav-link"><i class="bi bi-person"></i></span>`
    : "";

  let adminLink = loggedIn.admin
    ? `<a class="nav-link ${pathname === "/admin.html" ? "active" : ""
    }" href="admin.html">Admin panel</a>`
    : "";

  let cartLink = `
        <div class="cart_container" style="max-width: 20px">
          <a class="nav-link ${pathname === "cart.html" ? "active" : ""
    }" href="cart.html">
            <i class="bi bi-cart3"></i>
          </a>
          <div class="navbar__cart_count d-none bg-primary rounded-circle text-white"></div>
        </div>`

  container.innerHTML = `
              <div class="container-lg">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="d-flex">
                    <a class="navbar-brand" href="#">eFooter</a>
                  </div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        ${homeLink}
                      </li>
                      <li class="nav-item">
                        ${adminLink}
                      </li>
                      <li class="nav-item">
                        ${productsLink}
                      </li>
                    </ul>
                      <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                          ${logOutLink}
                        </li>
                        <li class="nav-item">
                          ${signUpLink}
                        </li>
                        <li class="nav-item">
                          ${signInLink}
                        </li>
                        <li class="nav-item">
                        <li class="nav-item">
                          ${favoritesLink}
                        </li>
                          ${welcomeLink}
                        </li>
                        <li class="nav-item">
                          ${cartLink}
                        </li> 
                    </ul>
                  </div>
                </nav>
              </div> `;

  const logoutLinkBtn = document.querySelector(".logout-link");
  if (logoutLinkBtn) {
    logoutLinkBtn.addEventListener("click", handelLogout);
  }

  updateCartIcon();

};

export default NavBar;