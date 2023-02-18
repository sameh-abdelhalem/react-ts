import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ itemText: string }> = (props) => {
  return <li className={classes.item}>{props.itemText}</li>;
};

export default TodoItem;
