import React from 'react';

const Button = props => {
    return <button onClick = {props.callback}>{ props.title }</button>
};

export default Button;