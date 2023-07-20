import { useState, useRef } from 'react';
import styles from '../styles/TodoItem.module.css';
const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const editInputRef = useRef(null);
  // const [updateInput, setUpdateInput] = useState(itemProp.title);
  const [todos, setTodos] = useState([]); // Define the state and setter function
  const [editing, setEditing] = useState(false);

  const handleInputChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
    console.log('clicked', id);
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
      <input 
        type="checkbox" 
        checked={itemProp.completed}
        // onChange={() => handleChange(itemProp.id)}
        // onChange={(e) => console.log(e.target.value, itemProp.id)}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      />
        <button onClick={handleEditing}>Edit</button>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      <span style={itemProp.completed ? completedStyle : null}>
      {itemProp.title}
      {/* {updateInput} */}

      </span>
      </div>
      <input
      type="text"
      ref={editInputRef}
      defaultValue={itemProp.title}
      // value={updateInput}
      className={styles.textInput}
      style={editMode}
      // onChange={(e) => setUpdateInput(e.target.value)}
      onKeyDown={handleUpdatedDone}
    />
    </li>
  );
};

export default TodoItem;
