import styles from '../styles/About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>
            I'm a passionate frontend developer with a strong focus on creating responsive and engaging web applications. My journey began with a curiosity for designing intuitive user interfaces, which grew into a solid understanding of modern web technologies.
            </p>
            <p>
            I specialize in React and its ecosystem, and I’m always eager to learn and adopt the latest tools and best practices. My goal is to build web experiences that are not only visually appealing but also fast, accessible, and user-centric.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 