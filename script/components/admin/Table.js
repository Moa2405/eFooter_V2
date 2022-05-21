import handleDeleteProduct from "../../utils/eventListeners/handleDeleteProduct.js";
import apiUrls from "../../utils/api/urls.js";
import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";
import moment from '/../../../node_modules/moment/dist/moment.js';

const user = localeStorage.getData(storageKeys.USER_KEY);

const AdminTable = async (products) => {


    const adminProducts = document.querySelector(".table-body");
    adminProducts.innerHTML = "";

    products.forEach((product) => {

        let updateLink = user.admin
            ? `<a href="/admin-update-product.html?id=${product.id}" 
                class="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
              </a>`
            : `<a href="/sign-in.html" 
                class="text-black">
                <i class="bi bi-pencil-square"></i>
              </a>`;

        let img = !product.attributes.image.data.attributes.formats
            ? `<img class="table__img rounded-circle" 
                    src="#" 
                    alt="" 
                    width="32" height="32">`

            : `<img class="table__img rounded-circle" 
                    src="${apiUrls.baseUrl}${product.attributes.image.data.attributes.formats.thumbnail.url}" 
                    alt="${product.attributes.name}" 
                    width="32" height="32">`

        adminProducts.innerHTML += `
            <tr>
                <td scope="row">${product.id}</td>
                <td>${product.attributes.name}</td>
                <td>${moment(product.attributes.createdAt).format("LL")}</td>
                <td class="table__description">${product.attributes.description}</td>
                <td>
                    ${img}
                </td>
                <td>
                    ${updateLink}
                </td>
                <td><button class="admin__delete_product bg-transparent" data-id=${product.id}></button></td>
            </tr>`
    })

    const deleteProductBtn = document.querySelectorAll(".admin__delete_product");

    deleteProductBtn.forEach((btn) => {
        btn.onclick = (event) => handleDeleteProduct(event);
    })
}

export default AdminTable;



