import Todo from "../models/todo";
import TodoItem from "./Todo";
import classes from "./Todos.module.css";
const Todos: React.FC<{
  items: Todo[];
  deleteTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          itemText={item.text}
          itemId={item.id}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
