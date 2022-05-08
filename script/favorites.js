import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import FavProductCard from "./components/products/FavProductCard.js";


NavBar()
Footer()

const favorites = () => {
    const favDataList = localStorage.getData(storageKeys.FAV_KEY);

    FavProductCard(favDataList);
}

favorites()