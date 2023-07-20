import TodoItem from "./TodoItem";
const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
    // const delTodo = (id) => {
    //     setTodos([
    //       ...todos.filter((todo) => {
    //         return todo.id !== id;
    //       }),
    //     ]);
    //   };
      
    return (
      <ul>
         {todosProps.map((todo) => (
           <TodoItem 
           key={todo.id} 
           itemProp={todo}
           setUpdate={setUpdate}
        //    handleChange={handleChange}
           delTodo={delTodo}
        //    setTodos={setTodos} 
           />
        ))}
      </ul>
    );
};

export default TodosList
