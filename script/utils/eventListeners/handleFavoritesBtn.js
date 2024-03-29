import * as localStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js"

const handleFavoritesBtn = (items) => {
    items.forEach((item) => {
        item.onclick = (event) => {
            const id = item.dataset.id;

            item.classList.toggle("toggle-heart-fill");
            item.classList.toggle("toggle-heart");

            const allData = localStorage.getData(storageKeys.ALL_PRODUCTS_KEY);

            const targetItem = allData.find(
                (item) => item.id === parseInt(id)
            );

            const currentDataList = localStorage.getData(storageKeys.FAV_KEY);

            const doseItemExists = currentDataList.find(
                (item) => item.id === parseInt(id)
            );

            if (!doseItemExists) {
                currentDataList.push(targetItem);

                localStorage.saveData(storageKeys.FAV_KEY, currentDataList);

            } else {
                const newListData = currentDataList.filter(
                    (item) => item.id !== parseInt(id)
                );

                localStorage.saveData(storageKeys.FAV_KEY, newListData);
            }
        };
    });
};

export default handleFavoritesBtn;
