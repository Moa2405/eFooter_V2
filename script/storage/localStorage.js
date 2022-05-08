export const getData = (key) => {
  const data = localStorage.getItem(key);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
};

export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const clearData = (key) => localStorage.clear(key);
