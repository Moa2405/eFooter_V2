import deleteProduct from "../../utils/admin/deleteProduct.js";
import apiUrls from "../../utils/api/urls.js";
import * as localeStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js";

const user = localeStorage.getData(storageKeys.USER_KEY);

const AdminTable = async (products) => {
    const adminTable = document.querySelector(".admin-table");


    adminTable.innerHTML = `
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th class="table__description" scope="col">Description</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody class="table-body"></tbody>
            </table>
        </div>`

    const adminProducts = document.querySelector(".table-body");

    products.forEach((product) => {


        let updateLink = user.admin
            ? `<a href="/admin-product-detail.html?typeOfForm=update&productId=${product.id}" 
                class="nav-link text-black">
                <i class="bi bi-pencil-square"></i>
              </a>`
            : `<a href="/sign-in.html" 
                class="nav-link text-black">
                <i class="bi bi-pencil-square"></i>
              </a>`;


        adminProducts.innerHTML += `
            <tr>
                <td scope="row">${product.id}</td>
                <td>${product.attributes.name}</td>
                <td class="table__description">${product.attributes.description}</td>
                <td>
                    <img class="table__img rounded-circle" 
                        src="${apiUrls.baseUrl}${product.attributes.image.data.attributes.formats.thumbnail.url}" 
                        alt="${product.attributes.name}" 
                        width="32" height="32">
                </td>
                <td>
                    ${updateLink}
                </td>
                <td><i class="bi bi-trash" data-id=${product.id} style="color: red;"></i></td>
            </tr>`
    })

    const deleteProductBtn = document.querySelectorAll(".bi-trash");

    deleteProductBtn.forEach((btn) => {
        btn.onclick = (event) => deleteProduct(event)
    })
}

export default AdminTable;



