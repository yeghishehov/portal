import logoImg from '../../assets/logo.png';
import styles from './style.module.scss';

export default function Loading() {
  return (
    <div className={styles.root}>
      <img src={logoImg} alt="" className={styles.img} />
    </div>
  );
}
