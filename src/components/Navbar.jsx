import React from "react";
import styles from "@/styles/Components/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icons
import {
  faMagnifyingGlass,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <img src="./images/Logonetflix.png" alt="logo" />
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
      </ul>
      <ul className={styles.searchBox}>
        <li>
          <button onClick={handleSearch}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </button>
        </li>
        {search && (
          <li className={styles.searchBar}>
            <input type="search" placeholder="Search" />
          </li>
        )}
      </ul>
    </nav>
  );
}
