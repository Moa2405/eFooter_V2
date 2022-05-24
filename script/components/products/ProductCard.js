import apiUrls from "../../utils/api/urls.js";
import * as localStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import DisplayMessage from "../DisplayMessage.js";

const ProductCard = (products) => {

  const productsContainer = document.querySelector(".product-container");

  if (products.length) {

    products.forEach((product) => {

      const { id } = product;
      const image = product.attributes.image.data.attributes.url;
      const name = product.attributes.name;
      const price = product.attributes.price;


      const itemsInFavorites = localStorage.getData(storageKeys.FAV_KEY);

      const doesItemExist = itemsInFavorites.find(
        (item) => item.id === id
      );

      let btnCssClass = "toggle-heart";

      if (doesItemExist) {
        btnCssClass = "toggle-heart-fill";
      }

      const cardContainer = document.createElement("div");
      cardContainer.setAttribute("class", "card__container col-sm-6 col-lg-4 mb-4");

      const cardWrapper = document.createElement("article");
      cardWrapper.setAttribute("class", "card p-0 bg-transparent text-dark h-100 position-relative shadow");

      const cardFavBtn = document.createElement("button");
      cardFavBtn.setAttribute("class", `favorites__btn ${btnCssClass} btn shadow rounded-circle`);
      cardFavBtn.setAttribute("data-id", id);
      cardFavBtn.setAttribute("type", "button");

      const cardImg = document.createElement("img");
      cardImg.setAttribute("src", apiUrls.baseUrl + image);
      cardImg.setAttribute("loading", "lazy");
      cardImg.setAttribute("class", "card-img-top");
      cardImg.setAttribute("alt", name);

      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body d-flex bg-light justify-content-between align-items-center justify-self-end");

      const cardLink = document.createElement("a");
      cardLink.setAttribute("href", `product-detail.html?id=${id}`);

      const cardTitle = document.createElement("p");
      cardTitle.setAttribute("class", "card-title");
      cardTitle.textContent = name;

      const cardPrice = document.createElement("p");
      cardPrice.setAttribute("class", "card-text fw-bold");
      cardPrice.textContent = `${price},00 kr`;

      const cardCtaBtn = document.createElement("button");
      cardCtaBtn.setAttribute("class", "product-card__cta btn btn-primary text-white");
      cardCtaBtn.setAttribute("type", "button");
      cardCtaBtn.textContent = "Add to cart"

      const cardCtaContainer = document.createElement("div")
      cardCtaContainer.setAttribute("class", "align-self-end")
      const cardPriceNameContainer = document.createElement("div")

      // cardFavBtn.appendChild(favIcon);

      cardPriceNameContainer.appendChild(cardTitle);
      cardPriceNameContainer.appendChild(cardPrice);

      cardCtaContainer.appendChild(cardCtaBtn);

      cardBody.appendChild(cardPriceNameContainer);
      cardBody.appendChild(cardCtaContainer);

      cardLink.appendChild(cardImg);
      cardLink.appendChild(cardBody);

      cardWrapper.appendChild(cardFavBtn);
      cardWrapper.appendChild(cardLink);

      cardContainer.appendChild(cardWrapper);

      productsContainer.appendChild(cardContainer);

      // productsContainer.innerHTML +=
      //       <div class="card__container col-sm-6 col-lg-4 mb-3">
      //         <article class="card p-3 h-100 position-relative bg-white shadow">
      //           <button type="button" class="favorites__btn_container btn btn-light shadow-sm rounded-circle" data-id=${id}>
      //               <i class="favorites__btn top-0 start-50 translate-middle ${btnCssClass}" data-id=${id}></i>
      //           </button>
      //           <a href="product-detail.html?id=${id}">
      //             <img src="${apiUrls.baseUrl}${image}" loading="lazy" class="card-img-top" alt="${name}">
      //             <div class="card-body d-flex justify-content-between justify-self-end">
      //             <div>
      //                <h4 class="card-title">${name}</h4>
      //                 <p class="card-text">${price},00 kr</p>
      //             </div>
      //             <div>
      //                <button class="btn btn-primary" type="button">
      //                  <i class="bi bi-cart3"></i>
      //                </button>
      //              </div>
      //             </div>
      //           </a> 
      //         </article>
      //       </div>
      // ;
    });
  }
  else {
    DisplayMessage("danger", "Ooops! Something went wrong", ".product-container")
  }
}

export default ProductCard;