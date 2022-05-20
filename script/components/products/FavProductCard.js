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

    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card__container col-sm-6 col-lg-4 mb-3");

    const cardWrapper = document.createElement("article");
    cardWrapper.setAttribute("class", "card h-100 bg-transparent position-relative shadow");

    const cardFavBtn = document.createElement("button");
    cardFavBtn.setAttribute("class", "favorites__btn_container btn btn-light shadow-sm rounded-circle");
    cardFavBtn.setAttribute("data-id", id);
    cardFavBtn.setAttribute("type", "button");

    const favIcon = document.createElement("i");
    favIcon.setAttribute("class", "favorites__btn top-0 start-50 translate-middle bi bi-trash");
    favIcon.setAttribute("data-id", id);

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", apiUrls.baseUrl + image);
    cardImg.setAttribute("loading", "lazy");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("alt", name);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body d-flex flex-column justify-self-end");

    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", `product-detail.html?id=${id}`);

    const cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = name;

    const cardPrice = document.createElement("p");
    cardPrice.setAttribute("class", "card-text");
    cardPrice.textContent = `${price},00 kr`;

    cardFavBtn.appendChild(favIcon);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPrice);

    cardLink.appendChild(cardImg);
    cardLink.appendChild(cardBody);

    cardWrapper.appendChild(cardFavBtn);
    cardWrapper.appendChild(cardLink);

    cardContainer.appendChild(cardWrapper);

    productContainer.appendChild(cardContainer);

    // productContainer.innerHTML += `
    //       <div class="col mb-5 position-relative bg-white h-100">
    //         <article class="card h-100 position-relative">
    //           <button type="button" class="favorites__btn_container btn btn-light shadow rounded-circle" data-id=${id}>
    //               <i class="favorites__delete_btn top-0 start-50 translate-middle ${btnCssClass}" data-id=${id}></i>
    //           </button>
    //           <a href="product-detail.html?id=${id}" class="shadow">
    //             <img src="${apiUrls.baseUrl}${image}" loading="lazy" class="card-img-top" alt="${name}">
    //             <div class="card-body d-flex flex-column justify-content-end">
    //               <h4 class="card-title">${name}</h4>
    //               <p class="card-text">${price},00 kr</p>
    //             </div>
    //           </a>  
    //         </article>
    //       </div>`
    //   ;
  })

  const removeFromFavBtn = document.querySelectorAll(".favorites__btn");
  console.log(removeFromFavBtn)

  removeFromFavBtn.forEach((btn) => {
    btn.onclick = (event) => {
      const newList = deleteItemFromList(products, storageKeys.FAV_KEY, event)

      FavProductCard(newList);
    };
  });


}

export default FavProductCard;
