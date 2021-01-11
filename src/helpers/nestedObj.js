// returns { [fields[2]]: { [fields[1]]: { [fields[0]]: value } } }
function nestedObj(value, ...fields) {
  return fields
    .reverse()
    .slice(1)
    .reduce(
      (obj, field) => {
        return { [field]: obj };
      },
      { [fields[0]]: value }
    );
}

export default nestedObj;
