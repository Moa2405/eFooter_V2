import * as localStorage from "../storage/localStorage.js";
import storageKeys from "../storage/storageKeys.js";


const updateCartIcon = () => {
    const cartCountContainer = document.querySelector(".cart__count_container");
    const cartCount = document.querySelector(".cart__count");
    const itemsInCart = localStorage.getData(storageKeys.CART_KEY);

    if (itemsInCart.length) {
        cartCountContainer.classList.remove("d-none");
        cartCountContainer.style.display = "grid";
        cartCount.innerText = `${itemsInCart.length}`;
    }
    else {
        cartCountContainer.classList.remove("d-block");
        cartCountContainer.classList.add("d-none");
    }
}

export default updateCartIcon;