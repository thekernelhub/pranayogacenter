import React from 'react'
import styles from '../Styles/Footer.module.css'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.containerFooter}`}>
        <div className={styles.menu}>
          <p className={styles.titulo}>Menu</p>
          <nav>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Timetable</a></li>
              <li><a href='/'>Plans</a></li>
              <li><a href='/'>Instructors</a></li>
              <li><a href='/'>About Us</a></li>
              <li><a href='/'>Speak to us</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <p className={styles.titulo}>Contact us</p>
          <div className={styles.itensFooter}>
            <span>contato@contato.com</span>
            <span>(12) 3456-7890</span>
          </div>
        </div>
        <div>
          <p className={styles.titulo}>Location</p>
          <div className={styles.itensFooter}>
            <p>Lorem Ipsum - IP</p>
            <p>Dolor sit - Lorem, 111</p>
            <p>12345-678</p>
          </div>
        </div>
        <div className={styles.copy}>
          <span> Copyright © 2025. All rights reserved. </span>
          <span className={styles.links}>
            {/* <a href='/'>Termos e condiçoes</a>
            <a href='/'>Politicas de privacidade</a> */}
          </span>
        </div>
        <div className={styles.by}>
          <a href='/' className={styles.logo}><img src={logo} alt='logo'></img></a>
        {/* <a href='https://github.com/aridsm' className={styles.by}>By Ariane Morelato</a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer