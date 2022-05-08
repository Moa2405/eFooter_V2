import CartProduct from "../../components/cart/CartProduct.js";
import storageKeys from "../../storage/storageKeys.js";
import handleCartTotalAmount from "../handleCartTotalAmount.js";
import * as localStorage from "../../storage/localStorage.js";

const updateAmountOfItemInCart = (event) => {
    const value = parseInt(event.target.value);
    const id = parseInt(event.target.dataset.id);

    const itemsInCart = localStorage.getData(storageKeys.CAR_KEY)

    const targetItem = itemsInCart.findIndex((item) => item.id === id);

    console.log(targetItem)

    const newAmount = itemsInCart[targetItem].attributes.price * value;

    itemsInCart[targetItem].totalAmount = newAmount;
    itemsInCart[targetItem].quantity = value;

    localStorage.saveData(storageKeys.CAR_KEY, itemsInCart);

    const newCart = localStorage.getData(storageKeys.CAR_KEY);
    console.log(newCart)

    CartProduct(newCart)
    handleCartTotalAmount(newCart)

}

export default updateAmountOfItemInCart;