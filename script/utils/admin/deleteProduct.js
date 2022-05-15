import apiUrls from "../api/urls.js";
import * as localStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
const user = localStorage.getData(storageKeys.USER_KEY);

const token = localStorage.getData(storageKeys.TOKEN_KEY);

const headers = new Headers({ Authorization: `Bearer ${token}` })


const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
    method: 'DELETE',
    headers: myHeaders
};

const deleteProduct = async (event) => {
    const id = event.target.dataset.id;

    if (user.admin) {

        const doYouDear = window.confirm("Are you sure you want to delete this product?");

        if (doYouDear) {
            try {

                const response = await fetch(apiUrls.baseUrl + "/api/products/" + id, requestOptions);
                const result = await response.json();
                console.log(result)

            } catch (error) {

                console.log(error);
            }

        } else {
            console.log("do not delete")
        }
    }
    else {
        console.log("not admin")
    }
}

export default deleteProduct;