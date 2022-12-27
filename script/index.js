import apiUrls from "./utils/api/urls.js";
import * as localeStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import fetchData from "./utils/api/fetchData.js";
import fetchDataByCategory from "./utils/api/fetchDataByCategory.js";
import Hero from "./components/Hero.js";
import ProductCard from "./components/products/ProductCard.js";
import handleFavoritesBtn from "./utils/eventListeners/handleFavoritesBtn.js";


NavBar()
Footer()

const app = async () => {

    const spinner = document.querySelector(".spinner")
    spinner.classList.remove("d-none")

    const allProducts = await fetchData(apiUrls.baseUrl + apiUrls.productsUrl);
    console.log(allProducts)
    const hero = await fetchData(apiUrls.baseUrl + apiUrls.heroSectionUrl);
    console.log(hero)
    // const featuredProducts = await fetchDataByCategory(apiUrls.baseUrl + apiUrls.featuredUrl);

    const featuredProducts = allProducts.filter((product) => product.attributes.Featured === true)
    console.log(featuredProducts)


    localeStorage.saveData(storageKeys.FEATURED_KEY, featuredProducts);
    localeStorage.saveData(storageKeys.ALL_PRODUCTS_KEY, allProducts);
    localeStorage.saveData(storageKeys.HERO_KEY, hero);

    const heroData = localeStorage.getData(storageKeys.HERO_KEY);
    console.log(heroData)
    const featuredData = localeStorage.getData(storageKeys.FEATURED_KEY);
    console.log(featuredData)

    spinner.classList.add("d-none");

    Hero(heroData);
    ProductCard(featuredData);

    const favBtn = document.querySelectorAll(".favorites__btn");
    handleFavoritesBtn(favBtn);
}

app()



