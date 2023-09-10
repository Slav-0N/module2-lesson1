const Todo = ({ todo, handleDelete }) => {
  return (
    <li className="list-group-item">
      {todo.title}
      <button onClick={() => handleDelete(todo.id)}>Delete list item</button>
    </li>
  );
};

export default Todo;
