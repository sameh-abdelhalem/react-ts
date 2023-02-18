import Todo from "../models/todo";
import TodoItem from "./Todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} itemText={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
