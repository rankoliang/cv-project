const objFilter = (obj, callback) => {
  const filteredEntries = Object.entries(obj).filter(callback);

  return Object.fromEntries(filteredEntries);
};

export default objFilter;
