import Image from "next/image";
import styles from "./page.module.css";
import About from "@/app/ui/about";
import TopNav from "@/app/ui/top-nav";
import Experience from "./ui/experience";
import Contact from "./ui/contact";
import Introduction from "./ui/introduction";
import Projects from "./ui/projects";

function Sidebar({ bar }: { bar: boolean }) {
  return (
    <div className={styles.sidebar}>
      <div className={bar ? styles.bar : styles.nobar} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className={styles.top_bar}>
        <TopNav />
      </div>
      <div className={styles.page}>
        <div className={`${styles.introduction} ${styles.section}`}>
          <Sidebar bar={true} />
          <section id="introduction" className={`${styles.main}`}>
            <Introduction />
          </section>
          <Sidebar bar={false} />
        </div>

        <div className={`${styles.about} ${styles.section}`}>
          <Sidebar bar={false} />
          <section id="about" className={styles.main}>
            <About />
          </section>
          <Sidebar bar={true} />
        </div>

        <div className={`${styles.experience} ${styles.section}`}>
          <Sidebar bar={true} />
          <section id="experience" className={styles.main}>
            <Experience />
          </section>
          <Sidebar bar={false} />
        </div>

        <div className={`${styles.projects} ${styles.section}`}>
          <Sidebar bar={false} />
          <section id="projects" className={styles.main}>
            <Projects />
          </section>
          <Sidebar bar={true} />
        </div>

        <div className={`${styles.contact} ${styles.section}`}>
          <Sidebar bar={true} />
          <section id="contact" className={styles.main}>
            <Contact />
          </section>
          <Sidebar bar={false} />
        </div>

        <div className={`${styles.bottom} ${styles.section}`}>
          <Sidebar bar={false} />

          <div className={styles.bottom_bar}>
            <h4> Designed by Anthony Baxter | Powered by NextJs</h4>
          </div>
          <Sidebar bar={false} />
        </div>
      </div>
    </>
  );
}
