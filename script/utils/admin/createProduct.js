import apiUrls from "../api/urls.js";
import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import DisplayMessage from "../../components/DisplayMessage.js";
import fetchData from "../api/fetchData.js";


const handleCrateProduct = async (e) => {
    e.preventDefault()
    const form = e.target;
    const enctype = form.enctype;
    const originalFormData = new FormData(form);
    const body = new FormData();

    for (const [key, value] of originalFormData.entries()) {

        if (key.includes('files.')) {

            body.append(key, value);

            originalFormData.delete(key);
        }
    }

    const token = localeStorage.getData(storageKeys.TOKEN_KEY);

    const headers = new Headers({ Authorization: `Bearer ${token}` });

    const data = Object.fromEntries(originalFormData.entries());
    body.append('data', JSON.stringify(data));

    const url = apiUrls.baseUrl + "/api/products";

    try {

        const spinner = document.querySelector(".spinner");

        spinner.classList.remove("d-none");

        const response = await fetch(url, {
            body,
            method: "post",
            enctype,
            headers
        });


        if (response.status === 200) {

            const newProductList = await fetchData(apiUrls.baseUrl + apiUrls.productsUrl);

            localeStorage.saveData(storageKeys.ALL_PRODUCTS_KEY, newProductList);

            window.location = "/admin.html";

        } else {
            spinner.classList.add("d-none");

            DisplayMessage("danger", "Some thing went wrong", ".message");

            throw new Error("error");
        }

    } catch (error) {
        console.log(error);

        spinner.classList.add("d-none");
    }
}

export default handleCrateProduct;