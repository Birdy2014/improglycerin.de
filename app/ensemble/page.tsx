import type { Metadata } from "next";
import styles from "./page.module.css";
import ModalImage from "../_components/ModalImage";
import imageTramPham from "@/public/ensemble-tram-pham.jpg";
import imageChristophMoritz from "@/public/ensemble-christoph-moritz.jpg";
import imageKathrinFreihube from "@/public/ensemble-kathrin-freihube.jpg";
import imageTorbenSchmidt from "@/public/ensemble-torben-schmidt.jpg";
import imageHaukeScheer from "@/public/ensemble-hauke-scheer.jpg";
import imageElisaVogel from "@/public/ensemble-elisa-vogel.jpg";
import imageSusanneKoenig from "@/public/ensemble-susanne-koenig.jpg";
import imageJonathanStalmann from "@/public/ensemble-jonathan-stalmann.jpg";
import imageLogo from "@/public/logo_schutzraum.png";

export const metadata: Metadata = {
  title: "ENSEMBLE",
  description:
    "Wir sind ein kreatives Impro-Schauspiel-Team aus den Bereichen Schauspiel, Pädagogik, Journalismus, Marketing, Social Media, Finance.",
};

export default function Page() {
  return (
    <div className={styles.grid}>
      <ModalImage title="TRAM PHAM" src={imageTramPham}>
        Tram – aka „die Chefin“ hatte die Idee zu unserer Truppe. Unsere längste
        Improhäsin belegte weit vor unserem legendären Zusammentreffen
        Improkurse. Gerne und detailliert schmückt sie Szenen aus. Weil sie im
        wahren Leben anderen durch Design zum Glänzen verhilft. Sie spielt gerne
        lustig, weshalb gerade Pascal sie zu Übeltäter-Rollen zwingt. Ansonsten
        wandert sie tagelang, modelt für Bondfilme oder Comicfiguren,
        karaokisiert wild und fotografiert stilsicher alle Glanzmomente ihres
        Lebens.
      </ModalImage>

      <ModalImage title="CHRISTOPH MORITZ" src={imageChristophMoritz}>
        Christoph – kennt die hellen und dunklen Seiten des Lebens. Vor allem
        aus Shadowrun und Earthdawn. Er hat seinen angeborenen Spieltrieb
        nämlich früh am PC und bei Pen-and-Paper-Rollenspielen mit seinen
        Freunden aus Marburg ausgelebt. Dann startete er bei uns durch. Dass er
        auf der Bühne steht, verdaut seine Verwandschaft immer noch. Dabei
        treibt sich Christoph sogar nebenbei noch in der englischsprachigen
        Impro-Szene herum. Er ist auf der Bühne blitzschnell, genau wie in
        seinem Job als Social-Media-Redakteur. Als popkultureller Nerd mit
        Wohnsitz Internet hat Christoph einen herrlich skurrilen Humor, den er
        in der Improhochburg Chicago noch verfeinert hat. Aber ebenso in absolut
        pflichterfüllter Fortbildung durch Impro-Bücher, Podcasts und Kurse!
        Zuhause pflegt Christoph ganz trendbewusst seinen Urban Jungle.
      </ModalImage>

      <ModalImage title="KATHRIN FREIHUBE" src={imageKathrinFreihube}>
        Kathrin – lebte ihren Zug zur Bühne schon oft aus: als „MC Matzke“ im
        KIKA, beim freien Theater „teatrum7“, an der Frankfurter Oper und am
        Schauspiel Frankfurt, in Krimi-Dinners und Filmproduktionen.
        Ansteckendes Lachen ist ihr Hobby, dabei kann die studierte Journalistin
        auch seriös, bewiesen durch viele Rundfunk- und
        Zeitschriftenredaktionen. Sie betrachtet uns ferner als Zweitfamilie,
        ihre Erstfamilie sie als naturbekifft. Kathrin mag Facebook-Weisheiten,
        Ratgeber gegen Improsucht und Farnpflanzen.
      </ModalImage>

      <ModalImage title="TORBEN SCHMIDT" src={imageTorbenSchmidt}>
        Torben – den haben sie echt von der Leine gelassen! Na klar, denn er
        kommt aus Hannover. Torben belegte schon zu Schulzeiten genau dort
        Improkurse. Was den Rest der Truppe mit Neid erfüllt. Der
        Kulturwissenschaftler sorgt im wahren Leben dafür, dass
        informationstechnisch alles läuft. Ebenso groß ist die bereichernde
        Spannweite seiner Rollen. Spielsüchtige, Paketdienstleister mit
        unheilvollen Lieferungen, frisch verliebte Gaypride-Aktivisten – es ist
        schlicht alles möglich. Torben mag gleich mehrere konkurrierende
        Fußballvereine, bildet sich verantwortungsvoll bei Satire-TV-Sendungen
        fort und ist gleich in mehreren Sprachen zuhause.
      </ModalImage>

      <ModalImage title="HAUKE SCHEER" src={imageHaukeScheer}>
        Unser Saarland-Import hat als Jugendlicher viel Pen- and
        Paper-Rollenspiele durchgefochten und erlangte damit das
        Impro-Vordiplom. Als Hauke dann während seines BWL-Studiums in einer
        Theatergruppe spielte, lernte er Impro kennen und lieben. So sehr, dass
        er in Frankfurt Kurse belegte und nie mehr aufhörte. Mit Hauke kann es
        laut werden – dann färbt sein Beruf und zugleich sein liebstes Hobby ab:
        Hauke entwirft 3D-Action-Figuren und lässt sie in Animationsfilmen auf-
        und gegeneinander antreten. Keine Angst – Hauke wäre nicht Hauke, wenn
        er nicht immer, wie auch auf der Impro-Bühne, alles mit einem Schuss
        Ironie aromatisiert: Auf seinem Schreibtisch zuhause steht ein
        Action-Mini-Hauke!
      </ModalImage>

      <ModalImage title="ELISA VOGEL" src={imageElisaVogel}>
        Elisa – unser Original vom Main hat schon viele Jobs gemacht. Und so
        reich ist auch das Spiel unseres Frankfurter Urgesteins. Die
        Kunstpädagogin zeigt Euch nun auf der Bühne, was wahre Kunst ist. In
        mehreren parallelen Kursen lebte sie ihre Spielsucht aus und kanalisiert
        alles nun bei uns. Elisa ist ein genialer Grimassen-Guru. Und alle sind
        beeindruckt, wie sie selbst Putzlappen zum Leben erweckt oder Meere und
        Wind verkörpert. Oder gar Putzlappen im Meerwind. Ansonsten mag Elisa
        uns, gerade das mögen wir ja so an ihr.
      </ModalImage>

      <ModalImage title="SUSANNE KÖNIG" src={imageSusanneKoenig}>
        Malen, tanzen, Spiele erfinden – die Würzburgerin war schon als Kind
        recht kreativ und spielt deshalb noch heute gerne Langformen und Szenen
        mit Musik. Zum Impro kam Susanne über das klassische Theater, wo sie
        u.a. schauspielerte und Regie führte. Heute leitet Susanne in einem
        globalen Unternehmen ein internationales Team. Improprinzipien wie
        aktives Zuhören und „let your partner shine“ setzt sie auch dort ein!
        Trotz ihrer Arbeit in mehreren Zeitzonen glänzt Susanne in Impro-Shows
        stets durch konstante freshness. Vom Wahnsinn unserer Trainings kuriert
        sie sich mit Reisen in unbekannte Regionen und Fotografieren von
        Wildtieren (falls verfügbar) aus.
      </ModalImage>

      <ModalImage title="JONATHAN STALMANN" src={imageJonathanStalmann}>
        Jonathan – musste einfach im Impro landen. Erst interessierten ihn
        Geschichten mit Lego-Rittern, dann die Wirtschaftsgeschichte, dann
        Geschichten überhaupt, als er im Nursery Theatre, London, Impro lernte –
        außerdem später in der Impro-Hochburg Chicago! Jonathan hat die Ruhe
        weg, weil er Crash-Tests für Banken simuliert. Er ist damit auf das
        Schlimmste vorbereitet. Nämlich auf uns. Ein Glück helfen da seine
        ausgefeilten To-Do-Listen und sein unglaublich konstruktives Feedback.
        Widersprechen wird sowieso niemand – Jonathan kann Taekwondo. Ansonsten
        lebt er in Frankfurt zum ersten Mal in seinem Leben nicht in einer WG.
      </ModalImage>

      <div className={styles.placeholderLogo}>
        <ModalImage title="" src={imageLogo}>
          {""}
        </ModalImage>
      </div>
    </div>
  );
}
