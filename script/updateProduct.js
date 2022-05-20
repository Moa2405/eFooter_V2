import * as localeStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import apiUrls from "./utils/api/urls.js";
import handleUpdateProduct from "./utils/eventListeners/handleUpdateProduct.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

Footer()
NavBar()

const updateProduct = async () => {

    const allProduct = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY);

    const productToPopulateForm = allProduct.filter((p) => p.id === parseInt(productId))

    document.querySelector(".update__header").textContent = "Update product ID: " + productId;

    form.setAttribute("action", `${apiUrls.baseUrl}${apiUrls.productsUrl}/${productId}`);
    form.querySelector("#name").value = `${productToPopulateForm[0].attributes.name}`;
    form.querySelector("#description").value = `${productToPopulateForm[0].attributes.description}`;
    form.querySelector("#price").value = `${productToPopulateForm[0].attributes.price}`;

    const token = localeStorage.getData(storageKeys.TOKEN_KEY);

    const headers = new Headers({ Authorization: `Bearer ${token}` });

    const response = await fetch(apiUrls.uploadedMedia, headers);

    const result = await response.json();
    console.log(result)

    result.forEach((i) => {

        const formCheck = document.createElement("div");
        formCheck.setAttribute("class", "form-check");

        const input = document.createElement("input");
        input.setAttribute("class", "form-check-input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", i.id);
        input.setAttribute("name", "image");
        input.setAttribute("value", i.id);

        const label = document.createElement("label");
        label.setAttribute("class", "form-check-label");
        label.setAttribute("for", i.id);

        const img = document.createElement("img");
        img.setAttribute("class", "img-thumbnail shadow");
        img.setAttribute("src", i.formats ? apiUrls.baseUrl + i.formats.thumbnail.url : "#");
        img.setAttribute("alt", i.name);
        img.setAttribute("height", "100px");
        img.setAttribute("width", "100px");

        formCheck.appendChild(input);
        label.appendChild(img);
        formCheck.appendChild(label);

        document.querySelector(".img-uploads").appendChild(formCheck);
    })

    form.onsubmit = (event) => handleUpdateProduct(event, productId);
}

updateProduct()

