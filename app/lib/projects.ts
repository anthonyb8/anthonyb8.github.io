export interface Project {
  name: string;
  link: string;
  content: Array<string>;
}

export const midas: Project = {
  name: "Midas",
  link: "https://midassystems.github.io/",
  content: [
    `Midas Systems began as a side project to test trading strategies and evolved into a full-featured, event-driven algorithmic trading framework. It supports backtesting, walk-forward validation, and automated live execution.`,
    `To support strategy development at scale, the platform provides users with a containerized PostgreSQL database system tailored for storing and querying large volumes of time series data. Ensuring that even multi-GB datasets can be accessed efficiently for both backtests and live strategy execution.
`,
    `
On the front end, a React-based dashboard offers users visibility into strategy performance. It includes interactive charts, historical comparisons, and analytical summaries to support faster, more informed decision-making.`,
  ],
};

export const forge: Project = {
  name: "Forge",
  link: "https://github.com/anthonyb8/forge",
  content: [
    `Forge is a command-line tool that simplifies the often tedious setup process for C and C++ projects. As someone coming from Rust and Python, I found C++ project setup confusing and fragmented, Forge was my solution.`,

    `The tool guides users through selecting a language standard, build system, package manager, and test framework. It then generates a fully functional “Hello World” project with proper structure, ready to compile and run in seconds.`,
  ],
};

export const pakket: Project = {
  name: "Pakket",
  link: "https://medium.com/@anthonybaxter819/building-an-http-server-in-python-4dd6d18be513",
  content: [
    `Pakket is an educational protocol framework I built to explore how TCP/IP and HTTP work under the hood. It includes hand-crafted TCP and UDP layers using Python’s socket module, along with a structured HTTP layer built on top.`,
    `The project demonstrates how raw byte streams are parsed into requests and back to responses without relying on external libraries`,
  ],
};
