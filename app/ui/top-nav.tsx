import styles from "@/app/ui/top-nav.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export default function TopNav() {
  return (
    <div className={styles.top_nav_container}>
      <div className={styles.icon_bar}>
        <a href="https://github.com/anthonyb8">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anthonybax">
          <FaLinkedin />
        </a>
        <a href="https://medium.com/@anthonybaxter819">
          <FaMedium />
        </a>
      </div>
      <nav className={styles.top_nav}>
        <a href="#about" className={styles.top_nav_icons}>
          About
        </a>
        <a href="#experience" className={styles.top_nav_icons}>
          Experience
        </a>
        <a href="#projects" className={styles.top_nav_icons}>
          Projects
        </a>
        <a href="#contact" className={styles.top_nav_icons}>
          Contact
        </a>
      </nav>
      <button className={styles.resume_button}>
        <a href="resume.txt">Resume</a>
      </button>
    </div>
  );
}
