import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className={styles.App}>
        <header className={styles.appHeader}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src="./sofieetlukas2.png" className={styles.name} />
          <img src="./gardensummer.png" className={styles.appLogo} />
          <p>
            We would like to invite you to our wedding on the 8th of October
            2022 in Paris, France. More details coming soon.
          </p>

          <div>
            <div>
              {" "}
              <Link href="/email">
                <a>
                  <Button variant="warning">
                    Click here to submit your address
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.box}>
            {" "}
            <Link href="mailto:contact@sofielukasforever.com?subject=we have a question">
              <a className={styles.a}>
                for questions &rarr; contact@sofielukasforever.com
              </a>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
