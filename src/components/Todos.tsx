import TodoItem from "./Todo";
import classes from "./Todos.module.css";

import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          itemText={item.text}
          itemId={item.id}
          deleteTodo={todosCtx.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
