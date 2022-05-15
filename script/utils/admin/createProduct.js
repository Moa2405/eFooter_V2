import apiUrls from "../api/urls.js";
import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";


const onCrateProduct = async (e) => {
    e.preventDefault()
    form = e.target;
    console.log(form)
    const enctype = form.enctype;
    const originalFormData = new FormData(form);
    const body = new FormData();

    for (const [key, value] of originalFormData.entries()) {
        if (key.includes('files.')) {
            body.append(key, value);
            // Add this to the request body
            originalFormData.delete(key);
            // Remove it from the original form data list
        }
    }

    const token = localeStorage.getData(storageKeys.TOKEN_KEY);

    const headers = new Headers({ Authorization: `Bearer ${token}` });

    console.log(headers)

    const data = Object.fromEntries(originalFormData.entries());
    body.append('data', JSON.stringify(data));
    console.log(data)

    const url = apiUrls.baseUrl + "/api/products";

    try {
        const response = await fetch(url, {
            body,
            method: "post",
            enctype,
            headers
        });

        const result = await response.json();
        console.log(result)

    } catch (err) {
        console.log(err)
    }
}

export default onCrateProduct;