import apiUrls from "../../utils/api/urls.js";
import handleDeleteProduct from "../../utils/eventListeners/handleDeleteProduct.js";
import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import moment from '/../../../node_modules/moment/dist/moment.js';

const user = localeStorage.getData(storageKeys.USER_KEY);

const adminAccordionContainer = document.querySelector(".accordion");

const AdminAccordion = (products) => {

    adminAccordionContainer.innerHTML = "";

    products.forEach((product) => {

        let updateLink = user.admin
            ? `<a href="/admin-update-product.html?id=${product.id}" 
                class="text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
               </a>`
            : `<a href="/sign-in.html" 
                class="text-dark">
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
                        <div class="d-flex flex-column flex-sm-row gap-3 gap-sm-4">
                            <div>
                                <div><strong>Price:</strong></div>
                                <div>${product.attributes.price}.00 kr</div>
                            </div>
                            <div>
                                <div><strong>Created:</strong></div>
                                <div>${moment(product.attributes.createdAt).format("LLL")}</div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-5">
                            ${updateLink}
                            <button class="admin__delete_product pt-2 bg-transparent" data-id=${product.id} style="background-position: center;"></button>
                        </div> 
                    </div>
                </div>
            </div>`
    })

    const deleteProductBtn = document.querySelectorAll(".admin__delete_product");


    deleteProductBtn.forEach((btn) => {
        btn.onclick = (event) => handleDeleteProduct(event)
    })
}

export default AdminAccordion;
