import { useState } from 'react'
import Logo from '../../assets/Logo.png'
import Mail from '../../assets/Important-Mail.png'
import Info from '../../assets/Info-Squared.png'
import Account from '../../assets/Test-Account.png'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import styles from './Header.module.scss'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.mobileMenu}>
        <Menu 
          right
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          customCrossIcon={<span className={styles.closeIcon}>×</span>}
        >
          <Link onClick={closeMenu} className={styles.menuItem} to="/kategori">Kategori</Link>
          <Link onClick={closeMenu} className={styles.menuItem} to="/opret">Opret annonce</Link>
          <Link onClick={closeMenu} className={styles.menuItem} to="/mail">
            <img src={Mail} alt="Mail" className={styles.icon} /> Mail
          </Link>
          <Link onClick={closeMenu} className={styles.menuItem} to="/info">
            <img src={Info} alt="Info" className={styles.icon} /> Info
          </Link>
          <Link onClick={closeMenu} className={styles.menuItem} to="/account">
            <img src={Account} alt="Account" className={styles.icon} /> Account
          </Link>
        </Menu>
      </div>
      <nav className={styles.desktopNav}>
        <ul>
          <li>Kategori</li>
        </ul>
        <ul>
          <li><button>Opret annonce</button></li>
        </ul>
        <ul>
          <li><Link to="/mail"><img src={Mail} alt="Mail" /></Link></li>
          <li><Link to="/info"><img src={Info} alt="Info" /></Link></li>
          <li><Link to="/account"><img src={Account} alt="Account" /></Link></li>
        </ul>
      </nav>
    </header>
  )
}
