import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";

const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.value)

    const value = document.querySelector("#search").value.trim().toLowerCase();

    const products = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY);

    const searchResult = products.filter((p) => p.attributes.name.trim().toLowerCase().includes(value));

    localeStorage.saveData(storageKeys.SEARCH_RESULT_KEY, searchResult);

    window.location = "/products.html?search=true"

}

export default handleSearch;