import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul>
        <h1>Nyhedsbrev</h1>
        <p>Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev og få de seneste klima opdateringer direkte i din indbakke</p>
        <div>
          <input type="text" />
          <button>Tilmeld</button>
        </div>
      </ul>
      <ul>
        <h1>Kontakt</h1>
        <p>Redningen 32</p>
        <p>2210 Vinterby Øster</p>
        <p>+45 88229422</p>
        <p>dga@info.dk</p>
      </ul>
      <ul>
        <h1>FN's Verdensmål</h1>
        <p>Vi støtter på organisatorisk plan op om FN´s verdensmål og har derfor besluttet at en del af overskuddet går direkte til verdensmål nr. 13; Klimahandling</p>
        <a href="">Læs mere om verdensmålene her</a>
      </ul>
    </footer>
  )
}
