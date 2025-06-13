"use client";

import styles from "@/app/ui/experience.module.css";
import { useState } from "react";

import { Experience, midas, nepc, ncaa } from "../lib/experience";

function ExperienceComponent({
  job_title,
  company_name,
  location,
  tenure,
  description,
}: Experience) {
  return (
    <div>
      <h3 className={styles.job_name}>{job_title} </h3>
      <div className={styles.job_subheader}>
        <h5
          className={styles.job_company}
        >{`${company_name} | ${location}`}</h5>
        <h5 className={styles.job_tenure}>{tenure}</h5>
      </div>
      <ul className={styles.job_description}>
        {description.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experiences() {
  const [selected, setSelected] = useState("midas");

  function renderExperience() {
    switch (selected) {
      case "midas":
        return <ExperienceComponent {...midas} />;
      case "nepc":
        return <ExperienceComponent {...nepc} />;
      case "ncaa":
        return <ExperienceComponent {...ncaa} />;
      default:
        return null;
    }
  }

  return (
    <div className={styles.experience_container}>
      <div className={styles.experience_header_container}>
        <h3 className={styles.experience_header}>Experience</h3>
      </div>
      <div className={styles.experience_body}>
        <div className={styles.experience_body_choice}>
          <button
            onClick={() => setSelected("midas")}
            className={
              selected == "midas"
                ? styles.experience_choice_selected
                : styles.experience_choice
            }
          >
            Midas
          </button>
          <button
            onClick={() => setSelected("nepc")}
            className={
              selected == "nepc"
                ? styles.experience_choice_selected
                : styles.experience_choice
            }
          >
            NEPC, LLC
          </button>
          <button
            onClick={() => setSelected("ncaa")}
            className={
              selected == "ncaa"
                ? styles.experience_choice_selected
                : styles.experience_choice
            }
          >
            NCAA
          </button>
        </div>
        <div className={styles.experience_body_selected}>
          {renderExperience()}
        </div>
      </div>
    </div>
  );
}
