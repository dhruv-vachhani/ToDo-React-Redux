import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../redux/actions";

export const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.content);

  const dispatch = useDispatch();

  useEffect(() => {
    setChecked(todo.completed);
  }, [todo]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    dispatch(editTodo(todo.id, editText));
    setEditing(false);
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
        {editing ? (
          <input
            className="form-control"
            value={editText}
            placeholder={todo.content}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <label
            className={`form-check-label + ${
              checked ? "text-decoration-line-through" : ""
            }`}
            htmlFor={todo.id}
          >
            {todo.content}
          </label>
        )}
      </div>
      {editing ? (
        <div className="btn btn-outline-success mx-2" onClick={handleEdit}>
          Save
        </div>
      ) : (
        <div
          className="btn btn-outline-warning"
          onClick={() => setEditing(true)}
        >
          Edit
        </div>
      )}
      <div
        className="btn btn-outline-danger mx-2"
        onClick={() => handleDelete(todo.id)}
      >
        x
      </div>
    </div>
  );
};
