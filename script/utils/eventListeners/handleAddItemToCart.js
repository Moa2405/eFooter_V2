import storageKeys from "../../storage/storageKeys.js";
import DisplayMessage from "../../components/DisplayMessage.js";
import * as localStorage from "../../storage/localStorage.js"
import updateCartIcon from "../updateCartIcon.js";


const handleAddItemToCart = (quantity, btn) => {

    // const message = document.querySelector(".message")

    btn.onclick = (event) => {

        console.log(quantity.value)

        const id = parseInt(event.target.dataset.id);
        const amountOfItem = parseInt(quantity.value);

        const products = localStorage.getData(storageKeys.ALL_PRODUCTS_KEY)

        const targetProduct = products.filter(
            (product) => product.id === id
        );

        const productTotalAmount = targetProduct[0].attributes.price * amountOfItem;

        const newObjectToSaveInCart = {
            id: id,
            attributes: targetProduct[0].attributes,
            quantity: amountOfItem,
            totalAmount: productTotalAmount
        };

        const currentCart = localStorage.getData(storageKeys.CART_KEY);

        const doseItemExistInCart = currentCart.find(
            (item) => item.id === id
        );

        if (!doseItemExistInCart) {
            currentCart.push(newObjectToSaveInCart);

            localStorage.saveData(storageKeys.CART_KEY, currentCart);

            updateCartIcon()

            DisplayMessage(
                "primary",
                `${targetProduct[0].attributes.name} added to cart`,
                "#message"
            );
        };

        if (doseItemExistInCart) {
            DisplayMessage(
                "warning",
                "Product already added to cart",
                "#message"
            );
        };
    };
};

export default handleAddItemToCart;