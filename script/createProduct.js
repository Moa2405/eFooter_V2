import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import apiUrls from "./utils/api/urls.js";
import handleCrateProduct from "./utils/eventListeners/handleCreateProduct.js";
import * as localeStorage from "./storage/localStorage.js"
import storageKeys from "./storage/storageKeys.js";

const form = document.querySelector("#form");

Footer()
NavBar()


const adminFormDetail = async () => {

    const user = localeStorage.getData(storageKeys.USER_KEY);

    if (user.admin) {

        form.setAttribute("method", "post");
        form.setAttribute("action", `${apiUrls.baseUrl}${apiUrls.productsUrl}`);
        form.onsubmit = (event) => handleCrateProduct(event);
    } else {
        window.location = "/sign-in.html";
    }

}

adminFormDetail()