import React from "react";
import styles from "@/styles/Components/Navbar.module.css";

export default function Navbar() {
	console.log('hey');
	return (
		<nav className={styles.container}>
			<h1>
        <img src="./images/Logonetflix.png" alt="logo"/>
      </h1>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">TV Shows</a>
				</li>
        <li>
					<a href="#">Movies</a>
				</li>
        <li>
					<a href="#">Latest</a>
				</li>
        <li>
					<a href="#">My List</a>
				</li>
        <li>
					<button>SEARCH</button>
				</li>
			</ul>
		</nav>
	);
}
