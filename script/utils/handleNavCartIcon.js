import storageKeys from "../storage/storageKeys.js";
import * as localStorage from "../storage/localStorage.js";


const handleNavCartIcon = () => {
    const cartCount = document.querySelector(".navbar__cart_count");
    const itemsInCart = localStorage.getData(storageKeys.CART_KEY);

    if (itemsInCart.length) {
        cartCount.classList.remove("d-none");
        cartCount.classList.add("d-block");
        cartCount.innerText = `${itemsInCart.length}`;
    }
    else {
        cartCount.classList.remove("d-block");
        cartCount.classList.add("d-none");

    }
}

export default handleNavCartIcon;