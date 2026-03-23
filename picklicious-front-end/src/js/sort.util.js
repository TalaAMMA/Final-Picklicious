 const sortByName = (array) => {
    return array.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase()
        ? 1
        : a.name.toLowerCase() > b.name.toLowerCase()
        ? -1
        : 0;
    });
  };
  export default sortByName;