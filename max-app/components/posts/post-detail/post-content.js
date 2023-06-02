import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "get-featured-posts4",
  title: "Get featured posts4",
  image: "get-featured-post.jpeg",
  date: "2023-05-40",
  content: "# this is the first featured post",
};

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
