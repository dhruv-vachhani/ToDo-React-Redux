import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";

export const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setChecked(todo.completed);
  }, [todo]);

  const handleChecked = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className="form-check d-block mx-auto">
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
  );
};
