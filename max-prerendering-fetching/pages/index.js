import Link from "next/link";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";
import styles from "../styles/Home.module.css";

export default function HomePage(props) {
  const { events } = props;
  // console.log("01-HomePage - events - ", events);
  const featuredEvents = getFeaturedEvents(events);

  return (
    <div>
      This is the Home Page
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://nextjs-practice-max-02-default-rtdb.firebaseio.com/events.json"
  );

  const data = await res.json();
  const featuredEvents = [];
  for (const key in data) {
    featuredEvents.push({
      id: key,
      date: data[key].date,
      description: data[key].description,
      image: data[key].image,
      location: data[key].location,
      title: data[key].title,
      isFeatured: data[key].isFeatured,
    });
  }

  // const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}
