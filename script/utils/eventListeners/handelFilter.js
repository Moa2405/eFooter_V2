import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";

const priceIcon = document.querySelector(".filter-icon-price");

export const name = (e) => {
    if (e.target.dataset.toggle === "false") {

        // e.target.dataset = true;
        const products = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY);
        console.log(products)

        const filterName = (a, b) => {

            const priceA = a.attributes.name.toUpperCase();
            const priceB = b.attributes.name.toUpperCase();

            let compare = 0;

            if (priceA > priceB) {
                compare = 1;

            } else if (priceA < priceB) {
                compare = -1;
            }

            return compare * -1;
        }

        console.log(products.sort(filterName));
    }
}

export const price = (e) => {
    if (e.target.dataset.toggle === "false") {

        // e.target.dataset = true;
        const products = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY);
        console.log(products)

        const filterPrice = (a, b) => {

            const filterPrice = () => {
                if (a > b) return 1;
                if (b > a) return -1;

                return 0;
            }
        }

        console.log(products.sort(filterPrice));
    }
}