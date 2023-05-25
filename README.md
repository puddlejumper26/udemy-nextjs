# Guide

- [max-next-basic](https://github.com/puddlejumper26/udemy-nextjs#max-next-basic)
- [max-react-recall](https://github.com/puddlejumper26/udemy-nextjs#max-react-recall)
- [max-working-with-file-based-routing](https://github.com/puddlejumper26/udemy-nextjs#project-working-with-file-based-routing)
- - [Pre-rendering & Data Fetching](https://github.com/puddlejumper26/udemy-nextjs#pre-rendering--data-fetching)
- - - [getStaticProps](https://github.com/puddlejumper26/udemy-nextjs#getstaticprops)
- - - [getStaticPaths](https://github.com/puddlejumper26/udemy-nextjs#getstaticpaths)
- - - [getServerSideProps](https://github.com/puddlejumper26/udemy-nextjs#getserversideprops)
- - - [Client-side data fetching](https://github.com/puddlejumper26/udemy-nextjs#client-side-data-fetching)
- [max-optimization]

# next js features

- File based routing
  ![file-based](https://user-images.githubusercontent.com/40550117/198136317-83a72639-5e48-45e8-8df5-2372731bc34e.png)

- Pre-rendering
  ![Screenshot 2023-04-20 at 14 21 10](https://user-images.githubusercontent.com/40550117/233364209-b40b270f-616e-4707-9bae-b3f09e184adf.png)

- Advantages & Disadvantages
  https://radixweb.com/blog/nextjs-vs-react#advantages

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
- < Link >
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

# Pre-rendering & Data Fetching

## getStaticProps

- https://github.com/mschwarzmueller/nextjs-course-code/blob/04-data-fetching/pages/products/%5Bpid%5D.js
- For pre-rendering page, it means
- - there are certian page/pages pre-rendered
- - how do we tell nextjs which data is needed for pre-rendering?
- - using this specific function
- - - `export async function getStaticProps(context){...}`
- - - and only using it from inside `page` component
- - - could run any code that normally run on the server side only
- - - these code will not be compiled into bundles, which will not be sent to client side
- - 执行的时间
- - - `npm run build`
- - - - （SSG） - static site generation
- - - - (ISR) Nextjs 本身的 built-in features - `Incremental static Generation` - 会持续 build - 以保证数据的及时更新
- - - - ![Screenshot 2023-04-24 at 09 46 36](https://user-images.githubusercontent.com/40550117/233932071-7d099e00-82b3-447d-a090-68c6f84aa271.png)

## fs, path, cwd

```jsx
import fs from "fs";
import path from "path";

async function getStaticProps(context) {
  // to the root, then go to the data folder, then dummy-backend.json filepray
  const filePath = path.join(process.cwd(), "data", "/dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if(!data){
    return {
      redirect:{
        destination: '/no-data' <===== 直接转到另外一个网页
      }
    }
  }

  if(data.products.length === 0){
    return {
      notFound: true <=====  这样这个网页就会直接  404
    }
  }

  return {
    props:{
      products: data.products;
    },
    revalidate: 120  <==== Incremental static every 2 mins it will be rebuilt, important in Production
    Generation:
  };
}
```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

### 问题

- 如果是一个简单的 blog，那么使用 static 是没有问题的，没有太多的数据交互
- 如果数据交互很多就可以同时
- - pre-rendering - 用来提前 render 好旧的数据
- - react 的本身的 fetch data，来获取新的数据，并在数据到达之后，更新网页
- `getStaticProps` 如果加在 [pid].js 也就是 dynamic page 的文件中，那么就会有问题
- - 因为 `getStaticProps` 是要 react 去 pre-render 这个页面
- - 但是因为现在是 dynamic，所以无法 pre-render
- - 那么这个时候就需要 `getStaticPaths` - to tell react which instance/path should be pre-rendered
    ![Screenshot 2023-05-09 at 00 19 04](https://user-images.githubusercontent.com/40550117/236950222-bbb2e081-b184-45f4-af96-1f2a124e9ed0.png)

## getStaticPaths

```jsx
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },   =====> 这样react 就会 call getStaticProps 3 次，with different ids
      { params: { pid: "p2" } },   =====>
      { params: { pid: "p3" } },   =====>
    ],
    fallback: true  =====> 如何render 的网页有很多的paths，这样如果上面的paths没有p2 p3，那么也是p2p3就是render in time
      // 目的是为了节约资源，因为有的网页的访问量很低
      // 但是这样就就要在 ProductionDetailPage中 加上 if(!loadedProduct){return <p>Loading....</p>}
      // 并且最好加上 if(!products){return {notFound: true}} 这样如果输入一个不存在的网页会跳转404而不是报错
    fallback: 'blocking' ======> 不需要加上`loading·..`的那一段，就是render起来需要一些时间，但是不会报错
    fallback: false =====> 是所有的paths 都在 上面
  };
}
```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

## getServerSideProps

sometimes, only static render is not enough, if we need to pre-render a page, for every incoming request, or need access to the concrete request object that is reaching the server. e.g. high dynamic page,

- - runs on the `server` only
- - re-excute for every incoming request
- - should only use either `getServerSideProps` or `getStaticProps`
- - it has context object as parameter, which makes us getting access to full request, so we can manipulate the response
- - `export async function getServerSideProps(context){ const {params, req, res} = context}`
- https://github.com/mschwarzmueller/nextjs-course-code/blob/04-data-fetching/pages/%5Buid%5D.js

```jsx
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const userId = params.uid;
  return {
    props: {
      id: "userid -" + userId,
    },
  };
}
```

---

[UP_TO_TOP](https://github.com/puddlejumper26/udemy-nextjs#guide)

---

## Client-side data fetching

![Screenshot 2023-05-09 at 00 19 50](https://user-images.githubusercontent.com/40550117/236950327-52f4eb23-8ed9-4909-a55e-a6646273e33e.png)

## useSWR

- a hook
- send `http` request
- - `npm install swr`
- - - before
      ![Screenshot 2023-05-10 at 00 14 09](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/ee879d43-860e-4400-85c6-235e6daa68db)
      ![Screenshot 2023-05-10 at 00 15 41](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/5c23fcb0-e518-431b-91c6-8f3b248e0e24)
- - - now
      ![Screenshot 2023-05-10 at 00 16 12](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/bae32b43-08ad-4faa-9fdc-acfd3124d3fb)
      ![Screenshot 2023-05-10 at 00 16 51](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/e09c6564-a43f-4c76-9917-d412971e60bc)
- - - - bring back the state
        ![Screenshot 2023-05-10 at 00 18 36](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/5e766af6-ba5d-4af2-9172-74d76dc8287b)

# Optimization Next.js

## Head

- Hard Code

![Screenshot 2023-05-23 at 09 44 03](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/f15a04c4-793d-470b-9435-c329ff6f1d03)
注意这里的 `Head`
和网页中的代码
这样对于 SEO 是非常有利的
![Screenshot 2023-05-23 at 09 43 36](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/f3ec8ce9-520a-4925-b095-cc85e1e0be3c)

- Dynamic Head
  ![Screenshot 2023-05-23 at 09 48 46](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/01d31e3c-5a44-41cd-8574-ac300e63d5f7)
- - 另外一种方式
    ![Screenshot 2023-05-23 at 09 52 11](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/372c3dc8-dc6e-4b91-a644-b803a941988a)

- \_app.js file
- - has to be added under `page foler`
    we could set `Head` in different files with different values, but the latter rendered file/page will overwrite the value, to be displayed

- \_document.js file
- - has to be added under `page folder`
- - add html element outside of the component tree
    注意这里的 Head 和之前的 Head 不同，这里的只用于 Document file
    ![Screenshot 2023-05-23 at 10 03 16](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/d64f9c8e-af4f-4e70-9a96-ae4a4d0c9ad1)

- image size
- - `import Image from 'next/image'`
- - - original `<img src={'/' + image} alt={title}>`
- - - optimized `<IMAGE src={'/' + image} alt={title} width={340} height={160}>`

# API routes (Backend code)

- folder has to be called `api` under `pages` folder
- - server side code, will not be exposed to client side
- - frontend code, e.g. form, should connect to `API routes`,
- - then inside `API routes`, connect to database, which will be more safe
- -

```js
function handler(req, res) {
  res.status(200).json({ message: "This works!" });
}

export default handler;
```

- - then on browser
    ![Screenshot 2023-05-24 at 23 25 35](https://github.com/puddlejumper26/udemy-nextjs/assets/40550117/f8682c8d-e45e-48d2-a6c2-4c1045615999)

- getStaticProps()
- - `fetch()` could be used to get data from outside server
- - `fetch()` should not be used to fetch data from inside server, e.g. `data/feedback.json` here
