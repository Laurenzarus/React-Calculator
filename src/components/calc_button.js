import React from 'react';
import Button from 'react-bootstrap/Button';
import './button.css';

class CalcButton extends React.Component {
    render() {
        return (
            <Button
                variant={this.props.var} size="lg"
                className={['rounded-btn',this.props.size].join(" ")}
				onClick={this.props.onClick}
				>
                { this.props.buttonValue }
            </Button>
        )
    }
}

export default CalcButton;
