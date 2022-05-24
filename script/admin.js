import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Table from "./components/admin/Table.js";
import Accordion from "./components/admin/Accordion.js";
import apiUrls from "./utils/api/urls.js";
import fetchData from "./utils/api/fetchData.js";
import * as localeStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";

const form = document.querySelector("#admin__table_search");

const orderByName = document.querySelector(".name");
const orderById = document.querySelector(".id");
const orderByCreated = document.querySelector(".created");

form.reset()

NavBar()
Footer()

const handelAdminSearch = (e) => {
    e.preventDefault()

    const value = document.querySelector("#admin_search-value").value.trim().toLowerCase();

    const products = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY);

    const searchResult = products.filter((p) => p.attributes.name.trim().toLowerCase().includes(value));

    Accordion(searchResult);
    Table(searchResult);
}



const admin = async () => {

    const user = localeStorage.getData(storageKeys.USER_KEY);

    if (user.admin) {

        const products = await fetchData(apiUrls.baseUrl + apiUrls.productsUrl);

        Table(products);

        Accordion(products);

        form.addEventListener("submit", handelAdminSearch)
    } else {
        window.location = "/sign-in.html";
    }
}

admin()