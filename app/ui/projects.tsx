import styles from "@/app/ui/projects.module.css";
import { FiExternalLink } from "react-icons/fi";
import { Project, midas, forge, pakket } from "@/app/lib/projects";

function ProjectComponent({ name, content, link }: Project) {
  return (
    <div className={styles.grid_item}>
      <div className={styles.grid_item_head}>
        <h3>{name}</h3>
      </div>
      <div className={styles.grid_item_body}>
        <ul>
          {content.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <div className={styles.grid_item_link}>
        <a href={link}>
          <FiExternalLink fontSize={"20px"} />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className={styles.projects_container}>
      <div className={styles.projects_header_container}>
        <h3 className={styles.projects_header}>Projects</h3>
      </div>
      <div className={styles.grid}>
        <ProjectComponent {...midas} />
        <ProjectComponent {...forge} />
        <ProjectComponent {...pakket} />
      </div>
    </div>
  );
}
