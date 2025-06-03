import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { FiDownload } from 'react-icons/fi'
import styles from '../styles/Home.module.css'

const Home = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Passionate Web Developer!'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    })

    return () => typed.destroy()
  }, [])

  const handleDownloadResume = () => {
    window.open('/CV_PS.pdf', '_blank')
  }

  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Hi, I'm Pratyush</h1>
          <div className={styles.typingWrapper}>
            <span>I'm a </span>
            <span ref={typedRef}></span>
          </div>
          
          <button 
            className={`btn ${styles.downloadBtn}`}
            onClick={handleDownloadResume}
          >
            <FiDownload /> My Resume
          </button>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.profileImage}>
            <img src="/profilepic.jpg" alt="Pratyush's Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home 