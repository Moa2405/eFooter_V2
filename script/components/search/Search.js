
import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";

const Search = (container) => {

    const submitBtn = document.createElement("button")
    submitBtn.setAttribute("class", "search__icon bi bi-search pb-1 bg-transparent")
    submitBtn.setAttribute("type", "submit")

    const icon = document.createElement("img");
    icon.setAttribute("src", "../../../public/search.svg");
    icon.setAttribute("alt", "search");

    const label = document.createElement("label");
    label.setAttribute("for", "search");
    label.setAttribute("class", "form-label d-none");
    label.setAttribute("aria-label", "Search");
    label.textContent = "Search";

    const input = document.createElement("input");
    input.setAttribute("class", "search__input form-control border-light bg-transparent");
    input.setAttribute("list", "datalistOptions");
    input.setAttribute("required", "");
    input.setAttribute("id", "navbar__search-value");

    const datalist = document.createElement("datalist");
    datalist.setAttribute("id", "datalistOptions");

    const products = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY);

    products.forEach((p) => {

        let link = document.createElement("a");
        link.setAttribute("href", `/product-detail.html?id=${p.id}`);

        let option = document.createElement("option");
        option.setAttribute("value", `${p.attributes.name}`);

        link.appendChild(option);

        datalist.appendChild(link);
    })
    submitBtn.appendChild(icon)
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(datalist);
    container.appendChild(submitBtn);

}

export default Search;




// container.innerHTML = `
//     <label for="DataList" class="form-label">Datalist example</label>
//     <input class="form-control" list="datalistOptions" id="DataList">
//     <datalist id="datalistOptions">
//      <option value="San Francisco">
//      <option value="New York">
//      <option value="Seattle">
//      <option value="Los Angeles">
//      <option value="Chicago">
//     </datalist>`
