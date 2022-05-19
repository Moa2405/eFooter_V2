import ProductCard from "./components/products/ProductCard.js";
import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import handleFavoritesBtn from "./utils/eventListeners/handleFavoritesBtn.js";
import DisplayMessage from "./components/DisplayMessage.js";

const params = new URLSearchParams(window.location.search);
const search = params.get("search");

const products = () => {

    NavBar()
    Footer()

    if (search) {

        const products = localStorage.getData(storageKeys.SEARCH_RESULT_KEY);

        if (!products.length) {

            DisplayMessage("warning", "Your search returned no results", ".product-container");

        } else {

            ProductCard(products);

            const favBtn = document.querySelectorAll(".favorites__btn");
            handleFavoritesBtn(favBtn);

            document.querySelector("h2").textContent = "Search result";
            document.title = "Search result | eFooter";
        };

    } else {

        const products = localStorage.getData(storageKeys.ALL_PRODUCTS_KEY);

        ProductCard(products);

        const favBtn = document.querySelectorAll(".favorites__btn");
        handleFavoritesBtn(favBtn);
    };
};

products();