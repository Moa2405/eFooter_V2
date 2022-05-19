import * as localStorage from "./storage/localStorage.js";
import storageKeys from "./storage/storageKeys.js";
import handelSignUp from "./utils/eventListeners/handleSignUpSignIn.js";
import DisplayMessage from "./components/DisplayMessage.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import apiUrls from "./utils/api/urls.js";
import showHidePassword from "./utils/eventListeners/hideShowPassword.js";

NavBar();
Footer();

const userName = document.querySelector("#user-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkboxPassword = document.querySelector("#checkbox-password");
const messageContainer = document.querySelector(".message-container");
const form = document.querySelector(".login-form");

email.value = "";
password.value = "";
userName.value = "";
checkboxPassword.checked = false

const validateEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

checkboxPassword.addEventListener("change", showHidePassword);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    messageContainer.innerHTML = "";

    const emailValue = email.value.trim();
    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();

    if (!validateEmail(emailValue)) {
        return DisplayMessage("danger", "Email not valid", ".message-container");
    }

    if (userNameValue.length === 0 || passwordValue.length === 0) {
        return DisplayMessage(
            "danger",
            "Username or password must contain at least one character",
            ".message-container"
        );
    }

    const data = JSON.stringify({
        username: userNameValue,
        email: emailValue,
        password: passwordValue
    });

    signUpUser(data);
});

const signUpUser = async (data) => {

    const url = apiUrls.baseUrl + apiUrls.signUpUserUrl;

    try {
        const loggedInUser = await handelSignUp(data, url);
        console.log(loggedInUser)

        if (!loggedInUser.user) {
            DisplayMessage(
                "danger",
                `${loggedInUser.error.message}`,
                ".message-container"
            );

        } else {
            localStorage.saveData(storageKeys.TOKEN_KEY, loggedInUser.jwt);
            localStorage.saveData(storageKeys.USER_KEY, loggedInUser.user);
            window.location.href = "/";
        }
    } catch (error) {
        console.log(error)
    }

};





