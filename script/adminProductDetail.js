import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import apiUrls from "./utils/api/urls.js";
import storageKeys from "./storage/storageKeys.js";
import * as localeStorage from "./storage/localStorage.js";
import DisplayMessage from "./components/DisplayMessage.js";

const params = new URLSearchParams(window.location.search);
const typeOfForm = params.get("id");
const form = document.querySelector("#create")

Footer()
NavBar()

const handelProductForm = async (event) => {
    event.preventDefault()
    const form = event.target;
    const action = form.action;
    const method = form.method;
    const enctype = form.method;
    const originalFormData = new FormData(form);
    const body = new FormData();

    for (const [key, value] of originalFormData.entries()) {
        if (key.includes('files.')) {
            body.append(key, value);
            // Add this to the request body
            originalFormData.delete(key);
            // Remove it from the original form data list
        }
    }

    const token = localeStorage.getData(storageKeys.TOKEN_KEY);

    const headers = new Headers({ Authorization: `Bearer ${token}` });

    const data = Object.fromEntries(originalFormData.entries());
    body.append('data', JSON.stringify(data));

    try {
        const response = await fetch(action, { body, method, enctype, headers })
        const result = await response.json();
        console.log(result)

    } catch (err) {
        console.log(err)
    }
}

if (typeOfForm === "create") {

    const user = localeStorage.getData(storageKeys.USER_KEY);
    if (user.admin) {

        console.log(admin)
        form.setAttribute("method", "put");

        form.setAttribute("action", `${apiUrls.baseUrl}${apiUrls.productsUrl}`);

        form.addEventListener("submit", handelProductForm);

    } else {
        const overlay = document.createElement("div");
        overlay.setAttribute("class", "position-absolute top-0 start-0 bottom-0 end-0 opacity-75 d-flex align-items-center justify-content-center bg-light");

        const btn = document.createElement("a");
        btn.setAttribute("class", "btn btn-primary");
        btn.setAttribute("href", "../sign-in.html");
        btn.setAttribute("type", "button")
        btn.textContent = "Sign in";

        overlay.appendChild(btn);

        const main = document.querySelector("main");
        main.appendChild(overlay);
    }
}