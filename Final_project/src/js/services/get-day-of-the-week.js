function getDayOfTheWeek(milliseconds) {

    let day = Math.floor(new Date(milliseconds).getDay());

    let stringDay = '';

    switch(day) {
        case 0:
            return stringDay = 'Воскресенье';
        case 1:
            return stringDay = 'Понедельник';
        case 2:
            return stringDay = 'Вторник';
        case 3:
            return stringDay = 'Среда';
        case 4:
            return stringDay = 'Четверг';
        case 5:
            return stringDay = 'Пятница';
        case 6:
            return stringDay = 'Суббота';
    }
}

export default getDayOfTheWeek;