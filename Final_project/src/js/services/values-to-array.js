function valuesToArray(obj) {

  const result = [];

  for (let key in obj) {
    
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

export default valuesToArray;