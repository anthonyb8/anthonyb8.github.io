import styles from "@/app/ui/sidebar.module.css";

export function Leftbar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.lf_side_bar_1} />
      <div className={styles.gap_bar} />
      <div className={styles.lf_side_bar_2} />
      <div className={styles.gap_bar} />
      <div className={styles.lf_side_bar_3} />
      <div className={styles.gap_bar} />
      <div className={styles.lf_side_bar_4} />
      <div className={styles.gap_bar} />
      <div className={styles.lf_side_bar_5} />
    </div>
  );
}

export function Rightbar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.rf_side_bar_1} />
      <div className={styles.gap_bar} />
      <div className={styles.rf_side_bar_2} />
      <div className={styles.gap_bar} />
      <div className={styles.rf_side_bar_3} />
      <div className={styles.gap_bar} />
      <div className={styles.rf_side_bar_4} />
      <div className={styles.gap_bar} />
      <div className={styles.rf_side_bar_5} />
    </div>
  );
}
