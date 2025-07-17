
import  { useEffect, useState } from "react";
import { fetchTodoData } from "../../../Services/pivot.services";

function Pivot() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetchTodoData().then((data) => {
      if (data) setTodo(data);
    });
  }, []);

  return (
    <div>
      <h2>Todo Details</h2>
      {todo ? (
        <div>
          <p><strong>User ID:</strong> {todo.userId}</p>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Title:</strong> {todo.title}</p>
          <p><strong>Completed:</strong> {todo.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pivot;



