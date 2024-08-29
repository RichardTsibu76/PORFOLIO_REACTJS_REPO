import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    
    <div className={styles.menu}>
      <nav className={styles.Navbar}>
        <a className={styles.title} href = "/">LOGO</a>
        <ul className={styles.menuItems}>
            <li><a href ="#AboutUs">AboutUs</a></li>
            <li><a href ="#Contact">Contacts</a></li>
            <li><a href ="#Developers">Developers</a></li>
            <li><a href ="#Services">Services</a></li>
        </ul>
      </nav>
    </div>
  )
}
