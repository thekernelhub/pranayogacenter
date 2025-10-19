import React from 'react'
import styles from '../Styles/HeaderDefault.module.css'
import logo from '../assets/logo.png'

const HeaderDefault = () => {
  return (
    <>
      <div className={styles.col1Nav}>
        <a href='/'>Home</a>
        <a href='/'>Timetable</a>
        <a href='/'>Plans</a>
      </div>
      <a href='/' className={styles.logo}><img src={logo} alt='logo'></img></a>
      <div className={styles.col2Nav}>
        <a href='/'>Instructors</a>
        <a href='/'>About Us</a>
        <a href='/' className='btnPreto'>Better you</a>
      </div>
    </>
  )
}

export default HeaderDefault