export async function getAllEvents() {
  const res = await fetch(
    "https://nextjs-practice-max-02-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      // date: data[key].date,
      // description: data[key].description,
      // image: data[key].image,
      // location: data[key].location,
      // title: data[key].title,
      // isFeatured: data[key].isFeatured,
      ...data[key],
    });
  }

  return events;
}

export async function getData() {
  const res = await fetch(
    "https://nextjs-practice-max-02-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  return data;
}

export async function getFeaturedEventsOr() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export function getFeaturedEvents(events) {
  return events.filter((event) => event.isFeatured);
}

// export function getFilteredEvents(events, dateFilter) {
//   const { year, month } = dateFilter;

//   let filteredEvents = events.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
//     );
//   });

//   return filteredEvents;
// }

export function getEventById(events, id) {
  return events.find((event) => event.id === id);
}

// export function getFeaturedEvents() {
//   const allEvents = getAllEvents();

//   const featuredEvents = allEvents.filter((event) => event.isFeatured);

//   return featuredEvents;
// }
