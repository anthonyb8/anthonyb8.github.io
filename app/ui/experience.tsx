"use client";

import styles from "@/app/ui/experience.module.css";
import { useState } from "react";

function MIDAS() {
  return (
    <div>
      <h3 className={styles.job_name}>Software Developer</h3>
      <div className={styles.job_subheader}>
        <h5 className={styles.job_company}>
          Midas Trading System | Toronto, ON{" "}
        </h5>
        <h5 className={styles.job_tenure}>Jan 2024 {"->"} Present </h5>
      </div>
      <ul className={styles.job_description}>
        <li>
          Developed an open-source event-driven algorithmic trading platform
          using Python, supporting backtesting, walk-forward analysis, and fully
          automated live trade execution.
        </li>
        <li>
          Designed and deployed a PostgreSQL database on a self-managed Linux
          server to efficiently store and access over 1 TB of financial time
          series data, optimized for analytical workloads.
        </li>
        <li>
          Implemented a React-based trading dashboard using HTML, CSS, and
          JavaScript to visualize and compare strategy performance, enhancing
          trader insights and supporting interactive decision-making.
        </li>
        <li>
          Engineered an ETL pipeline in Rust for the ingestion, processing, and
          storage of ~10 GB of futures price data per day acquired via a data
          vendor feed, ensuring seamless data integration
        </li>
      </ul>
    </div>
  );
}

function NEPC() {
  return (
    <div>
      <h3 className={styles.job_name}> Investment Operations Associate</h3>
      <div className={styles.job_subheader}>
        <h5 className={styles.job_company}>NEPC, LLC | Boston, MA </h5>
        <h5 className={styles.job_tenure}>July 2022 {"->"} May 2023 </h5>
      </div>
      <ul className={styles.job_description}>
        <li>
          Managed onboarding and relationship support for high-net-worth and
          institutional clients with assets ranging from $40M to $10B, ensuring
          seamless transition into firm reporting software.
        </li>
        <li>
          Monitored portfolio performance across a diverse set of asset classes
          including Equities, Fixed Income, Mutual Funds, ETFs, and Alternative
          Investments, supporting data-driven investment insights.
        </li>
        <li>
          Developed customized investment performance reports that served as the
          foundation for recurring monthly and quarterly client deliverables,
          enhancing transparency and client satisfaction.
        </li>
        <li>
          Delivered client account analysis and portfolio status updates in
          internal review meetings, enabling consultants and advisors to
          proactively manage client expectations and align communication
        </li>
      </ul>
    </div>
  );
}

function NCAA() {
  return (
    <div>
      <h3 className={styles.job_name}>NCAA Ice Hockey Player - Division 1 </h3>
      <div className={styles.job_subheader}>
        <h5 className={styles.job_company}>Lowell, MA | Troy, NY</h5>
        <h5 className={styles.job_tenure}>Sept 2017 {"->"} May 2022 </h5>
      </div>
      <ul className={styles.job_description}>
        <li>
          Balanced a rigorous academic schedule with 30+ hours of weekly
          commitments as a Division I student-athlete.{" "}
        </li>

        <li>
          Served as Alternate Captain for two years, demonstrating leadership,
          discipline, and teamwork.
        </li>
        <li>
          Earned All-American Scholar honors for four consecutive years from the
          American Hockey Coaches Association in recognition of outstanding
          academic and athletic performance.
        </li>
      </ul>
    </div>
  );
}

export default function Experience() {
  const [selected, setSelected] = useState("midas");

  function renderExperience() {
    switch (selected) {
      case "midas":
        return <MIDAS />;
      case "nepc":
        return <NEPC />;
      case "ncaa":
        return <NCAA />;
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
            Midas System
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
