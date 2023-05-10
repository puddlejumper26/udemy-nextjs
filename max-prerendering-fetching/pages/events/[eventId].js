import { useRouter } from "next/router";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getData, getAllEvents } from "../../helpers/api-utils";

import { getEventById } from "../../dummy-data";

function EventDetailPage(props) {
  console.log("01-EventDetailPage - props - ", props);
  const { event } = props;
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  console.log("1-eventId-getStaticProps-params-", params);

  const data = await getData();
  console.log("1-eventId-getStaticProps-data-", data);
  // const res = await fetch(
  //   "https://nextjs-practice-max-02-default-rtdb.firebaseio.com/events.json"
  // );
  // const data = await res.json();

  const event = data.find((event) => event.id === eventId);

  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths() {
  // const res = await fetch(
  //   "https://nextjs-practice-max-02-default-rtdb.firebaseio.com/events.json"
  // );
  // const events = await res.json();
  const events = await getData();
  // // const data = JSON.parse(temData);
  console.log("1-eventId-getSta-ticPaths- events -", events);
  const ids = [];
  for (const key in events) {
    ids.push(key);
  }
  const pathsWithParams = ids.map((id) => ({
    params: { eventId: id },
  }));

  console.log("1-eventId-getStaticPaths- pathsWithParams -", pathsWithParams);
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}
