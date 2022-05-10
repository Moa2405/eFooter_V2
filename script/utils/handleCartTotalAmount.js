import storageKeys from "../storage/storageKeys.js";
import * as localStorage from "../storage/localStorage.js";
import CartTotalAmount from "../components/cart/CartTotalAmount.js";


const handleCartTotalAmount = () => {

    const itemsInCart = localStorage.getData(storageKeys.CART_KEY);

    let arrayOfAmounts = [];

    if (itemsInCart.length) {

        itemsInCart.forEach((item) => {
            arrayOfAmounts.push(item.totalAmount)
        });

        const initialReduceValue = 0;
        const totalAmount = arrayOfAmounts.reduce(
            (previousValue, currentValue) => previousValue + currentValue, initialReduceValue
        );

        CartTotalAmount(totalAmount)
    } else {

        CartTotalAmount(0)
    }
}

export default handleCartTotalAmount;
