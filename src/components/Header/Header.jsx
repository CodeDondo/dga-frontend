import Logo from '../../assets/Logo.png'
import Mail from '../../assets/Important-Mail.png'
import Info from '../../assets/Info-Squared.png'
import Account from '../../assets/Test-Account.png'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo altid synligt */}
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Burger-menu til mobil */}
      <div className={styles.mobileMenu}>
        <Menu right>
          <Link className={styles.menuItem} to="/kategori">Kategori</Link>
          <Link className={styles.menuItem} to="/opret">Opret annonce</Link>
          <Link className={styles.menuItem} to="/mail">
            <img src={Mail} alt="Mail" className={styles.icon} /> Mail
          </Link>
          <Link className={styles.menuItem} to="/info">
            <img src={Info} alt="Info" className={styles.icon} /> Info
          </Link>
          <Link className={styles.menuItem} to="/account">
            <img src={Account} alt="Account" className={styles.icon} /> Account
          </Link>
        </Menu>
      </div>

      {/* Desktop navigation */}
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
