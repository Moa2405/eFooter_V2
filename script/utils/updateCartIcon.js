import * as localStorage from "../storage/localStorage.js";
import storageKeys from "../storage/storageKeys.js";


const updateCartIcon = () => {
    const cartCount = document.querySelector(".navbar__cart_count");
    const itemsInCart = localStorage.getData(storageKeys.CAR_KEY);

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

export default updateCartIcon;