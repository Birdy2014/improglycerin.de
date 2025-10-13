"use client";

import { useRef, useState } from "react";
import styles from "./Newsletter.module.css";

enum SubscriptionState {
  NOT_SUBSCRIBED,
  SUBSCRIBED,
  ALREADY_SUBSCRIBED,
  ERROR,
}

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(
    SubscriptionState.NOT_SUBSCRIBED,
  );

  const [email, setEmail] = useState("");

  const checkboxWorkshops = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const workshops = data.get("checkboxWorkshops");
    const shows = data.get("checkboxShows");
    const email = data.get("email");
    const name = data.get("name");
    const subscribedTo = (workshops ? 1 : 0) | (shows ? 2 : 0);

    if (!email || !name || subscribedTo < 1 || subscribedTo > 3) {
      return;
    }

    try {
      const response = await fetch(
        "https://improtheater-frankfurt.de/api/newsletter/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name, subscribedTo }),
        },
      );

      if (response.status === 409) {
        setSubscribed(SubscriptionState.ALREADY_SUBSCRIBED);
        return;
      }

      if (!response.ok) {
        setSubscribed(SubscriptionState.ERROR);
        return;
      }

      setEmail(email.toString());
      setSubscribed(SubscriptionState.SUBSCRIBED);
    } catch (error) {
      setSubscribed(SubscriptionState.ERROR);
      console.error(error);
    }
  }

  function checkValidity(event: React.ChangeEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    const workshops = data.get("checkboxWorkshops");
    const shows = data.get("checkboxShows");
    const valid = workshops || shows;
    if (!checkboxWorkshops.current) {
      return;
    }
    checkboxWorkshops.current.setCustomValidity(
      valid ? "" : "Es muss mindestens ein Newsletter ausgewählt sein.",
    );
  }

  return (
    <div className={styles.newsletter}>
      <div
        style={{
          display:
            subscribed === SubscriptionState.NOT_SUBSCRIBED ? "block" : "none",
        }}
      >
        <h1>
          Improglycerin Newsletter bestellen und immer gut informiert sein!
        </h1>
        <p>
          Hier könnt ihr zwei Newsletter bestellen. Der eine Newsletter kommt
          wöchentlich von Improtheater Frankfurt und enthält die Einladungen für
          unsere Workshops. Der andere Newsletter kommt ca. zehn mal pro Jahr
          von Improglycerin für unsere Shows.
        </p>

        <form
          className={styles.form}
          onChange={checkValidity}
          onSubmit={handleSubmit}
        >
          <div className={styles.checkboxContainer}>
            <label>
              <input
                type="checkbox"
                name="checkboxWorkshops"
                ref={checkboxWorkshops}
              />
              Workshops
            </label>
            <br />
            <label>
              <input type="checkbox" name="checkboxShows" />
              Shows
            </label>
            <br />
          </div>

          <div className={styles.textContainer}>
            <input
              type="email"
              name="email"
              placeholder="E-Mail-Adresse"
              required
            />
            <br />
            <input
              type="text"
              name="name"
              placeholder="Vorname und Nachname"
              required
            />
            <br />
          </div>

          <input
            type="submit"
            className={styles.subscribeButton}
            value="ANMELDEN"
          />
        </form>
      </div>

      <div
        style={{
          display:
            subscribed === SubscriptionState.SUBSCRIBED ? "block" : "none",
        }}
      >
        <h1>Vielen Dank für Deine Newsletter-Anmeldung</h1>
        <p>
          Du erhältst gleich eine E-Mail von uns. Bitte bestätige die Anmeldung
          durch einfaches Klicken des Bestätigungslinks in dieser E-Mail. Erst
          dann erhältst Du unseren Newsletter an Deine angegebene
          E-Mail-Adresse: {email}
        </p>
      </div>

      <div
        style={{
          display:
            subscribed === SubscriptionState.ALREADY_SUBSCRIBED
              ? "block"
              : "none",
        }}
      >
        <h1>Die Newsletter-Anmeldung war nicht erfolgreich</h1>
        <p>
          Entweder bist du schon angemeldet oder du hast den Link in der
          Bestätigungsmail noch nicht angeklickt.
        </p>
        <p>
          Falls du bereits bei einem der Newsletter angemeldet bist und dich
          auch für den anderen Newsletter anmelden willst, findest du den
          passenden Anmeldelink im Footer eines Newsletters und der
          Newsletterbestätigung.
        </p>
      </div>

      <div
        style={{
          display: subscribed === SubscriptionState.ERROR ? "block" : "none",
        }}
      >
        <h1>Die Newsletter-Anmeldung war nicht erfolgreich</h1>

        <p>Es ist ein unbekannter Fehler aufgetreten.</p>
      </div>
    </div>
  );
}
