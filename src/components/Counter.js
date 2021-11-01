import React, { useState } from "react";

function Counter(props) {
	const [count, setCount] = useState(0);

	function incriment() {
		setCount(count + 1);
	}
	function decriment() {
		setCount(count - 1);
	}

	return (
		<>
			<h2>{count}</h2>
			<button onClick={incriment}>Incriment</button>
			<button onClick={decriment}>Decriment</button>
		</>
	);
}

export default Counter;