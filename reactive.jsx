import React from "react";
import ReactDOM from "react-dom";

import {Layout} from "./react-components/Layout"

class main extends React.Component {
	render() {
		return(
			<div>
				<Layout />
			</div>
		);
	}
}

ReactDOM.render(
	<Layout />, document.getElementById("app")
);
