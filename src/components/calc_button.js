import React from 'react';
import Button from 'react-bootstrap/Button';
import './button.css';

class Calc_Button extends React.Component {
    render() {
        return (
            <Button
                variant={this.props.var} size="lg"
                className={['rounded-btn',this.props.size].join(" ")}>
                { this.props.buttonValue }
            </Button>
        )
    }
}

export default Calc_Button;
