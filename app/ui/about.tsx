import styles from "@/app/ui/about.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <h3 className={styles.about_header}>About</h3>
      <p className={styles.about}>
        I am Full-Stack developer transitioned from the investment space. I
        studied Finance and Accounting in undergrade. Looking to pursue a
        Master's during the pandemc I became interested in the impact fo Supply
        Chains on global economies, so I pursued a Master's in Suply chain
        management. It was during these courses that I got my first taste of
        programming.{" "}
      </p>
      <p>{"\n"}</p>
      <p className={styles.about}>
        I was instantly hooked on the idea of bringing tools to life with the
        power of code. Knowing that I did not have the formal training I knew it
        would take a signficant investment to develop the skills to produce real
        production level code. So I learned by building, acquire skills along
        the way, discarding old projects all in the quest of becoming a
        profiecient developer.
      </p>
      <p className={styles.about}>
        I have work with a number of different languages, frameworks and tools,
        adding to my toolkit as I needed.To here is a list fo th technologie
        that I have worke with te most as of late:
      </p>
      <p>{"\n"}</p>
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
