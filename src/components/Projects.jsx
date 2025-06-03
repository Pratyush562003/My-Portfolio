import { FiGithub, FiExternalLink } from 'react-icons/fi'
import styles from '../styles/Projects.module.css'

const projects = [
  {
    title: 'Tuition Services Website',
    description: `Designed and developed a responsive website for a private tuition service to showcase academic profile, achievements, and contact details. Implemented clean, user-friendly UI with a focus on academic professionalism and accessibility. Optimized for performance and cross-device compatibility.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://www.hellosir.co.in/'
  },
  {
    title: 'Weather Website',
    description: `Developed a real-time weather website that fetches live weather data based on user input location/city. Designed a clean user-friendly UI with background images to enhance interaction. Implemented error handling for invalid locations and API request failures. Ensured mobile responsiveness for seamless usage across different devices.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    demo: 'https://simple-weather-website-pi.vercel.app/'
  }
]

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.projectLinks}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 