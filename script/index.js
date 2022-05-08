import apiUrls from "./utils/api/urls.js";
import * as localeStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import fetchData from "./utils/api/fetchData.js";
import fetchDataByCategory from "./utils/api/fetchDataByCategory.js";
import Hero from "./components/Hero.js";
import ProductCard from "./components/products/ProductCard.js";


NavBar()
Footer()

const app = async () => {

    const dataInStorage = localeStorage.getData(storageKeys.ALL_PRODUCTS_KEY);

    // <----this will run only once & as long as localStorage is empty--->
    if (!dataInStorage.length) {
        const allProducts = await fetchData(apiUrls.baseUrl + apiUrls.productsUrl);
        const hero = await fetchData(apiUrls.baseUrl + apiUrls.heroSectionUrl);
        const featuredProducts = await fetchDataByCategory(apiUrls.baseUrl + apiUrls.featuredUrl);

        localeStorage.saveData(storageKeys.ALL_PRODUCTS_KEY, allProducts);
        localeStorage.saveData(storageKeys.HERO_KEY, hero);
        localeStorage.saveData(storageKeys.FEATURED_KEY, featuredProducts);
    }

    const heroData = localeStorage.getData(storageKeys.HERO_KEY)
    const featuredData = localeStorage.getData(storageKeys.FEATURED_KEY)

    Hero(heroData)
    ProductCard(featuredData)
}

app()



