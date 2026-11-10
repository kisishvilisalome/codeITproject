import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footerCont}>
      <p className={styles.footerText}>
        © All Rights Reserved | {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer 