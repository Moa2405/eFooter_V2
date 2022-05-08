import * as localStorage from "../storage/localStorage.js";
import storageKeys from "../storage/storageKeys.js";

const handelLogout = () => {
    localStorage.clearData(storageKeys.userKey);
    localStorage.clearData(storageKeys.tokenKey);
    window.location.href = "/";
};

export default handelLogout;