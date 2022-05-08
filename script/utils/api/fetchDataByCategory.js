const fetchDataByCategory = async (url) => {
    let data = [];

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        data = result.data.attributes.products.data;

    }
    catch (error) {
        console.log(error);
    }
    finally {
        return data;
    }
}

export default fetchDataByCategory;