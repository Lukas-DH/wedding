import Head from "next/head";
import Image from "next/image";
import styles from "../styles/error.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Head>
        <link href="https://use.typekit.net/ofy7gjj.css" rel="stylesheet" />
        <title>Paris Wedding</title>
      </Head>
      <div className={styles.App}>
        <header className={styles.appHeader}>
          <p>
            OPPs... that didnt work... please email us your name, addres, and
            names of guests
          </p>
          <Link href="mailto: contact@sofielukasforever.com">
            <a className={styles.a}>
              <Button className={styles.btnCustom70} variant="warning">
                contact@sofielukasforever.com
              </Button>
            </a>
          </Link>
          <div className={styles.box}>
            {" "}
            <Link href="/">
              <a>&larr; back</a>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
