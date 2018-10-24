import React, { Component } from 'react';
import './Spinner.css';

class Spinner extends Component {
    render() {
        return (
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        );
    }
}

export default Spinner;
