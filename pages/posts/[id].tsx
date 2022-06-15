import styles from '../../styles/Home.module.css';
import Layout from '../components/layout/layout';
import Sidebar from '../components/sidebar/sidebar';

type Post = {
  id: string;
  title: string;
};

type Props = {
  post: Post;
};

const Posts = ({ post }: Props) => {
  return (
    <div className={styles.container}>
      <h5>{`${post.id} - ${post.title}`}</h5>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch("https://.../posts");
  const posts = await [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

type Params = {
  params: {
    id: string;
  };
};

// This also gets called at build time
export async function getStaticProps({ params }: Params) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1 then use res.data (or res.json())
  // const res = await fetch(`https://.../posts/${params.id}`)
  const post = await {
    id: params.id,
    title: `Post ${params.id}`,
  };

  // Pass post data to the page via props
  return { props: { post } };
}

Posts.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export default Posts;
