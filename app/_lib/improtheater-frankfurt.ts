export interface ItfEvent {
  id: number;
  begin: Date;
  end: Date;
  title: string;
  content: string;
  img: string;
  location: string;
  price: string;
  color: string;
}

export const baseurl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://improtheater-frankfurt.de";
export const baseurlAPI = `${baseurl}/api`;

export async function fetchEvents(
  type?: "show" | "workshop",
): Promise<ItfEvent[]> {
  const params = new URLSearchParams({ full: "" });
  if (type !== undefined) {
    params.append("type", type === "workshop" ? "1" : "2");
  }

  const eventsRequest = await fetch(
    `${baseurlAPI}/workshops?${params.toString()}`,
    { cache: "force-cache", next: { revalidate: 3600 } },
  );

  const events = await eventsRequest.json();
  return events.map(
    (event: any) =>
      <ItfEvent>{
        ...event,
        begin: new Date(event.begin * 1000),
        end: new Date(event.end * 1000),
        img: `${baseurlAPI}/upload/${event.img}`,
      },
  );
}
