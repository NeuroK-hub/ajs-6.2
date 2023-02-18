const fooSpecial = (obj, id) => {
  for (let i = 0; i < obj.special.length; i += 1) {
    Object.defineProperty(obj.special[i], 'description', {
      writable: true,
      enumerable: true,
      configurable: true,
    });
    if (obj.special[i].id === id) {
      if (obj.special[i].description === undefined) {
        const currentObj = obj.special[i];
        currentObj.description = 'Описание недоступно';
        return obj.special[i];
      } else {
        return obj.special[i];
      }
    } else {
      continue;
    }
  }
  return new Error(`No data with id - ${id}`);
};

export default fooSpecial;
