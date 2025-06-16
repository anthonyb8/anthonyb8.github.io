export interface Experience {
  job_title: string;
  company_name: string;
  location: string;
  tenure: string;
  description: Array<string>;
}

export const midas: Experience = {
  job_title: "Software Developer",
  company_name: "Midas System",
  location: "Oakville, ON",
  tenure: "Jan 2024 -> Present",
  description: [
    `Developed an open-source event-driven algorithmic trading platform
          using Python, supporting backtesting, walk-forward analysis, and fully
          automated live trade execution.`,
    `Designed and deployed a PostgreSQL database on a self-managed Linux
          server to efficiently store and access over 1 TB of financial time
          series data, optimized for analytical workloads. `,
    `Implemented a React-based trading dashboard to visualize and compare strategy performance, enhancing
          trader insights and supporting interactive decision-making. `,
    `Engineered an ETL pipeline in Rust for the ingestion, processing, and
          storage of ~10 GB of futures price data per day acquired via a data
          vendor feed, ensuring seamless data integration.
`,
  ],
};

export const nepc: Experience = {
  job_title: "Investment Operations Associate",
  company_name: "NEPC, LLC",
  location: "Boston, MA",
  tenure: "July 2022 -> May 2023",
  description: [
    `Managed onboarding of investment operations for high-net-worth and


institutional clients with assets ranging from $40M to $10B, ensuring seamless transition into firm reporting software.`,
    `Monitored portfolio performance across a diverse set of asset classes
          including Equities, Fixed Income, Mutual Funds, ETFs, and Alternative
        Investments, supporting data-driven investment insights. `,
    `Developed customized investment performance reports that served as the
          foundation for recurring monthly and quarterly client deliverables,
          enhancing transparency and client satisfaction.`,
    `Delivered client account analysis and portfolio status updates in
          internal review meetings, enabling consultants and advisors to
          proactively manage client expectations.`,
  ],
};

export const ncaa: Experience = {
  job_title: "Ice Hockey Player (Division 1) ",
  company_name: "NCAA",
  location: "Lowell, MA & Troy, NY",
  tenure: "Sept 2017 -> May 2022 ",
  description: [
    `Earned All-American Scholar honors for four consecutive years from the
          American Hockey Coaches Association in recognition of outstanding
          academic and athletic performance. `,
    `Served as Alternate Captain for two years, demonstrating leadership,
          discipline, and teamwork.`,
    `Balanced a rigorous academic schedule with 30+ hours of weekly
          commitments as a Division I student-athlete.`,
  ],
};
