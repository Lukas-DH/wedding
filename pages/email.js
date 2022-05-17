import React, { useRef } from "react";
import { Form as FormBT, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";
import styles from "../styles/email.module.css";
import Link from "next/dist/client/link";
import Router from "next/router";
import Head from "next/head";
// import ContactUs from "../components/form";

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhunsvk",
        "template_a3vda1o",
        form.current,
        process.env.NEXT_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Router.push("/thanks");
        },
        (error) => {
          console.log(error.text);
          Router.push("/error");
        }
      );
  };

  return (
    // <div>
    //   <ContactUs ref={form} onSubmit={sendEmail} />
    // </div>
    <>
      {" "}
      <Head>
        <link href="https://use.typekit.net/ofy7gjj.css" rel="stylesheet" />
        <title>Paris Wedding</title>
      </Head>
      <body>
        <div className={styles.App}>
          <p className={styles.box}>
            {" "}
            <Link href="/">
              <a>
                {" "}
                <Button
                  className={styles.btnCustom69}
                  variant="warning"
                  type="submit"
                >
                  &larr; back
                </Button>
              </a>
            </Link>
          </p>
          Please provide your contact details so that we can send you an
          official invitation<br></br>
          <div className={styles.appHeader}>
            {/* <div className={styles.box}> */}
            <div className={styles.login}>
              <FormBT ref={form} onSubmit={sendEmail}>
                <FormBT.Group className="mb-3" controlId="formBasicCity">
                  <FormBT.Label>Name*</FormBT.Label>
                  <FormBT.Control
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                    required
                  />
                </FormBT.Group>

                <FormBT.Group className="mb-3" controlId="formBasicEmail">
                  <FormBT.Label>Email address*</FormBT.Label>
                  <FormBT.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </FormBT.Group>

                <FormBT.Group className="mb-3" controlId="formBasicAddress">
                  <FormBT.Label>Address*</FormBT.Label>
                  <FormBT.Control
                    name="address"
                    type="text"
                    placeholder="Enter Address"
                    required
                  />
                </FormBT.Group>

                <FormBT.Group className="mb-3" controlId="formBasicAddress2">
                  <FormBT.Label>Address 2</FormBT.Label>
                  <FormBT.Control
                    name="address2"
                    type="text"
                    placeholder="apartment, studio, floor"
                  />
                </FormBT.Group>

                <FormBT.Group className="mb-3" controlId="formBasicCountry">
                  <FormBT.Label>Country*</FormBT.Label>
                  <FormBT.Control
                    name="country"
                    type="text"
                    placeholder="Enter country"
                    required
                  />
                </FormBT.Group>

                <FormBT.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <FormBT.Label>Guest Names</FormBT.Label>
                  <FormBT.Control
                    name="additionalGuests"
                    as="textarea"
                    placeholder={`Full names of all attending with you: \nEmmanuel Macron\nCatherine Deneuve\n...`}
                    rows={4}
                  />
                </FormBT.Group>

                <Button
                  className={styles.btnCustom69}
                  variant="warning"
                  type="submit"
                >
                  Submit
                </Button>

                {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
              </FormBT>
            </div>
            {/* </div> */}
          </div>
        </div>
      </body>
    </>
  );
}

export default Email;
