import React from 'react';

const Button = ({callback, title}) => {

    return <button className='daily-weather__button' onClick = {callback}>{title}</button>
}

export default Button;