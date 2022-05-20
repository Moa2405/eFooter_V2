import * as localStorage from "../../storage/localStorage.js"
import apiUrls from "../../utils/api/urls.js";
import updateAmountOfItemInCart from "../../utils/eventListeners/updateAmountOfItemInCart.js";
import updateCartIcon from "../../utils/updateCartIcon.js";
import handleCartTotalAmount from "../../utils/handleCartTotalAmount.js";
import deleteItemFromList from "../../utils/deleteItemFromList.js";
import storageKeys from "../../storage/storageKeys.js";
import DisplayMessage from "../DisplayMessage.js";

const cartProductContainer = document.querySelector(".cart__products_container");


const CartProduct = (itemsInCart) => {

    cartProductContainer.innerHTML = "";

    if (itemsInCart.length) {

        itemsInCart.forEach((item) => {

            cartProductContainer.innerHTML += `
                <li class="container mb-4 list-group-item px-0 d-flex gap-2 bg-transparent">
                    <div class="card bg-transparent shadow d-flex flex-column flex-sm-row align-items-sm-center">
                        <div class="cart__img_container">
                            <img src="${apiUrls.baseUrl}${item.attributes.image.data.attributes.formats.small.url}"
                                alt="${item.attributes.name}"
                                class="img-fluid rounded-start">
                        </div>
                        <div class="card-body py-sm-0 d-flex flex-column gap-3">

                            <div class="container">
                                <h5 class="card-title my-2">${item.attributes.name}</h5>
                                <p class="cart__product_description card-text my-2">${item.attributes.description}</p>
                            </div>

                            <div class="container">
                                <select class="card-text form-select" 
                                    data-id="${item.id}" 
                                    aria-label="Select amount of item in cart"
                                    style="max-width: 100px;"
                                >
                                    <option value="${item.quantity}" selected>${item.quantity}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                                <p class="cart_Item_amount card-text fw-bold">${item.totalAmount}.00 kr</p>
                            </div>
                            
                            <div class="container">
                                <p class="card-text my-1" data-id="${item.id}">
                                    <small class="text-muted">Delete <i class="cart__product_delete-btn bi bi-trash" data-id="${item.id}"></i></small>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>`
                ;
        });

        const amountOfItem = document.querySelectorAll("select");
        const deleteProductFromCartBtn = document.querySelectorAll(".cart__product_delete-btn");
        console.log(deleteProductFromCartBtn)

        amountOfItem.forEach((e) => {
            e.onchange = updateAmountOfItemInCart;
        })

        const cartList = localStorage.getData(storageKeys.CART_KEY);

        deleteProductFromCartBtn.forEach((btn) => {
            btn.onclick = (event) => {
                console.log(event)
                CartProduct(deleteItemFromList(cartList, storageKeys.CART_KEY, event));
                handleCartTotalAmount();
                updateCartIcon();
            };
        })

    } else {
        DisplayMessage(
            "warning",
            "You have no products in yor cart",
            ".cart__products_container"
        );
    }
}

export default CartProduct;