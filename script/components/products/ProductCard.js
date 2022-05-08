import apiUrls from "../../utils/api/urls.js";
import * as localStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import handleFavoritesBtn from "../../utils/eventListeners/handleFavoritesBtn.js";

const ProductCard = (products) => {

  const productsContainer = document.querySelector(".product-container");

  products.forEach((product) => {
    const { id } = product;
    const image = product.attributes.image.data.attributes.url;
    const name = product.attributes.name;
    const price = product.attributes.price;

    let btnCssClass = "bi bi-heart";

    const itemsInFavorites = localStorage.getData(storageKeys.FAV_KEY);

    const doesItemExist = itemsInFavorites.find(
      (item) => item.id === id
    );

    if (doesItemExist) {
      btnCssClass = "bi bi-heart-fill text-primary";
    }

    productsContainer.innerHTML += `
          <div class="col mb-5 position-relative bg-white h-100">
            <article class="card h-100 position-relative">
              <button type="button" class="favorites__btn_container btn btn-light shadow rounded-circle" data-id=${id}>
                  <i class="favorites__btn top-0 start-50 translate-middle ${btnCssClass}" data-id=${id}></i>
              </button>
              <a href="product-detail.html?id=${id}" class="shadow">
                <img src="${apiUrls.baseUrl}${image}" loading="lazy" class="card-img-top" alt="${name}">
                <div class="card-body d-flex flex-column justify-content-end">
                  <h4 class="card-title">${name}</h4>
                  <p class="card-text">${price},00 kr</p>
                </div>
              </a>  
            </article>
          </div>`
      ;
  });
  const favBtn = document.querySelectorAll(".favorites__btn");

  handleFavoritesBtn(favBtn);
}

export default ProductCard;