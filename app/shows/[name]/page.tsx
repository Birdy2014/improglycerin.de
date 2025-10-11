import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { fetchEvents } from "@/app/_lib/yesticket";
import Button from "@/app/_components/Button";

export default async function Page(props: PageProps<"/shows/[name]">) {
  const params = await props.params;
  const events = await fetchEvents("Auftritt");
  const event = events.find((event) => event.event_urlsafename === params.name);

  if (!event) {
    notFound();
  }

  const dateFormat = Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Berlin",
  });

  const timeFormat = Intl.DateTimeFormat("de-DE", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Berlin",
  });

  const beginDate = new Date(event.event_datetime);
  const endDate = new Date(event.event_datetime_end);

  return (
    <div className={styles.page}>
      <img className={styles.image} src={event.event_picture_url} />
      <div className={styles.main}>
        <h1>{event.event_name}</h1>
        <div>
          {event.event_description.split("\n").map((line, lineNr) => (
            <p className={styles.paragraph} key={`description-line-${lineNr}`}>
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.sidebar}>
        <dl className={styles.infobox}>
          <dt>Wann?</dt>
          <dd>
            <div>{dateFormat.format(beginDate)}</div>
            <div>{timeFormat.formatRange(beginDate, endDate)}</div>
          </dd>
          <dt>Wo?</dt>
          <dd>
            <div>{event.location_name}</div>
            <div>{event.location_street}</div>
          </dd>
          <dd>
            <Button href={event.yesticket_booking_url.toString()}>
              Tickets
            </Button>
            <div>{event.event_urgency_string}</div>
          </dd>
        </dl>
      </div>
    </div>
  );
}
