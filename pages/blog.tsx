import styles from "../styles/Home.module.css";

type Post = {
  id: string;
  title: string;
};

type Props = {
  posts: Post[];
};

function Blog({ posts }: Props) {
  return (
    <div className={styles.container}>
      <main>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts and use res.data
  // const res = await fetch("https://.../posts");

  const posts = await [
    {
      id: "1",
      title: "Test",
    },
  ];

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
