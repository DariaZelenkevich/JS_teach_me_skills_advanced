import React, { Component } from 'react';
import valuesToArray from '../services/values-to-array';
import getWeekWeatherData from '../services/get-week-weather-data';

import Item from './item';
import Button from './button';
import List from './list';

class WeatherList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      listLenght: 0,
      shownIndex: 0,
    }
  }

  handleClickBack = () => {

    let steps = this.state.shownIndex - 1;

    if (steps < 0) {

      return;
    } else {

      this.setState({
        shownIndex: steps
      })
    }
  }

  handleClickForward = () => {

    let steps = this.state.shownIndex + 1;

    if (steps > this.state.listLenght - 1) {

      this.setState({
        shownIndex: 0
      })  
    } else {

      this.setState({
        shownIndex: steps
      })
    }
  }

  componentDidMount() {
    fetch("/data/2.5/forecast?id=625144&appid=433063020ba53fabf12ee2e35fff9e57&units=metric")
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }

        return response.json();
      })
      .then(list => {
        console.log(list)
        return valuesToArray(list);
      })
      .then(array => {
        return getWeekWeatherData(array);
      })
      .then(array => {
        console.log(array)
        this.setState({
          list: valuesToArray(array),
          listLenght: array.length
        })   
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    return ( 
      <>
        <div className='container__daily-weather daily-weather'>

          <Button title = '<'callback={this.handleClickBack.bind(this)}/>

          <Item data = {this.state.list[this.state.shownIndex]} />

          <Button title = '>'callback={this.handleClickForward.bind(this)}/>

        </div>

        <List data = {this.state.list} />
      </>
    )
  }
}

export default WeatherList;