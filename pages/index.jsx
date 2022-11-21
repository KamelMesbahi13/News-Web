import Toolbar from '../Components/Toolbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>24h/7 News Only In Our WebSite</h1>
          <h3>Your One Step For The Latest News Articles</h3>
        </div>
      </div>
    </>
  )
}
