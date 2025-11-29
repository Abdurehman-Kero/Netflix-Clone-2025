import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
  return (
    <>
      <div className={`${styles.headerContainer}`}>
        <ul>
          <li>Netflix</li>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
    </>
  );
}

export default Header