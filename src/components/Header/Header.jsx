import Logo from '../../assets/Logo.png'
import Mail from '../../assets/Important-Mail.png'
import Info from '../../assets/Info-Squared.png'
import Account from '../../assets/Test-Account.png'
import { Link } from 'react-router-dom'



export const Header = () => {
  return (
    <header>
      <ul>
        <img src={Logo} alt="Logo" />
      </ul>
      <ul>
        Kategori
      </ul>
      <ul>
        <button>Opret annonce</button>
      </ul>
      <ul>
        <Link><img src={Mail} alt="Mail" /></Link>
        <Link><img src={Info} alt="Info" /></Link>
        <Link><img src={Account} alt="Account" /></Link>
      </ul>
    </header>
  )
}
