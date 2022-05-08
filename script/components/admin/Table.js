import apiUrls from "../../utils/api/urls.js";

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
        adminProducts.innerHTML += `
            <tr>
                <td scope="row">${product.id}</td>
                <td>${product.attributes.name}</td>
                <td class="table__description">${product.attributes.description}</td>
                <td><img class="table__img rounded-circle" src="${apiUrls.baseUrl}${product.attributes.image.data.attributes.formats.thumbnail.url}" alt="${product.attributes.name}" width="32" height="32"></td>
                <td><i class="bi bi-pencil-square" data-id=${product.id}></i></td>
                <td><i class="bi bi-trash" data-id=${product.id} style="color: red;"></i></td>
            </tr>`
    })
}

export default AdminTable;



