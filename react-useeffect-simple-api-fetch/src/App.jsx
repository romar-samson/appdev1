import UsersFetch from "./UsersFetch";
import PostsFetchAsync from "./PostsFetchAsync";
import TodosFetchAxios from "./TodosFetchAxios";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <UsersFetch />
      <hr />
      <PostsFetchAsync />
      <hr />
      <TodosFetchAxios />
    </div>
  );
}
