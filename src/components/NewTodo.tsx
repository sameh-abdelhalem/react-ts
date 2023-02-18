const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("TODO Added");
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
