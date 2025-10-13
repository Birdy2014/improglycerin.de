import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { fetchEvents, fetchTestimonials } from "../_lib/yesticket";
import Testimonial from "../_components/Testimonial";

export const metadata: Metadata = {
  title: "SHOWS",
};

// Must be dynamic so that the shows actually get fetched at runtime.
export const dynamic = "force-dynamic";

export default async function Shows() {
  const events = await fetchEvents("Auftritt");
  const testimonials = await fetchTestimonials("Auftritt", 5);

  const dateFormat = Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Europe/Berlin",
  });

  return (
    <div className={styles.page}>
      <div className={styles.shows}>
        {events.map((event) => (
          <Link
            key={event.event_id}
            className={styles.show}
            href={`/shows/${event.event_urlsafename}`}
          >
            <div className={styles.showLeft}>
              <div className={styles.showName}>{event.event_name}</div>
              <div className={styles.showInfos}>
                <div>{dateFormat.format(new Date(event.event_datetime))}</div>
                <div>{event.location_name}</div>
              </div>
            </div>
            <div className={styles.showRight}>
              <div className={styles.button}>Mehr Infos</div>
              <div className={styles.showInfos}>
                <div>{event.event_urgency_string}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} author={testimonial.source}>
            {testimonial.text}
          </Testimonial>
        ))}
      </div>
    </div>
  );
}
