import styles from './style.module.scss';
import descriptions from './descriptions';
import { ReactComponent as AboutLogo } from '../../assets/aboutLogo.svg';

const title = 'About Portal Creative studio';

export default function About() {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <AboutLogo className={styles.aboutLogo} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.descriptions}>
        {descriptions.map((description, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className={styles.description}>{description}</div>
        ))}
      </div>
    </div>
  );
}
