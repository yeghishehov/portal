import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import ROUTES from '../../utils/routes.constants';
import styles from './style.module.scss';

const links = [
  { id: 1, name: 'About us', route: ROUTES.about },
  { id: 2, name: 'Service', route: ROUTES.service },
  { id: 3, name: 'Works', route: ROUTES.works },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Link to={ROUTES.home} className={styles.link}>
          <img src={logo} alt="" className={styles.img} />
        </Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.nav}>
          {links.map(link => (
            <Link
              key={link.id}
              to={link.route}
              className={
                pathname === link.route
                  ? `${styles.selectedNavItem} ${styles.link}`
                  : `${styles.navItem} ${styles.link}`
              }
            >
              {link.name}
              {pathname === link.route
                ? <div className={styles.gradient} />
                : null}
            </Link>
          ))}
        </div>
        <div className={styles.question}>
          <div className={styles.questionText}>Question</div>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}
