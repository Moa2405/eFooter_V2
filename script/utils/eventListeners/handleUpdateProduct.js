import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import apiUrls from "../api/urls.js";

const onUpdateProduct = async (event, id) => {
    event.preventDefault();

    const token = localeStorage.getData(storageKeys.TOKEN_KEY);
    const headers = new Headers({
        "Authorization": `Bearer ${token}`
    })

    const form = event.target;
    const formData = new FormData(form);
    const body = new FormData();

    const data = Object.fromEntries(formData.entries());
    body.append("data", JSON.stringify(data));

    try {
        document.querySelector(".spinner").classList.remove("d-none");

        const response = await fetch(apiUrls.baseUrl + "/api/products/" + id, {
            enctype: form.enctype,
            method: "put",
            body,
            headers
        });

        if (response.ok) {
            window.location = "/admin.html";
        }

    } catch (error) {
        console.log(error)
    }
}

export default onUpdateProduct;