
import addItemToCart from "../../utils/eventListeners/handleAddItemToCart.js";
import apiUrls from "../../utils/api/urls.js";

const ProductDetail = (product) => {

    const { id } = product;
    const image = product.attributes.image.data.attributes.url;
    const name = product.attributes.name;
    const description = product.attributes.description;
    const price = product.attributes.price;

    const productDetailContainer = document.querySelector(".product-detail__container");

    const header = document.createElement("h1");
    header.setAttribute("class", "product-detail__header")
    header.textContent = name;
    productDetailContainer.querySelector(".product-detail__header_container").appendChild(header)

    const img = document.createElement("img");
    img.setAttribute("class", "img-fluid");
    img.setAttribute("src", `${apiUrls.baseUrl}${image}`);
    img.setAttribute("alt", `${name}`);
    productDetailContainer.querySelector(".product-detail__img_container").appendChild(img)


    const productName = document.createElement("h2");
    productName.textContent = name;

    const productDescription = document.createElement("p");
    productDescription.textContent = description;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-bold")
    productPrice.textContent = "Price: " + price;

    productDetailContainer.querySelector(".product-detail__attributes_container").appendChild(productName);
    productDetailContainer.querySelector(".product-detail__attributes_container").appendChild(productDescription);
    productDetailContainer.querySelector(".product-detail__attributes_container").appendChild(productPrice);

    document.querySelector(".btn-primary").setAttribute(`data-id="${id}"`)

    const quantityValue = document.querySelector("#quantity");
    const addToCartBtn = document.querySelector("#add-to-cart__btn");
    
    addItemToCart(quantityValue, addToCartBtn);


    // productDetailContainer.innerHTML = `
    //     <div class="container-lg">
    //         <h1 class="product-detail__header">${productDetailHeader}</h1>
    //     </div>
    //     <div class="container-lg row row-cols-1 row-cols-sm-2 align-items-center bg-light p-1">
    //         <div class="bg-white">
    //             <img class="img-fluid" src="${apiUrls.baseUrl}${image}" alt="${name}">
    //         </div>
    //         <div class="d-flex flex-column gap-2">
    //             <h2>${name}</h2>
    //             <p>${description}</p>
    //             <p>Price:</p>
    //             <div class="w-25">
    //                 <label for="quantity" class="form-label">Quantity</label>
    //                 <input type="number" class="form-control" id="quantity" value="1">
    //             </div>
    //             <div id="message"></div>
    //             <div>
    //                 <button type="button" class="btn btn-primary" data-id="${id}" id="add-to-cart__btn">Add to cart</button>
    //             </div>
    //         </div>
    //     </div>`

}

export default ProductDetail;

// productDetailContainer.innerHTML = `
//         <div class="product-detail__header_container container-lg">

//         </div>
//         <div class="container-lg row row-cols-1 row-cols-sm-2 align-items-center bg-light p-1">
//             <div class="product-detail__img_container bg-white">

//             </div>
//             <div class="product-detail__attributes_container d-flex flex-column gap-2">
                
//                 <div class="w-25">
//                     <label for="quantity" class="form-label">Quantity</label>
//                     <input type="number" class="form-control" id="quantity" value="1">
//                 </div>
//                 <div id="message"></div>
//                 <div class="product-detail__cart_btn">
//                     <button type="button" class="btn btn-primary" data-id="${id}" id="add-to-cart__btn">Add to cart</button>
//                 </div>
//             </div>
//         </div>`