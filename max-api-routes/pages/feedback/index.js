import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch("/api/" + id)
      .then((res) => res.json())
      .then((data) => setFeedbackData(data.feedback));
  }

  return (
    <>
      {feedbackData} && <p>{feedbackData.email}</p>
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps(props) {
  // if we want to fetch the data inside this APP, we could not use fetch()
  // if we want to fetch data from third party server, we could use fetch()
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return { props: { feedbackItems: data } };
}

export default FeedbackPage;

/**
 *  加上这个文件之后，直接 localhost:3000/feedback
 *  就会得到 text 的 相应信息
 *
 */
