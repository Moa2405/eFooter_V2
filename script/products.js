import ProductCard from "./components/products/ProductCard.js";
import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const products = (product) => {

    NavBar()
    Footer()

    if (productId) {
        console.log("search")

        const products = localStorage.getData(storageKeys.SEARCH_RESULT_KEY);
        ProductCard(products);
        document.querySelector("h2").textContent = "Search result";
        document.title = "Search result | eFooter";

    } else {
        console.log("products")

        const products = localStorage.getData(storageKeys.ALL_PRODUCTS_KEY);
        ProductCard(products);
    }

}

products();