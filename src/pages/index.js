import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
	const [state, setState] = useState(0);

	console.log(state);

	function handleIncrement() {
		setState(state + 1);
	}

	function handleDecrement() {
		setState(state - 1);
	}

	return (
		<div>
			<Navbar />
			<button onClick={handleIncrement}>+ 1</button>
			<p>{state}</p>
			<button onClick={handleDecrement}>- 1</button>

			{state > 10 && (
				<div>
					<p>hi</p>
					<h1>Hello World</h1>
				</div>
			)}

			{/* <h1>{state > 10 ? "Hello World" : "Goodbye"}</h1> */}
		</div>
	);
}
