import React from "react";
import { Todo } from "./Todo";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector((state) => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <div className="d-flex flex-column justify-content-center container-sm w-50 mb-1">
      {filterTodos.length ? (
        filterTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <div className="d-block mx-auto">No task to display here!!</div>
      )}
    </div>
  );
};
