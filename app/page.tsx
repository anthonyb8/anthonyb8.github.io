import Image from "next/image";
import styles from "./page.module.css";
import About from "@/app/ui/about";
import TopNav from "@/app/ui/top-nav";
import Experience from "./ui/experience";
import Contact from "./ui/contact";
import { Rightbar, Leftbar } from "./ui/sidebar";
import Introduction from "./ui/introduction";
import Projects from "./ui/projects";

export default function Home() {
  return (
    <>
      <div className={styles.top_bar}>
        <TopNav />
      </div>
      <div className={styles.page}>
        <div className={styles.left_bar}>
          <Leftbar />
        </div>
        <main className={styles.main}>
          <section id="introduction" className={styles.introduction}>
            <Introduction />
          </section>
          <section id="about" className={styles.about}>
            <About />
          </section>
          <section id="experience" className={styles.experience}>
            <Experience />
          </section>
          <section id="projects" className={styles.projects}>
            <Projects />
          </section>
          <section id="contact" className={styles.contact}>
            <Contact />
          </section>
          <div className={styles.bottom_bar}>
            <h4> Designed by Anthony Baxter</h4>
          </div>
        </main>
        <div className={styles.right_bar}>
          <Rightbar />
        </div>
      </div>
    </>
  );
}
