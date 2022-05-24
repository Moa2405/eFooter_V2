
import apiUrls from "../../utils/api/urls.js";

const ProductDetail = (product) => {

    const { id } = product;
    const image = product.attributes.image.data.attributes.url;
    const name = product.attributes.name;
    const description = product.attributes.description;
    const price = product.attributes.price;

    const productDetailContainer = document.querySelector(".product-detail__container");

    const select = document.querySelector("#quantity");

    for (let i = 1; i < 11; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", i);
        option.textContent = i;
        select.appendChild(option);
    }

    const header = document.createElement("h1");
    header.setAttribute("class", "product-detail__header");
    header.textContent = name;
    productDetailContainer.querySelector(".product-detail__header_container").appendChild(header);

    const img = document.createElement("img");
    img.setAttribute("class", "img-fluid");
    img.setAttribute("src", `${apiUrls.baseUrl}${image}`);
    img.setAttribute("alt", `${name}`);
    productDetailContainer.querySelector(".product-detail__img_container").appendChild(img);


    const productName = document.createElement("h2");
    productName.textContent = name;

    const productDescription = document.createElement("p");
    productDescription.textContent = description;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-bold");
    productPrice.textContent = "Price: " + `${price}.00 kr`;

    productDetailContainer.querySelector(".product-detail__attributes_container").appendChild(productName);
    productDetailContainer.querySelector(".product-detail__attributes_container").appendChild(productDescription);
    productDetailContainer.querySelector(".product-detail__attributes_container").appendChild(productPrice);

    document.querySelector(".btn-primary").setAttribute("data-id", id);
}

export default ProductDetail;