import Head from "next/head";
import Image from "next/image";
import styles from "../styles/thanks.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {" "}
      <Head>
        <link href="https://use.typekit.net/ofy7gjj.css" rel="stylesheet" />
        <title>Paris Wedding</title>
      </Head>
      <div className={styles.App}>
        <header className={styles.appHeader}>
          <p>thanks! We hope to see you there</p>
          <Link href="/">
            <a className={styles.a}>
              <Button className={styles.btnCustom6} variant="warning">
                back
              </Button>
            </a>
          </Link>
        </header>
      </div>
    </>
  );
}

export default App;
