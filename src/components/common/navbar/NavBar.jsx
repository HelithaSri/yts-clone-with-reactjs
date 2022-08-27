import React from 'react'
import classes from './NavBar.module.css'
import navLogo from '../../../assets/img/logo/logo-YTS.png'

function NavBar() {
  return (
    <header className={classes.navBar}>
      <div className={classes.logoDiv}>
        <img src={navLogo} alt="" />
        <span className={classes.navText}>
          HD movies at the smallest file size.
        </span>
      </div>
      <div>
        <h1>Hellod</h1>
      </div>
    </header>
  )
}
export default NavBar
