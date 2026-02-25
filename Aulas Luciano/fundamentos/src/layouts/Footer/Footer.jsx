import styles from "./Footer.module.css"

export const Footer = ({author}) => { 
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Desenvolvido por {author}</p>
    </footer>
  )
}
