import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";

function App() {
  return (
    <div className="App">
      <div className="container-sm mx-auto p-5">
        <h1 className="mx-auto my-5 text-center">To-Do`s</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilter />
      </div>
    </div>
  );
}

export default App;
