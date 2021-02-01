import { useEffect, useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Loading from '../components/loading';
import routes from '../routes';
import styles from './style.module.scss';

export default function Main() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoad(false), 3000);
  }, []);

  return (
    <div className={styles.root}>
      {isLoad
        ? <Loading />
        : (
          <>
            <Header />
            <div className={styles.body}>
              <Sidebar />
              <main className={styles.main}>
                {routes()}
              </main>
            </div>
          </>
        )}
    </div>
  );
}
