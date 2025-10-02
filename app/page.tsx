import Link from "next/link";
import styles from "./page.module.css";
import Carousel from "./_components/Carousel";
import Testimonial from "./_components/Testimonial";
import { Vertical, Horizontal } from "./_components/Layouts";

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel
        images={[
          "/start-carousel-1.jpg",
          "/start-carousel-2.jpg",
          "/start-carousel-3.jpg",
          "/start-carousel-4.jpg",
          "/start-carousel-5.jpg",
          "/start-carousel-6.jpg",
        ]}
      />
      <Vertical>
        <h2>IMPROTHEATER AUS FRANKFURT AM MAIN</h2>
        <p>
          Explosiv. Intensiv. Jetzt. Ihr ruft uns Ideen zu, wir machen daraus
          Szenen. Sofort.
          <br />
          Ohne Drehbuch, ohne Versatzstücke, ohne Vorbereitung. Drama, Komödie
          und Stand-Up-Comedy in einem.
        </p>
        <p>Lasst Euch mitreißen. Das ist Improvisationstheater.</p>
      </Vertical>

      <Horizontal>
        <Vertical>
          <Testimonial author="Wiesbadener Tagblatt">
            Anspruchsvolle Kleinkunst… turbulent und lustig!
          </Testimonial>
          <Testimonial author="RadioX">
            Wirklich klasse, wirklich schön! Ein sehr schöner, sehr
            unterhaltsamer Abend! Ihr arbeitet dran, dass die Improszene in
            Frankfurt noch lebendiger wird.
          </Testimonial>
          <Testimonial author="Sachsenhäuser Wochenblatt">
            Eine Improtheater-Show der besonderen Art!
          </Testimonial>
        </Vertical>

        <Link
          href="https://shop.journal-frankfurt.de/service_shop_einzel/FESTE-FEIERN-in-Frankfurt-Rhein-Main-1.html"
          className={styles["journal-image"]}
        >
          <img src="/FFF25_Auszeichnung_700x500px.jpg" />
        </Link>
      </Horizontal>

      <Horizontal>
        <Vertical>
          <h2>SHOWS</h2>
          <p>
            Dolorum optio sint sapiente in nesciunt. Quia minima fugiat incidunt
            inventore. Ratione blanditiis fugiat laborum exercitationem. In
            rerum velit cupiditate magni animi qui fugiat omnis.
            <br />
            Aut similique qui facere aliquam. Quam consequatur totam illo. Omnis
            consequuntur quaerat animi quia ipsa.
          </p>
        </Vertical>
        <img src="/teaser-shows.jpg" />
      </Horizontal>

      <Horizontal>
        <img src="/teaser-ensemble.jpg" />
        <Vertical>
          <h2>ENSEMBLE</h2>
          <p>
            Von Adelsgeschlecht bis Aggro-Greis, von Buckel-Diener bis
            Manga-Maus: Wir spielen schlicht alle denkbaren Figuren. Weil wir
            alle so unterschiedliche Charaktere mit sehr eigenen Lebenswegen
            sind.
          </p>
        </Vertical>
      </Horizontal>

      <Horizontal>
        <Vertical>
          <h2>BUSINESS</h2>
          <p>
            Das haben Ihre KollegInnen wirklich verdient! Eine ausgefallene Show
            zum Beispiel. Oder einen maßgeschneiderten Workshop zu den Themen
            Teamwork, Auftritt, Humor oder Schlagfertigkeit. Ob auf einem
            Kongress, auf einer Messe oder beim Betriebsfest: Improtheater
            überrascht einfach und macht Spaß.
          </p>
        </Vertical>
        <img src="/teaser-business.jpg" />
      </Horizontal>

      <Horizontal>
        <img src="/teaser-improschule.jpg" />
        <Vertical>
          <h2>IMPROSCHULE</h2>
          <p>
            Jeden Mittwoch gibt es bei uns einen Workshop. Egal, ob Anfänger
            oder Profi, Ihr könnt fast jederzeit einsteigen. Ihr kommt, wie oft
            und wann Ihr wollt. Anfänger kommen am besten am ersten Mittwoch im
            Monat zu den Impro Basics. Einmal im Monat bieten wir samstags eine
            Jam und ein „Special“ an.
          </p>
        </Vertical>
      </Horizontal>
    </div>
  );
}
