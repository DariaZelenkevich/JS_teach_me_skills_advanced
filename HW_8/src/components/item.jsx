import React, {Component} from 'react';
import Checkbox from './checkbox';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  
  handleCheckboxChange = event => { 
    this.setState({ 
      checked: event.target.checked 
    });
  }

  render() { 
    const {title, callback} = this.props;
    const {checked} = this.state;
    return (
      <li onChange={callback}>  
        <span>{title} </span> 
        <Checkbox checked={checked} callbackFunc={this.handleCheckboxChange.bind(this)}/>
      </li>
    )
  }
}

export default Item;
