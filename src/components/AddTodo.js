import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  // useEffect(() => {}, []);

  let isDisabled = !value ? "disabled" : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <div className="mb-5 row justify-content-center">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="col col-6"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className={`btn btn-primary col col-2 mx-2 ${isDisabled}`}
      >
        Add ToDo
      </button>
    </div>
  );
};
