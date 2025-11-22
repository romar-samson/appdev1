import { useState, useEffect } from "react";
import axios from "axios";

export default function TodosFetchAxios() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch todos");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Todos (Axios)</h2>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "15px" }}>
          <p><strong>Title:</strong> {todo.title}</p>
          <p>
            <strong>Status:</strong> {todo.completed ? "✔ Completed" : "✖ Not completed"}
          </p>
        </div>
      ))}
    </div>
  );
}
