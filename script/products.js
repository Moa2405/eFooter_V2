import ProductCard from "./components/products/ProductCard.js";
import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";

const products = () => {

    NavBar()
    Footer()

    const products = localStorage.getData(storageKeys.ALL_PRODUCTS_KEY);
    ProductCard(products);
}

products();