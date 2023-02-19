import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  itemText: string;
  itemId: string;
  deleteTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <li
      onClick={() => {
        props.deleteTodo(props.itemId);
      }}
      className={classes.item}
    >
      {props.itemText}
    </li>
  );
};

export default TodoItem;
