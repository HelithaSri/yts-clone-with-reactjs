import React from 'react'
import classes from './NavBar.module.css'
import navLogo from '../../../assets/img/logo/logo-YTS.png'

function NavBar() {
  return (
    <header className={classes.navBar}>
      <div className={classes.leftDiv}>
        <img src={navLogo} alt="" />
        <span className={classes.navText}>
          HD movies at the smallest file size.
        </span>
      </div>
      <div className={classes.rightDiv}>
          <input
            className={classes.quick_search_input}
            name="query"
            autocomplete="off"
            type="search"
            value="Quick search"
          />
        <ul className={classes.navLinks}>
          <li>Home</li>
          <li>4K</li>
          <li>Trending</li>
          <li>Browse Movies</li>
          <li><a href="">Login</a>  |  <a href="">Register</a></li>
        </ul>
      </div>
    </header>
  )
}
export default NavBar
