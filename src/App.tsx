import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <AddTodo />
          <TodoList />
        </header>
      </div>
    </div>
  );
}

export default App;
