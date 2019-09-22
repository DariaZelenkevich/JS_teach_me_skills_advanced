function getDateOfTheMonth(milliseconds) {

    let date = new Date(milliseconds).getDate();
    let month = new Date(milliseconds).getMonth();

    if(month < 10) {

        month = '0' + (month + 1);
    } else {

        month = '' + (month + 1); 
    }

    return date + '.' + month;
}

export default getDateOfTheMonth;