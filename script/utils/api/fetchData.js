const fetchData = async (url) => {
  let data = [];

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Type of error: ${response.status}, Status text:${response.statusText}`
      );
    }

    const result = await response.json();
    data = result.data
  }

  catch (error) {
    console.warn("Warning: getData failed", error);
  }

  finally {
    return data;
  }
};

export default fetchData;
