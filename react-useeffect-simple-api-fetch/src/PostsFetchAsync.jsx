import { useState, useEffect } from "react";

export default function PostsFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts (Async/Await)</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <p>
            <strong>Title:</strong> {post.title}
          </p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
