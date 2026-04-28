import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Marked } from "marked";
import styles from "./page.module.css";
import * as yesticket from "@/app/_lib/yesticket";
import Button from "@/app/_components/Button";
import * as itf from "@/app/_lib/improtheater-frankfurt";

export const metadata: Metadata = {
  robots: {
    index: false,
  },
};

const marked = new Marked({
  gfm: true,
  breaks: true,
});

export default async function Page(props: PageProps<"/shows/[name]">) {
  const params = await props.params;
  const events = await yesticket.fetchEvents("Auftritt");
  const event = events.find((event) => event.event_urlsafename === params.name);

  if (!event) {
    notFound();
  }

  const itfEvent = await (async () => {
    try {
      const itfEvents = await itf.fetchEvents("show");
      return itfEvents.find((itfEvent) => {
        return (
          event.event_datetime.getTime() === itfEvent.begin.getTime() &&
          event.event_datetime_end.getTime() === itfEvent.end.getTime()
        );
      });
    } catch (_) {
      return undefined;
    }
  })();

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

  const description = itfEvent ? (
    <div
      className={styles.description}
      dangerouslySetInnerHTML={{ __html: marked.parse(itfEvent.content) }}
    ></div>
  ) : (
    <div className={styles.description}>
      {event.event_description.split("\n").map((line, lineNr) => (
        <p key={`description-line-${lineNr}`}>{line}</p>
      ))}
    </div>
  );

  return (
    <div className={styles.page}>
      <img className={styles.image} src={event.event_picture_url} />
      <div className={styles.main}>
        <h1>{event.event_name}</h1>
        {description}
      </div>
      <div className={styles.sidebar}>
        <dl className={styles.infobox}>
          <dt>Wann?</dt>
          <dd>
            <div>{dateFormat.format(event.event_datetime)}</div>
            <div>
              {timeFormat.formatRange(
                event.event_datetime,
                event.event_datetime_end,
              )}
            </div>
          </dd>
          <dt>Wo?</dt>
          <dd>
            <div>{event.location_name}</div>
            <div>{event.location_street}</div>
          </dd>
          {itfEvent ? (
            <>
              <dt>Preis?</dt>
              <dd>{itfEvent.price}</dd>
            </>
          ) : (
            <></>
          )}
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
