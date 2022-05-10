import apiUrls from "../../utils/api/urls.js";
import deleteProduct from "../../utils/admin/deleteProduct.js";

const adminAccordionContainer = document.querySelector(".accordion");

const AdminAccordion = (products) => {

    products.forEach((product) => {

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

                        <div class="container d-flex justify-content-between align-items-center pl-2 text-dark">
                            <div>ID: ${product.id}</div>
                            <div class="accordion__item_name">${product.attributes.name}</div>
                            <img 
                                class="table__img" 
                                src="${apiUrls.baseUrl}${product.attributes.image.data.attributes.formats.thumbnail.url}" 
                                alt="${product.attributes.name}" 
                                width="70" 
                                height="70">
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
                        <div>
                            <div><strong>Price</strong></div>
                            <div>${product.attributes.price}</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a href="/admin-product-detail.html?id=edit" class="nav-link text-black" data-id=${product.id}>
                                <i class="bi bi-pencil-square"></i>
                            </a>
                            <i class="bi bi-trash" data-id=${product.id} style="color: red;"></i>
                        </div> 
                    </div>
                </div>
            </div>`
    })

    const deleteProductBtn = document.querySelectorAll(".bi-trash");
    const editProductBtn = document.querySelectorAll(".bi-pencil-square");

    deleteProductBtn.forEach((btn) => {
        btn.onclick = (event) => deleteProduct(event)
    })
    editProductBtn.forEach((btn) => {
        btn.onclick = (event) => editProduct(event)
    })
}

export default AdminAccordion;
