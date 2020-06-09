import React from 'react';
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
