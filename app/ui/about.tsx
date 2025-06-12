import styles from "@/app/ui/about.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_header_container}>
        <h3 className={styles.about_header}>About</h3>
      </div>
      <p className={styles.about}>
        I’m a full-stack developer who transitioned into software from the world
        of finance. I studied Finance and Accounting during my undergraduate
        degree and initially planned to continue in that direction. But during
        the pandemic I took an interested in the impact supply chain
        distruptions were having on global economies, leding me to pursue a
        Master’s degree in Supply Chain Management.
      </p>

      <p className={styles.about}>
        It was during that program that I wrote my first line of code, and
        immediately I was hooked. The idea of using code to bring ideas to life
        and solve real problems deeply resonated with me. Without a formal
        background in computer science, I knew I had to put in serious time and
        effort to get to a professional level. So I started learning by
        building.
      </p>

      <p className={styles.about}>
        I’ve gone through dozens of side projects starting, scrapping,
        refactoring, and learning from each one. Over time, I picked up the
        tools and habits that real development work demands: systems design,
        testing, version control, documentation and deployment. I've worked with
        a variety of technologies, adding to my toolkit as needed and letting
        curiosity lead the way.
      </p>

      <p className={styles.about}>
        Today, I’m comfortable working across the stack from backend systems to
        frontend frameworks. The technologies I’ve spent the most time with
        lately include:
      </p>

      <ul className={styles.technologies_list}>
        <li>Python</li>
        <li>FastAPI</li>
        <li>Rust</li>
        <li>Docker</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Django</li>
      </ul>
    </div>
  );
}
