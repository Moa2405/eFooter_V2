import apiUrls from "./utils/api/urls.js";
import fetchData from "./utils/api/fetchData.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import ProductDetail from "./components/products/ProductDetail.js";
import handleAddItemToCart from "./utils/eventListeners/handleAddItemToCart.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");


NavBar()
Footer()

const productDetail = async () => {

    try {

        const product = await fetchData(apiUrls.baseUrl + apiUrls.singleProductsUrl + productId + apiUrls.populateImgUrl);

        document.querySelector("#meta").setAttribute("content", product.attributes.description);

        document.title = `${product.attributes.name} | eFooter`;

        ProductDetail(product);

        const quantityValue = document.querySelector("#quantity");
        const addToCartBtn = document.querySelector("#add-to-cart__btn");
        console.log(addToCartBtn)

        handleAddItemToCart(quantityValue, addToCartBtn);

    } catch (error) {
        console.log(error)
    }


}

productDetail();






