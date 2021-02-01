import styles from './style.module.scss';
import { ReactComponent as PortalIcon } from '../../assets/portalIcon.svg';

const title = 'Lorem Ipsum';
const description = 'Lorem Ipsum dolorum Lorem Ipsum dolorum Lorem';

export default function Home() {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{description}</h2>
      </div>
      <PortalIcon />
    </div>
  );
}
