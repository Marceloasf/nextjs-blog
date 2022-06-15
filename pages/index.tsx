import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Layout from './components/layout/layout';
import Sidebar from './components/sidebar/sidebar';

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{`Welcome to Marcelo's Page!`}</h1>

        <div className={styles.card}>
          <h2>Posts &rarr;</h2>
          <p>Some posts</p>
          <div className={styles.grid}>
            <a href={`${router.basePath}/posts/1`} className={styles.card}>
              <h5>Post 1</h5>
            </a>
            <a href={`${router.basePath}/posts/2`} className={styles.card}>
              <h5>Post 2</h5>
            </a>
            <a href={`${router.basePath}/posts/3`} className={styles.card}>
              <h5>Post 3</h5>
            </a>
            <a href={`${router.basePath}/posts/4`} className={styles.card}>
              <h5>Post 4</h5>
            </a>
            <a href={`${router.basePath}/posts/5`} className={styles.card}>
              <h5>Post 5</h5>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export default Home;
