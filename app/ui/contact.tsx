import styles from "@/app/ui/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contract_container}>
      <div className={styles.contract_header_container}>
        <h3 className={styles.contract_header}>Contact</h3>
      </div>
      <div className={styles.info}>
        <h4>Email: </h4>
        <p> anthonybaxter819@gmail.com </p>
      </div>
    </div>
  );
}
