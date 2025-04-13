import React from "react";

type ItemPost = { id: string; title: string; body: string }

const fetchPosts = (id = 1) => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json() as Promise<ItemPost>).then((data) => [data]);

const Posts = React.lazy(async () => {
  const data = await fetchPosts();

  return {
    default: function InternalPost({ count }: { count: number; }) {
      const [posts, setPosts] = React.useState<ItemPost[]>(data);

      const refetch = () => fetchPosts(count + 1).then(setPosts);

      return (
        <ul className="posts">
          <li><button className="btn" onClick={refetch}>Fetch Next Post id: {count + 1}</button></li>
          {posts.map((post) => (
            <li key={post.id} className="post">
              <p>Post id: {post.id}</p>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      );
    }
  };
})

export default Posts;
