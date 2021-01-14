const update = (obj, updatedObj) => {
  const map = new Map([...Object.entries(obj), ...Object.entries(updatedObj)]);

  return Object.fromEntries([...map.entries()]);
};

export default update;
