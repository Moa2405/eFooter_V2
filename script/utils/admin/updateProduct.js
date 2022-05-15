import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import apiUrls from "../api/urls.js";

const onUpdateProduct = async (event, id) => {
    event.preventDefault();

    const token = localeStorage.getData(storageKeys.TOKEN_KEY);
    console.log(token)

    const headers = new Headers({
        "Authorization": `Bearer ${token}`
    })

    console.log(headers)

    const form = event.target;
    console.log(form.enctype)
    const formData = new FormData(form);
    const body = new FormData();

    const file = formData.get("files.image");
    body.append("files.image", file);

    formData.delete("files.image");
    const data = Object.fromEntries(formData.entries());
    body.append("data", JSON.stringify(data));
    console.log(body.get("data"))

    const url = apiUrls.baseUrl
    console.log(url)

    try {

        const response = await fetch(url + "/api/products/" + id, {
            enctype: form.enctype,
            method: "put",
            body,
            headers
        });

        const result = await response.json()

        console.log(result)

        // if (response.ok) {
        //     window.location = "/admin.html";
        // }
    } catch (error) {
        console.log(error)
    }
}

export default onUpdateProduct;