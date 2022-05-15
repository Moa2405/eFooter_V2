import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import apiUrls from "../api/urls.js";

const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.value)

    const value = document.querySelector("#search").value.trim().toLowerCase();
    console.log(value)

    const products = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY)

    console.log(products)

    const searchResult = products.filter((p) => p.attributes.name.trim().toLowerCase().includes(value))

    localeStorage.saveData(storageKeys.SEARCH_RESULT_KEY, searchResult)

    window.location = "/products.html?id=true"

    // const searchResult = products.filter((article) {
    //     if (article.title.trim().toLowerCase().includes(inputValue)) {

    //     }
    // });

}

export default handleSearch;