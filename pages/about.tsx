import styles from '../styles/Home.module.css';
import Layout from './components/layout/layout';
import Sidebar from './components/sidebar/sidebar';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
    </div>
  );
};

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export default About;
