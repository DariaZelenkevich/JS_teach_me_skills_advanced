import React, {Component} from 'react';
import  valuesToArray from '../services/values-to-array';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    const {data} = this.props;
    const weather = valuesToArray(data);
    const date = valuesToArray(weather[0])[0];
    const day = valuesToArray(weather[0])[1];
    return (
      <div className='daily-weather__weather-content weather-content'>
        <div className='weather-content__period'>
          <span className='weather-content__date day'>{day}</span> <span className='weather-content__date date'>{date}</span>
        </div>
        <div className='weather-content__list'>
          {        
            weather.map((item) => {
              let iconUrl = "http://openweathermap.org/img/w/" + item.weather_icon + ".png";
              return (
                <div className='weather-content__block'>
                  <div className='weather-content__data'>
                    <span className='weather-content__time'>{item.time}:00</span>
                  </div>
                  <div className='weather-content__data'>
                    <img  className='weather-content__icon icon' src={iconUrl} alt="icon"/>
                  </div>
                  <div className='weather-content__data'>
                    <span className='weather-content__temp temp temp_max'>{item.temp_max}&deg;</span>
                  </div>
                </div>
              )
            })
          }
        </div> 
      </div>
    )
  }
}

export default Item;
