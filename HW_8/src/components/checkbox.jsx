import React, {Component} from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    render () {   
        const {checked, callbackFunc} = this.props; 
        return( 
            <input checked={checked} type='checkbox' onChange = {callbackFunc}/>
        )
    }
}

export default Checkbox;