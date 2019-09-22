import React from 'react';

const Button = ({callback, title}) => {

    return <button onClick = {callback}>{title}</button>
}

export default Button;