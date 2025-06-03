import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Connect with me</h2>
        <div className={styles.content}>
          <div className={styles.social}>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Pratyush562003" target="_blank" rel="noopener noreferrer">
                <FiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/pratyush-sarkar" target="_blank" rel="noopener noreferrer">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="mailto:pratyush2003sarkar@gmail.com">
                <FiMail /> Email
              </a>
              <a href="https://wa.me/919830737945" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 