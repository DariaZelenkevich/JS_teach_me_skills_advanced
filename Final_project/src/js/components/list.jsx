import React, {Component} from 'react';
import  getDateAverageWeatherData from '../services/get-date-average-weather-data';

class List extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    const {data} = this.props;
    const weekList = getDateAverageWeatherData(data);

    return (
      <div className='container__weekly-weather weekly-weather'>
        <ul className='weekly-weather__list'>
          {
            weekList.map(item => {
              return (
                <li className='weekly-weather__item' key={item.date}>
                  <div className='weekly-weather__block'>
                  <span className='weekly-weather__date day'>{item.day}</span> <span className='weekly-weather__date date'>{item.date}</span>
                  </div>
                  
                  <div className='weekly-weather__block'>
                    <img  className='weekly-weather__icon icon' src={item.weather_icon_url} alt=""/>
                  </div>

                  <div className='weekly-weather__block' >
                    <span className='weekly-weather__temp temp temp_max'>{item.temp_max}&deg;</span>   
                  </div>

                  <div className='weekly-weather__block'>
                    <span className='weekly-weather__temp temp temp_min'>{item.temp_min}&deg;</span> 
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List;
