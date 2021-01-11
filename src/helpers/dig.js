function dig(obj, ...fields) {
  return fields.reduce((value, field) => {
    return value[field];
  }, obj);
}

export default dig;
