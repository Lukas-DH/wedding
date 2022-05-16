import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import garden from "../public/gardensummer.png";
import sofieLukas from "../public/sofieetlukas2.png";

function App() {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.wrapper}>
          <header className={styles.appHeader}></header>
          <header className={styles.appHeader}>
            <Image
              src={garden}
              height="610vh"
              width="1000%"
              // pointerEvents="none"
              // width={500}
              // height={500}
            />
            <Image
              src={sofieLukas}
              height="120vmin"
              width="1000%"
              // pointerEvents="none"
              // height={500}
            />

            <p>
              Would like to invite you to our wedding on the 8th of October 2022
              in Paris, France. More details coming soon.
            </p>

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

            <div className={styles.box}>
              {" "}
              <Link href="mailto:contact@sofielukasforever.com?subject=we have a question">
                <a className={styles.a}>
                  for questions &rarr; contact@sofielukasforever.com
                </a>
              </Link>
            </div>
          </header>
          <header className={styles.appHeader}></header>
        </div>
      </div>
    </>
  );
}

export default App;
{
  /* <img src="./sofieetlukas2.png" className={styles.name} />
             <img src="./gardensummer.png" className={styles.appLogo} /> */
}
