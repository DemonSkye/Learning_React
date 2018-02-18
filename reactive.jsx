import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
	addOne= () => {
		this.setState({
			counter: this.state.counter+1
		});
	}

	constructor(props){
		super(props);
		this.state = {counter: 0};
	}
	componentDidMount(){
		this.counter = setInterval(() => this.addOne(), 1000);
	}
	componentWillUnmount(){
		clearInterval(this.counter);
	}

	render() {
		return(
			<button onClick={this.addOne}>{this.state.counter}</button>
		);
	}
}

ReactDOM.render(
	<Counter />, document.getElementById("app")
);
