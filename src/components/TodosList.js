import TodoItem from "./TodoItem";
const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
   
      
    return (
      <ul>
         {todosProps.map((todo) => (
           <TodoItem 
           key={todo.id} 
           itemProp={todo}
           setUpdate={setUpdate}
           delTodo={delTodo}
           />
        ))}
      </ul>
    );
};

export default TodosList
