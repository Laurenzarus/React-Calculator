import React from 'react';
import CalcButton from './calc_button';
import Display from './display';
import './calculator.css';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "",
			displayStr: "",
            operator: "",
            previousValue: "",
            button_values: [
                'AC', '+/-', '%', '/',
                '7', '8', '9', 'x',
                '4', '5', '6', '-',
                '1', '2', '3', '+',
                '0', '.', '='
            ]
        }
    }

	performEquals() {
		if (this.state.displayValue.length !== 0
			&& this.state.previousValue.length !== 0
			&& this.state.operator.length !== 0)
		{
			let displayVal = parseFloat(this.state.displayValue);
			let otherVal = parseFloat(this.state.previousValue);
			let result = 0.0;
			if (this.state.operator === "+") {
				result = displayVal + otherVal;
			}
			else if (this.state.operator === "-") {
				result = otherVal - displayVal;
			}
			else if (this.state.operator === "x") {
				result = otherVal * displayVal;
			}
			else {
				result = otherVal / displayVal;
			}
			this.setState({
				displayValue: result % 1 === 0 ? result : result.toFixed(5),
				// displayStr: "",
				operator: "",
				previousValue: "",
			});
		}
	}

	handleClick(i) {
		if (!isNaN(parseInt(i))) {
			// number
			this.setState({
				displayValue: this.state.displayValue + i,
				// displayStr: this.state.displayStr + i,
			});
		}
		else {
			// operator, or AC
			const currentValue = this.state.displayValue;
			if (i === "AC") {
				this.setState({
					displayValue: "",
					displayStr: "",
					operator: "",
					previousValue: "",
				});
			}
			else if (i === "+/-") {
				if (currentValue !== "") {
					this.setState({
						displayValue: currentValue[0] !== "-" ? "-" + currentValue : currentValue.slice(1, currentValue.length),
						// displayStr: this.state.displayStr + "+/-",
					});
				}
			}
			else if (i === ".") {
				if (currentValue !== "") {
					this.setState({
						displayValue: currentValue + ".",
						// displayStr: this.state.displayStr + ".",
					});
				}
				else {
					this.setState({
						displayValue: "0.",
						// displayStr: this.state.displayStr + ".",
					});
				}
			}
			else {
				// operators
				if (i === "=") {
					this.performEquals();
				}
				else {
					if (this.state.operator.length === 0) {
						this.setState({
							displayValue: "",
							// displayStr: this.state.displayStr + i,
							previousValue: this.state.displayValue,
							operator: i,
						});
					}
					else {
						if (this.state.previousValue.length !== 0 && this.state.operator.length !== 0) {
							this.performEquals();
							// setTimeout(() => {}, 1000);
							this.setState({
								displayValue: "",
								operator: i,
								previousValue: this.state.displayValue,
							});
						}
						else if (this.state.previousValue.length !== 0) {
							this.performEquals();
							this.setState({
								displayValue: "",
								previousValue: this.state.displayValue,
								operator: i,
							});
						}
					}
				}

			}
		}
	}

    render() {
        return (
            <div id="outercontainer" className="outercontainer">
                <Display value={this.state.displayValue === "" ? "0" : this.state.displayValue}></Display>
                <div className="row buttonRow">
                    <CalcButton
						onClick={() => {this.handleClick("AC")}} buttonValue="AC"
						size="col-3" var="secondary">
					</CalcButton>
                    <CalcButton onClick={() => {this.handleClick("+/-")}}
						buttonValue="+/-" size="col-3" var="secondary">
					</CalcButton>
					<CalcButton onClick={() => {this.handleClick("%")}}
						buttonValue="%" size="col-3" var="secondary">
					</CalcButton>
					<CalcButton onClick={() => {this.handleClick("/")}}
						buttonValue="/" size="col-3" var="warning">
					</CalcButton>
                </div>
                <div className="row buttonRow">
                    <CalcButton onClick={() => {this.handleClick("7")}}
						buttonValue="7" size="col-3" var="primary">
					</CalcButton>
                    <CalcButton onClick={() => {this.handleClick("8")}}
						buttonValue="8" size="col-3" var="primary">
					</CalcButton>
					<CalcButton onClick={() => {this.handleClick("9")}}
						buttonValue="9" size="col-3" var="primary">
					</CalcButton>
					<CalcButton onClick={() => {this.handleClick("x")}}
						buttonValue="x" size="col-3" var="warning">
					</CalcButton>
                </div>
                <div className="row buttonRow">
                    <CalcButton onClick={() => {this.handleClick("4")}}
						buttonValue="4" size="col-3" var="primary">
					</CalcButton>
					<CalcButton onClick={() => {this.handleClick("5")}}
						buttonValue="5" size="col-3" var="primary">
					</CalcButton>
					<CalcButton onClick={() => {this.handleClick("6")}}
						buttonValue="6" size="col-3" var="primary">
					</CalcButton>
					<CalcButton onClick={() => {this.handleClick("-")}}
						buttonValue="-" size="col-3" var="warning">
					</CalcButton>
                </div>
                <div className="row buttonRow">
                    <CalcButton onClick={() => {this.handleClick("1")}}
						buttonValue="1" size="col-3" var="primary"></CalcButton>
					<CalcButton onClick={() => {this.handleClick("2")}}
						buttonValue="2" size="col-3" var="primary"></CalcButton>
					<CalcButton onClick={() => {this.handleClick("3")}}
						buttonValue="3" size="col-3" var="primary"></CalcButton>
					<CalcButton onClick={() => {this.handleClick("+")}}
						buttonValue="+" size="col-3" var="warning"></CalcButton>
                </div>
                <div className="row">
                    <CalcButton onClick={() => {this.handleClick("0")}}
						buttonValue="0" size="col-6" var="primary"></CalcButton>
					<CalcButton onClick={() => {this.handleClick(".")}}
						buttonValue="." size="col-3" var="primary"></CalcButton>
					<CalcButton onClick={() => {this.handleClick("=")}}
						buttonValue="=" size="col-3" var="warning"></CalcButton>
                </div>
            </div>
        )
    }
}

export default Calculator;
