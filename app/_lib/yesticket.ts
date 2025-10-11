export interface YesticketEvent {
  event_name: string;
  event_type: "Auftritt" | "Workshop";
  event_id: number;
  event_datetime: string;
  event_datetime_end: string;
  event_description: string;
  event_urlsafename: string;
  event_picture_url: string;
  event_max_people: number;
  event_free_seats: number;
  event_blocked_seats: number;
  event_days_to_event: number;
  event_urgency_string: string;
  event_bookable_from: string;
  event_bookable_to: string;
  event_facebook_url: string;
  event_payment_mode: string;
  event_notes_help: string;
  event_external_booking_url: string;
  location_name: string;
  location_description: string;
  location_help_notes: string;
  location_street: string;
  location_city: string;
  location_zip: string;
  location_state: string;
  location_country: string;
  organizer_name: string;
  organizer_language: string;
  yesticket_booking_url: string;
  tickets: string;
}

export interface YesticketTestimonial {
  text: string;
  source: string;
  date: string;
  event_type: "Auftritt" | "Workshop";
  event_name: string;
  event_datetime: string;
  booker_testimonial_stars: number;
}

export async function fetchEvents(
  type: "Auftritt" | "Workshop",
): Promise<YesticketEvent[]> {
  const params = new URLSearchParams({
    organizer: "12",
    key: getApiKey(),
    type: type,
    lang: "de",
  });

  const eventsRequest = await fetch(
    `https://www.yesticket.org/api/v2/events.php?${params.toString()}`,
    { cache: "force-cache", next: { revalidate: 3600 } },
  );

  const events: YesticketEvent[] = await eventsRequest.json();
  return events.map((event) => {
    return {
      ...event,
      event_description: event.event_description.replaceAll(
        /newsletter bestellen/gi,
        "",
      ),
    };
  });
}

export async function fetchTestimonials(
  type: "Auftritt" | "Workshop",
  count: number,
): Promise<YesticketTestimonial[]> {
  const params = new URLSearchParams({
    organizer: "12",
    key: getApiKey(),
    type: type,
    // Yesticket returns some old testimonials, so we need more to filter
    count: (count * 3).toString(),
  });

  const testimonialsRequest = await fetch(
    `https://www.yesticket.org/api/v2/testimonials.php?${params.toString()}`,
    { cache: "force-cache", next: { revalidate: 3600 } },
  );

  const testimonials: YesticketTestimonial[] = await testimonialsRequest.json();
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  return testimonials
    .filter(
      (testimonial) =>
        Date.now() - new Date(testimonial.date).getTime() < oneYear,
    )
    .slice(0, count);
}

function getApiKey(): string {
  const key = process.env.YESTICKET_API_KEY;
  if (!key) {
    throw new Error("Yesticket api key missing");
  }

  return key;
}
