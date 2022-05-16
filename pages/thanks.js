import Head from "next/head";
import Image from "next/image";
import styles from "../styles/error.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className={styles.App}>
        <header className={styles.appHeader}>
          <p>thanks! We hope to see you there</p>
          <Link href="/">
            <a className={styles.a}>
              <Button variant="warning">back</Button>
            </a>
          </Link>
        </header>
      </div>
    </>
  );
}

export default App;
