import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import apiUrls from "./utils/api/urls.js";
import handleCrateProduct from "./utils/eventListeners/handleCreateProduct.js";

const form = document.querySelector("#form");

Footer()
NavBar()

const adminFormDetail = async () => {

    form.setAttribute("method", "post");
    form.setAttribute("action", `${apiUrls.baseUrl}${apiUrls.productsUrl}`);
    form.onsubmit = (event) => handleCrateProduct(event);
}

adminFormDetail()