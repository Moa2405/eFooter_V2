
import addItemToCart from "../../utils/eventListeners/handleAddItemToCart.js";
import apiUrls from "../../utils/api/urls.js";

const ProductDetail = (product, productDetailHeader) => {

    const { id } = product;
    const image = product.attributes.image.data.attributes.url;
    const name = product.attributes.name;
    const description = product.attributes.description;
    const price = product.attributes.price;

    const productDetailContainer = document.querySelector(".product-detail__container");

    productDetailContainer.innerHTML = `
        <div class="container-lg">
            <h1 class="product-detail__header">${productDetailHeader}</h1>
        </div>
        <div class="container-lg row row-cols-1 row-cols-sm-2 align-items-center bg-light p-1">
            <div class="bg-white">
                <img class="img-fluid" src="${apiUrls.baseUrl}${image}" alt="${name}">
            </div>
            <div class="d-flex flex-column gap-3">
                <h2>${name}</h2>
                <p>${description}</p>
                <p>Price: ${price}</p>
                <div class="w-25">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" class="form-control" id="quantity" value="1">
                </div>
                <div id="message"></div>
                <div>
                    <button type="button" class="btn btn-primary" data-id="${id}" id="add-to-cart__btn">Add to cart</button>
                </div>
            </div>
        </div>`

    const quantityValue = document.querySelector("#quantity");

    const addToCartBtn = document.querySelector("#add-to-cart__btn");

    addItemToCart(quantityValue, addToCartBtn);
}

export default ProductDetail;