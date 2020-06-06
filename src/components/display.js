import React from 'react';
import Form from 'react-bootstrap/Form';
import './display.css';

class Display extends React.Component {
    render() {
        return (
            <div className="displayBox">
                {this.props.value}
            </div>
        )
    }
}

export default Display;
