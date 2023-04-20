# Guide

- [max-next-basic](https://github.com/puddlejumper26/udemy-nextjs#max-next-basic)
- [max-react-recall](https://github.com/puddlejumper26/udemy-nextjs#max-react-recall)
- [max-working-with-file-based-routing](https://github.com/puddlejumper26/udemy-nextjs#project-working-with-file-based-routing)

# max-next-basic

- Udemy
- React, Nextjs
- Maximilian Schwarzmuller

================================================================

## File-based routing

![file-based](https://user-images.githubusercontent.com/40550117/198136317-83a72639-5e48-45e8-8df5-2372731bc34e.png)

## useRouter

```javascript
import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter(); // to expose the router and its attributes

  return <div>The PortfolioProjectPage</div>;
}

export default PortfolioProjectPage;
```

- here the structure is `pages/portfolio/[projectid].js`
- Then if we type [http://localhost:3000/portfolio/something](http://localhost:3000/portfolio/something)
  - it will show these, means
    - something as we input into the url has already been fetched as `projectid`
      ![Screenshot 2022-10-26 at 16.26.37.png](https://user-images.githubusercontent.com/40550117/198136352-786d9147-efc6-4f71-b805-eb6deb871872.png)
  - so it means we could in this component
    - fetch the data with an id of `router.query.projectid`
    - and send a `request` to some BE server

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

## […slug].js -- catch all router

- here `slug` could be anything / string
- it will cover all the
- here the structure is `pages/blog/[...slug].js`

  ```jsx
  import { useRouter } from "next/router";

  function BlogPostsPage() {
    const router = useRouter();
    console.log(router.query);
    return <div>The blog posts page</div>;
  }
  export default BlogPostsPage;
  ```

  ![Screenshot 2022-10-26 at 17.14.54.png](https://user-images.githubusercontent.com/40550117/198136410-fe68156f-4e83-4854-9ba2-cc92aed1c1b2.png)

  - so it has an array instead of just a string,
  - contains `asdwf` and `2` which compose the url

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

## Navigating Between Pages

- Old way
  ```jsx
  <li>
    <a href="/portfolio">Portfolio</a>
  </li>
  ```
  ![Screenshot 2022-10-26 at 17.22.44.png](https://user-images.githubusercontent.com/40550117/198136458-0f67202f-1cd9-4c40-8d52-b8408efb08ae.png)
  - This is working but it sends a `new HTTP request` to load this page, which means if we have any application `state`, it would be lost when `new request` is sending
  # <Link>
- so we have this `Link` from `Next` to avoid such situation
  ```jsx
  import Link from "next/link";
  ===========
  <ul>
    <li>
      <Link href="/portfolio">PortfolioPage</Link>
    </li>
  </ul>
  ```
  - it will `pre-fetch` all data as soon as our mouse is hovering on the link
  - `replace` will make this navigation not going to a new page, but just replace current page
- check how the `dynamic routing` works
  ![Screenshot 2022-10-26 at 22.02.59.png](https://user-images.githubusercontent.com/40550117/198136503-f0d0acf6-1163-4f9a-8798-d55be0eab00e.png)
  so we could have such code
  ```jsx
  <ul>
    <li>
      <Link href="/clients/max">Max</Link>
    </li>
    <li>
      <Link href="/clients/apple">Apple</Link>
    </li>
  </ul>
  ```
  and when the data is in array in normal cases
  ```jsx
  function ClientsPage() {
    const clients = [
      { id: "max", name: "maximiliam" },
      { id: "min", name: "minimilian" },
    ];
    return (
      <div>
        This is Client Page
        <ul>
          {clients.map((client) => {
            return (
              <li key={client.id}>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  ```
- but sometimes the `href={`/clients/${client.id}``could be too long and complicated. so Nextjs have a method to use`object`instead of`string`
  ```jsx
  href = {{
  	pathname: '/clients/[id]',
  	query: {id: client.id}
  }}
  ```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

## router.push() / router.replace() - navigate programmatically

```jsx
function ClientProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    //... load data
    router.push("/clients/max/projecta"); // to navigate to a new page
  }
  return (
    <div>
      The Projects of a client
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
```

- likewise, we could also use `object` instead of `string` here

  ```jsx
  router.push("/clients/max/projecta"); // to navigate to a new page

  router.push({
    pathname: "/clients/[id]/[clientprojectid]",
    query: { id: "max", clientprojectid: "projecta" },
  });
  ```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

## 404 page

- under `pages` folder
- name has to be `404.js`
- normal react component
- then next.js will find it automatically

![Screenshot 2022-10-26 at 22.45.32.png](https://user-images.githubusercontent.com/40550117/198136559-3e4cdb71-099e-48ed-814d-da1afbd6a565.png)

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

# max-react-recall

## state

```jsx
// inside of component Todo
function Todo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function confirmDelete(){}
  return (
    <div>
      <h2>Card</h2>
      <button onClick={deleteHanlder}>Delete</button>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={confirmDelete}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;

// inside of component Modal ==> when user clicks delete button, this component pops up
function Modal(props) {
  return (
    <div>
      <button onClick={props.onCancel}>cancel</button>
      <button onClick={props.onConfirm}>confirm</button>
    </div>
  );
}
export default Modal;

// inside of component Backdrop ==> when user clicks delete button, this component provides with darker background, with above Modal component, so when user clicks this component again, should return to the Todo component
function Backdrop(props){
  return<div onClick={props.onCancel}/>
}
export default Backdrop;

```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

## wrapping

```jsx
  //Inside of component B
  function B(){
    return ({
      <A>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </A>
    })
  }
  export default B;

  //Inside of component A
  function A(props){
    return
      <div>
        <main>{props.children}</main>
      </div>
  }
  export default A;

```

## Form/useRef

`useRef` is for `reading` value
`useState` is for `changing` value

```jsx
function MeetUpForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    fire;
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" />
        </div>
        <div>
          <label htmlFor="description">Meetup Description</label>
          <textarea type="text" id="description"></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default MeetUpForm;
```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

# [Project] working with file-based routing

## Planning the project

![Screenshot 2023-04-19 at 09 27 58](https://user-images.githubusercontent.com/40550117/233000830-854e6e58-4416-4b84-b772-fd817656de47.png)

## Strucutre && Knowledge

- Filter form
- <Link>
- General Layout -> seperate header/footer from main/body components

## Public folder

- is a special folder, that servered statically by Next.js
- can be used directly in the project
- Files and folders stored outside of public folder are NOT made accessible by NextJS, can not load files from there

## Filter logics

```jsx
function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);  <==== onSearch
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}> <===== onSubmit
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">Septemer</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

```jsx
function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath); //go to different pages  <===
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} /> <==== onSearch
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
```

```jsx
function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug; <==== slug

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---
