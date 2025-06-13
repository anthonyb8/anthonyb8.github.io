import styles from "@/app/ui/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_header_container}>
        <h3 className={styles.contact_header}>Contact</h3>
      </div>
      <div className={styles.info}>
        <p>
          Whether you're hiring or just want to connect, feel free to reach out
          via{" "}
          <a
            className={styles.info_link}
            href="https://www.linkedin.com/in/anthonybax/"
          >
            LinkedIn
          </a>{" "}
          or email me at anthonybaxter819@gmail.com.
        </p>
      </div>
    </div>
  );
}
