import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import FavProductCard from "./components/products/FavProductCard.js";
import deleteItemFromList from "./utils/deleteItemFromList.js";


NavBar()
Footer()

const favorites = () => {

    const spinner = document.querySelector(".spinner");
    spinner.classList.remove("d-none");

    const favDataList = localStorage.getData(storageKeys.FAV_KEY);

    spinner.classList.add("d-none");

    FavProductCard(favDataList);

    const removeFromFavBtn = document.querySelectorAll(".favorites__btn");
    console.log(removeFromFavBtn)

    removeFromFavBtn.forEach((btn) => {
        btn.onclick = (event) => {
            FavProductCard(deleteItemFromList(favDataList, storageKeys.FAV_KEY, event));
        };
    });
};

favorites()