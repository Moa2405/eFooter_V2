import apiUrls from "../../utils/api/urls.js";
import handleDeleteProduct from "../../utils/eventListeners/handleDeleteProduct.js";
import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import moment from '/../../../node_modules/moment/dist/moment.js';

const user = localeStorage.getData(storageKeys.USER_KEY);

const adminAccordionContainer = document.querySelector(".accordion");

const AdminAccordion = (products) => {

    products.forEach((product) => {

        let updateLink = user.admin
            ? `<a href="/admin-update-product.html?id=${product.id}" 
                class="nav-link text-black">
                <i class="bi bi-pencil-square"></i>
               </a>`
            : `<a href="/sign-in.html" 
                class="nav-link text-black">
                <i class="bi bi-pencil-square"></i>
              </a>`;

        let img = !product.attributes.image.data.attributes.formats
            ? `<img class="table__img rounded-circle" 
                    src="#" 
                    alt="No image on this product"`

            : `<img class="table__img rounded-circle" 
                    src="${apiUrls.baseUrl}${product.attributes.image.data.attributes.formats.thumbnail.url}" 
                    alt="${product.attributes.name}" 
                    width="50px" height="50px">`

        adminAccordionContainer.innerHTML += `
            <div class="accordion-item mb-3 shadow rounded-2">
                <h2 class="accordion-header" id="heading${product.attributes.name}">
                    <button 
                        class="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapse${product.id}" 
                        aria-expanded="true" 
                        aria-controls="collapse${product.id}">

                        <div class="accordion__btn-content container d-flex flex-column justify-content-between align-items-center pl-2 text-dark">                          
                            <div>Id: ${product.id}</div>
                            <div class="accordion__item_name">${product.attributes.name}</div>
                            ${img}
                        </div>
                    </button>
                </h2>
                <div 
                    id="collapse${product.id}" 
                    class="accordion-collapse collapse" 
                    aria-labelledby="heading${product.attributes.name}" 
                    data-bs-parent="#accordionAdmin">

                    <div class="accordion-body d-flex flex-column gap-3">
                        <div>
                            <div><strong>Description</strong></div>
                            <div>${product.attributes.description}</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>
                                <div><strong>Price:</strong></div>
                                <div>${product.attributes.price}.00 kr</div>
                            </div>
                            <div>
                                <div><strong>Created:</strong></div>
                                <div>${moment(product.attributes.createdAt).format("LLL")}</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            ${updateLink}
                            <i class="bi bi-trash" data-id=${product.id} style="color: red;"></i>
                        </div> 
                    </div>
                </div>
            </div>`
    })

    const deleteProductBtn = document.querySelectorAll(".bi-trash");


    deleteProductBtn.forEach((btn) => {
        btn.onclick = (event) => handleDeleteProduct(event)
    })
}

export default AdminAccordion;
