import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

export const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setChecked(todo.completed);
  }, [todo]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleChecked = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className="d-flex mb-1 mx-5">
      <div className="me-auto form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={handleChecked}
          id={todo.id}
          checked={checked}
        />
        <label
          className={`form-check-label + ${
            checked ? "text-decoration-line-through" : ""
          }`}
          htmlFor={todo.id}
        >
          {todo.content}
        </label>
      </div>
      <div className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        x
      </div>
    </div>
  );
};
