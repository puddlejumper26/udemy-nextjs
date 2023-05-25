import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps(props) {
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
