import React from "react";
import styles from "@/styles/Components/Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.container}>
			<h1>Netflix</h1>
			<ul>
				<li className={styles.home}>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
		</nav>
	);
}
