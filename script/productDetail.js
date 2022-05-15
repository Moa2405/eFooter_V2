import apiUrls from "./utils/api/urls.js";
import fetchData from "./utils/api/fetchData.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import ProductDetail from "./components/products/ProductDetail.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");


NavBar()
Footer()

const productDetail = async () => {

    try {

        const product = await fetchData(apiUrls.baseUrl + apiUrls.singleProductsUrl + productId + apiUrls.populateImgUrl);

        document.title = `${product.attributes.name} | eFooter`;

        ProductDetail(product);

    } catch (error) {

    }


}

productDetail();






