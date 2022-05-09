import * as localStorage from "../../storage/localStorage.js";
import storageKeys from "../../storage/storageKeys.js"

const handleFavoritesBtn = (items) => {
    items.forEach((item) => {
        item.onclick = (event) => {
            event.stopPropagation()
            const id = item.dataset.id;

            item.classList.toggle("bi-heart-fill");
            item.classList.toggle("text-primary");

            item.classList.toggle("bi-heart");

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

                const newData = localStorage.getData(storageKeys.FAV_KEY)
                console.log(newData)

            } else {
                const newListData = currentDataList.filter(
                    (item) => item.id !== parseInt(id)
                );

                localStorage.saveData(storageKeys.FAV_KEY, newListData);
                const newData = localStorage.getData(storageKeys.FAV_KEY)
                console.log(newData)
            }
        };
    });
};

export default handleFavoritesBtn;
