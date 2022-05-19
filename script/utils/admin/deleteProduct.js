import apiUrls from "../api/urls.js";
import * as localStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import DisplayMessage from "../../components/DisplayMessage.js";
import fetchData from "../api/fetchData.js";
import AdminAccordion from "../../components/admin/Accordion.js";
import AdminTable from "../../components/admin/Table.js";



const user = localStorage.getData(storageKeys.USER_KEY);

const token = localStorage.getData(storageKeys.TOKEN_KEY);


const headers = new Headers();
headers.append("Authorization", `Bearer ${token}`);

const requestOptions = {
    method: 'DELETE',
    headers: headers
};

const deleteProduct = async (event) => {
    const id = event.target.dataset.id;

    if (user.admin) {

        const doYouDear = window.confirm("Are you sure you want to delete this product?");

        if (doYouDear) {
            try {

                const spinner = document.querySelector(".spinner");
                spinner.classList.remove("d-none");

                const response = await fetch(apiUrls.baseUrl + "/api/products/" + id, requestOptions);

                const newProductList = await fetchData(apiUrls.baseUrl + apiUrls.productsUrl);

                AdminAccordion(newProductList);
                AdminTable(newProductList)

                spinner.classList.add("d-none");

                DisplayMessage("primary", `Product with the id of: ${id} was deleted`, ".message")

                setTimeout(() => {
                    document.querySelector(".message").style.display = "none";
                }, "2000");

            } catch (error) {

                console.warn(error);
            }

        } else {

            return
        }
    }
    else {
        window.location = "/sign-in.html";
    }
}

export default deleteProduct;