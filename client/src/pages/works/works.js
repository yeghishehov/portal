import styles from './style.module.scss';

export default function Works() {
  return (
    <div className={styles.root}>
      <div className={styles.tools}>
        <label htmlFor="search" className={styles.label}>
          <div className={styles.labelText}>search</div>
          <input type="text" id="search" className={styles.input} />
        </label>
        <label htmlFor="categories" className={styles.label}>
          <div className={styles.labelText}>categories</div>
          <input type="text" id="categories" className={styles.input} />
        </label>
        <label htmlFor="filters" className={styles.label}>
          <div className={styles.labelText}>filters</div>
          <input type="text" id="filters" className={styles.input} />
        </label>
      </div>
    </div>
  );
}
