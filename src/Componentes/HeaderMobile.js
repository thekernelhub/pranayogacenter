import React from 'react'
import logo from '../assets/logo.png'
import styles from '../Styles/HeaderMobile.module.css'

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <>
      <button className={`${styles.btnMenu} ${isMenuOpen ? styles.active : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='menu mobile'>
        <div></div>
        <div></div>
      </button>
      {
        isMenuOpen &&
        <nav className={styles.navItens}>
          <a href='/'>Home</a>
          <a href='/'>Timetable</a>
          <a href='/'>Plans</a>
          <a href='/'>Instructors</a>
          <a href='/'>About Us</a>
        </nav>
      }
      <a href='/' className={styles.logo}><img src={logo} alt='logo'></img></a>
      <a href='/' className={`btnPreto ${styles.btnComeceAgora}`}>Better you</a>
    </>
  )
}

export default HeaderMobile