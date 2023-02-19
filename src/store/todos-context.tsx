import Todo from "../models/todo";
import React, { useState } from "react";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};
export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevstate) => prevstate.filter((todo) => todo.id !== todoId));
  };
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });

    console.log(text);
  };
  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
