import React from 'react';
import Calc_Button from './calc_button';
import Display from './display';
import './calculator.css';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: 0,
            operator: null,
            previousValue: 0,
            button_values: [
                'AC', '+/-', '%', '/',
                '7', '8', '9', 'x',
                '4', '5', '6', '-',
                '1', '2', '3', '+',
                '0', '.', '='
            ]
        }
    }
    render() {
        return (
            <div id="outercontainer" className="outercontainer">
                <Display value={this.state.displayValue}></Display>
                <div className="row buttonRow">
                    <Calc_Button buttonValue="AC" size="col-3" var="secondary"></Calc_Button>
                    <Calc_Button buttonValue="+/-" size="col-3" var="secondary"></Calc_Button>
                    <Calc_Button buttonValue="%" size="col-3" var="secondary"></Calc_Button>
                    <Calc_Button buttonValue="/" size="col-3" var="warning"></Calc_Button>
                </div>
                <div className="row buttonRow">
                    <Calc_Button buttonValue="7" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="8" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="9" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="x" size="col-3" var="warning"></Calc_Button>
                </div>
                <div className="row buttonRow">
                    <Calc_Button buttonValue="4" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="5" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="6" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="-" size="col-3" var="warning"></Calc_Button>
                </div>
                <div className="row buttonRow">
                    <Calc_Button buttonValue="1" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="2" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="3" size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="+" size="col-3" var="warning"></Calc_Button>
                </div>
                <div className="row">
                    <Calc_Button buttonValue="0" size="col-6" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="." size="col-3" var="primary"></Calc_Button>
                    <Calc_Button buttonValue="=" size="col-3" var="warning"></Calc_Button>
                </div>
            </div>
        )
    }
}

export default Calculator;
