const TodoItem: React.FC<{ itemText: string }> = (props) => {
  return <li>{props.itemText}</li>;
};

export default TodoItem;