import styles from '../styles/Navbar.module.css'

const Footer = () => {
  return (
    <footer style={{ width: '100vw', backgroundColor: 'rgba(40, 68, 133, 0.8)', position: 'static', top: 'unset', boxShadow: 'none', marginTop: '2rem', minHeight: '90px', display: 'flex', alignItems: 'center' }}>
      <div className={styles.container} style={{ justifyContent: 'center', padding: '2rem 0', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
        <span style={{ color: 'var(--accent-primary)', display: 'block', fontSize: '1.1rem' }}>
          &copy; {new Date().getFullYear()} Pratyush's Portfolio. All rights reserved.
        </span>
        <a href="mailto:pratyush2003sarkar@gmail.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline', display: 'block', marginTop: '0.5rem', fontSize: '1.1rem' }}>
          pratyush2003sarkar@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer 