import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Table from "./components/admin/Table.js";
import Accordion from "./components/admin/Accordion.js";
import apiUrls from "./utils/api/urls.js";
import fetchData from "./utils/api/fetchData.js";


const addProductBtn = document.querySelector(".add-product-btn");

NavBar()
Footer()

const admin = async () => {
    const products = await fetchData(apiUrls.baseUrl + apiUrls.productsUrl)

    Table(products)

    Accordion(products)
}

admin()