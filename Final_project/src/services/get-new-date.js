function getNewDate(days) {

    let today = new Date();
    let newDate = new Date();
    newDate.setDate(today.getDate() + days); 
  
    return newDate.getDate();
}

export default getNewDate;