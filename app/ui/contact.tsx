import styles from "@/app/ui/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <h3 className={styles.contact_header}>Contact</h3>
      <p className={styles.about}>
        Insert some text about coming to tech, background in finance and sports
      </p>
      <h3>Technologies</h3>
      <ul>
        <li>Python</li>
        <li>Rust</li>
        <li>Next.js</li>
        <li>Typesript</li>
      </ul>
    </div>
  );
}
