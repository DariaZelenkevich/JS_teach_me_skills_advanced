import getNewDate from './get-new-date';
import getDayOfTheWeek from './get-day-of-the-week';
import getDateOfTheMonth from './get-date-of-the-month';

function getWeekWeatherData(data) {
  
  const arr = data[3];
  const thisDate = new Date().getDate();

  const weekWeatherData = [];
  const today = [];
  const firth = [];
  const second = [];
  const third = [];
  const forth = [];

  for(let i = 0; i < arr.length; i++) {
    let date = new Date(arr[i].dt_txt).getDate();
    let time = Date.parse(arr[i].dt_txt);

    if(date == thisDate) {

      for(let j = 0; j < 3; j++) {

        const currentData = {};

        currentData.date = getDateOfTheMonth(time);
        currentData.day = getDayOfTheWeek(time);
        currentData.time = Math.floor(new Date(time).getHours()) + j; 
        currentData.temp_max = Math.floor(arr[i].main.temp_max);
        currentData.temp_min = Math.floor(arr[i].main.temp_min);
        currentData.weather_icon = arr[i].weather[0].icon;
        currentData.id = '0' + i + j;
        today.push(currentData);
      }


    } else if(date == getNewDate(1)) { 

      for(let j = 0; j < 3; j++) {

        const firthData = {};

        firthData.date = getDateOfTheMonth(time);
        firthData.day = getDayOfTheWeek(time);
        firthData.time = Math.floor(new Date(time).getHours()) + j; 
        firthData.temp_max = Math.floor(arr[i].main.temp_max);
        firthData.temp_min = Math.floor(arr[i].main.temp_min);
        firthData.weather_icon = arr[i].weather[0].icon;
        firthData.id = '0' + i + j;
        firth.push(firthData);

      }
    } else if (date == getNewDate(2)) { 

      for(let j = 0; j < 3; j++) {

        const secondData = {};

        secondData.date = getDateOfTheMonth(time);
        secondData.day = getDayOfTheWeek(time);
        secondData.time =  Math.floor(new Date(time).getHours()) + j; 
        secondData.temp_max = Math.floor(arr[i].main.temp_max);
        secondData.temp_min = Math.floor(arr[i].main.temp_min);
        secondData.weather_icon = arr[i].weather[0].icon;
        secondData.id = '0' + i + j;
        second.push(secondData);
      }
    } else if(date == getNewDate(3)) { 

      for(let j = 0; j < 3; j++) {

        const thirdData = {};

        thirdData.date = getDateOfTheMonth(time);
        thirdData.day = getDayOfTheWeek(time);
        thirdData.time = Math.floor(new Date(time).getHours()) + j; 
        thirdData.temp_max = Math.floor(arr[i].main.temp_max);
        thirdData.temp_min =  Math.floor(arr[i].main.temp_min);
        thirdData.weather_icon = arr[i].weather[0].icon;
        thirdData.id = '0' + i + j;
        third.push(thirdData);
      }
    } else if(date == getNewDate(4)) { 
      
      for(let j = 0; j < 3; j++) {

        const forthData = {};

        forthData.date = getDateOfTheMonth(time);
        forthData.day = getDayOfTheWeek(time);
        forthData.time = Math.floor(new Date(time).getHours()) + j; 
        forthData.temp_max = Math.floor(arr[i].main.temp_max);
        forthData.temp_min = Math.floor(arr[i].main.temp_min);
        forthData.weather_icon = arr[i].weather[0].icon;
        forthData.id = '0' + i + j;
        forth.push(forthData);
      }
    }    
  }

  weekWeatherData.push(today, firth, second, third, forth);
  
  return weekWeatherData;
}

export default getWeekWeatherData;