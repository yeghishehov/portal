import Header from '../components/header';
import Sidebar from '../components/sidebar';
import routes from '../routes';
import styles from './style.module.scss';

export default function Main() {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.main}>
          {routes()}
        </main>
      </div>
    </div>
  );
}
