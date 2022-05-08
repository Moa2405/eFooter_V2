import * as localStorage from "../storage/localStorage.js";

const deleteItemFromList = (key, event) => {

    const id = parseInt(event.target.dataset.id);

    const dataList = localStorage.getData(key);

    const newList = dataList.filter((item) => item.id !== id);

    localStorage.saveData(key, newList);

    return newList;
}

export default deleteItemFromList;