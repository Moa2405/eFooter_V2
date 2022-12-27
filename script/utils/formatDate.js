const formatDate = (date) => {
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}

export default formatDate;



// const formatDate = (date) => {
//   const d = new Date(date);
//   const day = d.getDate();
//   const month = d.getMonth() + 1;
//   const year = d.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// export default formatDate;

