import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import handleCartTotalAmount from "./utils/handleCartTotalAmount.js";
import CartProduct from "./components/cart/CartProduct.js";


NavBar()
Footer()

const cart = () => {
    const itemsInCart = localStorage.getData(storageKeys.CART_KEY);

    CartProduct(itemsInCart);

    handleCartTotalAmount()

}

cart()