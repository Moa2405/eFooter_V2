import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import FavProductCard from "./components/products/FavProductCard.js";


NavBar()
Footer()

const favorites = () => {

    const spinner = document.querySelector(".spinner");
    spinner.classList.remove("d-none");

    const favDataList = localStorage.getData(storageKeys.FAV_KEY);

    spinner.classList.add("d-none");

    FavProductCard(favDataList);
};

favorites()