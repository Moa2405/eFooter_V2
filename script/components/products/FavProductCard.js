import apiUrls from "../../utils/api/urls.js";
import deleteItemFromList from "../../utils/deleteItemFromList.js";
import storageKeys from "../../storage/storageKeys.js";
import DisplayMessage from "../DisplayMessage.js";

const FavProductCard = (products) => {

  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";

  if (!products.length) {
    return DisplayMessage("primary", "You have no products in your favorites", ".product-container")
  }

  products.forEach((product) => {

    const { id } = product;
    const image = product.attributes.image.data.attributes.url;
    const name = product.attributes.name;
    const price = product.attributes.price;

    let btnCssClass = "bi bi-trash";

    productContainer.innerHTML += `
          <div class="col mb-5 position-relative bg-white h-100">
            <article class="card h-100 position-relative">
              <button type="button" class="favorites__btn_container btn btn-light shadow rounded-circle" data-id=${id}>
                  <i class="favorites__delete_btn top-0 start-50 translate-middle ${btnCssClass}" data-id=${id}></i>
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
  })

  const removeFromFavBtn = document.querySelectorAll(".favorites__delete_btn");
  removeFromFavBtn.forEach((btn) => {
    btn.onclick = (event) => {
      FavProductCard(deleteItemFromList(products, storageKeys.FAV_KEY, event));
    }
  })
}

export default FavProductCard;
