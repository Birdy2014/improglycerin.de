import type { Metadata } from "next";
import styles from "./page.module.css";
import { Vertical, Horizontal } from "../_components/Layouts";
import Accordion from "../_components/Accordion";

export const metadata: Metadata = {
  title: "BUSINESS",
};

export default function Business() {
  return (
    <div className={styles.page}>
      <img className={styles.image} src="/header-business.jpg" />

      <Horizontal fixedWidth={false}>
        <Vertical>
          <h3>Improtheater, das wirkt.</h3>
          <p>
            Ob Kongress, Messe oder Betriebsfeier: Eine Improshow überrascht,
            bringt Energie ins Team – und zeigt Wertschätzung, ohne große Worte.
            Sie genießen. Wir liefern.
          </p>
          <h3>Trauen Sie sich!</h3>
          <p>
            Ihr Team wird selbst aktiv. In einem maßgeschneiderten Workshop
            stärken Sie Vertrauen, Kommunikation und kreative Schlagkraft –
            genau dort, wo Strukturen sonst blockieren. Sie werden sicher in der
            Kommunikation. Sie öffnen die Schleusen zu wahrer Kreativität.
            Improtheater ist eine ungewöhnlich vielgestaltige Kunstform. Deshalb
            hilft Impro in der Teamentwicklung – insbesondere im schwierigen
            Bereich zwischen Regeln, Vertrauen, Intuition, Spontaneität und
            Kreativität. Wir trainieren Ihr Unternehmen gerne in einem
            individuellen Workshop. Stundenweise, halbtags, ganztags oder in
            längeren Coachings.
          </p>
          <h3>Warum Improglycerin?</h3>
          <p>
            Weil wir wissen, wie Unternehmen ticken – von Bank bis Bühne. Unser
            Team bringt Erfahrung aus Wirtschaft, Medien, Kultur und
            internationaler Zusammenarbeit mit. Wir sprechen die Sprache Ihrer
            Branche – und übersetzen sie in Spontaneität, Präsenz und echtes
            Teamgefühl.
          </p>
          <p>Melden Sie sich bei uns für ein unverbindliches Angebot!</p>
        </Vertical>

        <div className={styles.sidebar}>
          <Vertical>
            <h3>Show-Formate:</h3>
            <Accordion
              items={[
                {
                  title: "Impro-Show",
                  content:
                    "Der Klassiker. Eine Show in der Länge von 30, 60, 90 oder sogar 120 Minuten. Mit kurzen Szenen oder längeren Geschichten, inspiriert von den spontanen Vorschlägen aus Ihrem Kollegenkreis.",
                },
                {
                  title: "Kongress-Impro",
                  content:
                    "Ihr Thema, allerdings heiter von außen betrachtet – in einer Impro-Show! Wir arbeiten uns vorher in das Fachgebiet ein und spielen dann mit ihm. Zum Beispiel in einem spontan erfundenen TED-Talk oder Pecha-Kucha-Vortrag zu einem Thema, das wir verfremden und zu ganz neuen Horizonten führen. Ideal als ungewöhnlicher Tagungsstart, als Auflockerung mittendrin oder überraschender Abschluss. Trauen Sie sich! Länge: ca. 30-60 Minuten.",
                },
                {
                  title: "Weihnachtsfeier",
                  content:
                    "Weihnachtsfeier, Adventsfeier, Christmas-Party – wie immer Sie es nennen, wir haben die Geschenkidee für Ihre Belegschaft. Wir bieten Ihnen eine Improtheater-Show, die sich ganz nach Ihrem Wunschzettel richtet: mit harmonischer oder frecher Stimmung, mit entspannender oder fetziger Musik. Das ist ja das Schöne am Improvisationstheater – wir schneiden es auf Ihre Wünsche zu wie ein ordentliches Stück Gänsebraten. Ergebnis: glänzende Augen – ganz wie früher, nur jetzt auf Ihrer Weihnachtsfeier! Diese Idee für eine Weihnachtsfeier macht alles zum Weihnachtsevent!",
                },
              ]}
            />
            <h3>Workshop-Module:</h3>
            <Accordion
              items={[
                {
                  title: "Grundlagen des Improtheaters",
                  content:
                    "Ein Crash-Kurs im Improvisations-Theater: Sie lernen, auf andere spontan und sinnvoll zu reagieren, stimmige Charaktere zu entwerfen und durchzuhalten, sinnvolle Figurenensembles zu kreieren und vor allem: Spaß zu haben. Sinnvoll zum Beispiel als Beginn einer Wochenend-Tagung, um die Schleusen der Kreativität zu öffnen. Empfohlen: mindestens zwei bis zu acht Stunden am Tag. Ideal: Blöcke von zwei Tagen, zum Beispiel Wochenenden.",
                },
                {
                  title: "Vertrauen im Team",
                  content:
                    "Das klassische Teambuilding-Modul: Viele Übungen des Improtheaters zielen nicht nur darauf ab, auf sich, die anderen und das Gruppen-Wir gleichzeitig zu achten. Oft geht es auch darum, sich vor anderen etwas zu trauen, blitzschnell mutige Entscheidungen zu treffen und diese dann vor der Gruppe zu verantworten. Oft hat man Angst, sich lächerlich zu machen und bringt sich gar nicht erst ein. Mit einigen klassischen Übungen aus dem Improvisations-Theater lernen die Teammitglieder: Sie können den eigenen Instinkten vertrauen, die Ideen der anderen annehmen und weiterentwickeln und zu einem echten Miteinander finden. Eine Erfahrung die zusammenschweißt und neue Sichtweisen eröffnet. Empfohlen: mindestens ein halber, besser ein ganzer Tag.",
                },
                {
                  title: "Sicherheit bei Auftritten",
                  content:
                    "Sie verkaufen einem skeptischen Kunden etwas, halten eine längere Rede oder präsentieren der Belegschaft ein Konzept. Dabei wünschen Sie sich mehr Sicherheit und Mut zu Spontaneität. Hier ist Improtheater die beste Vorbereitung. Wir wissen, was es heißt, ohne Netz und doppelten Boden spontan Ideen zu entwickeln und glaubhaft zu vertreten. Dabei schauen wir auf alle wichtigen Ebenen: Körperhaltung, Gestik, Mimik, Sprechweise und Ausdruck. Sie erlernen zackige spontane Produktpitches, improvisierte Mini-Vorträge und geschmeidige Überleitungen zum Kollegen im Team-Vortrag. Sie werden mit Störern, Nörglern und Neinsagern umgehen lernen. Wir trainieren Sie – stundenweise, halb- oder ganztags und gerne auch längerfristig.",
                },
                {
                  title: "Humor und Schlagfertigkeit",
                  content:
                    "Machen Sie sich locker. Mit Witz werden Präsentationen, Team-Meetings und Kundengespräche gleich viel besser. Ob durch Anspielung, Ironie, running gags, absurden Humor – Sie lernen, wann welche Form von Humor passt. Ohne auswendig gelernte Witze, aber mit der richtigen Haltung und den richtigen Prinzipien für guten Humor. Sie lernen, mit Status, Stilmitteln und Normverstößen umzugehen. Und Sie erlernen Schlagfertigkeit für die Momente, in denen die Konkurrenz fies wird. Sozusagen ein Überlebenstraining gegen Totschlag-Argumente. Denn alles weglachen sollten Sie nicht!",
                },
              ]}
            />
          </Vertical>
        </div>
      </Horizontal>
    </div>
  );
}
