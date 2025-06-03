import styles from '../styles/Experience.module.css'

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2>Experience</h2>
        <div className={styles.content}>
          <div className={styles.experienceCard}>
            <h3>IBM Skills Build Internship Program with CSRBOX on AI-ML</h3>
            <ul className={styles.experienceList}>
              <li>
                Gained hands-on experience with IBM Watson tools, including Watson 
                Assistant and Watson Studio.
              </li>
              <li>
                Developed an intelligent chatbot capable of understanding user queries. 
                Designed and implemented a Kidney Disease Detection System leveraging 
                machine learning. Utilized IBM Watson's Auto AI feature to automate model 
                selection and optimize hyperparameters for predictive analytics.
              </li>
              <li>
                Collaborated in a team environment to enhance AI models' performance and 
                deploy solutions efficiently. Documented and presented project results, 
                emphasizing scalability and practical applications in healthcare.
              </li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <a href="/certificate.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 