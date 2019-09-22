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
      <div>
        <div>
          {day} {date}
        </div>
        <div>
          {        
            weather.map((item) => {
              let iconUrl = "http://openweathermap.org/img/w/" + item.weather_icon + ".png";
              return (
                <div>
                  <div>
                    {item.time}:00
                  </div>
                  <div>
                    <img src={iconUrl} alt="icon"/>
                  </div>
                  <div>
                    {item.temp_max}&deg;
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
