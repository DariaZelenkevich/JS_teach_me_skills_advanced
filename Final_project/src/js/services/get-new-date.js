function getNewDate(days) {

    let today = new Date();
    today.setDate(today.getDate() + days); 
  
    return today.getDate();
}

export default getNewDate;