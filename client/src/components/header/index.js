import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import ROUTES from '../../utils/routes.constants';
import styles from './style.module.scss';

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Link to={ROUTES.home} className={styles.navItem}>
          <img src={logo} alt="" className={styles.img} />
        </Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.nav}>
          <Link to={ROUTES.works} className={styles.navItem}>Works</Link>
          <Link to={ROUTES.about} className={styles.navItem}>About us</Link>
          <Link to={ROUTES.service} className={styles.navItem}>Service</Link>
        </div>
        <div className={styles.question}>
          <div className={styles.questionText}>Question</div>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}
