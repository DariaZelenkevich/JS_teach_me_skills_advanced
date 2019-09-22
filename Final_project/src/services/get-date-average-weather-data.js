import getMinTemp from './get-min-temp';
import getMaxTemp from './get-max-temp';
import getMaxRepetitiveIcon from './get-max-repetitive-icon';

function getDateAverageWeatherData(data) {

    return data.map(item => {

        let maxTemp = getMaxTemp(item);
        let minTemp = getMinTemp(item);
        let dateInText = item[0].date;
        let dayInText = item[0].day;
        let weatherIcon = getMaxRepetitiveIcon(item);
        let weatherIconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

        return {day: dayInText, date: dateInText, temp_max: maxTemp, temp_min: minTemp, weather_icon_url: weatherIconUrl};
    })
}

export default getDateAverageWeatherData;