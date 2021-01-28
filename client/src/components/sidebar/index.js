import { ReactComponent as Portal } from '../../assets/portal.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Messanger } from '../../assets/messanger.svg';
import styles from './style.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.root}>
      <Portal className={styles.portal} />
      <div className={styles.icons}>
        <Instagram />
        <Facebook />
        <Messanger />
      </div>
    </div>
  );
}
