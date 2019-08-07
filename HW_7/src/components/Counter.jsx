import React, {Component} from 'react';
import Button from './Button';

class Counter extends Component {

  constructor(props){

    super(props);

    this.state = {
      value: 0
    }
  }

  handleClick(type){
    this.setState({
      value: type === "Прибавить" ? this.state.value + 1 : this.state.value - 1
    })
  }

  render(){
    return( 
      <> 
        <Button callback={this.handleClick.bind(this, "Прибавить")} title = "Прибавить"/>
        <span> {this.state.value}</span>
        <Button callback={this.handleClick.bind(this, "Отнять")} title = "Отнять"/>
      </>
    )
  }
}

export default Counter;