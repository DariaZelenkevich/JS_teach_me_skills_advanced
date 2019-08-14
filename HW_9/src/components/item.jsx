import React, {Component} from 'react';

const Item = ({title, callback}) => {

  return <li onClick={callback}>{title}</li>

}

export default Item;
