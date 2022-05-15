import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import apiUrls from "./utils/api/urls.js";
import storageKeys from "./storage/storageKeys.js";
import * as localeStorage from "./storage/localStorage.js";
import DisplayMessage from "./components/DisplayMessage.js";
import onCrateProduct from "./utils/admin/createProduct.js";
import onUpdateProduct from "./utils/admin/updateProduct.js";

const params = new URLSearchParams(window.location.search);
const typeOfForm = params.get("typeOfForm");

const paramsId = params.get("productId");
const productId = parseInt(paramsId)

const form = document.querySelector("#form")
const featured = document.querySelector("#featured")
console.log(featured)

Footer()
NavBar()


if (typeOfForm === "create") {

    const user = localeStorage.getData(storageKeys.USER_KEY);
    if (user.admin) {

        form.setAttribute("method", "post");
        form.setAttribute("action", `${apiUrls.baseUrl}${apiUrls.productsUrl}`);
        form.onsubmit = (event) => onCrateProduct(event);
        console.log(form)

    }
}
else if (typeOfForm === "update") {

    const allProduct = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY);

    const productToPopulateForm = allProduct.filter((p) => p.id === productId)
    console.log(productToPopulateForm)

    form.method = "put";
    form.setAttribute("action", `${apiUrls.baseUrl}${apiUrls.productsUrl}/${productId}`);

    form.querySelector("#name").value = `${productToPopulateForm[0].attributes.name}`;
    form.querySelector("#description").value = `${productToPopulateForm[0].attributes.description}`
    form.querySelector("#price").value = `${productToPopulateForm[0].attributes.price}`
    form.querySelector('button[type="submit"]').textContent = "Edit product";

    form.onsubmit = (event) => onUpdateProduct(event, paramsId);
}
