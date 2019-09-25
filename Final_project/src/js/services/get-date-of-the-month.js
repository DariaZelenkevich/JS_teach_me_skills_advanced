function getDateOfTheMonth(milliseconds) {

    let date = new Date(milliseconds);

    if(date.getMonth() < 10) {

        return date.getDate() + '.' + '0' + (date.getMonth() + 1);
    } else {

        return date.getDate() + '.' + '' + (date.getMonth() + 1); 
    }
}

export default getDateOfTheMonth;