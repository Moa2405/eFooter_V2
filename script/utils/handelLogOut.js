import * as localStorage from "../storage/localStorage.js";
import storageKeys from "../storage/storageKeys.js";

const handelLogout = () => {
    localStorage.clearData(storageKeys.USER_KEY);
    localStorage.clearData(storageKeys.TOKEN_KEY);
    window.location.href = "/";
};

export default handelLogout;