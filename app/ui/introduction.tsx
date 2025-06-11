import styles from "@/app/ui/introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles.introduction_container}>
      <p className={styles.introduction}>Hello, my name is </p>
      <h1 className={styles.name}>Anthony Baxter</h1>
      <p className={styles.about}>
        I am a Software Developer that enjoys building in Python,
        Typescript/React and Rust. My intersest lie in build products related
        finance, supply chain management and algorithimic trading.
      </p>
    </div>
  );
}
