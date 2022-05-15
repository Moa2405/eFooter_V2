
import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";

const Search = (container) => {

    const icon = document.createElement("button")
    icon.setAttribute("class", "search__icon bi bi-search bg-transparent")
    icon.setAttribute("type", "submit")

    const label = document.createElement("label");
    label.setAttribute("for", "search");
    label.setAttribute("class", "form-label d-none");
    label.setAttribute("aria-label", "Search");
    label.textContent = "Search";

    const input = document.createElement("input");
    input.setAttribute("class", "search__input form-control border-light bg-transparent");
    input.setAttribute("list", "datalistOptions");
    input.setAttribute("id", "search");


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

    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(datalist)
    container.appendChild(icon)

    const search = document.querySelector(".search");
}

export default Search;




// container.innerHTML = `
//     <label for="exampleDataList" class="form-label">Datalist example</label>
//     <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
//     <datalist id="datalistOptions">
//     <option value="San Francisco">
//     <option value="New York">
//     <option value="Seattle">
//     <option value="Los Angeles">
//     <option value="Chicago">
//     </datalist>`
