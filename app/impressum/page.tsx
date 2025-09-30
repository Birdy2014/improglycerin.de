import Link from "next/link";
import { Metadata } from "next";
import styles from "./page.module.css";
import { Vertical } from "../_components/Layouts";

export const metadata: Metadata = {
  title: "IMPRESSUM",
};

export default function Impressum() {
  return (
    <div className={styles.page}>
      <Vertical>
        <h1>IMPRESSUM</h1>
        <h2>Improglycerin – Improvisationstheater in Frankfurt e.V.</h2>
        <p>
          c/o Elisa Vogel
          <br />
          Wingertstraße 26
          <br />
          60316 Frankfurt am Main
          <br />
          vertreten durch die Vorstandsmitglieder Elisa Vogel, Tram Pham,
          Kathrin Freihube.
        </p>

        <p>
          <strong>Design, Logo, Favicon der Website: </strong>
          <Link href="https://www.instagram.com/closetotram">Tram Pham</Link>,
          Kommunikationsdesignerin (B.A.)
        </p>
        <p>
          <strong>Fotos: </strong>
          <Link href="http://www.francesca-franzke.com/">
            Francesca Franzke
          </Link>
          , Franz Vogel,{" "}
          <Link href="https://www.instagram.com/dw_herrmann/">
            Dominik Herrmann
          </Link>
        </p>
        <p>
          <strong>Website (Programmierung und Administration): </strong>
          <Link href="https://github.com/Birdy2014">Moritz Vogel</Link>
        </p>
      </Vertical>

      <Vertical>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
      </Vertical>

      <Vertical>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
      </Vertical>

      <Vertical>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </Vertical>

      <p>
        Quelle:{" "}
        <Link href="https://www.e-recht24.de/impressum-generator.html">
          https://www.e-recht24.de/impressum-generator.html
        </Link>
      </p>
    </div>
  );
}
