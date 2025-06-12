import styles from "@/app/ui/introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles.introduction_container}>
      <p className={styles.introduction}>Hello, my name is </p>
      <h1 className={styles.name}>Anthony Baxter</h1>
      <p className={styles.about}>
        I’m a software developer who enjoys building with{" "}
        <strong>Python</strong>, <strong>TypeScript/React</strong>, and{" "}
        <strong>Rust</strong>. I’m especially interested in developing products
        in the areas of <strong>finance</strong>,{" "}
        <strong>supply chain management</strong>, and{" "}
        <strong>algorithmic trading</strong>.
      </p>
    </div>
  );
}
