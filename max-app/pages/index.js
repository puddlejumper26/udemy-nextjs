import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     slug: "get-featured-posts1",
//     title: "Get featured posts1",
//     image: "get-featured-post.jpeg",
//     excerpt: "This is the excerpt of the featured 1",
//     date: "2023-05-10",
//   },
//   {
//     slug: "get-featured-posts2",
//     title: "Get featured posts2",
//     image: "get-featured-post.jpeg",
//     excerpt: "This is the excerpt of the featured 2",
//     date: "2023-05-20",
//   },
//   {
//     slug: "get-featured-posts3",
//     title: "Get featured posts3",
//     image: "get-featured-post.jpeg",
//     excerpt: "This is the excerpt of the featured 3",
//     date: "2023-05-30",
//   },
//   {
//     slug: "get-featured-posts4",
//     title: "Get featured posts4",
//     image: "get-featured-post.jpeg",
//     excerpt: "This is the excerpt of the featured 4",
//     date: "2023-05-40",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
export default HomePage;
