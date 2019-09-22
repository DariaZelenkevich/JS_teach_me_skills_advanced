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
      <div>
       <ul>
        {
          weekList.map(item => {
            return (
              <li key={item.date}>
                <div className="date">
                  {item.day}  {item.date}
                </div>
                
                <div className="icon">
                  <img src={item.weather_icon_url} alt=""/>
                </div>

                <div className="temp_max">
                  {item.temp_max} 
                </div>
                <div className="temp_min">
                  {item.temp_min}
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
