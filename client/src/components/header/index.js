import logo from '../../assets/logo.png';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import styles from './style.module.scss';

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={logo} alt="" className={styles.img} />
      </div>
      <div className={styles.menu}>
        <div className={styles.nav}>
          <div className={styles.navItem}>Works</div>
          <div className={styles.navItem}>About us</div>
          <div className={styles.navItem}>Service</div>
        </div>
        <div className={styles.question}>
          <div className={styles.questionText}>Question</div>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}
