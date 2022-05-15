import * as localStorage from "../storage/localStorage.js";

const deleteValueFromArr = (data, key, event) => {

    const id = parseInt(event.target.dataset.id);

    const dataList = data;

    const newList = dataList.filter((item) => item.id !== id);

    localStorage.saveData(key, newList);

    return newList;
}

export default deleteValueFromArr;