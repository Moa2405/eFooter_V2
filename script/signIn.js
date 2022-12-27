import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import handelLogin from "./utils/eventListeners/handleSignUpSignIn.js";
import DisplayMessage from "./components/DisplayMessage.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import apiUrls from "./utils/api/urls.js";
import showHidePassword from "./utils/eventListeners/hideShowPassword.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkboxPassword = document.querySelector("#checkbox-password");
const messageContainer = document.querySelector(".message-container");

const form = document.querySelector("#login-form");

NavBar();
Footer()

checkboxPassword.addEventListener("change", showHidePassword);
checkboxPassword.checked = false;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    messageContainer.innerHTML = "";

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue.length === 0 || passwordValue.length === 0) {
        return DisplayMessage("danger", "Invalid values", ".message-container");
    }

    login(emailValue, passwordValue);
});

const login = async (email, password) => {
    const data = JSON.stringify({ identifier: email, password: password });

    const loggedInUser = await handelLogin(data, apiUrls.baseUrl + apiUrls.loginUrl);

    if (!loggedInUser.user) {
        console.warn(loggedInUser);
        DisplayMessage(
            "danger",
            `${loggedInUser.error.message}`,
            ".message-container"
        );
    } else {
        console.log(loggedInUser);
        localStorage.saveData(storageKeys.TOKEN_KEY, loggedInUser.jwt);
        localStorage.saveData(storageKeys.USER_KEY, loggedInUser.user);
        window.location.href = "/";
    }
};
